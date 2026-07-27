# Layer8Problem — Archipelago Edition

> **This is a community fork** of [seluce/Layer8Problem](https://github.com/seluce/Layer8Problem)
> with an integrated [Archipelago](https://archipelago.gg) multiworld client.
> Used with the author's permission (modifications allowed with attribution).

🎮 **Play:** <https://ap-layer8problem.netlify.app>

📦 **Original game:** <https://github.com/seluce/Layer8Problem> · [Steam](https://store.steampowered.com/app/4487580/Layer8Problem/)

👤 **Original developer:** [seluce](https://github.com/seluce)

🔌 **AP integration:** [TheZockerBrain069](https://github.com/TheZockerBrain069)

---

## About the game

**Layer8Problem** is an *IT-support simulator* by **seluce**. You play
first-line tech support: every "ticket" is a real conversation with a user
whose computer just won't. Pick the right answer, keep affection with your
team up, survive the day — and don't get fired.

> The name comes from the IT joke: *"The problem is on Layer 8"* — i.e. the user.

**Genre:** visual novel × management × dark workplace humor.
Every IT professional will cry tears of joy during this game — or because
they've already lived this exact situation.

## Languages

🇩🇪 **German** (original) · 🇬🇧 **English**

Both languages ship in this fork. Pick one with the **DE / EN** buttons on
the Archipelago connect screen; the choice is remembered and applied on
reload. English is machine-translated and human-corrected — if you spot a
German leftover, please open an issue.

---

## How Archipelago works here

Layer8Problem joins your multiworld as a regular AP game. You earn checks by
playing normally, and items the randomizer sends you appear in your in-game
inventory. The client is built into the web build — nothing to install.

| | |
|---|---|
| **Game name (YAML)** | `Layer8Problem` |
| **Locations (190 per slot)** | 24 achievements + 1 day survived + 18 affection tiers + 18 negative affection tiers + 30 item finds + 99 sidequest chains |
| **Items (190 per slot)** | 9 legendary + 18 progressive affection + 18 progressive negative affection + 18 normal + filler |
| **Smaller slot** | `extra_locations: false` drops the last two pools and gives you the v0.8.0 layout: 61 locations / 61 items |
| **Goal (YAML)** | `legendary_set` (default) · `all_achievements` |
| **Days** | Monday (hard) · Wednesday (normal) · Friday (easy) — one per slot, and it *is* the difficulty |
| **DeathLink** | single master toggle in the YAML; fires on termination, final warning, letting off steam, rage quit |

Only the `Survived <Day>` location for your slot's day is registered — the
other two days are locked in-game, so registering them would produce
unbeatable seeds.

**Item finds** fire the first time an item lands in your archive.
**Sidequest chains** fire the first time you resolve any step of a chain —
one check per chain, so finishing a long chain does not flood the server.

### YAML

```yaml
Layer8Problem:
  goal: legendary_set              # legendary_set | all_achievements
  starting_day: wednesday          # friday | wednesday | monday
  deathlink: false
  extra_locations: true            # false = 61-check v0.8.0 layout
```

That is the whole option set. The `deathlink_termination` /
`deathlink_warning` / `deathlink_steam` / `deathlink_rage_quit` /
`deathlink_filter` keys from v0.5.x were removed in v0.6.0 and now break
generation — delete them from old YAMLs.

---

## How to play

1. Open <https://ap-layer8problem.netlify.app>
2. The **Archipelago Connection** screen blocks the game until you connect.
   Use the **DE / EN** buttons to switch language.
3. Enter your **host**, **port**, **slot name**, optional password.
4. Click **Connect & Play** — the game starts once the hooks report green.
   *(Pure single-player? Click "Play Offline" to skip AP entirely.)*
5. Click the small **AP** pill in the top-right corner during play to
   disconnect, reconnect, or change slots.

Your host / port / slot are remembered in `localStorage`. Your password is
**never** stored. DeathLink is controlled by the YAML, not by the client.

## Generating a multiworld

The `.apworld` is published with every
[GitHub release](https://github.com/TheZockerBrain069/Layer8Problem-AP/releases)
as `layer8problem.apworld`. Drop it into your Archipelago `custom_worlds/`
folder and `Layer8Problem` shows up as a selectable game.

An `.apworld` is a plain zip — rename or unzip it if you want to read the
Python source, the setup guide, or the world changelog:

```sh
unzip layer8problem.apworld -d /tmp/apw
```

## Repository layout

| path | contents |
|---|---|
| `ap/` | the in-browser AP client: `ap_client.js`, the stable ID map `ap_data.js`, language bootstrap `ap_lang.js`, English UI strings |
| `tools/` | consistency checks, see below |
| `assets/data/` | German game data · `assets/data/en/` English |
| `engine.js`, `assets/engine/` | the original game engine (untouched by this fork) |

## Consistency checks

The client and the apworld keep two copies of the same ID map, and every
past hotfix came from those drifting apart. Two Node scripts (no
dependencies) verify them:

```sh
unzip layer8problem.apworld -d /tmp/apw
node tools/check_ids.mjs          /tmp/apw/layer8problem
node tools/check_reachability.mjs /tmp/apw/layer8problem
```

- **`check_ids.mjs`** — base offset, block offsets, list lengths, reserved
  ID gaps, a full ID round-trip for every location and item, and
  `PROTO_VERSION` vs `required_client_version`.
- **`check_reachability.mjs`** — all `starting_day` × `goal` combinations:
  with `extra_locations` both on and off — 190 or 61 locations registered,
  no unplayable day, pool balances, every affection tier's progressive
  requirement covered, goal satisfiable, filler share sane.

Both also run in CI (`.github/workflows/ap-checks.yml`) when an unpacked
`apworld/layer8problem/` folder is present in the tree.

## Roadmap

| version | what's coming |
|---|---|
| **v0.9.1** | PopTracker pack for the 190-check layout |
| **v1.0.0** | full playthrough tested, submission to the official Archipelago world index |

Shipped versions are documented in the world changelog inside the
`.apworld` (`layer8problem/CHANGELOG.md`) and in `ap/CHANGELOG.md`.
`changelog.md` in the repo root is the original game's changelog by seluce.

## License & credits

Source code: same license as the original [seluce/Layer8Problem](https://github.com/seluce/Layer8Problem)
repository. All credit for the game itself goes to **seluce**. This fork only
adds the `ap/` module, the English data set, and integration glue.
