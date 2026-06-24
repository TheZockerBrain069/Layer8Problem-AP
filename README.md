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

🎮 **Play:** <https://ap-layer8problem.netlify.app>

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
| **Locations (63)** | 24 achievements + 3 days survived + 18 affection tiers + 18 negative affection tiers |
| **Items (63 guaranteed)** | 9 legendary + 18 normal + 18 progressive affection + 18 progressive negative affection (+ filler) |
| **Goal (YAML)** | `legendary_set` (default) · `all_achievements` |
| **Days** | Monday (hard) · Wednesday (normal) · Friday (easy) — one per slot |
| **DeathLink** | single master toggle in the YAML; fires on termination, final warning, letting off steam, rage quit |

---

## How to play

1. Open <https://ap-layer8problem.netlify.app>
2. The **Archipelago Connection** screen blocks the game until you connect.
   Use the **DE / EN** buttons in the top-right corner to switch language.
3. Enter your **host**, **port**, **slot name**, optional password.
4. Click **Connect & Play** — the game starts once hooks are installed.
   *(Pure single-player? Click "Play Offline" to skip AP entirely.)*
5. Click the small **AP** pill in the top-right corner during play to
   disconnect, reconnect, or change slots.

Your host / port / slot are remembered in `localStorage`. Your password is
**never** stored. DeathLink is controlled by the YAML, not by the client.

## Languages

- 🇩🇪 **German** — the original
- 🇬🇧 **English** — auto-translated, toggleable in the in-game settings *(WIP)*

## Building the multiworld

The `.apworld` for the Archipelago generator is published with every
GitHub release as `layer8problem.apworld`. Drop it into your Archipelago
`custom_worlds/` folder and `Layer8Problem` shows up as a selectable game.

## License & credits

Source code: same license as the original [seluce/Layer8Problem](https://github.com/seluce/Layer8Problem)
repository. All credit for the game itself goes to **seluce**. This fork only
adds the `ap/` module and integration glue.
