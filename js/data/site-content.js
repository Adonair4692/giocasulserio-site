window.GSS = window.GSS || {};
window.GSS.site = {
  owner: 'Adriano Pantaleo',
  brand: 'Gioca sul Serio',
  email: 'info@giocasulserio.it',
  orcid: '0009-0007-9253-7612',
  linkedin: 'https://it.linkedin.com/in/adriano-pantaleo-bb821123b',
  url: 'https://www.giocasulserio.it',
  claim: {
    it: 'La caccia ai cigni neri è aperta.',
    en: 'The hunt for black swans is open.'
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
    id: 'ttx', code: 'TTX',
    label: {it: 'Esercitazioni TableTop', en: 'TableTop Excercise'},
    description: {it: 'Mappe, filiere logistiche, gestione risorse e scelte decisive.', en: 'Maps, supply chaines, resource management and decision points.'}
  },
  {
    id: 'Wargame', code: 'WG',
    label: {it: 'Wargames Addestrativi', en: 'Educational Wargames'},
    description: {it: 'Influenza, strategia, scenari conflittuali e apprendimento riflessivo.', en: 'Influence, strategy, war scenarios and reflection-in-action'}
  },
  {
    id: 'boardgame', code: 'BG',
    label: {it: 'Board Games', en: 'Board Games'},
    description: {it: 'Plance, carte, dadi e dinamiche coopetitive.', en: 'Boards, cards, dice and coopetitive dynamics.'}
  },
  {
    id: 'ssg', code: 'SSG',
    label: {it: 'Formazione Soft Skills ', en: 'Soft Skills Training'},
    description: {it: 'Leadership, comunicazione efficace e dinamiche di gruppo.', en: 'Leadership, effective communication and group dynamics.'}
  },
  {
    id: 'indie', code: 'IND',
    label: {it: 'Indie Games', en: 'Indie Games'},
    description: {it: 'Esperienze immersive, scelte narrative e prototipi indipendenti.', en: 'Immersive experiences, narrative choices and independent prototypes.'}
  }
];

window.GSS.ui = {
  it: {
    navHome: 'Home', navProjects: 'Progetti', navResearch: 'Ricerca e pubblicazioni', navServices: 'Servizi', navAbout: 'Chi sono', navContacts: 'Contatti', navSearch: 'Cerca',
    start: 'Avvia l’esplorazione', selectSystem: 'Seleziona un sistema', featured: 'Progetti in evidenza', allProjects: 'Apri tutti i progetti',
    institutional: 'Scientifici e istituzionali', independent: 'Produzioni indipendenti', publications: 'Ricerca, libri e pubblicazioni',
    projectsIntro: 'Esplora l’archivio per console, proprietà e stato.', servicesClaim: 'Progettare. Testare. Valutare.',
    collaborations: 'Collaborazioni e contesti', archiveNumbers: 'Numeri dell’archivio', contactTitle: 'Mettiamo alla prova uno scenario.',
    contactText: 'Per progettazione, valutazione, tabletop exercise, conferenze e interventi.', write: 'Scrivi a info@giocasulserio.it',
    searchTitle: 'Cerca in tutto il sito', searchPlaceholder: 'Es. Pompei, emergenza, soft skills…', searchNoResults: 'Nessun risultato trovato.',
    all: 'Tutti', projects: 'Progetti', services: 'Servizi', buyable: 'Acquistabili', coming: 'Prossimamente', open: 'Apri',
    play: 'Gioca', consult: 'Consulta', buy: 'Acquista', comingSoon: 'Prossimamente', external: 'Sito esterno',
    scoreLabel: 'Black Swan Score', finish: 'Concludi l’esplorazione', reset: 'Azzera percorso', settings: 'Gestisci esperienza',
    introTitle: 'La caccia ai cigni neri è aperta',
    introText: 'Esplora progetti, sistemi e pubblicazioni. Le interazioni significative aumentano il tuo Black Swan Score. Il percorso resta sul tuo dispositivo per sette giorni e non richiede registrazione.',
    startScore: 'Inizia con punteggio', noScore: 'Esplora senza punteggio', soundOpt: 'Attiva i suoni per arricchire l’esperienza',
    platinumTitle: 'Hai platinato il sito',
    platinumText: 'Hai esplorato progetti, sistemi, pubblicazioni e metodi seguendo connessioni differenti. La caccia ai cigni neri non termina qui.',
    viewProfile: 'Vedi il profilo di esplorazione', continue: 'Continua', resetReplay: 'Azzera e rigioca',
    profileTitle: 'Il tuo profilo di esplorazione', resume: 'Riprendi l’esplorazione', close: 'Chiudi',
    soundOn: 'Suoni attivi', soundOff: 'Suoni disattivati', scoringOn: 'Punteggio attivo', scoringOff: 'Punteggio disattivato',
    totalProjects: 'Progetti', instProjects: 'Istituzionali', indieProjects: 'Indipendenti', totalPubs: 'Pubblicazioni', consolesCount: 'Console',
    participants: 'Partecipanti', sessions: 'Sessioni', talks: 'Interventi', years: 'Anni di attività', toComplete: 'da aggiornare',
    disclaimer: 'Gioca sul Serio è il sito professionale e scientifico personale di Adriano Pantaleo. Le opinioni, i contenuti e i progetti indipendenti pubblicati nel sito non rappresentano necessariamente le posizioni ufficiali delle amministrazioni, università o organizzazioni con cui l’autore collabora o ha collaborato.',
    privacy: 'Privacy', preferences: 'Cookie e preferenze', accessibility: 'Accessibilità', credits: 'Crediti', legal: 'Note legali',
    details: 'Dettagli', method: 'Metodo e finalità', attribution: 'Attribuzione', linkedPublications: 'Pubblicazioni collegate', status: 'Stato', console: 'Console', ownership: 'Ambito', institution: 'Ente o collaborazione',
    notFoundTitle: 'Cigno nero non localizzato.', notFoundText: 'Lo scenario richiesto non è presente nell’archivio.', backHome: 'Torna alla homepage',
    menu: 'Apri menu', language: 'Cambia lingua', newWindow: 'Si apre in una nuova scheda', copyLink: 'Copia collegamento', copied: 'Collegamento copiato'
  },
  en: {
    navHome: 'Home', navProjects: 'Projects', navResearch: 'Research & publications', navServices: 'Services', navAbout: 'About', navContacts: 'Contacts', navSearch: 'Search',
    start: 'Start exploring', selectSystem: 'Select a system', featured: 'Featured projects', allProjects: 'Open all projects',
    institutional: 'Scientific & institutional', independent: 'Independent productions', publications: 'Research, books & publications',
    projectsIntro: 'Explore the archive by console, ownership and status.', servicesClaim: 'Design. Test. Evaluate.',
    collaborations: 'Collaborations and contexts', archiveNumbers: 'Archive figures', contactTitle: 'Let’s test a scenario.',
    contactText: 'For design, evaluation, tabletop exercises, talks and interventions.', write: 'Write to info@giocasulserio.it',
    searchTitle: 'Search the entire site', searchPlaceholder: 'E.g. Pompeii, emergency, soft skills…', searchNoResults: 'No results found.',
    all: 'All', projects: 'Projects', services: 'Services', buyable: 'For sale', coming: 'Coming soon', open: 'Open',
    play: 'Play', consult: 'Read', buy: 'Buy', comingSoon: 'Coming soon', external: 'External site',
    scoreLabel: 'Black Swan Score', finish: 'Finish exploration', reset: 'Reset journey', settings: 'Manage experience',
    introTitle: 'The hunt for black swans is open',
    introText: 'Explore projects, systems and publications. Meaningful interactions increase your Black Swan Score. Your journey stays on your device for seven days and requires no registration.',
    startScore: 'Start with score', noScore: 'Explore without score', soundOpt: 'Enable sounds to enrich the experience',
    platinumTitle: 'You have platinumed the site',
    platinumText: 'You explored projects, systems, publications and methods by following different connections. The hunt for black swans does not end here.',
    viewProfile: 'View exploration profile', continue: 'Continue', resetReplay: 'Reset and replay',
    profileTitle: 'Your exploration profile', resume: 'Resume exploration', close: 'Close',
    soundOn: 'Sounds enabled', soundOff: 'Sounds disabled', scoringOn: 'Scoring enabled', scoringOff: 'Scoring disabled',
    totalProjects: 'Projects', instProjects: 'Institutional', indieProjects: 'Independent', totalPubs: 'Publications', consolesCount: 'Consoles',
    participants: 'Participants', sessions: 'Sessions', talks: 'Talks', years: 'Years active', toComplete: 'to update',
    disclaimer: 'Gioca sul Serio is Adriano Pantaleo’s personal professional and scientific website. Opinions, content and independent projects published here do not necessarily represent the official positions of administrations, universities or organisations with which the author collaborates or has collaborated.',
    privacy: 'Privacy', preferences: 'Cookies & preferences', accessibility: 'Accessibility', credits: 'Credits', legal: 'Legal notes',
    details: 'Details', method: 'Method and purpose', attribution: 'Attribution', linkedPublications: 'Linked publications', status: 'Status', console: 'Console', ownership: 'Context', institution: 'Institution or collaboration',
    notFoundTitle: 'Black swan not located.', notFoundText: 'The requested scenario is not in the archive.', backHome: 'Back to home',
    menu: 'Open menu', language: 'Change language', newWindow: 'Opens in a new tab', copyLink: 'Copy link', copied: 'Link copied'
  }
};
