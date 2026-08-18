# Layer8Problem — Changelog (apworld)

## v0.9.3 — Hotfix: item-find and phone/SMS sidequest checks

**Fixed**
- Phone sidequests ("SMS style" events) never sent a check. `handleSideQuest`
  routes every `kind: "phone"` event into the smartphone UI, which never calls
  `renderTerminal`/`resolveTerminal` — the only place the client listened. 45 of
  the 99 sidequest chains are phone-only, so nearly half of the sidequest pool
  was unsendable regardless of the option chosen. The client now hooks
  `openPhone` and `handlePhoneChoice`.
- Item-find checks were lost whenever the engine skipped `addToArchive`: a full
  backpack (10/10) drops the loot and an already-owned permanent item expires
  silently, yet the player did find it. The client now fires on the loot value
  of `resolveTerminal` / the phone result node, wraps `inventory.push`, and runs
  a periodic scan over inventory + archive as a safety net.
- Mod-version drift now only warns when major.minor differ, so a v0.9.2 seed
  played with the v0.9.3 client no longer shows a warning (IDs are identical).

**Compatibility**
- Client-only release. Location and item IDs, logic, options and the apworld are
  unchanged — existing v0.9.2 seeds keep working, no regeneration needed.

## v0.9.2 — Hotfix: archipelago.gg location-name encoding

**Fixed**
- Removed the emoji from the AP location names `CRITICAL ALERT` and
  `Group: 'The IT Victims'`. The archipelago.gg spoiler-log database uses a
  legacy 3-byte UTF-8 column; emoji require 4-byte UTF-8 and caused room
  creation to fail with HTTP 500. Local generation was unaffected.

**Added**
- `check_ids.mjs` now rejects non-BMP characters in AP location names, so this
  hosting-only failure is caught before release.

**Compatibility**
- Numeric IDs, location order, items, logic and options are unchanged from
  v0.9.1. Generate a new seed with v0.9.2 before uploading to archipelago.gg.

## v0.9.1 — Hotfix: hosting on archipelago.gg

**Fixed**
- `required_client_version` was set to `(0, 9, 0)` — our *mod* version. That
  field is the minimum **Archipelago** version a client must run; it is written
  into the multidata as `minimum_versions["clients"]` and validated by both
  MultiServer and the WebHost. Archipelago 0.9.0 does not exist (current line
  is 0.6.x), so uploading a v0.9.0 seed to archipelago.gg answered
  *Internal Server Error*. It is now `(0, 5, 0)`, a real release.
- The mod version now lives only in `slot_data["version"]` (`0.9.1`). The
  client keeps `AP_PROTO_VERSION` (0.5.0) and `MOD_VERSION` (0.9.1) as separate
  constants and shows a non-fatal panel warning when the seed's mod version
  differs from its own.

**Added**
- `check_ids.mjs` now guards both version axes: it rejects a
  `required_client_version` outside the real AP range, and fails if the mod
  version and the AP version are ever the same value.
- README gained a Hosting section (archipelago.gg vs local server) including
  this error.

**Compatibility**
- IDs, locations, items and options are byte-for-byte unchanged from v0.9.0 —
  this is a metadata-only fix. Seeds already generated with v0.9.0 must be
  regenerated to be hostable, but nothing else about them changes.

## v0.9.0 — Expansion: item-find and sidequest location pools

**Added (generator)**
- Two new location pools, off-limits until now because the client had no
  hook for them:
  - **30 item-find checks** (`AP_BASE + 400 .. 429`) — fire the first time
    an item enters your archive, i.e. the first time you actually obtain it.
  - **99 sidequest-chain checks** (`AP_BASE + 500 .. 598`) — fire the first
    time you resolve any node of a sidequest chain. One check per chain,
    not per node, so a long chain is still a single check.
- New YAML option `extra_locations` (default **true**). Set it to `false`
  and the slot reproduces the exact v0.8.0 layout — same 61 locations,
  same IDs, same pool. That is the fallback if the new pool misbehaves in
  a live multiworld: flip one key, no rebuild.
- Per-slot totals: **190 locations / 190 items** with `extra_locations: true`,
  **61 / 61** with it off.
- `FILLER_ITEMS` widened from 4 to 15 entries so a 190-check slot does not
  hand out the same trap 127 times.

**Added (client)**
- `engine.addToArchive` is wrapped to detect item finds. It also catches up
  on a resumed save: anything already in the archive fires on connect, so
  reconnecting mid-run does not lose checks.
- `engine.renderTerminal` / `engine.resolveTerminal` are wrapped to detect
  sidequest progress. `renderTerminal` records which sidequest is on screen;
  `resolveTerminal` with `type === "sidequest"` fires the chain's check.
- Chain resolution uses longest-prefix matching, so `sq_fire_drill_2` maps
  to the `sq_fire_drill` chain and not to `sq_fire`.
- Two new hook dots in the connect overlay: **items** and **sidequests**.
  They stay grey when the slot has `extra_locations: false` — grey there
  means "not used by this seed", not "broken".
- Seeds generated before v0.9.0 carry no `extra_locations` in `slot_data`.
  The client treats a missing key as **off**, so an old seed can never send
  a location ID the server does not know.

**Tooling**
- `check_ids.mjs` verifies the two new blocks: offsets 400 / 500, key order
  identical between `ap_data.js` and `Locations.py`, `sidequestChainOf`
  round-trips for every chain, and the sidequest pool stays under 100
  entries so it cannot run into the next free block.
- `check_reachability.mjs` now walks `starting_day` × `goal` ×
  `extra_locations` — 12 configurations instead of 6 — and flags a slot
  whose pool is more than 95% filler.

**Versions**
- `required_client_version` 0.9.0 (broken — see v0.9.1) and client `PROTO_VERSION` 0.9.0.
- Existing IDs are unchanged; v0.8.0 seeds keep their meaning. Regenerate
  to pick up the new pools.

## v0.8.0 — Consolidation: pool fix, automated checks, docs

**Fixed (generator, important)**
- `create_items` no longer truncates the item pool. Up to v0.7.0 the list
  was cut with `pool[:active_count]` *after* two filler items had been
  precollected, which silently deleted the last two entries of the pool —
  the third copies of `Progressive Negative Affection (Gabi)`. That left
  `Gabi - Rival` and `Gabi - Nemesis` registered but unfillable, so
  generation could fail or bury the slot's logic depending on fill order.
- The pool is now built progression-first with the 18 normal items as the
  tail. The overflow (2 items for a 61-location slot) is popped off that
  useful tail and those exact items are pushed into starting inventory —
  the player still receives them, and no progression ever leaves the pool.
- Padding replaces truncation as the safety net, and a hard assertion
  fires if progression would ever exceed the location count.

**Tooling**
- `tools/check_ids.mjs`: compares `ap/ap_data.js` against `Locations.py` /
  `Items.py` — base offset, block offsets, list lengths, reserved gaps
  (item +1206, day +103/+104), full ID round-trip for every location and
  item, and `PROTO_VERSION` vs `required_client_version`. This is the
  check that would have caught the v0.5.1 regression.
- `tools/check_reachability.mjs`: walks all 3 `starting_day` x 2 `goal`
  combinations and asserts the 61-location layout, that no unplayable day
  is registered, that the pool balances, that every affection tier's
  progressive requirement is covered, and that the goal is satisfiable.
  This is the check that would have caught both the v0.7.0 day bug and
  the pool-truncation bug fixed above.
- Both run on Node with no dependencies and are wired into a GitHub
  Actions workflow.

**Docs**
- `docs/setup_en.md` rewritten. It still advertised the v0.5.0 YAML with
  the removed `deathlink_termination` / `deathlink_warning` /
  `deathlink_steam` / `deathlink_rage_quit` / `deathlink_filter` options,
  which now break generation.
- README rebuilt: correct 61/61 counts, English no longer described as
  "in progress", roadmap trimmed to what is still ahead.

**Versions**
- `required_client_version` and client `PROTO_VERSION` both at 0.8.0.
- No ID changes. v0.7.0 seeds keep their meaning; regenerate anyway to
  pick up the pool fix.

## v0.7.0 — 61-check slot layout (day-lock alignment)

**Breaking (generator)**
- `Survived Monday`, `Survived Wednesday`, `Survived Friday` are no longer
  all registered together. Each slot registers **only the one day matching
  its `starting_day`** — the other two are unreachable by design (in-game
  day-lock) and would otherwise soft-lock generation when progression
  landed on them in a MultiWorld.
- Total per-slot locations: **61** (24 achievements + 1 day + 18 positive
  affection + 18 negative affection). Item pool shrinks by 2 filler items,
  which are now pushed into `precollected` (starting inventory) so every
  guaranteed progression / useful item is preserved.
- Location IDs / offsets (100 / 101 / 102) stay stable. Only the set of
  *registered* names changes per slot.

**apworld**
- `Locations.py`: adds `active_locations_for(starting_day)` and
  `active_day_names(starting_day)`; `LOCATION_TABLE` stays complete.
- `__init__.py`: `create_regions` registers the per-slot subset;
  `create_items` precollects overflow as filler; `fill_slot_data` now
  emits `active_day`.
- `required_client_version` bumped to (0, 7, 0).

**Client**
- `PROTO_VERSION` bumped to 0.7.0.
- Day-check dispatch now uses `state.startingDay` to fire the exact
  `day_1 / day_2 / day_3` matching the played day, instead of the
  internal counter (which always hit `day_1` under day-lock).

## v0.6.0 — DeathLink consolidation, Lang switch back, Day cleanup

**Breaking (YAML)**
- Removed `deathlink_termination`, `deathlink_warning`, `deathlink_steam`,
  `deathlink_rage_quit`, and `deathlink_filter`. Use the single master
  `deathlink: true / false`. When on, all four causes fire with no filter.
- Removed `Survived Tuesday` and `Survived Thursday` locations. The game
  only has three playable days (Monday = hard, Wednesday = normal,
  Friday = easy). Day-location offsets 103 and 104 stay reserved.

**Client**
- Restored the DE / EN language switch on the AP connect screen
  (regressed silently after v0.3.x).
- Removed the DeathLink checkbox from the connect screen — the YAML is the
  single source of truth. The client always advertises the DeathLink tag
  on Connect and gates send / receive on `slot_data.deathlink`.
- Day-survived hook clamped to 3.
- Removed the dead `item_<id>` location hook that never resolved.

**apworld**
- `Options.py` reduced to `goal`, `starting_day`, `deathlink`.
- `required_client_version` bumped to (0, 6, 0).
- `fill_slot_data` no longer emits per-cause / filter keys.

## v0.5.1
- DeathLink hardening; per-cause toggles + filter (now removed in 0.6.0).
- Hotfix: missing `ap_base.py` import path prevented apworld registration.
- Restored the working v0.4.0 overlay client; fixed an `AP_BASE` syntax
  error in `ap_data.js`.

## v0.5.0
- 18 Negative Affection locations (Enemy / Rival / Nemesis) and 18
  matching Progressive Negative Affection items.
- Pool grew 45 -> 63 items, locations 47 -> 65.

## v0.4.0
- Per-character Progressive Affection items; gated Friend / Ally / Bestie
  tier locations; goal-aware `set_rules()`; filler items with stable IDs.
- Removed the generic Progressive Affection item, Progressive Difficulty,
  and the `survive_week` goal. Breaking: 0.3.x seeds are incompatible.

## v0.3.3 - v0.3.5
- Full English translation (16 data files), language switch on the connect
  screen, `ap_lang.js` converted to a plain script, engine wait raised to
  20 s, DeathLink cause key fixed to `let_off_steam`.
- Hotfixes for a broken `data_party.js` line and a truncated
  `data_sidequests.js`, plus further German leftovers removed.

## v0.1.0
- First AP release: 47 locations (24 achievements, 5 days, 18 affection),
  32 items, goals `legendary_set` / `all_achievements` / `survive_week`,
  four individually toggleable DeathLink causes.
