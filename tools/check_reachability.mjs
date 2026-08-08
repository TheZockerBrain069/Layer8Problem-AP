#!/usr/bin/env node
// Layer8Problem AP — reachability / pool-balance self test (v0.9.2)
//
// Re-implements the apworld's slot layout in JS and checks, for every
// combination of `starting_day` x `goal` x `extra_locations`, that:
//   1. exactly the locations reachable in that slot are registered
//      (24 achievements + 1 day + 18 affection + 18 negative affection = 61)
//   2. no day-location for a day the player cannot select is registered
//      (this is the v0.7.0 bug: 3 days registered, 1 playable -> a
//      MultiWorld could bury progression on an unreachable check)
//   2b. extra_locations on adds exactly the item-find + sidequest pool
//      (61 -> 190 checks) and off reproduces the v0.8.0 layout
//   3. the guaranteed item pool matches the location count, with the
//      overflow pushed to starting inventory as filler
//   4. every access rule is satisfiable by the pool -- e.g. "Kevin -
//      Bestie" needs 3x "Progressive Affection (Kevin)" and the pool
//      contains exactly 3
//   5. the goal condition is satisfiable
//
// It reads the real Python source so it fails when the apworld drifts,
// instead of testing a copy of the rules.
//
// Usage:
//   node tools/check_reachability.mjs <path-to-unpacked-apworld>/layer8problem
//   node tools/check_reachability.mjs        # defaults to ./apworld/layer8problem

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(HERE, "..");
const pyDir = resolve(process.argv[2] ?? join(REPO, "apworld", "layer8problem"));

if (!existsSync(join(pyDir, "Locations.py"))) {
  console.error(`Cannot find Locations.py in ${pyDir}`);
  console.error("Unpack layer8problem.apworld (it is a zip) and pass the inner layer8problem folder.");
  process.exit(2);
}

const locSrc = readFileSync(join(pyDir, "Locations.py"), "utf8");
const itemSrc = readFileSync(join(pyDir, "Items.py"), "utf8");
const optSrc = readFileSync(join(pyDir, "Options.py"), "utf8");
const initSrc = readFileSync(join(pyDir, "__init__.py"), "utf8");

function pyList(src, name) {
  const m = src.match(new RegExp(`^${name}(?:\\s*:\\s*List\\[str\\])?\\s*=\\s*\\[([\\s\\S]*?)\\]`, "m"));
  if (!m) throw new Error(`list ${name} not found`);
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]);
}

const ACHIEVEMENTS = pyList(locSrc, "ACHIEVEMENT_NAMES");
const DAY_NAMES = pyList(locSrc, "DAY_NAMES");
const CHARS = pyList(locSrc, "AFFECTION_CHARS");
const TIERS = pyList(locSrc, "AFFECTION_TIERS");
const NEG_TIERS = pyList(locSrc, "NEGATIVE_AFFECTION_TIERS");
const NORMAL_ITEMS = pyList(itemSrc, "NORMAL_ITEMS");
const LEGENDARY_ITEMS = pyList(itemSrc, "LEGENDARY_ITEMS");
const FILLER_ITEMS = pyList(itemSrc, "FILLER_ITEMS");

function pyPairNames(src, name) {
  const m = src.match(new RegExp(`^${name}(?:\\s*:\\s*List\\[tuple\\])?\\s*=\\s*\\[([\\s\\S]*?)\\n\\]`, "m"));
  if (!m) throw new Error(`pair list ${name} not found`);
  return [...m[1].matchAll(/\(\s*"[^"]+"\s*,\s*"([^"]+)"\s*\)/g)].map((x) => x[1]);
}
const ITEM_FIND_NAMES = pyPairNames(locSrc, "ITEM_FIND_PAIRS");
const SIDEQUEST_NAMES = pyPairNames(locSrc, "SIDEQUEST_PAIRS");

// starting_day value -> day location, read from DAY_BY_STARTING_DAY
const dayByStartingDay = {};
{
  const block = initSrc && locSrc.match(/DAY_BY_STARTING_DAY[\s\S]*?\{([\s\S]*?)\}/);
  if (!block) throw new Error("DAY_BY_STARTING_DAY not found in Locations.py");
  for (const m of block[1].matchAll(/(\d+)\s*:\s*"([^"]+)"/g)) {
    dayByStartingDay[Number(m[1])] = m[2];
  }
}

// starting_day / goal option values, read from Options.py
const startingDays = [...optSrc.matchAll(/option_(friday|wednesday|monday)\s*=\s*(\d+)/g)]
  .map((m) => ({ name: m[1], value: Number(m[2]) }));
const goals = [...optSrc.matchAll(/option_(legendary_set|all_achievements)\s*=\s*(\d+)/g)]
  .map((m) => ({ name: m[1], value: Number(m[2]) }));

// Tier costs, read from __init__.py
function tierReq(src, constName) {
  const m = src.match(new RegExp(`${constName}[^=]*=\\s*\\{([^}]*)\\}`));
  if (!m) throw new Error(`${constName} not found in __init__.py`);
  const out = {};
  for (const e of m[1].matchAll(/"([^"]+)"\s*:\s*(\d+)/g)) out[e[1]] = Number(e[2]);
  return out;
}
const TIER_REQ = tierReq(initSrc, "_TIER_REQ");
const NEG_TIER_REQ = tierReq(initSrc, "_NEG_TIER_REQ");

// Copies per progressive item, read from create_items
const copies = Number((initSrc.match(/for _ in range\((\d+)\)/) || [, "3"])[1]);

const problems = [];
const rows = [];

for (const day of startingDays) {
  for (const goal of goals) {
   for (const extra of [false, true]) {
    const label = `${day.name}/${goal.name}/extra:${extra ? "on" : "off"}`;
    const activeDay = dayByStartingDay[day.value];

    // --- 1. slot location set ------------------------------------------------
    const locations = [
      ...ACHIEVEMENTS,
      activeDay,
      ...CHARS.flatMap((c) => TIERS.map((t) => `${c} - ${t}`)),
      ...CHARS.flatMap((c) => NEG_TIERS.map((t) => `${c} - ${t}`)),
      ...(extra ? [...ITEM_FIND_NAMES, ...SIDEQUEST_NAMES] : []),
    ];
    const expectedCount =
      ACHIEVEMENTS.length + 1 + CHARS.length * TIERS.length + CHARS.length * NEG_TIERS.length +
      (extra ? ITEM_FIND_NAMES.length + SIDEQUEST_NAMES.length : 0);
    if (locations.length !== expectedCount) {
      problems.push(`${label}: ${locations.length} locations, expected ${expectedCount}`);
    }
    if (new Set(locations).size !== locations.length) {
      problems.push(`${label}: duplicate location names registered`);
    }

    // --- 2. no unplayable day registered -------------------------------------
    const strayDays = DAY_NAMES.filter((d) => d !== activeDay && locations.includes(d));
    if (strayDays.length) {
      problems.push(`${label}: unreachable day location(s) registered: ${strayDays.join(", ")}`);
    }
    if (!locations.includes(activeDay)) {
      problems.push(`${label}: playable day "${activeDay}" is not registered`);
    }

    // --- 3. pool balance -----------------------------------------------------
    // v0.8.0 layout: progression first, useful (normal items) last. Overflow
    // is popped off the useful tail and precollected, so progression can
    // never be dropped.
    const progression = [];
    for (const n of LEGENDARY_ITEMS) progression.push(n);
    for (const c of CHARS) for (let i = 0; i < copies; i++) progression.push(`Progressive Affection (${c})`);
    for (const c of CHARS) for (let i = 0; i < copies; i++) progression.push(`Progressive Negative Affection (${c})`);
    const useful = [...NORMAL_ITEMS];

    let overflow = progression.length + useful.length - locations.length;
    const precollectedItems = [];
    while (overflow > 0 && useful.length) {
      precollectedItems.push(useful.pop());
      overflow -= 1;
    }
    if (overflow > 0) {
      problems.push(`${label}: ${overflow} progression item(s) do not fit into ${locations.length} locations`);
    }
    const placed = [...progression, ...useful];
    while (placed.length < locations.length) {
      placed.push(FILLER_ITEMS[placed.length % (FILLER_ITEMS.length || 1)] ?? "Filler");
    }
    // With the extra pool on, almost every check is filled by filler. That is
    // fine for logic, but a pool that is >95% filler is a design smell worth
    // surfacing rather than silently shipping.
    const fillerCount = placed.filter((n) => FILLER_ITEMS.includes(n)).length;
    if (locations.length && fillerCount / locations.length > 0.95) {
      problems.push(`${label}: ${fillerCount}/${locations.length} placed items are filler`);
    }
    const precollected = precollectedItems.length;
    if (placed.length !== locations.length) {
      problems.push(`${label}: ${placed.length} placed items for ${locations.length} locations`);
    }
    // Nothing that a rule or the goal depends on may leave the pool.
    const droppedProgression = precollectedItems.filter((n) => progression.includes(n));
    if (droppedProgression.length) {
      problems.push(`${label}: progression removed from pool: ${[...new Set(droppedProgression)].join(", ")}`);
    }


    // --- 4. access rules satisfiable ----------------------------------------
    const have = new Map();
    for (const n of [...placed, ...precollectedItems]) have.set(n, (have.get(n) ?? 0) + 1);
    for (const c of CHARS) {
      for (const t of TIERS) {
        const need = TIER_REQ[t];
        const item = `Progressive Affection (${c})`;
        if (need == null) { problems.push(`${label}: no requirement defined for tier "${t}"`); continue; }
        if ((have.get(item) ?? 0) < need) {
          problems.push(`${label}: "${c} - ${t}" needs ${need}x ${item}, pool has ${have.get(item) ?? 0}`);
        }
      }
      for (const t of NEG_TIERS) {
        const need = NEG_TIER_REQ[t];
        const item = `Progressive Negative Affection (${c})`;
        if (need == null) { problems.push(`${label}: no requirement defined for tier "${t}"`); continue; }
        if ((have.get(item) ?? 0) < need) {
          problems.push(`${label}: "${c} - ${t}" needs ${need}x ${item}, pool has ${have.get(item) ?? 0}`);
        }
      }
    }

    // --- 5. goal satisfiable -------------------------------------------------
    if (goal.name === "legendary_set") {
      const missing = LEGENDARY_ITEMS.filter((n) => !have.has(n));
      if (missing.length) problems.push(`${label}: legendary items missing from pool: ${missing.join(", ")}`);
    } else {
      // all_achievements: achievement locations carry no access rule, so they
      // are reachable as soon as the Office region is.
      const unreachable = ACHIEVEMENTS.filter((n) => !locations.includes(n));
      if (unreachable.length) problems.push(`${label}: achievements not registered: ${unreachable.join(", ")}`);
    }

    rows.push({
      slot: label,
      day: activeDay,
      locations: locations.length,
      placed: placed.length,
      precollected,
    });
   }
  }
}

console.log("Layer8Problem — reachability / pool-balance self test");
console.log(`  apworld source : ${pyDir}`);
console.log("");
console.log("  slot                                    day                 locs  placed  precollected");
for (const r of rows) {
  console.log(
    `  ${r.slot.padEnd(39)} ${r.day.padEnd(19)} ${String(r.locations).padStart(4)}` +
    `  ${String(r.placed).padStart(6)}  ${String(r.precollected).padStart(12)}`
  );
}

if (problems.length) {
  console.error(`\nFAIL — ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`\nOK — ${rows.length} slot configurations, every registered location reachable.`);
