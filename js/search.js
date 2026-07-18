window.GSSApp = window.GSSApp || {};
(function (App, G) {
  'use strict';
  let currentFilter = 'all';

  function searchBlob(item, type) {
    const parts = [type, item.id, item.slug, item.status, item.ownership, item.console, item.title?.it, item.title?.en, item.summary?.it, item.summary?.en, item.description?.it, item.description?.en, item.abstract?.it, item.abstract?.en, item.subtitle?.it, item.subtitle?.en, item.type?.it, item.type?.en, item.institution?.it, item.institution?.en, ...(item.tags || []), ...(item.authors || []), ...(item.editors || [])];
    return App.normalize(parts.filter(Boolean).join(' '));
  }
  function buildIndex() {
    const projects = (G.projects || []).filter(x => x.visible).map(item => ({kind: 'project', item, blob: searchBlob(item, 'project progetto istituzionale indipendente')}));
    const publications = (G.publications || []).filter(x => x.visible).map(item => ({kind: 'publication', item, blob: searchBlob(item, 'publication pubblicazione research ricerca libro book')}));
    const services = (G.services || []).map(item => ({kind: 'service', item, blob: searchBlob(item, 'service servizio')}));
    const collaborations = (G.collaborations || []).map(item => ({kind: 'collaboration', item, blob: App.normalize([item.name, item.note?.it, item.note?.en, 'collaboration collaborazione'].join(' '))}));
    return [...projects, ...publications, ...services, ...collaborations];
  }
  function matchesFilter(entry, filter) {
    const item = entry.item;
    if (filter === 'all') return true;
    if (filter === 'projects') return entry.kind === 'project';
    if (filter === 'publications') return entry.kind === 'publication';
    if (filter === 'services') return entry.kind === 'service';
    if (filter === 'institutional') return entry.kind === 'project' && item.ownership === 'institutional';
    if (filter === 'independent') return entry.kind === 'project' && item.ownership === 'independent';
    if (filter === 'buyable') return entry.kind === 'project' && (item.actions || []).some(a => a.type === 'buy' && a.url);
    if (filter === 'coming') return (entry.kind === 'project' && item.status === 'coming-soon') || (entry.kind === 'publication' && ['editorial-review','in-progress'].includes(item.status));
    return true;
  }
  function search(query, filter = 'all') {
    const terms = App.normalize(query).split(/\s+/).filter(Boolean);
    return buildIndex().filter(entry => matchesFilter(entry, filter) && (!terms.length || terms.every(term => entry.blob.includes(term))));
  }
  function labels(entry) {
    if (entry.kind === 'project') return {meta: `${App.local(App.consoleById(entry.item.console)?.label)} · ${App.ownershipLabel(entry.item.ownership)}`, text: App.local(entry.item.summary), url: App.projectUrl(entry.item)};
    if (entry.kind === 'publication') return {meta: App.t('publications'), text: App.local(entry.item.abstract), url: `ricerca-pubblicazioni.html#${entry.item.id}`};
    if (entry.kind === 'service') return {meta: App.t('services'), text: App.local(entry.item.description), url: `servizi.html#${entry.item.id}`};
    return {meta: App.t('collaborations'), text: App.local(entry.item.note), url: 'index.html#collaborazioni'};
  }
  function titleOf(entry) { return entry.item.name || App.local(entry.item.title); }
  function actions(entry) {
    const item = entry.item;
    if (entry.kind !== 'project') return '';
    return (item.actions || []).filter(a => a.url).map(a => App.externalLink(a.url, App.local(a.label) || App.statusLabel(a.type), 'card-link')).join('');
  }
  function renderResults(target, query, filter = currentFilter) {
    if (!target) return;
    const results = search(query, filter);
    target.setAttribute('aria-busy', 'false');
    if (!results.length) { target.innerHTML = `<div class="empty-state">${App.escape(App.t('searchNoResults'))}</div>`; return; }
    target.innerHTML = results.map(entry => {
      const info = labels(entry);
      return `<article class="search-result">
        <div><span class="tag">${App.escape(info.meta)}</span><h3>${App.escape(titleOf(entry))}</h3><p>${App.escape(info.text)}</p></div>
        <div class="card-actions"><a class="card-link card-link-primary" href="${App.escape(info.url)}">${App.escape(App.t('open'))}</a>${actions(entry)}</div>
      </article>`;
    }).join('');
  }
  function initPanel() {
    const panel = document.querySelector('[data-search-panel]');
    const input = panel?.querySelector('[data-global-search-input]');
    const results = panel?.querySelector('[data-global-search-results]');
    if (!panel || !input || !results) return;
    document.querySelectorAll('[data-open-search]').forEach(btn => btn.addEventListener('click', () => {
      panel.classList.add('is-open'); panel.setAttribute('aria-hidden', 'false'); document.body.classList.add('dialog-open'); input.focus(); renderResults(results, input.value);
    }));
    panel.querySelector('[data-close-search]')?.addEventListener('click', () => { panel.classList.remove('is-open'); panel.setAttribute('aria-hidden', 'true'); document.body.classList.remove('dialog-open'); });
    panel.addEventListener('keydown', event => { if (event.key === 'Escape') { panel.classList.remove('is-open'); panel.setAttribute('aria-hidden', 'true'); document.body.classList.remove('dialog-open'); } });
    input.addEventListener('input', () => renderResults(results, input.value));
    panel.querySelectorAll('[data-search-filter]').forEach(btn => btn.addEventListener('click', () => {
      currentFilter = btn.dataset.searchFilter;
      panel.querySelectorAll('[data-search-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      renderResults(results, input.value, currentFilter);
    }));
  }
  function initPage() {
    const input = document.querySelector('[data-page-search]');
    const select = document.querySelector('[data-page-search-filter]');
    const results = document.querySelector('[data-page-search-results]');
    if (!input || !results) return;
    const run = () => renderResults(results, input.value, select?.value || 'all');
    input.addEventListener('input', run); select?.addEventListener('change', run); run();
  }
  function init() { initPanel(); initPage(); }
  App.search = {init, search, renderResults};
  window.addEventListener('gss:languagechange', () => {
    const panelInput = document.querySelector('[data-global-search-input]');
    if (panelInput) renderResults(document.querySelector('[data-global-search-results]'), panelInput.value, currentFilter);
    const pageInput = document.querySelector('[data-page-search]');
    if (pageInput) renderResults(document.querySelector('[data-page-search-results]'), pageInput.value, document.querySelector('[data-page-search-filter]')?.value || 'all');
  });
})(window.GSSApp, window.GSS || {});
