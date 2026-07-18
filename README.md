# Gioca sul Serio — sito statico v2

Nuovo sito di **Adriano Pantaleo – Gioca sul Serio**, costruito da zero in HTML, CSS e JavaScript vanilla.

## Avvio rapido in SPCK Editor

1. Estrai lo ZIP.
2. Importa la cartella `giocasulserio-site-v2` come progetto.
3. Apri `index.html`.
4. Premi **▶ Preview**.
5. Alla prima apertura scegli se usare il Black Swan Score e se attivare i suoni.

La hero è visibile subito e non dipende dallo scroll. Il service worker viene registrato soltanto sul dominio `giocasulserio.it`, quindi non interferisce con l’anteprima SPCK.

## Tecnologie

- HTML semantico
- CSS responsive senza framework
- JavaScript vanilla
- archivio centrale in `js/data/`
- Web Audio API per micro-suoni sintetici
- localStorage facoltativo per Black Swan Score e lingua
- predisposizione Cloudflare Pages e Web Analytics
- PWA leggera con cache versionata

## File principali

- `index.html`: homepage
- `progetti.html`: archivio filtrabile
- `progetto.html`: pagina dinamica del singolo progetto
- `ricerca-pubblicazioni.html`: pubblicazioni
- `servizi.html`: servizi
- `chi-sono.html`: profilo
- `contatti.html`: contatti
- `cerca.html`: ricerca globale
- `js/data/projects.js`: progetti
- `js/data/publications.js`: pubblicazioni
- `js/data/services.js`: servizi
- `js/data/collaborations.js`: collaborazioni
- `css/style.css`: stile e responsive
- `js/score.js`: Black Swan Score
- `js/search.js`: ricerca interna
- `_headers`: sicurezza Cloudflare Pages
- `service-worker.js`: PWA, attiva solo in produzione

## Prima di pubblicare

Leggi nell’ordine:

1. `PROJECT_LINKS_TODO.md`
2. `ISTRUZIONI_GESTIONE_SITO.md`
3. `CHECKLIST_PUBBLICAZIONE.md`
4. `REGISTRO_ASSET_E_LICENZE.md`

## Limiti intenzionali della prima versione

- nessuna fotografia o logo istituzionale;
- nessun checkout o pagamento interno;
- nessun modulo server;
- link esterni non disponibili lasciati come “Prossimamente”;
- Cloudflare Web Analytics predisposto ma richiede attivazione dal pannello Cloudflare;
- privacy e note legali sono bozze tecniche da verificare prima della messa online definitiva.
