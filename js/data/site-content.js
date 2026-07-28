window.GSS = window.GSS || {};

window.GSS.site = {
  owner: 'Adriano Pantaleo',
  brand: 'Gioca sul Serio',
  email: 'info@giocasulserio.it',
  orcid: '0009-0007-9253-7612',
  linkedin: 'https://it.linkedin.com/in/adriano-pantaleo-bb821123b',
  url: 'https://www.giocasulserio.it',

  claim: {
    it: 'La caccia ai Cigni Neri è aperta',
    en: 'The hunt for Black Swans is open'
  },

  subtitle: {
    it: 'Serious game, educational wargame e tabletop exercise per testare pianificazioni, migliorare decisioni e risposte emergenziali in scenari complessi.',
    en: 'Serious games, educational wargames and tabletop exercises to test plans, improve decisions and emergency responses in complex scenarios.'
  },

  manualMetrics: {
    participants: null,
    sessions: null,
    talks: null,
    years: null
  },

  platinumScore: 130,
  scoreLifetimeDays: 7
};


window.GSS.consoles = [
  {
    id: 'planning-analysis',
    code: 'CON-01',
    label: {it: 'Planning & Analysis', en: 'Planning & Analysis'},
    description: {
      it: 'Giochi e simulazioni per mettere alla prova piani, osservare processi decisionali e individuare vulnerabilità prima che diventino incidenti.',
      en: 'Games and simulations for testing plans, observing decision processes and identifying vulnerabilities before they become incidents.'
    }
  },
  {
    id: 'educational-wargames',
    code: 'CON-02',
    label: {it: 'Educational Wargames', en: 'Educational Wargames'},
    description: {
      it: 'Wargame educativi per esplorare influenza, strategia e apprendimento tattico attraverso decisioni e conseguenze.',
      en: 'Educational wargames for exploring influence, strategy and tactical learning through decisions and consequences.'
    }
  },
  {
    id: 'emergency-response-games',
    code: 'CON-03',
    label: {it: 'Emergency Response Games', en: 'Emergency Response Games'},
    description: {
      it: 'Giochi dedicati a soccorso, recupero, analisi dei disastri e comunicazione nelle emergenze.',
      en: 'Games focused on relief, recovery, disaster analysis and communication during emergencies.'
    }
  },
  {
    id: 'soft-skills-training',
    code: 'CON-04',
    label: {it: 'Soft Skills Training', en: 'Soft Skills Training'},
    description: {
      it: 'Esperienze formative per leadership, negoziazione e decisione in situazioni complesse.',
      en: 'Training experiences for leadership, negotiation and decision-making in complex situations.'
    }
  },
  {
    id: 'experimental-games',
    code: 'CON-05',
    label: {it: 'Experimental Games', en: 'Experimental Games'},
    description: {
      it: 'Prototipi, serious game sperimentali e giochi narrativi usati per esplorare nuovi formati e linguaggi.',
      en: 'Prototypes, experimental serious games and narrative games used to explore new formats and languages.'
    }
  }
];


window.GSS.keywords = [
  {id: 'defence', label: {it: 'Difesa', en: 'Defence'}},
  {id: 'civil-protection', label: {it: 'Protezione civile', en: 'Civil protection'}},
  {id: 'climate', label: {it: 'Clima', en: 'Climate'}},
  {id: 'space', label: {it: 'Spazio', en: 'Space'}},
  {id: 'artificial-intelligence', label: {it: 'Intelligenza artificiale', en: 'Artificial intelligence'}},
  {id: 'privacy', label: {it: 'Privacy', en: 'Privacy'}},
  {id: 'leadership', label: {it: 'Leadership', en: 'Leadership'}},
  {id: 'diplomacy', label: {it: 'Diplomazia', en: 'Diplomacy'}},
  {id: 'disinformation', label: {it: 'Disinformazione', en: 'Disinformation'}},
  {id: 'resilience', label: {it: 'Resilienza', en: 'Resilience'}},
  {id: 'evaluation', label: {it: 'Valutazione', en: 'Evaluation'}},
  {id: 'training', label: {it: 'Formazione', en: 'Training'}},
  {id: 'strategy', label: {it: 'Strategia', en: 'Strategy'}},
  {id: 'logistics', label: {it: 'Logistica', en: 'Logistics'}},
  {id: 'cooperation', label: {it: 'Cooperazione', en: 'Cooperation'}},
  {id: 'flood-risk', label: {it: 'Rischio alluvionale', en: 'Flood risk'}},
  {id: 'mediterranean', label: {it: 'Mediterraneo', en: 'Mediterranean'}}
];


window.GSS.ui = {
  it: {
    navHome: 'Home',
    navProjects: 'Libreria',
    navResearch: 'Ricerca e pubblicazioni',
    navServices: 'Servizi',
    navAbout: 'Chi sono',
    navContacts: 'Contatti',
    navSearch: 'Cerca',

    start: 'Avvia l’esplorazione',
    selectSystem: 'Seleziona una console',
    featured: 'Cartucce in evidenza',
    allProjects: 'Apri tutte le cartucce',

    institutional: 'Scientifici e istituzionali',
    independent: 'Produzioni indipendenti',
    publications: 'Ricerca e divulgazione scientifica',

    projectsIntro: 'Ogni console raccoglie dispositivi accomunati dallo stesso perimetro di gioco.',
    filterConsole: 'Console',
    allConsoles: 'Tutte le console',
    servicesClaim: 'Progettare. Testare. Valutare.',

    collaborations: 'Collaborazioni e network',
    archiveNumbers: 'Numeri della libreria',

    contactTitle: 'Mettiamo alla prova uno scenario.',
    contactText: 'Per progettazione, esercitazioni, valutazione, interventi e conferenze.',
    write: 'Scrivi a info@giocasulserio.it',

    searchTitle: 'Cerca in tutto il sito',
    searchPlaceholder: 'Es. TTX, wargame, soft skills...',
    searchNoResults: 'Nessun risultato trovato.',
    closeSearch: 'Chiudi ricerca',

    all: 'Tutti',
    projects: 'Cartucce',
    services: 'Servizi',
    buyable: 'Acquistabili',
    coming: 'Prossimamente',
    open: 'Apri',

    play: 'Gioca',
    consult: 'Consulta',
    buy: 'Acquista',
    comingSoon: 'Prossimamente',
    external: 'Sito esterno',

    scoreLabel: 'Black Swan Hunter Score',
    finish: 'Concludi l’esplorazione',
    reset: 'Azzera percorso',
    settings: 'Gestisci suoni e punteggio',

    introTitle: 'Personalizza l’esplorazione del sito',
    introText: 'Esplora giochi, console, cartucce, pubblicazioni ed esercitazioni. Per ogni contenuto esplorato aumenti il tuo punteggio Black Swan Hunter (BSH). Per ricevere il pop-up “Sito Platinato” dovrai catturare un Cigno Nero. Il punteggio ottenuto può restare sul tuo dispositivo per sette giorni e non richiede registrazione.',

    startScore: 'Attiva il punteggio BSH',
    noScore: 'Esplora senza punteggio BSH',
    soundOpt: 'Attiva i suoni per arricchire l’esperienza',

    platinumTitle: 'Hai platinato il sito',
    platinumText: 'Hai esplorato console, cartucce, pubblicazioni e metodi seguendo indizi differenti. Ma la caccia ai Cigni Neri non finisce mai.',

    viewProfile: 'Vedi il profilo di esplorazione',
    continue: 'Continua',
    resetReplay: 'Azzera e rigioca',

    profileTitle: 'Il tuo profilo da esploratore',
    resume: 'Riprendi l’esplorazione',
    close: 'Chiudi',

    soundOn: 'Suoni attivi',
    soundOff: 'Suoni disattivati',
    scoringOn: 'Punteggio Black Swan Hunter "BSH" attivo',
    scoringOff: 'Punteggio Black Swan Hunter "BSH" disattivato',

    totalProjects: 'Cartucce',
    instProjects: 'Istituzionali',
    indieProjects: 'Indipendenti',
    totalPubs: 'Pubblicazioni',
    consolesCount: 'Console',

    participants: 'Partecipanti',
    sessions: 'Sessioni',
    talks: 'Interventi',
    years: 'Anni di attività',
    toComplete: 'da aggiornare',

    disclaimer: 'Gioca sul Serio è il sito professionale e scientifico personale di Adriano Pantaleo. Le opinioni e i contenuti pubblicati nel sito non rappresentano necessariamente le posizioni ufficiali delle amministrazioni, università o organizzazioni con cui l’autore collabora o ha collaborato.',

    privacy: 'Privacy',
    preferences: 'Cookie e preferenze',
    accessibility: 'Accessibilità',
    credits: 'Crediti',
    legal: 'Note legali',

    details: 'Dettagli',
    method: 'Metodo e finalità',
    attribution: 'Attribuzione',
    linkedPublications: 'Pubblicazioni collegate',
    status: 'Stato',
    console: 'Console',
    ownership: 'Ambito',
    institution: 'Ente o collaborazione',

    notFoundTitle: 'Cigno Nero non localizzato.',
    notFoundText: 'Lo scenario richiesto non è presente nella libreria.',
    backHome: 'Torna alla homepage',

    menu: 'Apri menu',
    language: 'Cambia lingua',
    newWindow: 'Si apre in una nuova scheda',
    copyLink: 'Copia collegamento',
    copied: 'Collegamento copiato'
  },


  en: {
    navHome: 'Home',
    navProjects: 'Library',
    navResearch: 'Research & publications',
    navServices: 'Services',
    navAbout: 'About',
    navContacts: 'Contacts',
    navSearch: 'Search',

    start: 'Start exploring',
    selectSystem: 'Select a console',
    featured: 'Featured cartridges',
    allProjects: 'Open all cartridges',

    institutional: 'Scientific & institutional',
    independent: 'Independent productions',
    publications: 'Research & science communication',

    projectsIntro: 'Each console groups game devices sharing the same playable scope.',
    filterConsole: 'Console',
    allConsoles: 'All consoles',
    servicesClaim: 'Design. Test. Evaluate.',

    collaborations: 'Collaborations & networks',
    archiveNumbers: 'Library figures',

    contactTitle: 'Let’s test a scenario.',
    contactText: 'For design, exercises, evaluation, professional engagements and conferences.',
    write: 'Write to info@giocasulserio.it',

    searchTitle: 'Search the entire site',
    searchPlaceholder: 'E.g. TTX, wargame, soft skills…',
    searchNoResults: 'No results found.',
    closeSearch: 'Close search',

    all: 'All',
    projects: 'Cartridges',
    services: 'Services',
    buyable: 'For sale',
    coming: 'Coming soon',
    open: 'Open',

    play: 'Play',
    consult: 'Read',
    buy: 'Buy',
    comingSoon: 'Coming soon',
    external: 'External site',

    scoreLabel: 'Black Swan Hunter Score',
    finish: 'Finish exploration',
    reset: 'Reset journey',
    settings: 'Manage sounds & scoring',

    introTitle: 'Customize site exploration',
    introText: 'Explore games, consoles, cartridges, publications and exercises. Each item you explore increases your Black Swan Hunter (BSH) Score. To unlock the “Site Platinum” pop-up, you will need to catch a Black Swan. Your score can remain on your device for seven days and no registration is required.',

    startScore: 'Enable BSH score',
    noScore: 'Explore without BSH score',
    soundOpt: 'Enable sounds to enrich the experience',

    platinumTitle: 'You have platinumed the site',
    platinumText: 'You explored consoles, cartridges, publications and methods by following different clues. But the hunt for Black Swans never ends.',

    viewProfile: 'View exploration profile',
    continue: 'Continue',
    resetReplay: 'Reset and replay',

    profileTitle: 'Your explorer profile',
    resume: 'Resume exploration',
    close: 'Close',

    soundOn: 'Sounds enabled',
    soundOff: 'Sounds disabled',
    scoringOn: 'Black Swan Hunter "BSH" scoring enabled',
    scoringOff: 'Black Swan Hunter "BSH" scoring disabled',

    totalProjects: 'Cartridges',
    instProjects: 'Institutional',
    indieProjects: 'Independent',
    totalPubs: 'Publications',
    consolesCount: 'Consoles',

    participants: 'Participants',
    sessions: 'Sessions',
    talks: 'Talks',
    years: 'Years active',
    toComplete: 'to update',

    disclaimer: 'Gioca sul Serio is Adriano Pantaleo’s personal professional and scientific website. Opinions and content published here do not necessarily represent the official positions of administrations, universities or organisations with which the author collaborates or has collaborated.',

    privacy: 'Privacy',
    preferences: 'Cookies & preferences',
    accessibility: 'Accessibility',
    credits: 'Credits',
    legal: 'Legal notes',

    details: 'Details',
    method: 'Method and purpose',
    attribution: 'Attribution',
    linkedPublications: 'Linked publications',
    status: 'Status',
    console: 'Console',
    ownership: 'Context',
    institution: 'Institution or collaboration',

    notFoundTitle: 'Black Swan not located.',
    notFoundText: 'The requested scenario is not in the library.',
    backHome: 'Back to home',

    menu: 'Open menu',
    language: 'Change language',
    newWindow: 'Opens in a new tab',
    copyLink: 'Copy link',
    copied: 'Link copied'
  }
};
