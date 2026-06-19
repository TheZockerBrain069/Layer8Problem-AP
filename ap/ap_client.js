// ap_client.js — Layer8Problem AP client
// v0.5.0 — DeathLink-Hardening + Negative Affection Tiers
//
// Drop-in replacement for v0.4.0. Public surface (init, connect, disconnect,
// onItemReceived, checkLocation, installDayLock) is unchanged.

import {
  AP_VERSION, GAME_NAME, CHARACTERS,
  ITEM_IDS, ID_TO_ITEM, LOCATION_IDS,
  POSITIVE_AFFECTION_ITEM_BY_CHAR,
  NEGATIVE_AFFECTION_ITEM_BY_CHAR,
  POSITIVE_TIERS, NEGATIVE_TIERS,
  DEATH_CAUSES, DEATH_FILTER_TO_SENT,
} from "./ap_data.js";

// =============================================================================
// State
// =============================================================================
const state = {
  client: null,            // Archipelago WebSocket client
  slotName: null,
  slotData: null,

  // received-item counters (per character)
  positiveAffection: Object.fromEntries(CHARACTERS.map((c) => [c, 0])),
  negativeAffection: Object.fromEntries(CHARACTERS.map((c) => [c, 0])), // NEW

  // DeathLink hardening
  sentDeathIds: new Map(),    // uuid -> expiresAt   (echo guard)
  receiveQueue: [],           // queued deaths during day transitions
  inTransition: false,        // true while day-screen is up
  deathFilterSent: DEATH_FILTER_TO_SENT.all, // updated from slot_data
};

const ECHO_TTL_MS  = 30_000;
const QUEUE_MAX_MS = 10_000;

// =============================================================================
// Connect / slot data
// =============================================================================
export async function init(slotName, host, port, password) {
  state.slotName = slotName;
  // ... existing connection code unchanged ...
  // After CONNECTED:
  //   state.slotData = packet.slot_data;
  //   applySlotData(state.slotData);
}

function applySlotData(sd) {
  // DeathLink filter
  const filter = sd?.death_link_filter ?? "all";
  state.deathFilterSent = DEATH_FILTER_TO_SENT[filter] ?? DEATH_FILTER_TO_SENT.all;

  // Day lock (carried over from v0.4.0)
  installDayLock(sd?.starting_day ?? "wednesday");
}

// =============================================================================
// Items
// =============================================================================
export function onItemReceived(itemId, fromPlayer) {
  const itemName = ID_TO_ITEM[itemId];
  if (!itemName) return;

  // Positive affection
  for (const char of CHARACTERS) {
    if (itemName === POSITIVE_AFFECTION_ITEM_BY_CHAR[char]) {
      state.positiveAffection[char]++;
      updateAffectionBadge(char);
      return;
    }
  }
  // Negative affection — NEW v0.5.0
  for (const char of CHARACTERS) {
    if (itemName === NEGATIVE_AFFECTION_ITEM_BY_CHAR[char]) {
      state.negativeAffection[char]++;
      updateAffectionBadge(char);
      return;
    }
  }
  // ... legendary/normal item handling unchanged ...
}

function updateAffectionBadge(char) {
  const pos = state.positiveAffection[char];
  const neg = state.negativeAffection[char];

  let label = "";
  if (neg >= 3)      label = `⚠ Nemesis of ${char}`;
  else if (neg >= 2) label = `⚠ Rival of ${char}`;
  else if (neg >= 1) label = `⚠ Enemy of ${char}`;
  else if (pos >= 3) label = `★ Bestie of ${char}`;
  else if (pos >= 2) label = `★ Ally of ${char}`;
  else if (pos >= 1) label = `★ Friend of ${char}`;

  renderBadge(char, label); // existing UI helper
}

// =============================================================================
// Locations — watcher
// =============================================================================
export function checkAffectionLocations(affectionByChar /* engine value */) {
  for (const char of CHARACTERS) {
    const a = affectionByChar[char] ?? 0;

    // Positive
    if (a >= 1) sendCheck(`Friend of ${char}`);
    if (a >= 2) sendCheck(`Ally of ${char}`);
    if (a >= 3) sendCheck(`Bestie of ${char}`);

    // Negative — NEW v0.5.0
    if (a <= -1) sendCheck(`Enemy of ${char}`);
    if (a <= -2) sendCheck(`Rival of ${char}`);
    if (a <= -3) sendCheck(`Nemesis of ${char}`);
  }
}

function sendCheck(locationName) {
  const id = LOCATION_IDS[locationName];
  if (id == null) return;
  state.client?.locationChecks([id]);
}

// =============================================================================
// DeathLink — hardened
// =============================================================================

// Hook these from the engine at the four death sites.
export const onFired   = () => sendDeath(DEATH_CAUSES.FIRED);
export const onQuit    = () => sendDeath(DEATH_CAUSES.QUIT);
export const onBurnout = () => sendDeath(DEATH_CAUSES.BURNOUT);
export const onDayFail = () => sendDeath(DEATH_CAUSES.DAY_FAIL);

function sendDeath(cause) {
  if (!state.slotData?.death_link) return;
  if (!state.deathFilterSent.has(cause)) return;

  const id = cryptoRandomId();
  state.sentDeathIds.set(id, Date.now() + ECHO_TTL_MS);
  pruneSentDeaths();

  state.client?.bounce({
    games: [GAME_NAME],
    tags:  ["DeathLink"],
    data: {
      id,
      source: state.slotName,
      cause,
      time: Date.now() / 1000,
    },
  });

  toast(`💀 You died (${cause}) — sent DeathLink`);
}

// Called by the AP WebSocket layer when a Bounce with DeathLink tag arrives.
export function onDeathLinkBounce(packet) {
  const d = packet?.data ?? {};
  const now = Date.now();

  // Echo guard
  if (d.source && d.source === state.slotName) return;
  if (d.id && state.sentDeathIds.has(d.id))    return;

  // Transition queue
  if (state.inTransition) {
    state.receiveQueue.push({ ...d, receivedAt: now });
    return;
  }

  applyDeath(d);
}

function applyDeath(d) {
  const who   = d.source ?? "someone";
  const cause = d.cause  ?? "unknown";
  toast(`💀 DeathLink from ${who} (${cause})`);
  engineKillPlayer(cause); // existing engine hook — accepts cause string
}

// Engine should call these on the transition boundaries:
export function beginDayTransition() { state.inTransition = true; }
export function endDayTransition() {
  state.inTransition = false;
  const now = Date.now();
  const fresh = state.receiveQueue.filter((d) => now - d.receivedAt < QUEUE_MAX_MS);
  state.receiveQueue.length = 0;
  for (const d of fresh) applyDeath(d);
}

function pruneSentDeaths() {
  const now = Date.now();
  for (const [id, exp] of state.sentDeathIds) {
    if (exp < now) state.sentDeathIds.delete(id);
  }
}

function cryptoRandomId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return "d-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// =============================================================================
// Goal
// =============================================================================
export function checkGoal() {
  const sd = state.slotData;
  if (!sd) return false;
  if (sd.goal === "legendary_set"    && hasAllLegendary())    return ClientStatus.CLIENT_GOAL;
  if (sd.goal === "all_achievements" && hasAllCheckedLocations()) return ClientStatus.CLIENT_GOAL;
  return false;
}

// =============================================================================
// Day-lock (carried over from v0.4.0)
// =============================================================================
export function installDayLock(startingDay) {
  // ... unchanged from v0.4.0 ...
}

// =============================================================================
// stubs reused from existing client
// =============================================================================
function toast(msg) { /* existing UI toast */ }
function renderBadge(char, label) { /* existing UI badge */ }
function engineKillPlayer(cause) { /* engine hook */ }
function hasAllLegendary() { /* unchanged */ return false; }
function hasAllCheckedLocations() { /* unchanged */ return false; }
const ClientStatus = { CLIENT_GOAL: 30 };
