// ap_data.js — Layer8Problem AP client data
// v0.5.0

export const AP_VERSION = "0.5.0";
export const GAME_NAME  = "Layer8Problem";

// Must match Python AP_BASE
export const AP_BASE = 0xL8_BASE_REPLACE_ME; // keep in sync with source/layer8problem/ap_base.py

// Fixed character order — mirrors CHARACTERS in Items.py.
export const CHARACTERS = ["Kevin", "Chantal", "Egon", "Elster", "Markus", "Gabi"];

// -----------------------------------------------------------------------------
// Item IDs
// -----------------------------------------------------------------------------
//
//  +1000..+1099  Legendary items
//  +1100..+1199  Normal items
//  +1200..+1205  Progressive Affection (positive)   — v0.4.0
//  +1206         RESERVED / null (was Progressive Difficulty) — removed v0.4.0
//  +1207..+1212  Progressive Negative Affection     — NEW v0.5.0
//
export const ITEM_IDS = {
  // ... legendary + normal unchanged ...

  // Positive — v0.4.0
  "Progressive Affection (Kevin)":   AP_BASE + 1200,
  "Progressive Affection (Chantal)": AP_BASE + 1201,
  "Progressive Affection (Egon)":    AP_BASE + 1202,
  "Progressive Affection (Elster)":  AP_BASE + 1203,
  "Progressive Affection (Markus)":  AP_BASE + 1204,
  "Progressive Affection (Gabi)":    AP_BASE + 1205,

  // 1206 intentionally unused (was Progressive Difficulty)

  // Negative — NEW v0.5.0
  "Progressive Negative Affection (Kevin)":   AP_BASE + 1207,
  "Progressive Negative Affection (Chantal)": AP_BASE + 1208,
  "Progressive Negative Affection (Egon)":    AP_BASE + 1209,
  "Progressive Negative Affection (Elster)":  AP_BASE + 1210,
  "Progressive Negative Affection (Markus)":  AP_BASE + 1211,
  "Progressive Negative Affection (Gabi)":    AP_BASE + 1212,
};

// Reverse lookup
export const ID_TO_ITEM = Object.fromEntries(
  Object.entries(ITEM_IDS).map(([n, id]) => [id, n])
);

// Per-character helper maps used by ap_client.js
export const POSITIVE_AFFECTION_ITEM_BY_CHAR = Object.fromEntries(
  CHARACTERS.map((c) => [c, `Progressive Affection (${c})`])
);
export const NEGATIVE_AFFECTION_ITEM_BY_CHAR = Object.fromEntries(
  CHARACTERS.map((c) => [c, `Progressive Negative Affection (${c})`])
);

// -----------------------------------------------------------------------------
// Location IDs
// -----------------------------------------------------------------------------
//
//  +2200..+2217  Positive affection tier checks  (6 × 3)
//  +2300..+2317  Negative affection tier checks  (6 × 3)  — NEW v0.5.0
//
export const POSITIVE_TIERS = ["Friend", "Ally", "Bestie"];
export const NEGATIVE_TIERS = ["Enemy",  "Rival", "Nemesis"];

function buildTierLocationIds(tiers, base) {
  const out = {};
  CHARACTERS.forEach((char, ci) => {
    tiers.forEach((tier, ti) => {
      out[`${tier} of ${char}`] = base + ci * 3 + ti;
    });
  });
  return out;
}

export const LOCATION_IDS = {
  // ... legendary + normal unchanged ...
  ...buildTierLocationIds(POSITIVE_TIERS, AP_BASE + 2200),
  ...buildTierLocationIds(NEGATIVE_TIERS, AP_BASE + 2300), // NEW v0.5.0
};

export const ID_TO_LOCATION = Object.fromEntries(
  Object.entries(LOCATION_IDS).map(([n, id]) => [id, n])
);

// -----------------------------------------------------------------------------
// DeathLink causes — must match Python option keys in Options.py
// -----------------------------------------------------------------------------
export const DEATH_CAUSES = {
  FIRED:    "fired",
  QUIT:     "quit",
  BURNOUT:  "burnout",
  DAY_FAIL: "day_fail",
};

// Map slot_data.death_link_filter -> Set<cause> that should be SENT.
export const DEATH_FILTER_TO_SENT = {
  all:        new Set(Object.values(DEATH_CAUSES)),
  only_fired: new Set([DEATH_CAUSES.FIRED]),
  off:        new Set(),
};
