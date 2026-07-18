# Manuale operativo — Gioca sul Serio

Questo manuale permette di gestire il sito senza ricostruire le pagine HTML. Prima di modificare, crea sempre una copia o un commit GitHub.

## 1. Struttura delle cartelle

- `*.html`: pagine del sito.
- `css/style.css`: aspetto, responsive e animazioni.
- `js/data/`: contenuti modificabili.
- `js/core.js`: lingua, menu, dialog e funzioni comuni.
- `js/render.js`: genera card, filtri e schede.
- `js/search.js`: ricerca globale.
- `js/score.js`: gamification.
- `assets/`: icone, immagini e copertine.
- `_headers`: sicurezza su Cloudflare Pages.
- `service-worker.js`: cache PWA in produzione.

## 2. Apertura in SPCK

1. Estrai lo ZIP sul dispositivo.
2. In SPCK scegli di importare/aprire una cartella.
3. Seleziona `giocasulserio-site-v2`.
4. Apri `index.html`.
5. Premi il triangolo **Preview**.
6. Non aprire `404.html` come pagina iniziale.

Il service worker non si attiva nell’anteprima SPCK, quindi le modifiche devono apparire senza cache persistente.

## 3. Modificare testi generali

- Claim, email, ORCID, LinkedIn, soglia punteggio e numeri manuali: `js/data/site-content.js`.
- Testi delle singole pagine: cerca il testo nel relativo file HTML.
- Etichette comuni IT/EN: oggetto `window.GSS.ui` in `site-content.js`.

Mantieni sempre entrambe le lingue.

## 4. Aggiungere un progetto

1. Apri `MODELLI_DA_COPIARE.md`.
2. Copia il modello “Nuovo progetto”.
3. Apri `js/data/projects.js`.
4. Incolla il blocco prima di `];`.
5. Aggiungi una virgola tra il progetto precedente e quello nuovo.
6. Usa un `id` e uno `slug` unici, minuscoli e senza spazi.
7. Inserisci una copertina in `assets/projects/`.
8. Verifica `progetti.html`, ricerca e homepage.

## 5. Modificare un progetto

Cerca in `projects.js`:

```javascript
// INIZIO PROGETTO: nome-progetto
```

Modifica soltanto il blocco compreso fino a `// FINE PROGETTO`. Non rinominare `id` o `slug` dopo la pubblicazione senza aggiornare i link condivisi.

## 6. Nascondere un progetto

Imposta:

```javascript
visible: false
```

Il progetto scompare da archivio, ricerca, numeri e homepage, ma resta nel codice.

## 7. Ripristinare un progetto

Riporta:

```javascript
visible: true
```

Controlla che immagine e link esistano ancora.

## 8. Eliminare definitivamente un progetto

1. Verifica se è collegato a pubblicazioni tramite `linkedProject` o `linkedPublications`.
2. Elimina l’intero blocco tra i commenti INIZIO/FINE.
3. Elimina la copertina solo se non è usata altrove.
4. Rimuovi eventuali URL dal TODO.
5. Controlla sintassi e virgole.

Nascondere è più sicuro che eliminare.

## 9. Spostare tra istituzionale e indipendente

Usa:

```javascript
ownership: 'institutional'
```

oppure:

```javascript
ownership: 'independent'
```

Aggiorna anche `attribution` e `institution` per evitare ambiguità.

## 10. Cambiare console

Valori ammessi:

- `ttx`
- `wargame`
- `boardgame`
- `ssg`
- `indie`

Esempio:

```javascript
console: 'ssg'
```

La card, i filtri e la ricerca si aggiornano automaticamente.

## 11. Inserire Gioca

Nel campo `actions` usa il modello “Link Gioca”. Inserisci soltanto URL esterni verificati. Imposta anche, se opportuno:

```javascript
status: 'play'
```

## 12. Inserire Consulta

Usa `type: 'consult'` e un URL esterno al documento, pubblicazione o pagina. Imposta `status: 'consult'`.

## 13. Inserire Acquista

Usa `type: 'buy'` con URL dello store esterno. Il sito non gestisce pagamenti. Imposta `status: 'buy'`.

## 14. Aggiungere più punti vendita

Inserisci più oggetti nel vettore `actions`, separati da virgola. Specifica nel `label` dove porta ciascun pulsante: edizione digitale, fisica, editore o store.

## 15. Sostituire immagini dei progetti

1. Esporta preferibilmente WebP, AVIF o SVG.
2. Usa un nome semplice, ad esempio `widemed.webp`.
3. Salva in `assets/projects/`.
4. Modifica il campo `image`.
5. Aggiorna `REGISTRO_ASSET_E_LICENZE.md`.
6. Mantieni un rapporto vicino a 16:9 per le card.

## 16. Sostituire la foto personale

1. Salva la fotografia originale in `assets/images/`.
2. Apri `chi-sono.html`.
3. Cerca `adriano-pantaleo-placeholder.svg`.
4. Sostituisci il percorso con il nuovo file.
5. Aggiorna il testo `alt`.
6. Registra fonte e diritti.

## 17. Sostituire favicon e cigno

File attuali:

- `assets/icons/swan.svg`
- `assets/icons/favicon.svg`
- `assets/icons/mask-icon.svg`

Puoi sovrascriverli mantenendo gli stessi nomi. Verifica che il nuovo SVG sia semplice, leggibile e privo di script incorporati.

## 18. Aggiungere una pubblicazione

Copia il modello in `MODELLI_DA_COPIARE.md` e incollalo in `js/data/publications.js`. Compila solo dati certi. Lascia `null` ciò che non è noto.

Per collegarla a un progetto:

```javascript
linkedProject: 'id-progetto'
```

Nel progetto aggiungi l’ID a `linkedPublications`.

## 19. Aggiornare i numeri

I numeri di progetti, categorie, pubblicazioni e console sono automatici.

I numeri manuali sono in `js/data/site-content.js`:

```javascript
manualMetrics: {
  participants: null,
  sessions: null,
  talks: null,
  years: null
}
```

Sostituisci `null` solo con valori documentabili.

## 20. Modificare italiano e inglese

Ogni contenuto dati usa:

```javascript
{it: 'Testo italiano', en: 'English text'}
```

Per testi statici nelle pagine HTML sono usati attributi `data-local-it` e `data-local-en`. Mantieni il testo italiano anche tra i tag come fallback senza JavaScript.

## 21. Aggiornare la ricerca

La ricerca indicizza automaticamente progetti, pubblicazioni, servizi e collaborazioni. Per rendere un contenuto trovabile:

- compila titolo e descrizione;
- aggiungi sinonimi in `tags`;
- usa nomi di enti e luoghi nel campo corretto;
- inserisci termini sia italiani sia inglesi quando utili.

Non modificare `js/search.js` per aggiungere un semplice contenuto.

## 22. Modificare il Black Swan Score

Apri `js/score.js`. Le assegnazioni sono nelle chiamate `award(...)`:

- console: 5;
- progetto: 10;
- pubblicazione: 15;
- link esterno: 20;
- servizio/ricerca: 10;
- footer: 10.

Mantieni la deduplicazione: la chiave del primo argomento impedisce punti ripetuti.

## 23. Modificare la soglia di platinatura

Apri `js/data/site-content.js` e cambia:

```javascript
platinumScore: 130
```

Dopo la modifica, prova un nuovo ciclo cancellando il localStorage o premendo “Azzera e rigioca”.

## 24. Modificare i suoni

I suoni sono sintetizzati in `js/score.js`, funzione `tone`. Puoi cambiare frequenze e durata nell’oggetto `map`. Non aumentare troppo volume o durata. I suoni devono restare facoltativi e disattivati inizialmente.

## 25. Pubblicare su GitHub

1. Crea un repository, preferibilmente privato durante lo sviluppo.
2. In SPCK collega GitHub o esporta i file e caricali dal sito GitHub.
3. Inserisci tutti i file della cartella nella radice del repository.
4. Crea un commit descrittivo, ad esempio `Prima versione sito`.
5. Non inserire password, token o chiavi API.

Ricorda: anche con repository privato, HTML, CSS e JavaScript pubblicati sono leggibili dal browser.

## 26. Collegare Cloudflare Pages

1. Apri Cloudflare Dashboard.
2. Vai a Workers & Pages e crea un progetto Pages collegato al repository GitHub.
3. Seleziona il branch principale.
4. Framework preset: nessuno.
5. Build command: lascia vuoto.
6. Output directory: `/` oppure la radice indicata dall’interfaccia.
7. Pubblica e prova l’URL `pages.dev`.
8. Aggiungi il dominio personalizzato soltanto dopo il collaudo.
9. Attiva Cloudflare Web Analytics dal pannello e verifica la Privacy Policy.

Le etichette dell’interfaccia possono cambiare; non modificare record email durante il collegamento.

## 27. Aggiornare il sito

1. Modifica i file in SPCK.
2. Prova `index.html` e le pagine interessate.
3. Esegui la checklist.
4. Crea un nuovo commit e invialo a GitHub.
5. Cloudflare Pages pubblicherà il nuovo deployment.
6. Controlla il deployment di anteprima prima del dominio pubblico quando possibile.

## 28. Ripristinare una versione precedente

Su GitHub puoi:

- aprire la cronologia dei commit;
- individuare l’ultima versione funzionante;
- fare revert del commit errato;
- oppure ripristinare i singoli file.

Cloudflare Pages conserva deployment precedenti che possono essere consultati o ripubblicati secondo le opzioni disponibili nel pannello.

## 29. Evitare problemi di cache

- In SPCK il service worker non viene registrato.
- In produzione le pagine HTML usano strategia network-first.
- Quando modifichi il service worker cambia il valore `CACHE`.
- Se una vecchia versione resta visibile, prova una finestra privata o cancella dati del sito.
- Non impostare cache immutabile per file HTML.
- Dopo modifiche importanti verifica sia `www` sia dominio canonico.

## 30. Verificare email e DNS

Prima di collegare il nuovo sito:

1. Esporta o fotografa tutti i record DNS Cloudflare.
2. Identifica i record del sito e quelli della posta.
3. **Non cancellare o modificare MX, SPF, DKIM e DMARC.**
4. Invia un messaggio a `info@giocasulserio.it` e rispondi.
5. Collega Cloudflare Pages al dominio.
6. Ripeti test di invio e ricezione.
7. Disattiva il SiteBuilder di Register soltanto quando sito e posta funzionano.

Il dominio può restare registrato presso Register.it mentre il sito è ospitato su Cloudflare Pages.

---

## Controllo rapido dopo ogni modifica

- anteprima mobile;
- console e card visibili;
- ricerca del nuovo titolo;
- link esterni corretti;
- italiano e inglese;
- nessun errore di sintassi;
- nessuna informazione riservata;
- registro asset aggiornato.
