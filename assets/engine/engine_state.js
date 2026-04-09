export const state = {

    time: 8 * 60,
    fl: 0, al: 0, cr: 0,
    tickets: 0,
    inventory: [], 
    chefWarningReceived: false,
    rageWarningReceived: false,
    activeEvent: null,
    currentPhoneEvent: null,
    usedIDs: new Set(),
    lunchDone: false,
    bossTimer: null,
    ticketWarning: false,
    morningMoodShown: false,
    dayActive: false,

    // Partymode
    isPartyMode: false,
    partyProgress: 0,
    currentPartyKey: null,

    // Schwierigkeitsgrad (Standard 1.0)
    difficultyMult: 1.0, 

    // Ausreden-System
    excusesLeft: 0,

    // Stats & System
    achievements: [],
    achievedTitles: [],
    reputation: {},
    coffeeConsumed: 0,
    spamClicked: 0,
    emailsIgnored: 0,
    drunkEndTime: 0,

    // E-Mail System
    emailTimer: null,
    usedEmails: new Set(),
    isEmailOpen: false,
    emailPending: false,
    lastEmailTime: 0,

    // Story-Entscheidungen
    storyFlags: {},

    // Speichert das Ende, damit wir es verzögert anzeigen können
    pendingEnd: null,

    // News Ticker
    lastNewsTime: 0,
    activeNewsText: null,

    // Aktive Items
    lastStressballTime: -100,

    // Dauerhaftes Archiv
    archive: {
        items: [],
        achievements: [],
        achievementDiffs: {},
        reputation: {}
    },

    // Ruf-System (-100 bis +100)
    reputation: {
        "Kevin": 0,
        "Chantal": 0,
        "Egon": 0,
        "Dr. Wichtig": 0,
        "Gabi": 0,
        "Frau Elster": 0,
        "Markus": 0
    },

    // Neue User-Einstellungen
    visualFX: localStorage.getItem('layer8_fx') !== 'false',
    audioEffects: localStorage.getItem('layer8_audio') !== 'false',
    audioVolume: parseFloat(localStorage.getItem('layer8_volume') || '0.5'), // Standard 50%
    musicEnabled: localStorage.getItem('layer8_music') !== 'false',
    musicVolume: parseFloat(localStorage.getItem('layer8_music_volume') || '0.2'), // Standard: 20%
    musicStyle: localStorage.getItem('layer8_music_style') || 'radio',
    currentMusicTrack: null,
    oneClickItem: localStorage.getItem('layer8_oneclick') === 'true',
    fastChat: localStorage.getItem('layer8_fastchat') === 'true',
    blindStats: localStorage.getItem('layer8_blindstats') === 'true',
    blindTickets: localStorage.getItem('layer8_blindtickets') === 'true',
    autoHidePhone: localStorage.getItem('layer8_autohidephone') === 'true',
    compactMode: localStorage.getItem('layer8_compact') === 'true',
    screenShake: localStorage.getItem('layer8_shake') !== 'false',

    // --- TASTATUR MAPPING ---
    showHotkeys: (() => {
        const saved = localStorage.getItem('layer8_showhotkeys');
        if (saved !== null) return saved === 'true'; 
        return !window.matchMedia("(pointer: coarse)").matches;
    })(),

    keyBinds: (() => {
        let saved = JSON.parse(localStorage.getItem('layer8_keybinds')) || {};
        const defaults = { actCoffee: 'q', actQuest: 'w', actServer: 'e', actCall: 'r', opt1: '1', opt2: '2', opt3: '3', confirm: 'Space' };
        
        // Veraltete Keys aus alten Savegames gnadenlos löschen
        for (let k in saved) {
            if (!defaults.hasOwnProperty(k)) delete saved[k];
        }
        
        // Fehlende Keys auffüllen
        for (let k in defaults) { if (!saved[k]) saved[k] = defaults[k]; }
        return saved;
    })(),
    isBindingKey: false,
    actionToBind: null

};
