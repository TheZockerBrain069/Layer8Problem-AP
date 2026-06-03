// Layer8Problem — Archipelago Client
// Connects to an Archipelago server via WebSocket and hooks the game engine
// without modifying its source files (monkey-patch on init).
//
// Loaded as ES module from index.html AFTER the game scripts.

import {
  AP_BASE, GAME_NAME, DEATHLINK_CAUSES,
  ACHIEVEMENT_LOCATIONS, NORMAL_ITEMS, LEGENDARY_ITEMS, PROGRESSIVE_ITEMS,
  locationId, itemId, itemKey,
} from "./ap_data.js";

const LS_KEY = "l8p_ap_session";
const PROTO_VERSION = { major: 0, minor: 5, build: 0, class: "Version" };

const state = {
  ws: null,
  connected: false,
  authed: false,
  host: "", port: 38281, slot: "", password: "", deathlink: false,
  team: 0, slotNo: 0,
  checked: new Set(),         // location ids
  received: new Set(),         // item indices already applied
  receivedItems: [],           // ordered list from server
  goalSent: false,
  lastDeathTime: 0,
};

// ---------- UI -------------------------------------------------------------
function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style") Object.assign(e.style, v);
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const k of kids) e.append(k.nodeType ? k : document.createTextNode(k));
  return e;
}

function injectStyles() {
  const s = document.createElement("style");
  s.textContent = `
  #ap-badge{position:fixed;top:8px;right:8px;z-index:99999;background:#0f172a;color:#e2e8f0;
    border:1px solid #475569;border-radius:6px;padding:4px 10px;font:12px/1.4 ui-monospace,monospace;
    cursor:pointer;user-select:none;box-shadow:0 4px 12px #0008}
  #ap-badge.connected{border-color:#22c55e;color:#bbf7d0}
  #ap-badge.error{border-color:#ef4444;color:#fecaca}
  #ap-modal{position:fixed;inset:0;background:#000a;z-index:99998;display:none;
    align-items:center;justify-content:center}
  #ap-modal.open{display:flex}
  #ap-modal .box{background:#0f172a;color:#e2e8f0;border:1px solid #475569;border-radius:8px;
    padding:20px;width:320px;font:13px/1.5 system-ui,sans-serif}
  #ap-modal h3{margin:0 0 12px;font-size:16px;color:#fbbf24}
  #ap-modal label{display:block;margin:8px 0 2px;font-size:11px;color:#94a3b8;text-transform:uppercase}
  #ap-modal input{width:100%;padding:6px 8px;background:#1e293b;border:1px solid #475569;
    border-radius:4px;color:#e2e8f0;font:inherit;box-sizing:border-box}
  #ap-modal .row{display:flex;gap:8px}
  #ap-modal .row > div{flex:1}
  #ap-modal .btns{margin-top:14px;display:flex;gap:8px;justify-content:flex-end}
  #ap-modal button{padding:6px 14px;background:#334155;border:1px solid #64748b;color:#e2e8f0;
    border-radius:4px;cursor:pointer;font:inherit}
  #ap-modal button.primary{background:#0369a1;border-color:#0ea5e9}
  #ap-modal .log{margin-top:10px;max-height:80px;overflow:auto;font:10px ui-monospace,monospace;
    color:#64748b;border-top:1px solid #334155;padding-top:6px}
  #ap-modal .cb{display:flex;align-items:center;gap:6px;margin-top:8px}
  #ap-modal .cb input{width:auto}
  `;
  document.head.appendChild(s);
}

let logEl;
function log(msg) {
  console.log("[AP]", msg);
  if (logEl) {
    logEl.append(el("div", {}, msg));
    logEl.scrollTop = logEl.scrollHeight;
  }
}

function buildUI() {
  injectStyles();
  const badge = el("div", { id: "ap-badge" }, "AP: offline");
  badge.addEventListener("click", () => modal.classList.toggle("open"));
  document.body.appendChild(badge);

  const stored = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  const inHost = el("input", { value: stored.host || "archipelago.gg" });
  const inPort = el("input", { value: stored.port || "38281", type: "number" });
  const inSlot = el("input", { value: stored.slot || "" });
  const inPass = el("input", { value: stored.password || "", type: "password" });
  const inDL   = el("input", { type: "checkbox" });
  if (stored.deathlink) inDL.checked = true;
  logEl = el("div", { class: "log" });

  const modal = el("div", { id: "ap-modal" },
    el("div", { class: "box" },
      el("h3", {}, "Archipelago Connection"),
      el("div", { class: "row" },
        el("div", {}, el("label", {}, "Host"), inHost),
        el("div", { style: { flex: "0 0 90px" } }, el("label", {}, "Port"), inPort),
      ),
      el("label", {}, "Slot Name"), inSlot,
      el("label", {}, "Password (optional)"), inPass,
      el("div", { class: "cb" }, inDL, el("span", {}, "Enable DeathLink")),
      el("div", { class: "btns" },
        el("button", { onclick: () => modal.classList.remove("open") }, "Close"),
        el("button", { class: "primary", onclick: () => {
          state.host = inHost.value.trim();
          state.port = parseInt(inPort.value, 10) || 38281;
          state.slot = inSlot.value.trim();
          state.password = inPass.value;
          state.deathlink = inDL.checked;
          localStorage.setItem(LS_KEY, JSON.stringify({
            host: state.host, port: state.port, slot: state.slot,
            password: state.password, deathlink: state.deathlink,
          }));
          connect();
        } }, "Connect"),
      ),
      logEl,
    ),
  );
  document.body.appendChild(modal);

  window.__apBadge = badge;
  window.__apModal = modal;

  // Auto-reconnect if we have a session
  if (stored.slot && stored.host) {
    Object.assign(state, stored);
    setTimeout(connect, 500);
  }
}

function setBadge(text, cls = "") {
  const b = window.__apBadge;
  if (!b) return;
  b.className = cls;
  b.textContent = "AP: " + text;
}

// ---------- WebSocket ------------------------------------------------------
function connect() {
  if (state.ws) try { state.ws.close(); } catch (e) {}
  state.connected = state.authed = false;
  state.checked.clear();
  state.received.clear();
  state.receivedItems = [];
  state.goalSent = false;

  const url = `wss://${state.host}:${state.port}`;
  log(`Connecting to ${url} …`);
  setBadge("connecting…");
  let ws;
  try { ws = new WebSocket(url); }
  catch (e) {
    // Fall back to insecure for localhost
    ws = new WebSocket(`ws://${state.host}:${state.port}`);
  }
  state.ws = ws;

  ws.addEventListener("open", () => {
    state.connected = true;
    log("Socket open, awaiting RoomInfo…");
  });
  ws.addEventListener("close", () => {
    state.connected = state.authed = false;
    setBadge("disconnected", "error");
    log("Disconnected");
  });
  ws.addEventListener("error", (e) => {
    setBadge("error", "error");
    log("Socket error");
  });
  ws.addEventListener("message", (e) => {
    let msgs;
    try { msgs = JSON.parse(e.data); } catch { return; }
    for (const m of msgs) handleMsg(m);
  });
}

function send(obj) {
  if (!state.ws || state.ws.readyState !== 1) return;
  state.ws.send(JSON.stringify([obj]));
}

function handleMsg(m) {
  switch (m.cmd) {
    case "RoomInfo": {
      send({
        cmd: "Connect",
        game: GAME_NAME,
        name: state.slot,
        uuid: getUUID(),
        version: PROTO_VERSION,
        items_handling: 0b111, // full remote
        tags: state.deathlink ? ["DeathLink"] : [],
        password: state.password || "",
        slot_data: true,
      });
      break;
    }
    case "Connected": {
      state.authed = true;
      state.team = m.team;
      state.slotNo = m.slot;
      // Mark already-checked locations server-side so we don't resend
      (m.checked_locations || []).forEach(id => state.checked.add(id));
      setBadge(`${state.slot}`, "connected");
      log(`Authenticated as ${state.slot} (team ${m.team}, slot ${m.slot})`);
      // Flush any local achievements unlocked before connect
      flushPendingChecks();
      break;
    }
    case "ConnectionRefused": {
      setBadge("auth failed", "error");
      log("Connection refused: " + (m.errors || []).join(", "));
      break;
    }
    case "ReceivedItems": {
      const idx0 = m.index;
      m.items.forEach((it, i) => {
        const globalIdx = idx0 + i;
        if (state.received.has(globalIdx)) return;
        state.received.add(globalIdx);
        state.receivedItems[globalIdx] = it;
        applyItem(it.item, globalIdx);
      });
      break;
    }
    case "PrintJSON": {
      // Server log line — silence by default
      break;
    }
    case "Bounced": {
      if (m.tags && m.tags.includes("DeathLink")) handleDeathLinkRecv(m.data);
      break;
    }
    case "RoomUpdate": break;
    case "DataPackage": break;
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

// ---------- Game-facing API ------------------------------------------------
const pendingChecks = [];

function checkLocation(key) {
  const id = locationId(key);
  if (id === null) return;
  if (state.checked.has(id)) return;
  state.checked.add(id);
  if (state.authed) {
    send({ cmd: "LocationChecks", locations: [id] });
    log(`✓ ${key}`);
  } else {
    pendingChecks.push(id);
  }
}

function flushPendingChecks() {
  if (!pendingChecks.length) return;
  send({ cmd: "LocationChecks", locations: pendingChecks.splice(0) });
}

function sendGoal() {
  if (state.goalSent || !state.authed) return;
  state.goalSent = true;
  send({ cmd: "StatusUpdate", status: 30 }); // 30 = ClientGoal
  log("🏆 Goal complete!");
}

// ---------- DeathLink ------------------------------------------------------
function sendDeathLink(causeKey) {
  if (!state.deathlink || !state.authed) return;
  const now = Date.now() / 1000;
  if (now - state.lastDeathTime < 5) return; // dedupe
  state.lastDeathTime = now;
  const cause = DEATHLINK_CAUSES[causeKey] || causeKey;
  send({
    cmd: "Bounce",
    tags: ["DeathLink"],
    data: { time: now, cause: `${state.slot} ${cause}.`, source: state.slot },
  });
}

function handleDeathLinkRecv(data) {
  if (!state.deathlink) return;
  const now = Date.now() / 1000;
  if (Math.abs(now - state.lastDeathTime) < 5) return;
  state.lastDeathTime = now;
  log(`☠ DeathLink: ${data.cause || "unknown"}`);
  // Trigger game over via the game's own mechanism if available
  try {
    if (window.game && window.game.gameOver) {
      window.game.gameOver(`DeathLink: ${data.cause || ""}`);
    }
  } catch (e) { console.warn(e); }
}

// ---------- Apply incoming item to game ------------------------------------
function applyItem(serverItemId, idx) {
  const key = itemKey(serverItemId);
  if (!key) { log(`? unknown item ${serverItemId}`); return; }
  log(`◀ received ${key}`);

  if (key === "progressive_difficulty" || key === "progressive_affection") {
    // Stored in saved state — game reads from window.__apItems
    window.__apItems = window.__apItems || {};
    window.__apItems[key] = (window.__apItems[key] || 0) + 1;
    return;
  }

  // Real inventory item: push into the running game
  try {
    if (window.game && window.game.state && Array.isArray(window.game.state.inventory)) {
      window.game.state.inventory.push({ id: key, used: false, ap: true });
      if (window.game.renderInventory) window.game.renderInventory();
      if (window.game.log) window.game.log(`📦 AP-Item erhalten: ${key}`);
    }
  } catch (e) { console.warn(e); }
}

// ---------- Engine monkey-patching -----------------------------------------
// We don't edit engine_*.js. Instead, after the game object is ready,
// we wrap the functions that signal interesting events.

function hookEngine(game) {
  // 1) Achievements — single chokepoint
  const origUnlock = game.unlockAchievement?.bind(game);
  if (origUnlock) {
    game.unlockAchievement = function (id, title, text) {
      const r = origUnlock(id, title, text);
      try { checkLocation(id); } catch (e) { console.warn(e); }
      // 24/24 achievements → goal candidate (configurable later by slot_data)
      if (game.state?.achievements?.length >= ACHIEVEMENT_LOCATIONS.length) sendGoal();
      return r;
    };
  }

  // 2) Items — intercept by trapping inventory pushes
  if (game.state && Array.isArray(game.state.inventory)) {
    const inv = game.state.inventory;
    const origPush = inv.push.bind(inv);
    inv.push = function (...args) {
      const r = origPush(...args);
      for (const it of args) {
        if (!it || !it.id || it.ap) continue; // skip echoes
        try { checkLocation("item_" + it.id); } catch {}
        // Days survived also bubble through item gains; ignore non-items
      }
      return r;
    };
  }

  // 3) Day end → checkLocation("day_N")
  const origEndDay = game.endDay?.bind(game) || game.finishDay?.bind(game);
  if (origEndDay) {
    const name = game.endDay ? "endDay" : "finishDay";
    game[name] = function (...args) {
      const dayNum = game.state?.day || 1;
      checkLocation("day_" + dayNum);
      return origEndDay(...args);
    };
  }

  // 4) DeathLink triggers
  const origGameOver = game.gameOver?.bind(game);
  if (origGameOver) {
    game.gameOver = function (reason, ...rest) {
      const r = (reason || "").toLowerCase();
      let cause = "termination";
      if (r.includes("warn"))      cause = "warning";
      else if (r.includes("rage")) cause = "rage_quit";
      else if (r.includes("steam")) cause = "steam";
      try { sendDeathLink(cause); } catch {}
      return origGameOver(reason, ...rest);
    };
  }

  log("Engine hooks installed");
}

// Wait for the game object to materialise and patch it
function waitForGame() {
  let tries = 0;
  const iv = setInterval(() => {
    tries++;
    if (window.game && (window.game.unlockAchievement || window.game.state)) {
      clearInterval(iv);
      hookEngine(window.game);
    } else if (tries > 200) { // 20s timeout
      clearInterval(iv);
      log("⚠ Game object not detected — hooks not installed");
    }
  }, 100);
}

// ---------- Public API (window.AP) -----------------------------------------
window.AP = {
  checkLocation,
  sendDeathLink,
  sendGoal,
  get state() { return state; },
};

// ---------- Bootstrap ------------------------------------------------------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => { buildUI(); waitForGame(); });
} else {
  buildUI();
  waitForGame();
}
