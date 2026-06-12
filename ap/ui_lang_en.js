// Layer8Problem — English UI layer (v1.0)
// Plain non-module script. Load AFTER ap_lang.js in index.html:
//   <script src="./ap/ui_lang_en.js"></script>
// Translates static UI labels + engine-generated UI text when language = EN.
(function () {
  "use strict";
  var lang = (window.l8GetLang && window.l8GetLang()) || "de";
  if (lang !== "en") return;
  var MAP = {
  "Willkommen bei": "Welcome to",
  ". Du bist der SysAdmin.": ". You are the SysAdmin.",
  "Jeden Morgen wachst du auf und hoffst, dass der Serverraum abgebrannt ist – aber nein, die Lichter blinken noch. Dein Chef hält IT für Vodoo-Zauber, der nichts kosten darf. Deine Kollegen denken, das Internet ist \"dieses blaue E\".": "Every morning you wake up hoping the server room has burned down – but no, the lights are still blinking. Your boss thinks IT is voodoo magic that shouldn't cost a dime. Your colleagues think the internet is \"that blue E.\"",
  "DEIN ZIEL:": "YOUR GOAL:",
  "Überlebe bis": "Survive until",
  "16:30 Uhr": "4:30 PM",
  ". Lass dich nicht feuern. Raste nicht aus. Und lass dich nicht von der": ". Don't get fired. Don't lose your cool. And don't get buried by the",
  "Ticket-Lawine": "Ticket-Avalanche",
  "begraben.": "buried.",
  "Schicht beginnen": "Start Shift",
  "Archiv": "Archive",
  "Optionen": "Options",
  "Überlebens-Handbuch": "Survival Handbook",
  "Alle 30 Min kommt ein Ticket dazu. Ab 10 offenen Tickets ist Game Over!": "Every 30 mins a new ticket pops up. At 10 open tickets, it's Game Over!",
  "FAULHEIT": "LAZINESS",
  "Zu hoch? Der Chef bestraft Fehler härter.": "Too high? The boss punishes mistakes harder.",
  "Bei 100% öffnest du einmalig dein Ventil. Danach folgt der Rage-Quit!": "At 100%, you'll blow off some steam once. After that, it's Rage-Quit!",
  "CHEF-RADAR": "BOSS-RADAR",
  "Bei 100% gibt es eine Abmahnung vom Chef. Danach folgt die Kündigung!": "At 100%, you get a warning from the boss. After that, it's termination!",
  "Finde Items, um Probleme kreativ zu lösen.": "Find items to solve problems creatively.",
  "Uhrzeit": "Time",
  "OFFENE TICKETS": "OPEN TICKETS",
  "System lädt...": "System loading...",
  "SYSTEM BEREIT": "SYSTEM READY",
  "Wähle eine Aktion unten.": "Choose an action below.",
  "NEUE NACHRICHT": "NEW MESSAGE",
  "Jetzt lesen...": "Read now...",
  "Nachricht": "Message",
  "INVENTAR": "INVENTORY",
  "🏆 ARCHIV": "🏆 ARCHIVE",
  "⚙️ MENÜ": "⚙️ MENU",
  "KAFFEE": "COFFEE",
  "DIENSTGANG": "OFFICE WALK",
  "SERVERRAUM": "SERVER ROOM",
  "ANRUF": "CALL",
  "🎒 DEIN RUCKSACK": "🎒 YOUR BACKPACK",
  "Schließen": "Close",
  "Effekt: ???": "Effect: ???",
  "⚠ ACHTUNG:": "⚠ WARNING:",
  "Warntext hier.": "Warning text here.",
  "ABBRECHEN": "CANCEL",
  "BENUTZEN": "USE",
  "👥 DAS KOLLEGIUM (Die Verdächtigen)": "👥 THE COLLEAGUES (The Suspects)",
  "Zurück an die Arbeit": "Back to work",
  "Karriere-Fortschritt": "Career Progress",
  "Deine gesammelten Werke des Wahnsinns.": "Your collected works of madness.",
  "Betreff Platzhalter": "Subject Placeholder",
  "Absender Name": "Sender Name",
  "An:": "To:",
  "Mich (SysAdmin)": "Me (SysAdmin)",
  "Management; IT-Verteiler": "Management; IT Distribution List",
  "Laden...": "Loading...",
  "WÄHLE DEINEN TAG": "CHOOSE YOUR DAY",
  "Wie sehr hasst du dein Leben heute?": "How much do you hate your life today?",
  "FREITAG": "FRIDAY",
  "\"Hoch die Hände, Wochenende!\"": "\"Hands up, it's the weekend!\"",
  "✔ Weniger Tickets": "✔ Fewer Tickets",
  "✔ Kollegen sind entspannt": "✔ Colleagues are relaxed",
  "✔ Geringerer Multiplikator (0.8x)": "✔ Lower Multiplier (0.8x)",
  "MITTWOCH": "WEDNESDAY",
  "\"Bergfest. Der Wahnsinn ist Routine.\"": "\"Hump Day. The madness is routine.\"",
  "● Standard Wahnsinn": "● Standard Madness",
  "● Normale Ticket-Rate": "● Normal Ticket Rate",
  "● Standard Multiplikator (1.0x)": "● Standard Multiplier (1.0x)",
  "MONTAG": "MONDAY",
  "\"Warum tue ich mir das an?\"": "\"Why do I do this to myself?\"",
  "⚠ Startet mit 2 Tickets": "⚠ Starts with 2 Tickets",
  "⚠ Erhöhte Ticket-Rate": "⚠ Increased Ticket Rate",
  "⚠ Erhöhter Multiplikator (1.25x)": "⚠ Multiplier Increased (1.25x)",
  "Systemmeldung: H.A.L.G.E.R.D.": "System Message: H.A.L.G.E.R.D.",
  "\"Mitarbeiter #404, das System registriert eine erhöhte Inkompetenz-Wahrscheinlichkeit in Ihrem Profil.": "\"Employee #404, the system is detecting an elevated incompetence probability in your profile.",
  "Benötigen Sie eine geführte Simulation des regulären Wahnsinns, bevor Ihre Fehlerrate den Chef alarmiert?\"": "Do you require a guided simulation of the regular madness before your error rate alarms the boss?\"",
  "Simulation starten (Empfohlen)": "Start Simulation (Recommended)",
  "Ablauf ignorieren (Auf eigene Gefahr)": "Ignore Protocol (At Your Own Risk)",
  "Aktion": "Action",
  "Erklärungstext": "Explanation Text",
  "\"Kommunikation ist der Schlüssel (der leider klemmt).\"": "\"Communication is key (a jammy one, unfortunately).\"",
  "SCHLIESSEN": "CLOSE",
  "AN DEN JOGHURT-DIEB!!!": "TO THE YOGURT THIEF!!!",
  "Wer auch immer meinen": "Whoever took my",
  "aus dem Kühlschrank genommen hat:": "from the fridge:",
  "Ich habe die Überwachungskameras der Kantine gehackt. Ich weiß, dass du rote Sneaker trägst.": "I hacked the canteen's security cameras. I know you're wearing red sneakers.",
  "Leg ihn zurück. Du hast 24h.": "Put it back. You have 24h.",
  "Lieber Kevin,": "Dear Kevin,",
  "1. Das war kein Bi-Fi, das war ein Experiment der Biologie-Abteilung (Schimmelpilz-Kultur 'Delta-9').": "1. That wasn't a Bi-Fi, that was a Biology Department experiment (mold culture 'Delta-9').",
  "2. Wenn du das gegessen hast, solltest du dringend zum Arzt, statt Drohbriefe zu schreiben.": "2. If you ate that, you should urgently see a doctor instead of writing threatening letters.",
  "LG, Dr. Brinkmann": "Regards, Dr. Brinkmann",
  "Betr: Projekt \"Quanten-Cloud\"": "Subject: Project \"Quantum Cloud\"",
  "\"Sehr geehrtes Sales-Team,": "\"Dear Sales Team,",
  "vielen Dank für die Implementierung der 'KI-gesteuerten Echtzeit-Datenbank'.": "thank you for implementing the 'AI-driven Real-time Database'.",
  "Wir wissen zwar nicht, warum sie aussieht wie eine Excel-Tabelle von 1998 und warum einer ihrer Mitarbeiter jeden Morgen manuell Daten eingeben muss, aber die Performance ist beeindruckend!": "We don't know why it looks like an Excel spreadsheet from 1998 and why one of your employees has to manually enter data every morning, but the performance is impressive!",
  "Gerne wieder!\"": "Gladly again!\"",
  "Initiative: \"Work-Life-Integration\"": "Initiative: \"Work-Life Integration\"",
  "Um Stress zu reduzieren, führen wir das \"Schlaf-am-Platz\"-Konzept ein.": "To reduce stress, we are introducing the \"Sleep-at-Your-Desk\" concept.",
  "Die Regeln:": "The rules:",
  "Maximal 3 Minuten pro Auge.": "Maximum 3 minutes per eye.",
  "Dabei muss die Maus bewegt werden (nutzen Sie Ihre Reflexe).": "The mouse must be moved (use your reflexes).",
  "Träumen von der Konkurrenz ist untersagt (NDA-Verstoß).": "Dreaming of the competition is prohibited (NDA violation).",
  "\"Wer schläft, sündigt nicht. Aber er arbeitet auch nicht. Also sündigen Sie lieber.\" - Dr. Wichtig": "\"He who sleeps, does not sin. But he also does not work. So you'd better sin instead.\" - Dr. Important",
  "ZU VERSCHENKEN": "FOR FREE",
  "Aktenvernichter \"ShredMaster 3000\"": "Document Shredder \"ShredMaster 3000\"",
  "Er funktioniert technisch noch, aber die Messer sind stumpf.": "It's technically still working, but the blades are dull.",
  "Er schneidet das Papier nicht, er": "It doesn't cut the paper, it",
  "kaut": "chews",
  "es nur. Die Dokumente kommen warm, feucht und als Klumpen wieder raus.": "it. The documents come out warm, damp, and as a lump.",
  "Zudem macht er Geräusche, die klingen, als würde er leise weinen.": "Also, it makes noises that sound like it's quietly weeping.",
  "Nur an Bastler oder Exorzisten abzugeben. Ich halte das emotional nicht mehr aus.": "Only for tinkerers or exorcists. I can't take it emotionally anymore.",
  "Nimm ihn!": "Take it!",
  "Gratis": "Free",
  "Bitte": "Please",
  "Hilfe": "Help",
  "Mutprobe": "Dare",
  "Weser-Kurier (Archiv 1998)": "Weser-Kurier (Archive 1998)",
  "\"GlobalCorp verspricht: Das papierlose Büro kommt!\"": "\"GlobalCorp promises: The paperless office is coming!\"",
  "Der visionäre Gründer Dr. Wichtig erklärte heute, dass Drucker bald nur noch im Museum zu finden sein werden. \"Wir setzen voll auf Disketten und Gedankenübertragung\", so der CEO bei der Eröffnung der neuen Zentrale im Moor.": "Today, visionary founder Dr. Wichtig declared that printers would soon only be found in museums. \"We are fully committed to floppy disks and thought transference,\" said the CEO at the opening of the new headquarters in the swamp.",
  "Gut gealtert. - Kevin": "Aged well. - Kevin",
  "Sicherheitswarnung Stufe Rot": "Security Alert Level Red",
  "Betr: Biologische Gefahr in Kühlschrank 2": "Subject: Biological Hazard in Refrigerator 2",
  "Aufgrund des \"Bi-Fi-Vorfalls\" ist die Teeküche im 2. Stock bis auf Weiteres eine": "Due to the \"Bi-Fi Incident,\" the kitchenette on the 2nd floor is a",
  "Sperrzone": "Restricted Area",
  ". Ein Team in Schutzanzügen ist unterwegs.": ". A team in hazmat suits is on its way.",
  "Bitte atmen Sie im Flur nur flach.": "Please breathe shallowly in the hallway.",
  "\"Hallo Leute,": "\"Hey folks,",
  "ich habe gekündigt und eine Strandbar auf Bali aufgemacht.": "I quit and opened a beach bar in Bali.",
  "Der Kaffee hier schmeckt nach Freiheit (und Kokosnuss).": "The coffee here tastes like freedom (and coconut).",
  "Viel Spaß beim nächsten Audit!": "Have fun with the next audit!",
  "Eure Ex-Kollegin Sarah\"": "Your ex-colleague Sarah\"",
  "Ende des Brettes. Gehen Sie weiter, hier gibt es nichts mehr zu sehen.": "End of the board. Move along, nothing to see here.",
  "MENÜ": "MENU",
  "Tag neu starten": "Restart Day",
  "(08:00 Uhr)": "(08:00 AM)",
  "Spieleinstellungen": "Game Settings",
  "Sicherheit & Backups": "Security & Backups",
  "Spielstand exportieren": "Export Savegame",
  "Spielstand importieren": "Import Savegame",
  "Spielstand unwiderruflich löschen": "Irrevocably Delete Savegame",
  "Spiel mit Freunden teilen": "Share Game with Friends",
  "Fehler melden / Feedback geben": "Report Bug / Give Feedback",
  "GitHub Projektseite ansehen": "View GitHub Project Page",
  "Zurück zum Hauptmenü": "Back to Main Menu",
  "Tastatur & Eingabe": "Keyboard & Input",
  "Tastenbelegung anpassen": "Customize Keybindings",
  "Hotkeys für Menüs & Aktionen ändern": "Change Hotkeys for Menus & Actions",
  "Effekte": "Effects",
  "Klicks & Benachrichtigungen": "Clicks & Notifications",
  "Musik": "Music",
  "Hintergrund-Gedudel & Boss-Beats": "Background Drivel & Boss Beats",
  "Musik-Stil": "Music Style",
  "Wähle deinen musikalischen Wahnsinn.": "Choose your musical madness.",
  "Radio (Abwechselnd)": "Radio (Alternating)",
  "Fahrstuhl (Klassisch)": "Elevator (Classic)",
  "Lofi (Entspannt)": "Lo-fi (Relaxed)",
  "Detektiv (Noir)": "Detective (Noir)",
  "Anzeige & Layout": "Display & Layout",
  "Kompaktmodus": "Compact Mode",
  "Verkleinert Abstände im UI. Ideal für kleinere Auflösungen.": "Shrink UI spacing. Ideal for smaller resolutions.",
  "Handy aut. minimieren": "Auto Minimize Phone",
  "Blendet inaktives Handy bei kompakter Anzeige aus.": "Hides inactive phone in compact display.",
  "Gameplay & Komfort": "Gameplay & Comfort",
  "Start-Schwierigkeit": "Starting Difficulty",
  "Legt den Modus für neue Tage fest.": "Sets the mode for new days.",
  "Täglich fragen": "Ask Daily",
  "Freitag (Leicht)": "Friday (Easy)",
  "Mittwoch (Normal)": "Wednesday (Normal)",
  "Montag (Schwer)": "Monday (Hard)",
  "Terminal-Rand leuchtet bei hohem Stress rot auf.": "Terminal border glows red when stress is high.",
  "Kamera-Wackeln": "Camera Shake",
  "Bildschirm bebt bei kritischen Fehlern.": "Screen shakes on critical errors.",
  "Schnelle Items": "Quick Items",
  "Nahrung ohne Bestätigung nutzen.": "Use food without confirmation.",
  "Smartphone-Animation": "Smartphone Animation",
  "Kein \"Tippt...\" Delay bei Chats.": "No \"Typing...\" delay in chats.",
  "Werte verbergen": "Hide Values",
  "Blendet exakte %-Zahlen aus.": "Hides exact % values.",
  "Tickets verbergen": "Hide Tickets",
  "Blendet Ticket-Anzahl aus.": "Hides ticket count.",
  "Credits & Lizenzen": "Credits & Licenses",
  "Entwicklung & Design:": "Development & Design:",
  "Musik Lizenzen (Creative Commons BY 4.0):": "Music Licenses (Creative Commons BY 4.0):",
  "💾 SPIELSTAND SICHERN": "💾 SAVE GAME",
  "Kopiere diesen Code, um deinen Fortschritt auf einem anderen Gerät wiederherzustellen.": "Copy this code to restore your progress on another device.",
  "In Zwischenablage kopieren": "Copy to clipboard",
  "Code kopiert!": "Code copied!",
  "📂 SPIELSTAND LADEN": "📂 LOAD GAME",
  "Füge hier deinen Speicher-Code ein.": "Paste your save code here.",
  "Achtung: Dein aktueller Fortschritt wird überschrieben!": "Warning: Your current progress will be overwritten!",
  "SPIELSTAND LADEN": "LOAD GAME",
  "Fehler!": "Error!",
  "Notfall-Ausrede erfinden": "Invent emergency excuse",
  "Das aktuelle Problem wird dadurch nur vertagt und wandert ungelöst \n\t\t\tzurück in den Pool. Du hast pro Schicht nur begrenzt Ausreden zur Verfügung.": "This only postpones the current problem, which will \n\t\t\tdrift back into the pool unsolved. You have a limited number of excuses per shift.",
  "Abbrechen": "Cancel",
  "Bestätigen und fliehen": "Confirm and flee",
  "Bug / Feedback melden": "Report Bug / Feedback",
  "Kategorie": "Category",
  "🐛 Fehler / Absturz": "🐛 Bug / Crash",
  "📝 Rechtschreibfehler": "📝 Typo",
  "🤯 Unlogischer Inhalt": "🤯 Illogical Content",
  "⚖️ Zu schwer / Zu leicht": "⚖️ Too Hard / Too Easy",
  "💡 Idee / Vorschlag": "💡 Idea / Suggestion",
  "Beschreibung": "Description",
  "ℹ️ Das System hängt zur Fehleranalyse automatisch aktuelle Diagnosedaten (letztes Event, Uhrzeit, Inventar & Log-Auszug) an dein Ticket an.": "ℹ️ For error analysis, the system automatically attaches current diagnostic data (last event, time, inventory & log excerpt) to your ticket.",
  "Ticket eröffnen": "Open Ticket",
  "TASTENBELEGUNG": "KEY BINDINGS",
  "Klicke auf eine Taste, um sie neu zuzuweisen.": "Click a key to reassign it.",
  "Kaffee holen": "Get Coffee",
  "Dienstgang": "Errand",
  "Serverraum": "Server Room",
  "Anruf": "Call",
  "Option 1 (Oben)": "Option 1 (Top)",
  "Option 2 (Mitte)": "Option 2 (Middle)",
  "Option 3 (Unten)": "Option 3 (Bottom)",
  "Bestätigen / Popups / Handy": "Confirm / Pop-ups / Phone",
  "Visuelle Hotkeys": "Visual Hotkeys",
  "Zeigt Tasten-Symbole auf den Antwort-Buttons an.": "Displays key icons on the answer buttons.",
  "Standard": "Default",
  "Fertig": "Done",
  "Code hier einfügen...": "Insert code here...",
  "Was ist passiert? Welches Event war komisch?": "What happened? Which event was funny?",
  // --- Morning / day-start screen (engine_events.js) ---
  "DER MORGEN DANACH": "THE MORNING AFTER",
  "Den Arbeitstag beginnen": "Start the workday",
  "Startbedingungen:": "Starting conditions:",
  "Start 08:30 Uhr & +15% Faulheit": "Start 8:30 AM & +15% Laziness",
  "+15% Aggro": "+15% Aggro",
  "+15% Chef-Radar": "+15% Boss-Radar",
  "Neutral. Der ganz normale Wahnsinn beginnt.": "Neutral. The usual madness begins.",
  // --- Difficulty / boot log lines (engine_core.js) ---
  "Modus: FREITAG. Entspann dich.": "Mode: FRIDAY. Take it easy.",
  "Modus: MITTWOCH. Business as usual.": "Mode: WEDNESDAY. Business as usual.",
  "Modus: MONTAG. Viel Glück.": "Mode: MONDAY. Good luck.",
  "Hier ist gerade nichts mehr los. Versuch einen anderen Ort.": "Nothing's going on here right now. Try a different spot.",
  "System-Neustart initiiert...": "System reboot initiated..."
};
  // Regex patterns for dynamic strings (run AFTER exact-match MAP lookup).
  var REGEX = [
    [/^System (.+) geladen\. Warte auf User\.\.\.$/, "System $1 loaded. Waiting for user..."],
    [/^Inventar: (.+) erhalten!$/, "Inventory: $1 received!"],
    [/^Ausrede nutzen \((\d+) übrig\)$/, "Use excuse ($1 left)"],
    [/^Ausrede nutzen \((\d+) übrig\.\)$/, "Use excuse ($1 left.)"]
  ];
  function txNode(node) {
    var t = node.nodeValue; if (!t) return;
    var key = t.trim(); if (!key) return;
    var en = MAP[key];
    if (en !== undefined) { node.nodeValue = t.replace(key, en); return; }
    for (var i = 0; i < REGEX.length; i++) {
      if (REGEX[i][0].test(key)) {
        var rep = key.replace(REGEX[i][0], REGEX[i][1]);
        node.nodeValue = t.replace(key, rep);
        return;
      }
    }
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { txNode(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 11) return;
    var tag = root.nodeName;
    if (tag === "SCRIPT" || tag === "STYLE") return;
    if (root.nodeType === 1) {
      ["placeholder", "title"].forEach(function (a) {
        var v = root.getAttribute && root.getAttribute(a);
        if (v && MAP[v.trim()] !== undefined) root.setAttribute(a, MAP[v.trim()]);
      });
    }
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n; while ((n = w.nextNode())) txNode(n);
  }
  function init() {
    walk(document.body);
    var obs = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var mu = muts[i];
        if (mu.type === "characterData") txNode(mu.target);
        else for (var j = 0; j < mu.addedNodes.length; j++) walk(mu.addedNodes[j]);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
