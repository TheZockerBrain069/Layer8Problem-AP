// Language-aware loader (v0.2.0)
// Picks EN bundle when localStorage.l8_lang === "en", otherwise the original DE bundle.
const lang = (typeof localStorage !== "undefined" && localStorage.getItem("l8_lang")) || "de";
const mod = lang === "en"
    ? await import('./data_en.js')
    : await import('./data_de.js');
export const DB = mod.DB;
