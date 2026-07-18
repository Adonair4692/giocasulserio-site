# Modelli da copiare

## Nuovo progetto

Incolla il blocco in `js/data/projects.js` **prima** della parentesi finale `];`.

```javascript
// INIZIO PROGETTO: nuovo-progetto
{
  id: 'nuovo-progetto',
  slug: 'nuovo-progetto',
  visible: true,
  featured: false,
  ownership: 'independent', // institutional oppure independent
  console: 'indie',        // ttx, wargame, boardgame, ssg, indie
  status: 'coming-soon',   // coming-soon, play, consult, buy
  sections: ['projects'],

  title: {
    it: 'Titolo italiano',
    en: 'English title'
  },
  type: {
    it: 'Tipologia italiana',
    en: 'English type'
  },
  summary: {
    it: 'Descrizione breve italiana.',
    en: 'Short English description.'
  },
  description: {
    it: 'Descrizione completa italiana.',
    en: 'Full English description.'
  },
  purpose: {
    it: 'Metodo e finalità.',
    en: 'Method and purpose.'
  },
  attribution: {
    it: 'Attribuzione del progetto.',
    en: 'Project attribution.'
  },
  institution: {
    it: '',
    en: ''
  },
  tags: ['parola chiave', 'keyword'],
  image: 'assets/projects/nuovo-progetto.svg',
  actions: [],
  linkedPublications: []
}
// FINE PROGETTO: nuovo-progetto
```

## Link Gioca

```javascript
actions: [
  {
    type: 'play',
    label: {it: 'Gioca', en: 'Play'},
    url: 'https://sito-esterno.example/gioco'
  }
]
```

## Link Consulta

```javascript
actions: [
  {
    type: 'consult',
    label: {it: 'Consulta', en: 'Read'},
    url: 'https://sito-esterno.example/documento'
  }
]
```

## Link Acquista

```javascript
actions: [
  {
    type: 'buy',
    label: {it: 'Acquista su itch.io', en: 'Buy on itch.io'},
    url: 'https://nome.itch.io/prodotto'
  }
]
```

## Più punti vendita

```javascript
actions: [
  {
    type: 'buy',
    label: {it: 'Edizione digitale', en: 'Digital edition'},
    url: 'https://store.example/digitale'
  },
  {
    type: 'buy',
    label: {it: 'Edizione fisica', en: 'Physical edition'},
    url: 'https://store.example/fisica'
  }
]
```

## Nuova pubblicazione

Incolla in `js/data/publications.js` prima di `];`.

```javascript
{
  id: 'nuova-pubblicazione',
  visible: true,
  status: 'in-progress',
  linkedProject: null,
  title: {it: 'Titolo', en: 'Title'},
  subtitle: {it: 'Stato o sottotitolo', en: 'Status or subtitle'},
  abstract: {it: 'Abstract italiano.', en: 'English abstract.'},
  authors: ['Adriano Pantaleo'],
  editors: [],
  year: null,
  publisher: null,
  isbn: null,
  doi: null,
  url: null,
  tags: ['ricerca', 'research']
}
```

## Nuovo servizio

```javascript
{
  id: 'nuovo-servizio',
  title: {it: 'Titolo', en: 'Title'},
  description: {it: 'Descrizione.', en: 'Description.'},
  audience: {it: 'Destinatari.', en: 'Audience.'},
  outputs: {it: 'Output.', en: 'Outputs.'},
  tags: ['servizio', 'service']
}
```

## Nuova collaborazione

```javascript
{
  id: 'ente',
  name: 'Nome ente',
  note: {
    it: 'Descrizione prudente del contesto.',
    en: 'Prudent description of the context.'
  }
}
```
