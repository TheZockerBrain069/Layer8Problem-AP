// Layer8Problem — Archipelago Client (v2)
// - Pre-connect overlay (blocks game until connected or "Play Offline")
// - Hooks installed on window.engine after engine.init() finishes
// - Real hook status feedback (engine / inventory / deathlink)
// - DeathLink: termination · warning · let-off-steam · rage-quit
//
// Loaded as ES module from index.html AFTER engine.js.

import {
  GAME_NAME, DEATHLINK_CAUSES,
  ACHIEVEMENT_LOCATIONS, NORMAL_ITEMS, LEGENDARY_ITEMS, PROGRESSIVE_ITEMS,
  locationId, itemId, itemKey,
} from "./ap_data.js";

const LS_KEY     = "l8p_ap_session";
const LS_OFFLINE = "l8p_ap_play_offline";
const PROTO_VERSION = { major: 0, minor: 5, build: 0, class: "Version" };

const state = {
  ws: null,
  connected: false,
  authed: false,
  host: "", port: 38281, slot: "", password: "", deathlink: false,
  team: 0, slotNo: 0,
  checked: new Set(),
  received: new Set(),
  receivedItems: [],
  goalSent: false,
  lastDeathTime: 0,
  hooks: { engine: false, inventory: false, deathlink: false },
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
    padding:24px 26px;box-shadow:0 30px 80px #000c}
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
  #ap-gate .cb{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:13px}
  #ap-gate .cb input{width:16px;height:16px}
  #ap-gate .btns{display:flex;gap:10px;margin-top:18px}
  #ap-gate button{flex:1;padding:10px 14px;border-radius:6px;border:1px solid #475569;background:#1e293b;
    color:#e2e8f0;font:600 13px system-ui;cursor:pointer;letter-spacing:.5px}
  #ap-gate button.primary{background:linear-gradient(180deg,#0ea5e9,#0369a1);border-color:#0ea5e9}
  #ap-gate button.primary:hover{filter:brightness(1.1)}
  #ap-gate button:disabled{opacity:.5;cursor:wait}
  #ap-gate .status{margin-top:14px;padding:10px 12px;border:1px solid #334155;border-radius:6px;
    background:#0b1224;font:11px/1.55 ui-monospace,monospace;color:#94a3b8;min-height:62px}
  #ap-gate .status .ok{color:#86efac}
  #ap-gate .status .err{color:#fca5a5}
  #ap-gate .status .warn{color:#fcd34d}
  #ap-gate .hooks{display:flex;gap:12px;margin-top:8px;font-size:11px}
  #ap-gate .hooks span{padding:2px 6px;border-radius:3px;background:#1e293b;border:1px solid #334155}
  #ap-gate .hooks span.ok{border-color:#22c55e;color:#86efac}
  #ap-gate .hooks span.bad{border-color:#ef4444;color:#fca5a5}
  #ap-gate .credit{margin-top:14px;font-size:10px;color:#64748b;text-align:center;letter-spacing:.5px}
  #ap-gate .credit a{color:#94a3b8;text-decoration:underline}

  #ap-pill{position:fixed;top:8px;right:8px;z-index:99990;background:#0f172a;color:#e2e8f0;
    border:1px solid #334155;border-radius:999px;padding:4px 12px;font:11px/1.4 ui-monospace,monospace;
    cursor:pointer;user-select:none;box-shadow:0 4px 12px #0008;display:none}
  #ap-pill.show{display:block}
  #ap-pill.connected{border-color:#22c55e;color:#bbf7d0}
  #ap-pill.offline{border-color:#64748b;color:#94a3b8}
  #ap-pill.error{border-color:#ef4444;color:#fca5a5}
  `;
  document.head.appendChild(s);
}

// ---------- gate UI -------------------------------------------------------
let gateEl, pillEl, statusEl, hooksEl, btnConnect, btnOffline;

function buildGate() {
  injectStyles();
  const stored = JSON.parse(localStorage.getItem(LS_KEY) || "{}");

  const inHost = el("input", { type: "text", value: stored.host || "archipelago.gg" });
  const inPort = el("input", { type: "number", value: stored.port || 38281 });
  const inSlot = el("input", { type: "text", value: stored.slot || "" });
  const inPass = el("input", { type: "password", value: "" });
  const inDL   = el("input", { type: "checkbox" });
  if (stored.deathlink) inDL.checked = true;

  statusEl = el("div", { class: "status" }, "Enter your Archipelago slot to begin, or play offline.");
  hooksEl  = el("div", { class: "hooks" },
    el("span", { id: "hook-engine" },    "engine ?"),
    el("span", { id: "hook-inventory" }, "inventory ?"),
    el("span", { id: "hook-deathlink" }, "deathlink ?"),
  );

  btnConnect = el("button", { class: "primary", onclick: () => {
    state.host = inHost.value.trim();
    state.port = parseInt(inPort.value, 10) || 38281;
    state.slot = inSlot.value.trim();
    state.password = inPass.value;
    state.deathlink = inDL.checked;
    if (!state.slot) { logStatus("Slot name is required.", "err"); return; }
    localStorage.setItem(LS_KEY, JSON.stringify({
      host: state.host, port: state.port, slot: state.slot, deathlink: state.deathlink,
    }));
    localStorage.removeItem(LS_OFFLINE);
    connect();
  }}, "Connect & Play");

  btnOffline = el("button", { onclick: () => {
    localStorage.setItem(LS_OFFLINE, "1");
    closeGate("offline");
  }}, "Play Offline");

  const panel = el("div", { class: "panel" },
    el("h1", {}, "Layer8Problem × Archipelago"),
    el("div", { class: "sub" }, "IT Support Sim · Multiworld Edition"),
    el("div", { class: "row" },
      el("div", {}, el("label", {}, "Host"), inHost),
      el("div", {}, el("label", {}, "Port"), inPort),
    ),
    el("label", {}, "Slot Name"), inSlot,
    el("label", {}, "Password (optional)"), inPass,
    el("div", { class: "cb" }, inDL, el("span", {}, "Enable DeathLink")),
    el("div", { class: "btns" }, btnConnect, btnOffline),
    statusEl,
    hooksEl,
    el("div", { class: "credit", html:
      'Original <a href="https://store.steampowered.com/app/4487580/" target="_blank">Layer8Problem</a> ' +
      'by <a href="https://github.com/seluce/Layer8Problem" target="_blank">seluce</a> · ' +
      'AP integration by <a href="https://github.com/TheZockerBrain069/Layer8Problem-AP" target="_blank">TheZockerBrain069</a>'
    }),
  );

  gateEl = el("div", { id: "ap-gate" }, panel);
  document.body.appendChild(gateEl);

  pillEl = el("div", { id: "ap-pill", onclick: openGate }, "AP: offline");
  document.body.appendChild(pillEl);
}

function logStatus(msg, kind) {
  const line = el("div", { class: kind || "" }, msg);
  statusEl.appendChild(line);
  statusEl.scrollTop = statusEl.scrollHeight;
  console.log("[AP]", msg);
}

function setHook(name, ok) {
  state.hooks[name] = ok;
  const node = document.getElementById("hook-" + name);
  if (!node) return;
  node.className = ok ? "ok" : "bad";
  node.textContent = `${name} ${ok ? "✓" : "✗"}`;
}

function closeGate(mode) {
  gateEl.style.display = "none";
  pillEl.classList.add("show");
  pillEl.classList.remove("connected", "offline", "error");
  if (mode === "connected") {
    pillEl.classList.add("connected");
    pillEl.textContent = `AP: ${state.slot}`;
  } else {
    pillEl.classList.add("offline");
    pillEl.textContent = "AP: offline";
  }
}

function openGate() {
  gateEl.style.display = "flex";
}

// ---------- WebSocket -----------------------------------------------------
function connect() {
  btnConnect.disabled = true;
  const url = `wss://${state.host}:${state.port}/`;
  logStatus(`Connecting to ${url} …`);
  try {
    state.ws = new WebSocket(url);
  } catch (e) {
    logStatus("WebSocket error: " + e.message, "err");
    btnConnect.disabled = false;
    return;
  }
  state.ws.addEventListener("open", () => {
    state.connected = true;
    logStatus("Socket open, awaiting RoomInfo…", "ok");
  });
  state.ws.addEventListener("message", (ev) => {
    try {
      const arr = JSON.parse(ev.data);
      arr.forEach(handleMsg);
    } catch (e) { console.warn("[AP] bad msg", e); }
  });
  state.ws.addEventListener("close", () => {
    state.connected = false;
    state.authed = false;
    logStatus("Disconnected.", "warn");
    btnConnect.disabled = false;
    pillEl.classList.remove("connected");
    pillEl.classList.add("error");
    pillEl.textContent = "AP: disconnected";
  });
  state.ws.addEventListener("error", () => {
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
      send({
        cmd: "Connect", game: GAME_NAME, name: state.slot, uuid: getUUID(),
        version: PROTO_VERSION, items_handling: 0b111,
        tags: state.deathlink ? ["DeathLink"] : [],
        password: state.password || "", slot_data: true,
      });
      break;
    case "Connected":
      state.authed = true;
      state.team   = m.team;
      state.slotNo = m.slot;
      (m.checked_locations || []).forEach(id => state.checked.add(id));
      logStatus(`Authenticated as ${state.slot} (team ${m.team}, slot ${m.slot})`, "ok");
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

// ---------- DeathLink -----------------------------------------------------
function sendDeathLink(causeKey) {
  if (!state.deathlink || !state.authed) return;
  const now = Date.now() / 1000;
  if (now - state.lastDeathTime < 5) return;
  state.lastDeathTime = now;
  const cause = DEATHLINK_CAUSES[causeKey] || causeKey;
  send({
    cmd: "Bounce", tags: ["DeathLink"],
    data: { time: now, cause: `${state.slot} ${cause}.`, source: state.slot },
  });
}

function handleDeathLinkRecv(data) {
  if (!state.deathlink) return;
  const now = Date.now() / 1000;
  if (Math.abs(now - state.lastDeathTime) < 5) return;
  state.lastDeathTime = now;
  console.log("[AP] DeathLink in:", data.cause);
  try {
    if (window.engine && window.engine.showModal) {
      window.engine.showModal("DEATHLINK", "Aus einer anderen Welt: " + (data.cause || "?"), false);
      if (window.engine.state) window.engine.state.al = 100;
    }
  } catch (e) { console.warn(e); }
}

// ---------- apply incoming item to game -----------------------------------
function applyItem(serverItemId, idx) {
  const key = itemKey(serverItemId);
  if (!key) { console.warn("[AP] unknown item", serverItemId); return; }
  console.log("[AP] received", key);

  if (key === "progressive_difficulty" || key === "progressive_affection") {
    window.__apItems = window.__apItems || {};
    window.__apItems[key] = (window.__apItems[key] || 0) + 1;
    return;
  }
  try {
    const e = window.engine;
    if (e && e.state && Array.isArray(e.state.inventory)) {
      e.state.inventory.push({ id: key, used: false, ap: true });
      if (e.renderInventory) e.renderInventory();
    }
  } catch (e) { console.warn(e); }
}

// ---------- hook installation --------------------------------------------
function waitForEngine(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (window.engine && window.engine.state && typeof window.engine.unlockAchievement === "function") {
        clearInterval(iv); resolve(window.engine);
      } else if (Date.now() - t0 > timeoutMs) {
        clearInterval(iv); reject(new Error("engine not found"));
      }
    }, 100);
  });
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
      try {
        checkLocation(id);
        if (e.state?.achievements?.length >= ACHIEVEMENT_LOCATIONS.length) sendGoal();
      } catch (x) { console.warn(x); }
      return r;
    };
    setHook("engine", true);
  } catch (x) { console.warn(x); setHook("engine", false); }

  // 2) Inventory — proxy push so any item gain (engine source or AP) is observed
  try {
    if (Array.isArray(e.state.inventory)) {
      const inv = e.state.inventory;
      const origPush = inv.push.bind(inv);
      inv.push = function (...args) {
        const r = origPush(...args);
        for (const it of args) {
          if (!it || !it.id || it.ap) continue;
          try { checkLocation("item_" + it.id); } catch {}
        }
        return r;
      };
      setHook("inventory", true);
    }
  } catch (x) { console.warn(x); setHook("inventory", false); }

  // 3) DeathLink — wrap incrementStat (fired, rage-quit) and showModal (warning, steam)
  try {
    if (typeof e.incrementStat === "function") {
      const origInc = e.incrementStat.bind(e);
      e.incrementStat = function (statKey, ...rest) {
        const r = origInc(statKey, ...rest);
        if (statKey === "daysFired")    sendDeathLink("termination");
        if (statKey === "daysRageQuit") sendDeathLink("rage_quit");
        if (statKey === "daysSurvived") checkLocation("day_survived");
        return r;
      };
    }
    if (typeof e.showModal === "function") {
      const origModal = e.showModal.bind(e);
      e.showModal = function (title, text, ...rest) {
        const r = origModal(title, text, ...rest);
        const t = (title || "").toUpperCase();
        if (t === "WARNUNG" || t === "WARNING")          sendDeathLink("warning");
        if (t === "VENTIL GEÖFFNET" || t === "STEAM")    sendDeathLink("let_off_steam");
        return r;
      };
    }
    setHook("deathlink", true);
  } catch (x) { console.warn(x); setHook("deathlink", false); }
}

// ---------- boot ----------------------------------------------------------
function boot() {
  buildGate();
  // Auto-skip if user chose offline last time
  if (localStorage.getItem(LS_OFFLINE) === "1") {
    closeGate("offline");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

// expose for debugging
window.AP = { state, checkLocation, sendDeathLink, openGate };
