*(WIP)*

| | | |
|---|---|---|
| Version,| Content, | Maturity Level |
| v0.1.0, | "Current state: DE-only, 24 Achievements, Basic DeathLink", | """early alpha, playable, feedback welcome""" |
| v0.2.0, | "Complete EN translation, Language switcher in menu", | """alpha, now internationally testable""" |
| v0.3.0, | Affection-Tiers + Days-Survived as real Locations (→ ~50 Checks), | """feature-complete locations""" |
| v0.4.0, | Progressive Items (Difficulty/Affection) + YAML Goal Options,| """feature-complete items""" |
| v0.5.0, | "DeathLink-Hardening (all 4 Causes) reliable, no Echo", | """deathlink-stable""" |
| v0.9.0, | "Fully tested, one complete run played",| """release candidate""" |
| v1.0.0, | "Public Release, AP-Multiworld-Index Entry", | """stable""" |

# Layer8Problem — Archipelago Edition

> **This is a community fork** of [seluce/Layer8Problem](https://github.com/seluce/Layer8Problem)
> with an integrated [Archipelago](https://archipelago.gg) multiworld client.
> Used with the author's permission (modifications allowed with attribution).

🎮 **Play:** <https://aplayer8problem.netlify.app>

📦 **Original game:** <https://github.com/seluce/Layer8Problem> · [Steam](https://store.steampowered.com/app/4487580/Layer8Problem/)

👤 **Original developer:** [seluce](https://github.com/seluce)

🔌 **AP integration:** [TheZockerBrain069](https://github.com/TheZockerBrain069)

---

## About the game

**Layer8Problem** is a German-language *IT-support simulator* by **seluce**.
You play first-line tech support: every "ticket" is a real conversation with a
user whose computer just won't. Pick the right answer, keep affection with
your team up, survive the day — and don't get fired.

> The name comes from the IT joke: *"The problem is on Layer 8"* — i.e. the user.

**Genre:** visual novel × management × dark workplace humor.
Every IT professional will cry tears of joy during this game — or because
they've already lived this exact situation.

The game is currently only available in German. An English translation is in
progress in this fork.

---

## How Archipelago works here

Layer8Problem joins your multiworld as a regular AP game. You earn checks by
playing normally, and items the randomizer sends you appear in your in-game
inventory.

| | |
|---|---|
| **Game name (YAML)** | `Layer8Problem` |
| **Locations (~50)** | 24 achievements + affection-tier thresholds + days survived |
| **Items (30)** | 21 normal items + 9 legendary items + progressive difficulty / affection |
| **Goal (configurable)** | 100% achievements · all legendary items · X days survived · affection target · difficulty clear |
| **DeathLink causes** | `termination` · `warning` · `let-off-steam` · `rage-quit` |

When you trigger a DeathLink-eligible event in-game (got fired, got a warning,
needed to let off steam, rage-quit), every other DeathLink player in the
multiworld receives the matching cause.

---

## How to play

1. Open <https://layer8problem-ap.netlify.app>
2. The **Archipelago Connection** screen blocks the game until you connect.
3. Enter your **host**, **port**, **slot name**, optional password, optionally
   tick **Enable DeathLink**.
4. Click **Connect & Play** — the game starts once hooks are installed.
   *(Pure single-player? Click "Play Offline" to skip AP entirely.)*
5. Click the small **AP** pill in the top-right corner during play to
   disconnect, reconnect, or change slots.

Your host / port / slot / DeathLink preference are remembered in
`localStorage`. Your password is **never** stored.

## Languages

- 🇩🇪 **German** — the original
- 🇬🇧 **English** — auto-translated, toggleable in the in-game settings *(WIP)*

## Building the multiworld

The `.apworld` for the Archipelago generator lives in `/apworld/` *(coming soon)*.
Drop it into your Archipelago `custom_worlds/` folder and `Layer8Problem` shows
up as a selectable game.

## License & credits

Source code: same license as the original [seluce/Layer8Problem](https://github.com/seluce/Layer8Problem)
repository. All credit for the game itself goes to **seluce**. This fork only
adds the `ap/` module and integration glue.
