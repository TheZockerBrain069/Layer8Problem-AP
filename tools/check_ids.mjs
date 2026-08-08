#!/usr/bin/env node
// Layer8Problem AP — ID consistency checker (v0.9.2)
//
// Compares the JS client's ID map (ap/ap_data.js) against the Python
// apworld source (Locations.py / Items.py). Archipelago talks in numeric
// IDs, so an ID-level mismatch is a protocol break: the client fires a
// check the server does not know, or hands the player the wrong item.
// This is exactly the bug class that produced the v0.5.1 and v0.7.0
// hotfixes.
//
// Usage:
//   node tools/check_ids.mjs <path-to-unpacked-apworld>/layer8problem
//   node tools/check_ids.mjs                 # defaults to ./apworld/layer8problem
//
// The .apworld shipped with every release IS the Python source (it is a
// plain zip) — unpack it anywhere and point this script at the inner
// `layer8problem` folder.
//
// Exit code 0 = in sync, 1 = drift found.

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");

const pyDir = resolve(process.argv[2] ?? join(REPO, "apworld", "layer8problem"));

const errors = [];
const notes = [];
const fail = (m) => errors.push(m);

if (!existsSync(join(pyDir, "Locations.py"))) {
  console.error(`Cannot find Locations.py in ${pyDir}`);
  console.error("Unpack layer8problem.apworld (it is a zip) and pass the inner");
  console.error("layer8problem folder, e.g.:");
  console.error("  unzip layer8problem.apworld -d /tmp/apw");
  console.error("  node tools/check_ids.mjs /tmp/apw/layer8problem");
  process.exit(2);
}

// --- read the JS side --------------------------------------------------------
const js = await import(pathToFileURL(join(REPO, "ap", "ap_data.js")).href);

// --- read the Python side (regex, no Python runtime needed) ------------------
const locSrc = readFileSync(join(pyDir, "Locations.py"), "utf8");
const itemSrc = readFileSync(join(pyDir, "Items.py"), "utf8");
const initSrc = existsSync(join(pyDir, "__init__.py"))
  ? readFileSync(join(pyDir, "__init__.py"), "utf8")
  : "";

function pyList(src, name, file) {
  // Matches:  NAME: List[str] = [ ... ]   and   NAME = [ ... ]
  const re = new RegExp(`^${name}(?:\\s*:\\s*List\\[str\\])?\\s*=\\s*\\[([\\s\\S]*?)\\]`, "m");
  const m = src.match(re);
  if (!m) {
    fail(`${file}: list ${name} not found`);
    return [];
  }
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]);
}

function pyIntConst(src, name, file) {
  const m = src.match(new RegExp(`^${name}\\s*=\\s*(0x[0-9A-Fa-f]+|\\d+)`, "m"));
  if (!m) {
    fail(`${file}: constant ${name} not found`);
    return NaN;
  }
  return Number(m[1]);
}

// --- 1. base offset ----------------------------------------------------------
const locBase = pyIntConst(locSrc, "AP_BASE", "Locations.py");
const itemBase = pyIntConst(itemSrc, "AP_BASE", "Items.py");
if (locBase !== js.AP_BASE) fail(`AP_BASE drift: Locations.py 0x${locBase.toString(16)} vs ap_data.js 0x${js.AP_BASE.toString(16)}`);
if (itemBase !== js.AP_BASE) fail(`AP_BASE drift: Items.py 0x${itemBase.toString(16)} vs ap_data.js 0x${js.AP_BASE.toString(16)}`);

// --- 2. offsets are the contract; verify Python still uses them --------------
// If someone edits an offset in the Python table the client silently talks to
// the wrong ID range, so pin them here.
const OFFSETS = {
  achievements: 0,
  days: 100,
  affection: 200,
  negativeAffection: 300,
  normalItems: 1000,
  legendaryItems: 1100,
  progressiveAffection: 1200,
  progressiveNegativeAffection: 1207,
  filler: 1300,
  itemFinds: 400,
  sidequests: 500,
};
const offsetProbes = [
  ["days", /AP_BASE \+ (\d+) \+ _i\b/, locSrc, "Locations.py"],
  ["affection", /LOCATION_TABLE\[f"\{_char\} - \{_tier\}"\] = AP_BASE \+ (\d+) \+ _ci \* 3/, locSrc, "Locations.py"],
  ["normalItems", /NORMAL_ITEMS\)[\s\S]{0,120}?AP_BASE \+ (\d+) \+ _i/, itemSrc, "Items.py"],
  ["legendaryItems", /LEGENDARY_ITEMS\)[\s\S]{0,120}?AP_BASE \+ (\d+) \+ _i/, itemSrc, "Items.py"],
  ["progressiveAffection", /\bPROGRESSIVE_AFFECTION_ITEMS\)[\s\S]{0,120}?AP_BASE \+ (\d+) \+ _i/, itemSrc, "Items.py"],
  ["progressiveNegativeAffection", /PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS\)[\s\S]{0,120}?AP_BASE \+ (\d+) \+ _i/, itemSrc, "Items.py"],
  ["filler", /_filler_only\)[\s\S]{0,120}?AP_BASE \+ (\d+) \+ _i/, itemSrc, "Items.py"],
];
for (const [key, re, src, file] of offsetProbes) {
  const m = src.match(re);
  if (!m) { notes.push(`could not verify ${key} offset in ${file} (pattern changed?)`); continue; }
  if (Number(m[1]) !== OFFSETS[key]) {
    fail(`${file}: ${key} offset is ${m[1]}, expected ${OFFSETS[key]}`);
  }
}
// The two affection blocks share one probe; make sure the negative block
// still sits at 300.
if (!/AP_BASE \+ 300 \+ _ci \* 3/.test(locSrc)) {
  fail("Locations.py: negative affection block is no longer at offset 300");
}

// --- 3. list lengths + derived ID ranges -------------------------------------
// v0.9.0 extra pool: pair lists live as [(key, name)] tuples in Locations.py.
function pyPairKeys(src, name, file) {
  const re = new RegExp(`^${name}(?:\\s*:\\s*List\\[tuple\\])?\\s*=\\s*\\[([\\s\\S]*?)\\n\\]`, "m");
  const m = src.match(re);
  if (!m) { fail(`${file}: pair list ${name} not found`); return []; }
  return [...m[1].matchAll(/\(\s*"([^"]+)"\s*,/g)].map((x) => x[1]);
}
function pyPairNames(src, name, file) {
  const re = new RegExp(`^${name}(?:\\s*:\\s*List\\[tuple\\])?\\s*=\\s*\\[([\\s\\S]*?)\\n\\]`, "m");
  const m = src.match(re);
  if (!m) { fail(`${file}: pair list ${name} not found`); return []; }
  return [...m[1].matchAll(/\(\s*"[^"]+"\s*,\s*"([^"]*)"\s*\)/g)].map((x) => x[1]);
}
const pyItemFinds = pyPairKeys(locSrc, "ITEM_FIND_PAIRS", "Locations.py");
const pySidequests = pyPairKeys(locSrc, "SIDEQUEST_PAIRS", "Locations.py");

// archipelago.gg stores spoiler-log location names in a legacy 3-byte UTF-8
// column. Non-BMP characters (including emoji) need 4 bytes and cause room
// creation to fail with HTTP 500, even though local generation succeeds.
const literalLocationNames = [
  ...pyList(locSrc, "ACHIEVEMENT_NAMES", "Locations.py"),
  ...pyList(locSrc, "DAY_NAMES", "Locations.py"),
  ...pyPairNames(locSrc, "ITEM_FIND_PAIRS", "Locations.py"),
  ...pyPairNames(locSrc, "SIDEQUEST_PAIRS", "Locations.py"),
];
for (const name of literalLocationNames) {
  const nonBmp = [...name].filter((char) => char.codePointAt(0) > 0xFFFF);
  if (nonBmp.length) {
    fail(`Locations.py: location "${name}" contains unsupported non-BMP character(s): ${nonBmp.join(" ")}`);
  }
}

if (!/for _i, _name in enumerate\(ITEM_FIND_NAMES\):\s*\n\s*LOCATION_TABLE\[_name\] = AP_BASE \+ 400 \+ _i/.test(locSrc)) {
  fail("Locations.py: item-find block is no longer at offset 400");
}
if (!/for _i, _name in enumerate\(SIDEQUEST_NAMES\):\s*\n\s*LOCATION_TABLE\[_name\] = AP_BASE \+ 500 \+ _i/.test(locSrc)) {
  fail("Locations.py: sidequest block is no longer at offset 500");
}
// The sidequest pool must stay below the next free block.
if (pySidequests.length > 100) {
  fail(`sidequest chains: ${pySidequests.length} entries would run past offset 599`);
}

const pairs = [
  ["achievements",   js.ACHIEVEMENT_LOCATIONS, pyList(locSrc, "ACHIEVEMENT_NAMES", "Locations.py"), OFFSETS.achievements],
  ["days",           js.DAY_LOCATIONS,         pyList(locSrc, "DAY_NAMES", "Locations.py"),         OFFSETS.days],
  ["affectionChars", js.AFFECTION_CHARS,       pyList(locSrc, "AFFECTION_CHARS", "Locations.py"),   null],
  ["affectionTiers", js.AFFECTION_TIERS,       pyList(locSrc, "AFFECTION_TIERS", "Locations.py"),   null],
  ["negTiers",       js.NEGATIVE_AFFECTION_TIERS, pyList(locSrc, "NEGATIVE_AFFECTION_TIERS", "Locations.py"), null],
  ["normalItems",    js.NORMAL_ITEMS,          pyList(itemSrc, "NORMAL_ITEMS", "Items.py"),         OFFSETS.normalItems],
  ["legendaryItems", js.LEGENDARY_ITEMS,       pyList(itemSrc, "LEGENDARY_ITEMS", "Items.py"),      OFFSETS.legendaryItems],
  ["itemChars",      js.AFFECTION_CHARS,       pyList(itemSrc, "AFFECTION_CHARS", "Items.py"),      null],
  ["itemFinds",      js.ITEM_FIND_KEYS,        pyItemFinds,                                        OFFSETS.itemFinds],
  ["sidequests",     js.SIDEQUEST_CHAINS,      pySidequests,                                       OFFSETS.sidequests],
];

// Keys are the contract for the extra pool: the client sends "find_<key>" and
// "<chain id>", the world derives the ID from list position. Order matters.
if (Array.isArray(js.ITEM_FIND_KEYS) && js.ITEM_FIND_KEYS.join("|") !== pyItemFinds.join("|")) {
  fail("ITEM_FIND_KEYS order/content differs between ap_data.js and Locations.py");
}
if (Array.isArray(js.SIDEQUEST_CHAINS) && js.SIDEQUEST_CHAINS.join("|") !== pySidequests.join("|")) {
  fail("SIDEQUEST_CHAINS order/content differs between ap_data.js and Locations.py");
}
// Chain prefixes must resolve to themselves, and to the right chain for a
// child node id like "<chain>_2a".
for (const c of js.SIDEQUEST_CHAINS ?? []) {
  if (js.sidequestChainOf(c) !== c) fail(`sidequestChainOf("${c}") = ${js.sidequestChainOf(c)}`);
  if (js.sidequestChainOf(c + "_2a") !== c) fail(`sidequestChainOf("${c}_2a") = ${js.sidequestChainOf(c + "_2a")}`);
}

for (const [label, jsArr, pyArr] of pairs) {
  if (!Array.isArray(jsArr)) { fail(`ap_data.js: ${label} export missing`); continue; }
  if (jsArr.length !== pyArr.length) {
    fail(`${label}: ${jsArr.length} entries in ap_data.js vs ${pyArr.length} in Python`);
  }
}

// Progressive item lists are generated from AFFECTION_CHARS on both sides.
const pyChars = pyList(itemSrc, "AFFECTION_CHARS", "Items.py");
if (js.PROGRESSIVE_AFFECTION_ITEMS.length !== pyChars.length) {
  fail(`progressive affection: ${js.PROGRESSIVE_AFFECTION_ITEMS.length} in ap_data.js vs ${pyChars.length} chars in Items.py`);
}
if (js.PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.length !== pyChars.length) {
  fail(`progressive negative affection: ${js.PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.length} in ap_data.js vs ${pyChars.length} chars in Items.py`);
}
// Character order must match between the two Python files, otherwise the
// client's per-character progressive items point at the wrong person.
const pyLocChars = pyList(locSrc, "AFFECTION_CHARS", "Locations.py");
if (pyLocChars.join("|") !== pyChars.join("|")) {
  fail("AFFECTION_CHARS order differs between Locations.py and Items.py");
}

// --- 4. reserved gaps must stay vacant ---------------------------------------
if (js.itemKey(js.AP_BASE + 1206) !== null) {
  fail("AP_BASE+1206 (legacy Progressive Difficulty) must stay reserved in ap_data.js");
}
for (const off of [103, 104]) {
  if (js.DAY_LOCATIONS.length > off - 100) {
    fail(`day offset ${off} is reserved (legacy day_4/day_5) and must stay unused`);
  }
}

// --- 5. round-trip every ID the client can produce ---------------------------
const expectedItemIds = new Map();
js.NORMAL_ITEMS.forEach((k, i) => expectedItemIds.set(k, js.AP_BASE + OFFSETS.normalItems + i));
js.LEGENDARY_ITEMS.forEach((k, i) => expectedItemIds.set(k, js.AP_BASE + OFFSETS.legendaryItems + i));
js.PROGRESSIVE_AFFECTION_ITEMS.forEach((k, i) => expectedItemIds.set(k, js.AP_BASE + OFFSETS.progressiveAffection + i));
js.PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.forEach((k, i) => expectedItemIds.set(k, js.AP_BASE + OFFSETS.progressiveNegativeAffection + i));
js.FILLER_ITEMS.forEach((k, i) => expectedItemIds.set(k, js.AP_BASE + OFFSETS.filler + i));

for (const [key, id] of expectedItemIds) {
  if (js.itemId(key) !== id) fail(`itemId("${key}") = ${js.itemId(key)}, expected ${id}`);
  if (js.itemKey(id) !== key) fail(`itemKey(${id}) = ${js.itemKey(id)}, expected "${key}"`);
}

const expectedLocIds = new Map();
js.ACHIEVEMENT_LOCATIONS.forEach((k, i) => expectedLocIds.set(k, js.AP_BASE + OFFSETS.achievements + i));
js.DAY_LOCATIONS.forEach((k, i) => expectedLocIds.set(k, js.AP_BASE + OFFSETS.days + i));
js.AFFECTION_CHARS.forEach((c, ci) =>
  js.AFFECTION_TIERS.forEach((t, ti) =>
    expectedLocIds.set(`aff_${c}_${t}`, js.AP_BASE + OFFSETS.affection + ci * 3 + ti)));
js.AFFECTION_CHARS.forEach((c, ci) =>
  js.NEGATIVE_AFFECTION_TIERS.forEach((t, ti) =>
    expectedLocIds.set(`neg_aff_${c}_${t}`, js.AP_BASE + OFFSETS.negativeAffection + ci * 3 + ti)));
(js.ITEM_FIND_KEYS ?? []).forEach((k, i) => expectedLocIds.set(`find_${k}`, js.AP_BASE + OFFSETS.itemFinds + i));
(js.SIDEQUEST_CHAINS ?? []).forEach((k, i) => expectedLocIds.set(k, js.AP_BASE + OFFSETS.sidequests + i));

for (const [key, id] of expectedLocIds) {
  const got = js.locationId(key);
  if (got !== id) fail(`locationId("${key}") = ${got}, expected ${id}`);
}

// The Python side must produce the exact same numeric set.
const pyLocIds = new Set();
pyList(locSrc, "ACHIEVEMENT_NAMES", "Locations.py").forEach((_, i) => pyLocIds.add(locBase + 0 + i));
pyList(locSrc, "DAY_NAMES", "Locations.py").forEach((_, i) => pyLocIds.add(locBase + 100 + i));
pyLocChars.forEach((_, ci) => [0, 1, 2].forEach((ti) => pyLocIds.add(locBase + 200 + ci * 3 + ti)));
pyLocChars.forEach((_, ci) => [0, 1, 2].forEach((ti) => pyLocIds.add(locBase + 300 + ci * 3 + ti)));
pyItemFinds.forEach((_, i) => pyLocIds.add(locBase + 400 + i));
pySidequests.forEach((_, i) => pyLocIds.add(locBase + 500 + i));

const jsLocIds = new Set(expectedLocIds.values());
const missingInJs = [...pyLocIds].filter((id) => !jsLocIds.has(id));
const missingInPy = [...jsLocIds].filter((id) => !pyLocIds.has(id));
if (missingInJs.length) fail(`location IDs in Python but not in ap_data.js: ${missingInJs.join(", ")}`);
if (missingInPy.length) fail(`location IDs in ap_data.js but not in Python: ${missingInPy.join(", ")}`);

// --- 6. version alignment ----------------------------------------------------
// Two independent version axes, previously conflated (the v0.9.0 hosting bug):
//   a) Archipelago protocol version — required_client_version in the apworld
//      and AP_PROTO_VERSION in the client. Must be a REAL AP release.
//   b) our mod version — slot_data["version"] in the apworld and MOD_VERSION
//      in the client. Must never be written into the AP version fields.
const MAX_AP_MINOR = 6; // newest AP line as of this release (0.6.x)

const clientSrc = readFileSync(join(REPO, "ap", "ap_client.js"), "utf8");
const reqM   = initSrc.match(/required_client_version\s*=\s*\((\d+),\s*(\d+),\s*(\d+)\)/);
const protoM = clientSrc.match(/AP_PROTO_VERSION\s*=\s*\{\s*major:\s*(\d+),\s*minor:\s*(\d+),\s*build:\s*(\d+)/);

if (reqM && protoM) {
  const reqParts = reqM.slice(1, 4).map(Number);
  const req   = reqParts.join(".");
  const proto = protoM.slice(1, 4).join(".");
  if (req !== proto) {
    fail(`AP version drift: __init__.py required_client_version = ${req}, ap_client.js AP_PROTO_VERSION = ${proto}`);
  }
  const [major, minor] = reqParts;
  if (major !== 0 || minor > MAX_AP_MINOR) {
    fail(
      `required_client_version = ${req} is not a real Archipelago release ` +
      `(expected 0.0.0 - 0.${MAX_AP_MINOR}.x). Do not put the mod version here — ` +
      `it breaks hosting on archipelago.gg. Mod version belongs in slot_data["version"].`
    );
  } else if (req === proto) {
    notes.push(`AP protocol version aligned at ${proto}`);
  }
} else {
  notes.push("could not read required_client_version / AP_PROTO_VERSION");
}

const slotVerM = initSrc.match(/"version"\s*:\s*"([^"]+)"/);
const modVerM  = clientSrc.match(/^const MOD_VERSION\s*=\s*"([^"]+)"/m);
if (slotVerM && modVerM) {
  if (slotVerM[1] !== modVerM[1]) {
    fail(`mod version drift: slot_data["version"] = ${slotVerM[1]}, ap_client.js MOD_VERSION = ${modVerM[1]}`);
  } else {
    notes.push(`mod version aligned at ${modVerM[1]}`);
  }
  if (reqM && slotVerM[1] === reqM.slice(1, 4).join(".")) {
    fail(`mod version ${slotVerM[1]} equals required_client_version — these must not be the same field`);
  }
} else {
  notes.push('could not read slot_data["version"] / MOD_VERSION');
}


// --- report ------------------------------------------------------------------
console.log("Layer8Problem — ID consistency check");
console.log(`  apworld source : ${pyDir}`);
console.log(`  client id map  : ${join(REPO, "ap", "ap_data.js")}`);
console.log(`  base offset    : 0x${js.AP_BASE.toString(16).toUpperCase()}`);
console.log(`  locations      : ${jsLocIds.size} known IDs`);
console.log(`  items          : ${expectedItemIds.size} known IDs`);
for (const n of notes) console.log(`  note: ${n}`);

if (errors.length) {
  console.error(`\nFAIL — ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("\nOK — client and apworld agree on every ID.");
