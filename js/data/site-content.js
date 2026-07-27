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
    id: 'ttx',
    code: 'TTX',

    label: {
      it: 'Esercitazioni tabletop',
      en: 'Tabletop Exercises'
    },

    description: {
      it: 'Mappe, filiere logistiche, gestione delle risorse e scelte decisive.',
      en: 'Maps, supply chains, resource management and critical decisions.'
    }
  },

  {
    id: 'Wargame',
    code: 'WG',

    label: {
      it: 'Wargame addestrativi',
      en: 'Educational Wargames'
    },

    description: {
      it: 'Influenza, strategia, scenari conflittuali e apprendimento riflessivo.',
      en: 'Influence, strategy, adversarial scenarios and reflection-in-action.'
    }
  },

  {
    id: 'boardgame',
    code: 'BG',

    label: {
      it: 'Board game',
      en: 'Board Games'
    },

    description: {
      it: 'Plance, carte, dadi, tempo limitato e dinamiche coopetitive.',
      en: 'Boards, cards, dice, limited time and coopetitive dynamics.'
    }
  },

  {
    id: 'ssg',
    code: 'SST',

    label: {
      it: 'Formazione soft skills',
      en: 'Soft Skills Training'
    },

    description: {
      it: 'Leadership, comunicazione efficace e dinamiche di gruppo.',
      en: 'Leadership, effective communication and group dynamics.'
    }
  },

  {
    id: 'indie',
    code: 'IND',

    label: {
      it: 'Giochi indie',
      en: 'Indie Games'
    },

    description: {
      it: 'Esperienze immersive, scelte narrative e prototipi indipendenti.',
      en: 'Immersive experiences, narrative choices and independent prototypes.'
    }
  }
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

    projectsIntro: 'Esplora la libreria per console, ambito e stato.',
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
    introText: 'Esplora giochi, console, cartucce, pubblicazioni ed esercitazioni. Per ogni contenuto esplorato aumenti il tuo Black Swan Hunter Score. Per ricevere il pop-up “Sito platinato” dovrai catturare un Cigno Nero. Il punteggio ottenuto può restare sul tuo dispositivo per sette giorni e non richiede registrazione.',

    startScore: 'Attiva il BSH',
    noScore: 'Esplora senza BSH',
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
    scoringOn: 'Punteggio Black Swans Hunter "BSH" attivo',
    scoringOff: 'Punteggio Black Swans Hunter "BSH" disattivato',

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

    projectsIntro: 'Explore the library by console, context and status.',
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
    introText: 'Explore games, consoles, cartridges, publications and exercises. Each item you explore increases your Black Swan Hunter Score. To unlock the “Site Platinum” pop-up, you will need to catch a Black Swan. Your score can remain on your device for seven days and no registration is required.',

    noScore: 'Explore without BSH',
    noScore: 'Explore without score',
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
    scoringOn: 'Black-Swans-Hunter "BSH" Scoring enabled',
    scoringOff: 'Black-Swans-Hunter "BSH" Scoring disabled',

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
