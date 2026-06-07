// Layer8Problem — Language Helper (v0.3.1)
// Plain non-module script. Loaded BEFORE data.js so the loader sees the right
// localStorage value on first visit. No floating UI — the language toggle now
// lives inside the AP connect screen (see ap_client.js).
(function () {
  "use strict";
  var KEY = "l8_lang";
  try {
    if (!localStorage.getItem(KEY)) {
      var auto = (navigator.language || "de").toLowerCase().indexOf("de") === 0 ? "de" : "en";
      localStorage.setItem(KEY, auto);
    }
    var lang = localStorage.getItem(KEY);
    if (document.documentElement) document.documentElement.lang = lang;
  } catch (e) { /* ignore — private mode etc. */ }

  window.l8GetLang = function () {
    try { return localStorage.getItem(KEY) || "de"; } catch (e) { return "de"; }
  };
  window.l8SetLang = function (lang) {
    if (lang !== "de" && lang !== "en") return;
    try {
      if (localStorage.getItem(KEY) === lang) return;
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    location.reload();
  };
})();
