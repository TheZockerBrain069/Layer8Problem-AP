#!/usr/bin/env node
// Layer8Problem AP — ID consistency checker (v0.8.0)
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
const pairs = [
  ["achievements",   js.ACHIEVEMENT_LOCATIONS, pyList(locSrc, "ACHIEVEMENT_NAMES", "Locations.py"), OFFSETS.achievements],
  ["days",           js.DAY_LOCATIONS,         pyList(locSrc, "DAY_NAMES", "Locations.py"),         OFFSETS.days],
  ["affectionChars", js.AFFECTION_CHARS,       pyList(locSrc, "AFFECTION_CHARS", "Locations.py"),   null],
  ["affectionTiers", js.AFFECTION_TIERS,       pyList(locSrc, "AFFECTION_TIERS", "Locations.py"),   null],
  ["negTiers",       js.NEGATIVE_AFFECTION_TIERS, pyList(locSrc, "NEGATIVE_AFFECTION_TIERS", "Locations.py"), null],
  ["normalItems",    js.NORMAL_ITEMS,          pyList(itemSrc, "NORMAL_ITEMS", "Items.py"),         OFFSETS.normalItems],
  ["legendaryItems", js.LEGENDARY_ITEMS,       pyList(itemSrc, "LEGENDARY_ITEMS", "Items.py"),      OFFSETS.legendaryItems],
  ["itemChars",      js.AFFECTION_CHARS,       pyList(itemSrc, "AFFECTION_CHARS", "Items.py"),      null],
];

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

const jsLocIds = new Set(expectedLocIds.values());
const missingInJs = [...pyLocIds].filter((id) => !jsLocIds.has(id));
const missingInPy = [...jsLocIds].filter((id) => !pyLocIds.has(id));
if (missingInJs.length) fail(`location IDs in Python but not in ap_data.js: ${missingInJs.join(", ")}`);
if (missingInPy.length) fail(`location IDs in ap_data.js but not in Python: ${missingInPy.join(", ")}`);

// --- 6. version alignment ----------------------------------------------------
const reqM = initSrc.match(/required_client_version\s*=\s*\((\d+),\s*(\d+),\s*(\d+)\)/);
const clientSrc = readFileSync(join(REPO, "ap", "ap_client.js"), "utf8");
const protoM = clientSrc.match(/PROTO_VERSION\s*=\s*\{\s*major:\s*(\d+),\s*minor:\s*(\d+),\s*build:\s*(\d+)/);
if (reqM && protoM) {
  const req = reqM.slice(1, 4).join(".");
  const proto = protoM.slice(1, 4).join(".");
  if (req !== proto) {
    fail(`version drift: __init__.py required_client_version = ${req}, ap_client.js PROTO_VERSION = ${proto}`);
  } else {
    notes.push(`version aligned at ${proto}`);
  }
} else {
  notes.push("could not read required_client_version / PROTO_VERSION");
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
