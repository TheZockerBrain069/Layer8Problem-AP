// Layer8Problem AP — Stable ID Map (v0.4.0)
// IDs are language-independent and MUST stay stable; new entries append.
// Base offset 0xL8P0 = 0x4C385000 keeps us clear of other AP worlds.
//
// v0.4.0 final changes:
//  - Generic "progressive_affection" REMOVED.
//  - 6 per-character Progressive Affection items at +1200..+1205.
//  - Progressive Difficulty REMOVED — the in-game day = difficulty and the
//    starting day is now fixed per slot via slot_data.starting_day. The
//    +1206 slot is reserved (null) for back-compat / future use.
//  - Filler-only items at +1300..+1302 (donut/bubble_wrap/stressball).
//  - Old 0.3.x and 0.4.0-draft seeds are NOT compatible with 0.4.0 final.

export const AP_BASE = 0x4C385000;

// --- LOCATIONS ---------------------------------------------------------------
// 24 Achievements (offset 0..23)
export const ACHIEVEMENT_LOCATIONS = [
  "ach_ascetic", "ach_coffee", "ach_ignore", "ach_hoarder",
  "ach_lazy", "ach_rage",
  "ach_macgyver", "ach_rich", "ach_hacker",
  "ach_ninja", "ach_zen", "ach_workaholic", "ach_risk", "ach_clean", "ach_survivor",
  "ach_mentor", "ach_ally", "ach_rockstar", "ach_keymaster", "ach_closer",
  "ach_cat_whisperer", "ach_lore", "ach_wolf",
  "ach_party",
];

// Days survived (offset 100..104) — Mon/Tue/Wed/Thu/Fri
export const DAY_LOCATIONS = ["day_1", "day_2", "day_3", "day_4", "day_5"];

// Affection thresholds (offset 200+) — 6 chars × 3 tiers (friend/ally/bestie)
export const AFFECTION_CHARS = [
  "kevin", "chantal", "egon", "elster", "markus", "gabi",
];
export const AFFECTION_TIERS = ["friend", "ally", "bestie"];

// --- ITEMS -------------------------------------------------------------------
// 18 normal items (offset 1000..1020 — donut/bubble_wrap/stressball moved to filler)
// NOTE: indices are kept stable; removed slots become null gaps so itemKey()
// still resolves legacy IDs to null (rather than to the wrong item).
export const NORMAL_ITEMS = [
  "wifi_note", null /* donut */, "energy", "secret_list",
  "arg_list_1", "arg_list_2", null /* bubble_wrap */, "sandwich", "chocolate",
  "admin_pw", "cable", "tape", "screw", null /* stressball */, "manual",
  "usb_stick", "fire_ext", "hammer", "zip_ties", "headphones", "black_card",
];

// 9 legendary items (offset 1100..1108) — these are the quest:true items
export const LEGENDARY_ITEMS = [
  "kevin_ram", "golden_stapler", "mixtape", "cat_pic", "master_key",
  "scotch_bottle", "contract", "corp_chronicles", "prince_letter",
];

// Per-character Progressive Affection (offset 1200..1205) — order MUST match
// AFFECTION_CHARS. Each item bumps the player's allowed tier for that char
// (1 = friend, 2 = ally, 3 = bestie).
export const PROGRESSIVE_AFFECTION_ITEMS = [
  "progressive_affection_kevin",
  "progressive_affection_chantal",
  "progressive_affection_egon",
  "progressive_affection_elster",
  "progressive_affection_markus",
  "progressive_affection_gabi",
];

// Offset 1206 is reserved (was Progressive Difficulty in 0.4.0-draft).
// Kept as a null gap so legacy IDs resolve to null instead of the wrong item.

// Filler-only items (offset 1300+) — kept so flavour items still appear in pool
export const FILLER_ITEMS = [
  "donut", "bubble_wrap", "stressball",
];

// --- DEATHLINK CAUSES --------------------------------------------------------
export const DEATHLINK_CAUSES = {
  termination:    "got fired by Dr. Wichtig",
  warning:        "received a final warning",
  let_off_steam:  "needed to let off some steam",
  rage_quit:      "rage-quit the day",
};

// --- STARTING DAY -----------------------------------------------------------
// slot_data.starting_day is an int. Maps to the engine difficulty key.
export const STARTING_DAY_BY_INDEX = ["friday", "wednesday", "monday"];
export const DAY_TO_DIFFICULTY = {
  friday:    "easy",
  wednesday: "normal",
  monday:    "hard",
};

// --- ID RESOLVER -------------------------------------------------------------
export function locationId(key) {
  let i = ACHIEVEMENT_LOCATIONS.indexOf(key);
  if (i >= 0) return AP_BASE + i;
  i = DAY_LOCATIONS.indexOf(key);
  if (i >= 0) return AP_BASE + 100 + i;
  // affection key format: "aff_<char>_<tier>"
  if (key.startsWith("aff_")) {
    const [, c, t] = key.split("_");
    const ci = AFFECTION_CHARS.indexOf(c);
    const ti = AFFECTION_TIERS.indexOf(t);
    if (ci >= 0 && ti >= 0) return AP_BASE + 200 + ci * 3 + ti;
  }
  return null;
}

export function itemId(key) {
  let i = NORMAL_ITEMS.indexOf(key);
  if (i >= 0 && key) return AP_BASE + 1000 + i;
  i = LEGENDARY_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1100 + i;
  i = PROGRESSIVE_AFFECTION_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1200 + i;
  i = FILLER_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1300 + i;
  return null;
}

export function itemKey(id) {
  const off = id - AP_BASE;
  if (off >= 1000 && off < 1021) return NORMAL_ITEMS[off - 1000] || null;
  if (off >= 1100 && off < 1109) return LEGENDARY_ITEMS[off - 1100];
  if (off >= 1200 && off < 1206) return PROGRESSIVE_AFFECTION_ITEMS[off - 1200];
  if (off === 1206) return null; // reserved gap (legacy progressive_difficulty)
  if (off >= 1300 && off < 1400) return FILLER_ITEMS[off - 1300];
  return null;
}

// Convenience: get the progressive-affection item key for a character key.
export function progressiveAffectionKey(charKey) {
  const i = AFFECTION_CHARS.indexOf(charKey);
  return i >= 0 ? PROGRESSIVE_AFFECTION_ITEMS[i] : null;
}

// How many Progressive Affection items a tier requires.
export const AFFECTION_TIER_COST = { friend: 1, ally: 2, bestie: 3 };

export const GAME_NAME = "Layer8Problem";
