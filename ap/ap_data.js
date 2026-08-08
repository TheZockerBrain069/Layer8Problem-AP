// Layer8Problem AP — Stable ID Map (v0.9.2)
// Base offset 0x4C385000. IDs must match Locations.py / Items.py inside the
// layer8problem.apworld published with each release (it is a plain zip).
// Verify with: node tools/check_ids.mjs <unpacked-apworld>/layer8problem

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

// Days survived (offset 100..102) — the three playable difficulty days.
// day_1 = Monday (hard), day_2 = Wednesday (normal), day_3 = Friday (easy).
// Offsets 103/104 are reserved (legacy day_4/day_5 from 0.3.x drafts) and must not be reused.
export const DAY_LOCATIONS = ["day_1", "day_2", "day_3"];

// Positive affection thresholds (offset 200+) — 6 chars × 3 tiers
export const AFFECTION_CHARS = [
  "kevin", "chantal", "egon", "elster", "markus", "gabi",
];
export const AFFECTION_TIERS = ["friend", "ally", "bestie"];

// Negative affection thresholds (offset 300+) — 6 chars × 3 tiers
export const NEGATIVE_AFFECTION_TIERS = ["enemy", "rival", "nemesis"];


// --- v0.9.0 EXTRA LOCATIONS --------------------------------------------------
// Item-find checks (offset 400+). Key = DB.items key; fired once per item the
// first time the engine archives it (engine.addToArchive('items', id)).
export const ITEM_FIND_KEYS = [
  "wifi_note", "donut", "energy", "secret_list", "arg_list_1", "arg_list_2", "bubble_wrap",
  "sandwich", "chocolate", "admin_pw", "cable", "tape", "screw", "stressball", "manual",
  "usb_stick", "fire_ext", "hammer", "zip_ties", "headphones", "black_card", "kevin_ram",
  "golden_stapler", "mixtape", "cat_pic", "master_key", "scotch_bottle", "contract",
  "corp_chronicles", "prince_letter",
];

// Sidequest-chain checks (offset 500+). Key = chain id prefix of the sidequest
// entries in data_sidequests.js; fired when any node of that chain resolves.
export const SIDEQUEST_CHAINS = [
  "sq_toilet", "sq_cake", "sq_fire", "sq_usb", "sq_printer", "sq_investigation",
  "sq_loose_cable", "sq_package_open", "sq_shelf", "sq_noise", "sq_loot_crate", "sq_chair",
  "sq_janitor_talk", "sq_archive_find", "sq_sad_manager", "sq_toner_trap", "sq_fresh_air",
  "sq_fresh_air_wasp", "sq_fresh_air_bio", "sq_package_help", "sq_package_return",
  "sq_alarm_fail", "sq_elster_blockade", "sq_secret_meeting", "sq_manual_read",
  "sq_lost_stick", "sq_cable_hunt", "sq_fire_drill", "sq_perfect_script", "sq_security_audit",
  "sq_gabi_pc", "sq_boss_chair", "sq_dog_found", "sq_parking", "sq_boss_snoop",
  "sq_service_cloud", "sq_smile_gate", "sq_desk_rise", "sq_shredder", "sq_meta_donation",
  "sq_elster_cat", "sq_shredder_puzzle", "sq_fragile_drive", "sq_investor_wifi",
  "sq_sleeping_guard", "sq_boss_fight_hallway", "sq_printer_jam", "sq_crying_intern",
  "sq_wrong_delivery", "sq_drafty_door", "sq_elearning", "sq_workout", "sq_dance",
  "sq_awkward", "sq_fire_ext", "sq_telegram", "sq_spam", "sq_tinder", "sq_phone_parking_taped",
  "sq_phone_parking_blocked", "sq_headhunter", "sq_darknet", "sq_moral_bernd", "sq_mom_help",
  "sq_wrong_number", "sq_ebay", "sq_pager", "sq_food_bowl_delivery", "sq_real_prince",
  "sq_crypto_kai", "sq_wrong_group", "sq_mom_printer", "sq_delivery_fail", "sq_ai_sad",
  "sq_salary_leak", "sq_chantal_help", "sq_kevin_origin", "sq_prince_return", "sq_team_gossip",
  "sq_betting_pool", "sq_gabi_sick", "sq_teams_ceo_panic", "sq_phone_kevin_crypto",
  "sq_phone_scam", "sq_phone_ceo_smarthome", "sq_phone_egon_cable", "sq_phone_doctor_back",
  "sq_phone_dentist", "sq_phone_mom_printer", "sq_phone_landlord", "sq_phone_scam_customs",
  "sq_phone_ex_gf", "sq_phone_recruiter", "sq_phone_gym", "sq_phone_chantal_home",
  "sq_phone_amazon", "sq_phone_bank_fraud", "sq_phone_ebay", "sq_phone_property",
];

// Longest-prefix match: sidequest ids are chain id + "_1"/"_2a"/...
export function sidequestChainOf(sqId) {
  if (!sqId) return null;
  let best = null;
  for (const c of SIDEQUEST_CHAINS) {
    if (sqId === c || sqId.startsWith(c + "_")) {
      if (!best || c.length > best.length) best = c;
    }
  }
  return best;
}

// --- ITEMS -------------------------------------------------------------------
// 18 normal items (offset 1000..1017) — order matches Items.py exactly.
export const NORMAL_ITEMS = [
  "wifi_note", "energy", "secret_list",
  "arg_list_1", "arg_list_2", "sandwich", "chocolate",
  "admin_pw", "cable", "tape", "screw", "manual",
  "usb_stick", "fire_ext", "hammer", "zip_ties", "headphones", "black_card",
];

// 9 legendary items (offset 1100..1108) — these are the quest:true items
export const LEGENDARY_ITEMS = [
  "kevin_ram", "golden_stapler", "mixtape", "cat_pic", "master_key",
  "scotch_bottle", "contract", "corp_chronicles", "prince_letter",
];

// Per-character Progressive Affection (offset 1200..1205)
export const PROGRESSIVE_AFFECTION_ITEMS = [
  "progressive_affection_kevin",
  "progressive_affection_chantal",
  "progressive_affection_egon",
  "progressive_affection_elster",
  "progressive_affection_markus",
  "progressive_affection_gabi",
];

// Offset 1206 is reserved (was Progressive Difficulty in 0.4.0-draft).

// Per-character Progressive Negative Affection (offset 1207..1212)
export const PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS = [
  "progressive_negative_affection_kevin",
  "progressive_negative_affection_chantal",
  "progressive_negative_affection_egon",
  "progressive_negative_affection_elster",
  "progressive_negative_affection_markus",
  "progressive_negative_affection_gabi",
];

// Filler-only items (offset 1300+) — kept so flavour items still appear in pool
export const FILLER_ITEMS = [
  "donut", "bubble_wrap", "stressball",
];

// --- DEATHLINK CAUSES --------------------------------------------------------
// The YAML now has a single master `deathlink: true/false`. When on, all four
// causes below fire; no per-cause toggles, no filter.
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
  let i = ITEM_FIND_KEYS.indexOf(key.startsWith("find_") ? key.slice(5) : "\u0000");
  if (i >= 0) return AP_BASE + 400 + i;
  i = SIDEQUEST_CHAINS.indexOf(key);
  if (i >= 0) return AP_BASE + 500 + i;
  i = ACHIEVEMENT_LOCATIONS.indexOf(key);
  if (i >= 0) return AP_BASE + i;
  i = DAY_LOCATIONS.indexOf(key);
  if (i >= 0) return AP_BASE + 100 + i;
  // positive affection key format: "aff_<char>_<tier>"
  if (key.startsWith("aff_")) {
    const [, c, t] = key.split("_");
    const ci = AFFECTION_CHARS.indexOf(c);
    const ti = AFFECTION_TIERS.indexOf(t);
    if (ci >= 0 && ti >= 0) return AP_BASE + 200 + ci * 3 + ti;
  }
  // negative affection key format: "neg_aff_<char>_<tier>"
  if (key.startsWith("neg_aff_")) {
    const [, , c, t] = key.split("_");
    const ci = AFFECTION_CHARS.indexOf(c);
    const ti = NEGATIVE_AFFECTION_TIERS.indexOf(t);
    if (ci >= 0 && ti >= 0) return AP_BASE + 300 + ci * 3 + ti;
  }
  return null;
}

export function itemId(key) {
  let i = NORMAL_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1000 + i;
  i = LEGENDARY_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1100 + i;
  i = PROGRESSIVE_AFFECTION_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1200 + i;
  i = PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1207 + i;
  i = FILLER_ITEMS.indexOf(key);
  if (i >= 0) return AP_BASE + 1300 + i;
  return null;
}

export function itemKey(id) {
  const off = id - AP_BASE;
  if (off >= 1000 && off < 1018) return NORMAL_ITEMS[off - 1000];
  if (off >= 1100 && off < 1109) return LEGENDARY_ITEMS[off - 1100];
  if (off >= 1200 && off < 1206) return PROGRESSIVE_AFFECTION_ITEMS[off - 1200];
  if (off === 1206) return null; // reserved gap (legacy progressive_difficulty)
  if (off >= 1207 && off < 1213) return PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS[off - 1207];
  if (off >= 1300 && off < 1400) return FILLER_ITEMS[off - 1300];
  return null;
}

// Convenience: get the progressive-affection item key for a character key.
export function progressiveAffectionKey(charKey) {
  const i = AFFECTION_CHARS.indexOf(charKey);
  return i >= 0 ? PROGRESSIVE_AFFECTION_ITEMS[i] : null;
}

export function progressiveNegativeAffectionKey(charKey) {
  const i = AFFECTION_CHARS.indexOf(charKey);
  return i >= 0 ? PROGRESSIVE_NEGATIVE_AFFECTION_ITEMS[i] : null;
}

// How many Progressive Affection items a tier requires.
export const AFFECTION_TIER_COST = { friend: 1, ally: 2, bestie: 3 };
export const NEGATIVE_AFFECTION_TIER_COST = { enemy: 1, rival: 2, nemesis: 3 };

export const GAME_NAME = "Layer8Problem";
