// Layer8Problem — Archipelago Client (Mod v0.9.0)
//
// Changes vs v0.8.0:
//  - Extra location pool: 30 item-find checks (first pickup of each in-game
//    item, hooked on engine.addToArchive('items', id)) and 99 sidequest-chain
//    checks (first resolved node of a chain, hooked on renderTerminal +
//    resolveTerminal). Two new hook dots: "items" and "sidequests".
//  - slot_data.extra_locations gates the new pool. When false the client
//    behaves exactly like v0.8.0 and fires no extra checks.
//  - PROTO_VERSION bumped to 0.9.0 to match required_client_version.
//
// Behaviour recap (unchanged since v0.6.0/v0.7.0):
//  - DeathLink is decided by the YAML; `state.deathlink` comes from
//    slot_data after Connected. When on, all four causes fire
//    (termination, warning, let_off_steam, rage_quit).
//  - Language switcher (DE/EN) lives on the connect screen.
//  - Day hook fires the one playable day (Mon/Wed/Fri) of this slot.
//
// Loaded as ES module from index.html AFTER engine.js.


import {
  GAME_NAME, DEATHLINK_CAUSES,
  ACHIEVEMENT_LOCATIONS, NORMAL_ITEMS, LEGENDARY_ITEMS,
  PROGRESSIVE_AFFECTION_ITEMS, PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS, FILLER_ITEMS,
  AFFECTION_CHARS, AFFECTION_TIERS, AFFECTION_TIER_COST,
  NEGATIVE_AFFECTION_TIERS, NEGATIVE_AFFECTION_TIER_COST,
  STARTING_DAY_BY_INDEX, DAY_TO_DIFFICULTY,
  locationId, itemId, itemKey, progressiveAffectionKey,
  ITEM_FIND_KEYS, SIDEQUEST_CHAINS, sidequestChainOf,
} from "./ap_data.js";

const LS_KEY     = "l8p_ap_session";
const LS_OFFLINE = "l8p_ap_play_offline";
const PROTO_VERSION = { major: 0, minor: 9, build: 0, class: "Version" };

// Reputation character key → engine reputation map key
const AFFECTION_NAME_MAP = {
  kevin:   "Kevin",
  chantal: "Chantal",
  egon:    "Egon",
  elster:  "Frau Elster",
  markus:  "Markus",
  gabi:    "Gabi",
};
const AFFECTION_THRESHOLDS = { friend: 25, ally: 50, bestie: 75 };
const NEGATIVE_AFFECTION_THRESHOLDS = { enemy: -25, rival: -50, nemesis: -75 };

const state = {
  ws: null,
  connected: false,
  authed: false,
  host: "", port: 38281, slot: "", password: "",
  // deathlink is set from slot_data after Connected — never user-toggled.
  deathlink: false,
  team: 0, slotNo: 0,
  checked: new Set(),
  received: new Set(),
  receivedItems: [],
  goalSent: false,
  lastDeathTime: 0,
  hooks: { engine: false, inventory: false, deathlink: false, days: false, affection: false, daylock: false, items: false, sidequests: false },
  // v0.9.0 runtime — extra location pool
  extraLocations: false,         // from slot_data; false = v0.8.0 behaviour
  currentSidequestId: null,      // last sidequest rendered, used on resolve
  extraFired: new Set(),         // local guard so a hook never spams the server
  // v0.3.0 runtime
  daysThisRun: 0,
  affectionPollIv: null,
  // v0.4.0 runtime
  slotData: {},                  // raw slot_data from Connected
  goal: "legendary_set",         // legendary_set | all_achievements
  startingDay: "wednesday",      // friday | wednesday | monday
  legendaryReceived: new Set(),
  affectionItemCount: {},        // charKey -> number of Progressive Affection items received
  negativeAffectionItemCount: {}, // charKey -> number of Progressive Negative Affection items received
  sentDeathIds: new Map(),        // DeathLink echo guard: id -> expiresAt(ms)
  receiveQueue: [],               // queued incoming DeathLinks during fragile transitions
  inTransition: false,
};

// ---------- tiny DOM helper -----------------------------------------------
function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style") Object.assign(e.style, v);
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else if (k === "html") e.innerHTML = v;
    else e.setAttribute(k, v);
  }
  for (const k of kids) e.append(k && k.nodeType ? k : document.createTextNode(k ?? ""));
  return e;
}

// ---------- styles --------------------------------------------------------
function injectStyles() {
  const s = document.createElement("style");
  s.textContent = `
  #ap-gate{position:fixed;inset:0;z-index:100000;background:radial-gradient(ellipse at center,#0b1224 0%,#04060c 100%);
    display:flex;align-items:center;justify-content:center;font:14px/1.5 system-ui,sans-serif;color:#e2e8f0}
  #ap-gate .panel{width:min(520px,92vw);background:#0f172a;border:1px solid #334155;border-radius:12px;
    padding:24px 26px;box-shadow:0 30px 80px #000c;position:relative}
  #ap-gate h1{margin:0;font-size:22px;font-weight:700;letter-spacing:.5px;color:#fbbf24}
  #ap-gate .sub{color:#94a3b8;font-size:12px;margin:2px 0 18px;letter-spacing:1px;text-transform:uppercase}
  #ap-gate label{display:block;font-size:10px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin:10px 0 4px}
  #ap-gate input[type=text],#ap-gate input[type=password],#ap-gate input[type=number]{
    width:100%;box-sizing:border-box;background:#0b1224;border:1px solid #334155;color:#e2e8f0;
    border-radius:6px;padding:8px 10px;font:14px ui-monospace,monospace}
  #ap-gate input:focus{outline:none;border-color:#0ea5e9;box-shadow:0 0 0 2px #0ea5e933}
  #ap-gate .row{display:flex;gap:10px}
  #ap-gate .row > div:first-child{flex:1}
  #ap-gate .row > div:last-child{flex:0 0 90px}
  #ap-gate .btns{display:flex;gap:10px;margin-top:18px}
  #ap-gate button{flex:1;padding:10px 14px;border-radius:6px;border:1px solid #475569;background:#1e293b;
    color:#e2e8f0;font:600 13px system-ui;cursor:pointer;letter-spacing:.5px}
  #ap-gate button.primary{background:linear-gradient(180deg,#0ea5e9,#0369a1);border-color:#0ea5e9}
  #ap-gate .hookrow{display:flex;gap:14px;margin:14px 0 4px;font-size:12px;color:#94a3b8;flex-wrap:wrap}
  #ap-gate .hookrow span{display:inline-flex;align-items:center;gap:4px}
  #ap-gate .dot{width:8px;height:8px;border-radius:50%;background:#475569;display:inline-block}
  #ap-gate .dot.ok{background:#22c55e} #ap-gate .dot.err{background:#ef4444}
  #ap-gate .log{margin-top:12px;max-height:120px;overflow:auto;font:11px ui-monospace,monospace;
    background:#020617;border:1px solid #1e293b;border-radius:6px;padding:8px;color:#94a3b8;white-space:pre-wrap}
  #ap-gate .log .ok{color:#22c55e} #ap-gate .log .err{color:#f87171} #ap-gate .log .info{color:#7dd3fc}
  #ap-gate .lang{position:absolute;top:16px;right:18px;display:flex;gap:4px}
  #ap-gate .lang button{flex:0 0 auto;padding:4px 10px;font:600 11px ui-monospace,monospace;letter-spacing:1px;
    border:1px solid #334155;background:#0b1224;color:#94a3b8;border-radius:4px;cursor:pointer}
  #ap-gate .lang button.active{background:#fbbf24;border-color:#fbbf24;color:#0b1224}
  .ap-day-locked{opacity:.35 !important;cursor:not-allowed !important;pointer-events:none !important;filter:grayscale(.8)}
  .ap-day-locked::after{content:"🔒 LOCKED BY AP";position:absolute;inset:auto 0 8px 0;text-align:center;
    font:700 11px ui-monospace,monospace;color:#f87171;letter-spacing:1px}
  .ap-day-forced{box-shadow:0 0 0 3px #fbbf24, 0 0 24px #fbbf2466 !important}
  `;
  document.head.appendChild(s);
}

// ---------- gate / connect UI ---------------------------------------------
let btnConnect, btnOffline, hookEls = {}, logEl;

function setHook(name, ok) {
  state.hooks[name] = ok;
  const d = hookEls[name];
  if (d) { d.classList.remove("ok", "err"); d.classList.add(ok ? "ok" : "err"); }
}

function logStatus(msg, cls = "info") {
  console.log(`[AP] ${msg}`);
  if (!logEl) return;
  const line = document.createElement("div");
  line.className = cls;
  line.textContent = msg;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

function buildLangSwitch() {
  const current = (window.l8GetLang && window.l8GetLang()) || "de";
  const set = (lang) => {
    if (window.l8SetLang) window.l8SetLang(lang); // reloads the page
  };
  const btnDe = el("button", { class: current === "de" ? "active" : "", onclick: () => set("de") }, "DE");
  const btnEn = el("button", { class: current === "en" ? "active" : "", onclick: () => set("en") }, "EN");
  return el("div", { class: "lang", title: "Language / Sprache" }, btnDe, btnEn);
}

function buildGate() {
  injectStyles();
  const saved = (() => { try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch { return {}; } })();

  const root = el("div", { id: "ap-gate" });
  const panel = el("div", { class: "panel" });
  panel.append(
    buildLangSwitch(),
    el("h1", {}, "ARCHIPELAGO"),
    el("div", { class: "sub" }, "Layer8Problem multiworld connection"),
  );

  const inpHost = el("input", { type: "text", value: saved.host || "archipelago.gg", placeholder: "archipelago.gg" });
  const inpPort = el("input", { type: "number", value: saved.port || 38281 });
  const inpSlot = el("input", { type: "text", value: saved.slot || "", placeholder: "Your slot name" });
  const inpPass = el("input", { type: "password", value: saved.password || "", placeholder: "optional" });

  panel.append(
    el("label", {}, "Server"),
    el("div", { class: "row" },
      el("div", {}, inpHost),
      el("div", {}, inpPort),
    ),
    el("label", {}, "Slot name"),
    inpSlot,
    el("label", {}, "Password"),
    inpPass,
  );

  const dotEngine    = el("span", { class: "dot" });
  const dotInventory = el("span", { class: "dot" });
  const dotDeath     = el("span", { class: "dot" });
  const dotDays      = el("span", { class: "dot" });
  const dotAff       = el("span", { class: "dot" });
  const dotLock      = el("span", { class: "dot" });
  const dotItems     = el("span", { class: "dot" });
  const dotSq        = el("span", { class: "dot" });
  hookEls = { engine: dotEngine, inventory: dotInventory, deathlink: dotDeath, days: dotDays, affection: dotAff, daylock: dotLock, items: dotItems, sidequests: dotSq };

  panel.append(
    el("div", { class: "hookrow" },
      el("span", {}, dotEngine, "engine"),
      el("span", {}, dotInventory, "inventory"),
      el("span", {}, dotDeath, "deathlink"),
      el("span", {}, dotDays, "days"),
      el("span", {}, dotAff, "affection"),
      el("span", {}, dotItems, "items"),
      el("span", {}, dotSq, "sidequests"),
      el("span", {}, dotLock, "day-lock"),
    ),
  );

  btnConnect = el("button", { class: "primary" }, "CONNECT & PLAY");
  btnOffline = el("button", {}, "PLAY OFFLINE");
  panel.append(el("div", { class: "btns" }, btnConnect, btnOffline));

  logEl = el("div", { class: "log" });
  panel.append(logEl);

  btnConnect.addEventListener("click", () => {
    const host = inpHost.value.trim();
    const port = parseInt(inpPort.value, 10) || 38281;
    const slot = inpSlot.value.trim();
    if (!host || !slot) { logStatus("Host and slot are required.", "err"); return; }
    state.host = host; state.port = port; state.slot = slot;
    state.password = inpPass.value;
    try { localStorage.setItem(LS_KEY, JSON.stringify({ host, port, slot, password: state.password })); } catch {}
    connect();
  });
  btnOffline.addEventListener("click", () => {
    try { localStorage.setItem(LS_OFFLINE, "1"); } catch {}
    closeGate("offline");
  });

  root.appendChild(panel);
  document.body.appendChild(root);
  document.body.classList.add("overflow-hidden");
}

function closeGate(reason) {
  const g = document.getElementById("ap-gate");
  if (g) g.remove();
  document.body.classList.remove("overflow-hidden");
  // boot the actual game shell
  try {
    if (window.engine && typeof window.engine.start === "function") window.engine.start();
  } catch (e) { console.warn(e); }
  console.log("[AP] gate closed:", reason);
}

function openGate() {
  if (!document.getElementById("ap-gate")) buildGate();
}

// ---------- websocket -----------------------------------------------------
function connect() {
  btnConnect.disabled = true;
  logStatus(`Connecting to ${state.host}:${state.port} …`);
  const url = `wss://${state.host}:${state.port}/`;
  let ws;
  try { ws = new WebSocket(url); } catch (e) { logStatus(e.message, "err"); btnConnect.disabled = false; return; }
  state.ws = ws;
  ws.addEventListener("open", () => {
    state.connected = true;
    logStatus("Socket open. Waiting for RoomInfo…", "ok");
  });
  ws.addEventListener("message", (ev) => {
    let data; try { data = JSON.parse(ev.data); } catch { return; }
    (Array.isArray(data) ? data : [data]).forEach(handleMsg);
  });
  ws.addEventListener("close", () => {
    state.connected = false; state.authed = false;
    logStatus("Socket closed.", "err");
    btnConnect.disabled = false;
  });
  ws.addEventListener("error", () => {
    logStatus("Connection error (wrong host/port? or server offline)", "err");
    btnConnect.disabled = false;
  });
}

function send(obj) {
  if (!state.ws || state.ws.readyState !== 1) return;
  state.ws.send(JSON.stringify([obj]));
}

function handleMsg(m) {
  switch (m.cmd) {
    case "RoomInfo":
      // We always advertise the DeathLink tag — whether outbound DL actually
      // fires is decided server-side by the slot's YAML and mirrored into
      // state.deathlink on Connected. Inbound DL is filtered the same way.
      send({
        cmd: "Connect", game: GAME_NAME, name: state.slot, uuid: getUUID(),
        version: PROTO_VERSION, items_handling: 0b111,
        tags: ["DeathLink"],
        password: state.password || "", slot_data: true,
      });
      break;
    case "Connected":
      state.authed = true;
      state.team   = m.team;
      state.slotNo = m.slot;
      (m.checked_locations || []).forEach(id => state.checked.add(id));
      state.slotData    = m.slot_data || {};
      state.goal        = state.slotData.goal === 1 || state.slotData.goal === "all_achievements"
        ? "all_achievements" : "legendary_set";
      {
        const sd = state.slotData.starting_day;
        const idx = typeof sd === "number" ? sd : STARTING_DAY_BY_INDEX.indexOf(String(sd));
        state.startingDay = STARTING_DAY_BY_INDEX[idx] || "wednesday";
      }
      // Single source of truth: YAML.
      state.deathlink = !!state.slotData.deathlink;
      // v0.9.0: older seeds have no extra_locations key — treat as off so an
      // old seed never sends location IDs the server does not know.
      state.extraLocations = state.slotData.extra_locations === true;
      logStatus(
        `Authenticated as ${state.slot} (team ${m.team}, slot ${m.slot}). ` +
        `Goal: ${state.goal}. Day: ${state.startingDay}. DeathLink: ${state.deathlink ? "ON" : "OFF"}. ` +
        `Extra locations: ${state.extraLocations ? "ON (190 checks)" : "OFF (61 checks)"}.`,
        "ok"
      );
      installHooks().then(() => {
        flushPendingChecks();
        const ok = state.hooks.engine && state.hooks.inventory;
        if (ok) {
          logStatus("Hooks installed — starting game.", "ok");
          setTimeout(() => closeGate("connected"), 600);
        } else {
          logStatus("Hooks could not attach — check console.", "err");
        }
      });
      break;
    case "ConnectionRefused":
      logStatus("Refused: " + (m.errors || []).join(", "), "err");
      state.ws.close();
      break;
    case "ReceivedItems": {
      const idx0 = m.index;
      m.items.forEach((it, i) => {
        const g = idx0 + i;
        if (state.received.has(g)) return;
        state.received.add(g);
        state.receivedItems[g] = it;
        applyItem(it.item, g);
      });
      pollAffection();
      checkGoal();
      break;
    }
    case "Bounced":
      if (m.tags && m.tags.includes("DeathLink")) handleDeathLinkRecv(m.data);
      break;
    case "PrintJSON":
    case "RoomUpdate":
    case "DataPackage":
      break;
  }
}

function getUUID() {
  let u = localStorage.getItem("l8p_ap_uuid");
  if (!u) {
    u = "l8p-" + Math.random().toString(36).slice(2, 10);
    localStorage.setItem("l8p_ap_uuid", u);
  }
  return u;
}

// ---------- game-facing ---------------------------------------------------
const pendingChecks = [];

function checkLocation(key) {
  const id = locationId(key);
  if (id == null) return;
  if (state.checked.has(id)) return;
  state.checked.add(id);
  if (state.authed) send({ cmd: "LocationChecks", locations: [id] });
  else pendingChecks.push(id);
  console.log("[AP] ✓ location:", key);
  checkGoal();
}

function flushPendingChecks() {
  if (!pendingChecks.length) return;
  send({ cmd: "LocationChecks", locations: pendingChecks.splice(0) });
}

function sendGoal() {
  if (state.goalSent || !state.authed) return;
  state.goalSent = true;
  send({ cmd: "StatusUpdate", status: 30 });
  logStatus("🏆 Goal complete!", "ok");
}

function checkGoal() {
  if (state.goalSent || !state.authed) return;
  switch (state.goal) {
    case "legendary_set":
      if (state.legendaryReceived.size >= LEGENDARY_ITEMS.length) sendGoal();
      break;
    case "all_achievements": {
      let have = 0;
      for (const k of ACHIEVEMENT_LOCATIONS) {
        const id = locationId(k);
        if (id != null && state.checked.has(id)) have++;
      }
      if (have >= ACHIEVEMENT_LOCATIONS.length) sendGoal();
      break;
    }
  }
}

// ---------- DeathLink -----------------------------------------------------
const DEATH_ID_TTL_MS = 30000;
const DEATH_QUEUE_TTL_MS = 10000;

function pruneDeathIds() {
  const now = Date.now();
  for (const [id, exp] of state.sentDeathIds) {
    if (exp <= now) state.sentDeathIds.delete(id);
  }
}

function makeDeathId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") return globalThis.crypto.randomUUID();
  return "l8p-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function sendDeathLink(causeKey) {
  if (!state.deathlink || !state.authed) return;
  const now = Date.now() / 1000;
  if (now - state.lastDeathTime < 5) return;
  state.lastDeathTime = now;
  const cause = DEATHLINK_CAUSES[causeKey] || causeKey;
  const id = makeDeathId();
  pruneDeathIds();
  state.sentDeathIds.set(id, Date.now() + DEATH_ID_TTL_MS);
  send({
    cmd: "Bounce", tags: ["DeathLink"],
    data: { id, time: now, cause: `${state.slot} ${cause}.`, source: state.slot },
  });
}

function handleDeathLinkRecv(data = {}) {
  if (!state.deathlink) return;
  pruneDeathIds();
  if (data.source && data.source === state.slot) return;
  if (data.id && state.sentDeathIds.has(data.id)) return;
  if (state.inTransition) {
    state.receiveQueue.push({ ...data, receivedAt: Date.now() });
    setTimeout(flushDeathQueue, 500);
    return;
  }
  applyDeathLink(data);
}

function flushDeathQueue() {
  if (state.inTransition) return;
  const now = Date.now();
  const fresh = state.receiveQueue.filter(d => now - d.receivedAt <= DEATH_QUEUE_TTL_MS);
  state.receiveQueue.length = 0;
  fresh.forEach(applyDeathLink);
}

function applyDeathLink(data = {}) {
  const now = Date.now() / 1000;
  if (Math.abs(now - state.lastDeathTime) < 1) return;
  state.lastDeathTime = now;
  console.log("[AP] DeathLink in:", data.cause);
  try {
    if (window.engine && window.engine.showModal) {
      window.engine.showModal("DEATHLINK", "From another world: " + (data.cause || "?"), false);
      if (window.engine.state) window.engine.state.al = 100;
    }
  } catch (e) { console.warn(e); }
}

// ---------- apply incoming item to game -----------------------------------
function applyItem(serverItemId, idx) {
  const key = itemKey(serverItemId);
  if (!key) { console.warn("[AP] unknown item", serverItemId); return; }
  console.log("[AP] received", key);

  // Track legendaries for goal logic
  if (LEGENDARY_ITEMS.includes(key)) {
    state.legendaryReceived.add(key);
  }

  // Per-character Progressive Affection — bump per-char counter
  if (PROGRESSIVE_AFFECTION_ITEMS.includes(key)) {
    const i = PROGRESSIVE_AFFECTION_ITEMS.indexOf(key);
    const charKey = AFFECTION_CHARS[i];
    state.affectionItemCount[charKey] = (state.affectionItemCount[charKey] || 0) + 1;
    window.__apItems = window.__apItems || {};
    window.__apItems[key] = state.affectionItemCount[charKey];
    return;
  }

  // Per-character Progressive Negative Affection — bump per-char counter
  if (PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.includes(key)) {
    const i = PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.indexOf(key);
    const charKey = AFFECTION_CHARS[i];
    state.negativeAffectionItemCount[charKey] = (state.negativeAffectionItemCount[charKey] || 0) + 1;
    window.__apNegativeItems = window.__apNegativeItems || {};
    window.__apNegativeItems[key] = state.negativeAffectionItemCount[charKey];
    return;
  }

  // Filler / normal / legendary — drop in inventory
  if (FILLER_ITEMS.includes(key) || NORMAL_ITEMS.includes(key) || LEGENDARY_ITEMS.includes(key)) {
    try {
      const e = window.engine;
      if (e && e.state && Array.isArray(e.state.inventory)) {
        e.state.inventory.push({ id: key, used: false, ap: true });
        if (e.renderInventory) e.renderInventory();
      }
    } catch (e) { console.warn(e); }
  }
}

// ---------- hook installation --------------------------------------------
function waitForEngine(timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (window.engine && window.engine.state && typeof window.engine.unlockAchievement === "function") {
        clearInterval(iv); resolve(window.engine);
      } else if (Date.now() - t0 > timeoutMs) {
        clearInterval(iv);
        const has = !!window.engine;
        const hasState = has && !!window.engine.state;
        const hasFn = has && typeof window.engine.unlockAchievement === "function";
        reject(new Error(`engine not found (window.engine=${has}, .state=${hasState}, .unlockAchievement=${hasFn}). Try reloading; if it persists, switch language and try again.`));
      }
    }, 100);
  });
}

const affectionFired = new Set();

function pollAffection() {
  const e = window.engine;
  if (!e || !e.state || !e.state.reputation) return;
  const rep = e.state.reputation;
  for (const charKey of AFFECTION_CHARS) {
    const name = AFFECTION_NAME_MAP[charKey];
    if (!name) continue;
    const val = rep[name];
    if (typeof val !== "number") continue;
    const haveItems = state.affectionItemCount[charKey] || 0;
    for (const tier of AFFECTION_TIERS) {
      if (val < AFFECTION_THRESHOLDS[tier]) continue;
      if (haveItems < AFFECTION_TIER_COST[tier]) continue;
      const key = `aff_${charKey}_${tier}`;
      if (affectionFired.has(key)) continue;
      affectionFired.add(key);
      checkLocation(key);
    }

    const haveNegativeItems = state.negativeAffectionItemCount[charKey] || 0;
    for (const tier of NEGATIVE_AFFECTION_TIERS) {
      if (val > NEGATIVE_AFFECTION_THRESHOLDS[tier]) continue;
      if (haveNegativeItems < NEGATIVE_AFFECTION_TIER_COST[tier]) continue;
      const key = `neg_aff_${charKey}_${tier}`;
      if (affectionFired.has(key)) continue;
      affectionFired.add(key);
      checkLocation(key);
    }
  }
}

// v0.4.0 final — lock non-allowed day cards in the difficulty modal.
// Maps starting_day → engine difficulty level.
function installDayLock() {
  const forced = DAY_TO_DIFFICULTY[state.startingDay] || "normal";
  try {
    // Always force the difficulty modal to appear (ignore saved default).
    try { localStorage.setItem("layer8_default_diff", "ask"); } catch {}

    const modal = document.getElementById("difficulty-modal");
    if (!modal) return false;

    const apply = () => {
      const btns = modal.querySelectorAll("button[onclick]");
      btns.forEach(btn => {
        const m = /setDifficulty\(['"]([^'"]+)['"]\)/.exec(btn.getAttribute("onclick") || "");
        if (!m) return;
        const lvl = m[1];
        btn.classList.remove("ap-day-locked", "ap-day-forced");
        if (lvl === forced) {
          btn.classList.add("ap-day-forced");
        } else {
          btn.classList.add("ap-day-locked");
          btn.setAttribute("disabled", "disabled");
          btn.setAttribute("data-ap-orig-onclick", btn.getAttribute("onclick") || "");
          btn.setAttribute("onclick", "return false;");
        }
      });
    };

    let applying = false;
    const safeApply = () => {
      if (applying) return;
      applying = true;
      try { mo && mo.disconnect(); apply(); }
      finally {
        try { mo && mo.observe(modal, { childList: true, subtree: true }); } catch {}
        applying = false;
      }
    };
    const mo = new MutationObserver(safeApply);
    safeApply();
    return true;
  } catch (e) { console.warn("[AP] day-lock failed", e); return false; }
}

// ---------- v0.9.0 extra-pool helpers ------------------------------------
function fireItemFind(type, id) {
  if (!state.extraLocations) return;
  if (type !== "items" || !id) return;
  if (!ITEM_FIND_KEYS.includes(id)) return;
  const key = "find_" + id;
  if (state.extraFired.has(key)) return;
  state.extraFired.add(key);
  checkLocation(key);
}

function fireSidequest(sqId) {
  if (!state.extraLocations) return;
  const chain = sidequestChainOf(sqId);
  if (!chain) {
    if (sqId) console.warn("[AP] unknown sidequest chain for", sqId);
    return;
  }
  if (state.extraFired.has(chain)) return;
  state.extraFired.add(chain);
  checkLocation(chain);
}

async function installHooks() {
  let e;
  try { e = await waitForEngine(); }
  catch (err) { logStatus(err.message, "err"); return; }

  // 1) Achievements
  try {
    const orig = e.unlockAchievement.bind(e);
    e.unlockAchievement = function (id, title, text) {
      const r = orig(id, title, text);
      try { checkLocation(id); } catch (x) { console.warn(x); }
      return r;
    };
    setHook("engine", true);
  } catch (x) { console.warn(x); setHook("engine", false); }

  // 2) Inventory — we only wrap push so AP-injected items still flow through
  // the engine's normal pipeline (renderInventory etc.). The AP-visible
  // "picked this up for the first time" event is addToArchive (hook 6).
  try {
    if (Array.isArray(e.state.inventory)) {
      const inv = e.state.inventory;
      const origPush = inv.push.bind(inv);
      inv.push = function (...args) {
        return origPush(...args);
      };
      setHook("inventory", true);
    }
  } catch (x) { console.warn(x); setHook("inventory", false); }

  // 3) Days + DeathLink
  try {
    if (typeof e.incrementStat === "function") {
      const origInc = e.incrementStat.bind(e);
      e.incrementStat = function (statKey, ...rest) {
        const r = origInc(statKey, ...rest);
        if (statKey === "daysFired")    sendDeathLink("termination");
        if (statKey === "daysRageQuit") sendDeathLink("rage_quit");
        if (statKey === "daysSurvived") {
          state.daysThisRun += 1;
          // v0.7.0: only one day is playable per slot (day-lock).
          // Fire the check for the slot's actual starting_day so the
          // correct day-location resolves regardless of which day the
          // engine's internal counter happens to index.
          const dayKeyByStart = { monday: "day_1", wednesday: "day_2", friday: "day_3" };
          const key = dayKeyByStart[state.startingDay] || "day_2";
          checkLocation(key);
          checkGoal();
        }
        return r;
      };
      setHook("days", true);
    } else {
      setHook("days", false);
    }
    if (typeof e.showModal === "function") {
      const origModal = e.showModal.bind(e);
      e.showModal = function (title, text, ...rest) {
        const r = origModal(title, text, ...rest);
        const t = (title || "").toUpperCase();
        if (t === "WARNUNG" || t === "WARNING")                  sendDeathLink("warning");
        if (t === "VENTIL GEÖFFNET" || t === "STEAM RELEASED" ||
            t === "LET OFF STEAM" || t === "STEAM")              sendDeathLink("let_off_steam");
        return r;
      };
    }
    setHook("deathlink", true);
  } catch (x) { console.warn(x); setHook("deathlink", false); }

  // 4) Affection
  try {
    if (state.affectionPollIv) clearInterval(state.affectionPollIv);
    state.affectionPollIv = setInterval(pollAffection, 2000);
    pollAffection();
    setHook("affection", true);
  } catch (x) { console.warn(x); setHook("affection", false); }

  // 5) Day-lock — fix difficulty to slot's starting_day
  setHook("daylock", installDayLock());

  // 6) Item finds (v0.9.0) — addToArchive('items', id) is the engine's single
  // funnel for "player obtained this item for the first time". It also fires
  // for AP-injected items, which is fine: an injected item you never found
  // in-game still counts as found. Grey dot when extra_locations is off.
  try {
    if (state.extraLocations && typeof e.addToArchive === "function") {
      const origArchive = e.addToArchive.bind(e);
      e.addToArchive = function (type, id) {
        const r = origArchive(type, id);
        try { fireItemFind(type, id); } catch (x) { console.warn(x); }
        return r;
      };
      setHook("items", true);
      // Catch up on anything already archived in a resumed save.
      try {
        const arch = (e.state && e.state.archive && e.state.archive.items) || [];
        arch.forEach(id => fireItemFind("items", id));
      } catch (x) { console.warn(x); }
    } else {
      setHook("items", false);
    }
  } catch (x) { console.warn(x); setHook("items", false); }

  // 7) Sidequest chains (v0.9.0) — renderTerminal(ev, type) tells us which
  // sidequest is on screen, resolveTerminal(...) tells us the player picked an
  // option. The check fires on the first resolved node of a chain.
  try {
    if (state.extraLocations && typeof e.resolveTerminal === "function") {
      if (typeof e.renderTerminal === "function") {
        const origRender = e.renderTerminal.bind(e);
        e.renderTerminal = function (ev, type, ...rest) {
          try {
            if (type === "sidequest" && ev && ev.id) state.currentSidequestId = ev.id;
          } catch (x) { console.warn(x); }
          return origRender(ev, type, ...rest);
        };
      }
      const origResolve = e.resolveTerminal.bind(e);
      e.resolveTerminal = function (...args) {
        // signature: (res, m, f, a, c, loot, usedItem, type, next, rem, repData)
        const type = args[7];
        const r = origResolve(...args);
        try {
          if (type === "sidequest") fireSidequest(state.currentSidequestId);
        } catch (x) { console.warn(x); }
        return r;
      };
      setHook("sidequests", true);
    } else {
      setHook("sidequests", false);
    }
  } catch (x) { console.warn(x); setHook("sidequests", false); }
}

// ---------- boot ----------------------------------------------------------
function boot() {
  try { localStorage.removeItem(LS_OFFLINE); } catch (e) {}
  try { buildGate(); } catch (e) { console.error("[AP] overlay failed to boot", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// expose for debugging
window.AP = { state, checkLocation, sendDeathLink, openGate, checkGoal };
