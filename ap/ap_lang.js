// Layer8Problem — Language Switcher (v0.3.0)
// - Floating chooser on the start/intro screen (DE/EN)
// - Auto-injected row inside the in-game Settings modal
// - Persists in localStorage.l8_lang and reloads to apply

const LS_LANG = "l8_lang";

const LABEL = {
  de: { switcher: "Sprache", de: "Deutsch", en: "Englisch", hint: "Spiel lädt neu" },
  en: { switcher: "Language", de: "German",  en: "English",  hint: "Game reloads" },
};

function currentLang() {
  return (localStorage.getItem(LS_LANG) || "de").toLowerCase().startsWith("en") ? "en" : "de";
}

function setLang(lang) {
  if (lang !== "de" && lang !== "en") return;
  if (currentLang() === lang) return;
  localStorage.setItem(LS_LANG, lang);
  location.reload();
}

function injectStyles() {
  if (document.getElementById("l8-lang-style")) return;
  const s = document.createElement("style");
  s.id = "l8-lang-style";
  s.textContent = `
  #l8-lang-floater{position:fixed;top:8px;left:8px;z-index:99991;display:flex;gap:4px;
    background:#0f172a;border:1px solid #334155;border-radius:999px;padding:3px 6px;
    font:11px/1.4 ui-monospace,monospace;color:#cbd5e1;box-shadow:0 4px 12px #0008;user-select:none}
  #l8-lang-floater .lbl{padding:2px 6px;color:#64748b;letter-spacing:.5px}
  #l8-lang-floater button{padding:2px 8px;border-radius:999px;border:1px solid #334155;
    background:transparent;color:#cbd5e1;cursor:pointer;font:600 11px ui-monospace,monospace}
  #l8-lang-floater button.active{background:linear-gradient(180deg,#0ea5e9,#0369a1);
    border-color:#0ea5e9;color:#fff}
  #l8-lang-floater button:hover:not(.active){background:#1e293b}
  #l8-lang-floater.in-game{opacity:.55}
  #l8-lang-floater.in-game:hover{opacity:1}

  .l8-lang-settings-row{margin:12px 0;padding:12px;background:rgba(15,23,42,.6);
    border:1px solid #334155;border-radius:8px;display:flex;align-items:center;
    justify-content:space-between;gap:12px}
  .l8-lang-settings-row .meta{display:flex;flex-direction:column;gap:2px}
  .l8-lang-settings-row .title{color:#e2e8f0;font-weight:600;font-size:13px}
  .l8-lang-settings-row .hint{color:#94a3b8;font-size:11px}
  .l8-lang-settings-row .opts{display:flex;gap:6px}
  .l8-lang-settings-row .opts button{padding:6px 14px;border-radius:6px;border:1px solid #475569;
    background:#1e293b;color:#cbd5e1;cursor:pointer;font:600 12px system-ui;letter-spacing:.5px}
  .l8-lang-settings-row .opts button.active{background:linear-gradient(180deg,#0ea5e9,#0369a1);
    border-color:#0ea5e9;color:#fff}
  `;
  document.head.appendChild(s);
}

// ---------- Start-screen floating chooser --------------------------------
let floater;

function buildFloater() {
  injectStyles();
  const lang = currentLang();
  const lbl = LABEL[lang];

  const btnDe = document.createElement("button");
  btnDe.textContent = "DE";
  btnDe.title = lbl.de;
  btnDe.className = lang === "de" ? "active" : "";
  btnDe.addEventListener("click", () => setLang("de"));

  const btnEn = document.createElement("button");
  btnEn.textContent = "EN";
  btnEn.title = lbl.en;
  btnEn.className = lang === "en" ? "active" : "";
  btnEn.addEventListener("click", () => setLang("en"));

  const labelEl = document.createElement("span");
  labelEl.className = "lbl";
  labelEl.textContent = "🌐";

  floater = document.createElement("div");
  floater.id = "l8-lang-floater";
  floater.append(labelEl, btnDe, btnEn);
  document.body.appendChild(floater);
}

// Dim the floater once the game has actually started (intro modal gone).
function watchIntroState() {
  const intro = document.getElementById("intro-modal");
  if (!intro) { floater?.classList.add("in-game"); return; }
  const update = () => {
    const visible = !intro.classList.contains("hidden") && intro.style.display !== "none";
    floater?.classList.toggle("in-game", !visible);
  };
  update();
  new MutationObserver(update).observe(intro, { attributes: true, attributeFilter: ["class", "style"] });
}

// ---------- Settings-modal injection -------------------------------------
function ensureSettingsRow() {
  const modal = document.getElementById("settings-modal");
  if (!modal) return;
  if (modal.querySelector(".l8-lang-settings-row")) return;

  const lang = currentLang();
  const lbl = LABEL[lang];

  const row = document.createElement("div");
  row.className = "l8-lang-settings-row";

  const meta = document.createElement("div");
  meta.className = "meta";
  const title = document.createElement("span");
  title.className = "title";
  title.textContent = "🌐 " + lbl.switcher;
  const hint = document.createElement("span");
  hint.className = "hint";
  hint.textContent = lbl.hint;
  meta.append(title, hint);

  const opts = document.createElement("div");
  opts.className = "opts";
  for (const code of ["de", "en"]) {
    const b = document.createElement("button");
    b.textContent = code.toUpperCase();
    if (lang === code) b.classList.add("active");
    b.addEventListener("click", () => setLang(code));
    opts.appendChild(b);
  }

  row.append(meta, opts);

  // Insert near the top of the inner content panel.
  const inner = modal.querySelector(".bg-slate-900, .max-w-md, .max-w-lg, .max-w-xl") || modal.firstElementChild;
  const host = inner?.querySelector(".overflow-y-auto, .space-y-3, .space-y-4") || inner || modal;
  host.insertBefore(row, host.firstChild);
}

function watchSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (!modal) return;
  const update = () => {
    const visible = !modal.classList.contains("hidden") && modal.style.display !== "none";
    if (visible) ensureSettingsRow();
  };
  update();
  new MutationObserver(update).observe(modal, { attributes: true, attributeFilter: ["class", "style"] });
}

// ---------- Boot ---------------------------------------------------------
function boot() {
  buildFloater();
  watchIntroState();
  watchSettingsModal();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

window.L8Lang = { setLang, currentLang };
