// Layer8Problem AP — Stable ID Map
// IDs are language-independent and MUST stay stable; new entries append.
// Base offset 0xL8P0 = 0x4C385000 keeps us clear of other AP worlds.

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

// Affection thresholds (offset 200+) — 6 chars × 3 tiers (low/mid/max)
export const AFFECTION_CHARS = [
  "kevin", "chantal", "egon", "elster", "markus", "gabi",
];
export const AFFECTION_TIERS = ["friend", "ally", "bestie"];

// --- ITEMS -------------------------------------------------------------------
// 21 normal items (offset 1000..1020)
export const NORMAL_ITEMS = [
  "wifi_note", "donut", "energy", "secret_list",
  "arg_list_1", "arg_list_2", "bubble_wrap", "sandwich", "chocolate",
  "admin_pw", "cable", "tape", "screw", "stressball", "manual",
  "usb_stick", "fire_ext", "hammer", "zip_ties", "headphones", "black_card",
];

// 9 legendary items (offset 1100..1108) — these are the quest:true items
export const LEGENDARY_ITEMS = [
  "kevin_ram", "golden_stapler", "mixtape", "cat_pic", "master_key",
  "scotch_bottle", "contract", "corp_chronicles", "prince_letter",
];

// Filler / progressive (offset 1200+)
export const PROGRESSIVE_ITEMS = [
  "progressive_difficulty",     // Easy → Normal → Hard unlocks
  "progressive_affection",      // boosts max affection ceiling
];

// --- DEATHLINK CAUSES --------------------------------------------------------
export const DEATHLINK_CAUSES = {
  termination: "got fired by Dr. Wichtig",
  warning:     "received a final warning",
  steam:       "needed to let off some steam",
  rage_quit:   "rage-quit the day",
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
  if (i >= 0) return AP_BASE + 1000 + i;
  i = LEGENDARY_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1100 + i;
  i = PROGRESSIVE_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1200 + i;
  return null;
}

export function itemKey(id) {
  const off = id - AP_BASE;
  if (off >= 1000 && off < 1021) return NORMAL_ITEMS[off - 1000];
  if (off >= 1100 && off < 1109) return LEGENDARY_ITEMS[off - 1100];
  if (off >= 1200) return PROGRESSIVE_ITEMS[off - 1200];
  return null;
}

export const GAME_NAME = "Layer8Problem";
