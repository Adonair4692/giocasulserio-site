window.GSSApp = window.GSSApp || {};
(function (App, G) {
  'use strict';
  let projectFilter = {ownership: 'all', console: 'all'};

  function projectActions(project, includeOpen = true) {
    const pieces = [];
    if (includeOpen) pieces.push(`<a class="card-link card-link-primary" href="${App.escape(App.projectUrl(project))}" data-project-id="${App.escape(project.id)}">${App.escape(App.t('open'))}</a>`);
    (project.actions || []).forEach(action => pieces.push(App.externalLink(action.url, App.local(action.label) || App.statusLabel(action.type), 'card-link')));
    if (!(project.actions || []).some(a => a.url)) pieces.push(`<span class="card-link card-link-disabled" aria-disabled="true">${App.escape(App.t('comingSoon'))}</span>`);
    return pieces.join('');
  }
  function projectCard(project) {
    const console = App.consoleById(project.console);
    return `<article class="project-card reveal" data-project-card data-project-id="${App.escape(project.id)}">
      <div class="card-visual"><img src="${App.escape(project.image)}" alt="" loading="lazy" width="960" height="540"></div>
      <div class="card-body">
        <div class="card-meta"><span class="tag">${App.escape(App.local(console?.label) || project.console)}</span><span class="tag ${project.status === 'coming-soon' ? 'tag-amber' : ''}">${App.escape(App.statusLabel(project.status))}</span></div>
        <h3>${App.escape(App.local(project.title))}</h3>
        <p>${App.escape(App.local(project.summary))}</p>
        <div class="card-actions">${projectActions(project)}</div>
      </div>
    </article>`;
  }
  function publicationCard(pub) {
    const detail = [pub.year, pub.publisher, pub.isbn ? `ISBN ${pub.isbn}` : ''].filter(Boolean).join(' · ');
    return `<article class="publication-card reveal" id="${App.escape(pub.id)}" data-publication-id="${App.escape(pub.id)}">
      <div class="card-meta"><span class="tag ${['editorial-review','in-progress'].includes(pub.status) ? 'tag-amber' : ''}">${App.escape(App.local(pub.subtitle))}</span></div>
      <h3>${App.escape(App.local(pub.title))}</h3>
      <p>${App.escape(App.local(pub.abstract))}</p>
      ${detail ? `<p><small>${App.escape(detail)}</small></p>` : ''}
      <div class="card-actions">${pub.linkedProject ? `<a class="card-link" href="progetto.html?slug=${encodeURIComponent(App.projectById(pub.linkedProject)?.slug || '')}">${App.escape(App.t('open'))}</a>` : ''}${pub.url ? App.externalLink(pub.url, App.t('consult'), 'card-link card-link-primary') : `<span class="card-link card-link-disabled" aria-disabled="true">${App.escape(App.t('comingSoon'))}</span>`}</div>
    </article>`;
  }
  function serviceCard(service) {
    return `<article class="service-card reveal" id="${App.escape(service.id)}" data-service-id="${App.escape(service.id)}">
      <span class="tag">${App.escape(App.t('services'))}</span><h3>${App.escape(App.local(service.title))}</h3><p>${App.escape(App.local(service.description))}</p>
      <div class="service-detail"><strong>${App.state.lang === 'en' ? 'For whom' : 'Destinatari'}</strong>${App.escape(App.local(service.audience))}</div>
      <div class="service-detail"><strong>Output</strong>${App.escape(App.local(service.outputs))}</div>
      <div class="card-actions"><a class="card-link card-link-primary" href="mailto:${App.escape(G.site.email)}?subject=${encodeURIComponent(App.local(service.title))}">${App.escape(App.t('write'))}</a></div>
    </article>`;
  }
  function renderConsoles() {
    const target = document.querySelector('[data-console-grid]');
    if (!target) return;
    target.innerHTML = G.consoles.map((console, index) => `<button class="console-card reveal" type="button" data-code="${App.escape(console.code)}" data-console-id="${App.escape(console.id)}" aria-label="${App.escape(App.local(console.label))}">
      <span class="console-number"><span>SYS-${String(index + 1).padStart(2,'0')}</span><span>ONLINE</span></span>
      <h3>${App.escape(App.local(console.label))}</h3><p>${App.escape(App.local(console.description))}</p><span class="console-line" aria-hidden="true"></span>
    </button>`).join('');
    target.querySelectorAll('[data-console-id]').forEach(btn => btn.addEventListener('click', () => { location.href = `progetti.html?console=${encodeURIComponent(btn.dataset.consoleId)}`; }));
  }
  function renderFeatured() {
    const target = document.querySelector('[data-featured-projects]');
    if (!target) return;
    target.innerHTML = G.projects.filter(p => p.visible && p.featured).slice(0,6).map(projectCard).join('');
  }
  function renderStats() {
    const target = document.querySelector('[data-stats]');
    if (!target) return;
    const visible = G.projects.filter(p => p.visible);
    const stats = [
      [visible.length, App.t('totalProjects')],
      [visible.filter(p => p.ownership === 'institutional').length, App.t('instProjects')],
      [visible.filter(p => p.ownership === 'independent').length, App.t('indieProjects')],
      [G.publications.filter(p => p.visible).length, App.t('totalPubs')],
      [new Set(visible.map(p => p.console)).size, App.t('consolesCount')]
    ];
    target.innerHTML = stats.map(([value,label]) => `<div class="stat reveal"><strong>${App.escape(value)}</strong><span>${App.escape(label)}</span></div>`).join('');
  }
  function renderManualStats() {
    const target = document.querySelector('[data-manual-stats]');
    if (!target) return;
    const keys = [['participants','participants'],['sessions','sessions'],['talks','talks'],['years','years']];
    target.innerHTML = keys.map(([field,label]) => `<div class="stat"><strong>${G.site.manualMetrics[field] == null ? '—' : App.escape(G.site.manualMetrics[field])}</strong><span>${App.escape(App.t(label))} · ${App.escape(App.t('toComplete'))}</span></div>`).join('');
  }
  function renderCollaborations() {
    const target = document.querySelector('[data-collaborations]');
    if (!target) return;
    target.innerHTML = G.collaborations.map((item,index) => `<article class="collab-card reveal"><span class="serial">CTX-${String(index+1).padStart(2,'0')}</span><h3>${App.escape(item.name)}</h3><p>${App.escape(App.local(item.note))}</p></article>`).join('');
  }
  function readProjectFilterFromUrl() {
    const qs = new URLSearchParams(location.search);
    const consoleId = qs.get('console');
    if (G.consoles.some(c => c.id === consoleId)) projectFilter.console = consoleId;
  }
  function renderProjectFilters() {
    const target = document.querySelector('[data-project-filters]');
    if (!target) return;
    const ownerships = [['all',App.t('all')],['institutional',App.t('institutional')],['independent',App.t('independent')]];
    target.innerHTML = `<div class="filters" aria-label="${App.escape(App.t('projects'))}">${ownerships.map(([id,label]) => `<button class="filter-button" type="button" data-ownership-filter="${id}" aria-pressed="${String(projectFilter.ownership === id)}">${App.escape(label)}</button>`).join('')}</div>
      <div class="filters" aria-label="Console">${[['all',App.t('all')],...G.consoles.map(c => [c.id,App.local(c.label)])].map(([id,label]) => `<button class="filter-button" type="button" data-console-filter="${id}" aria-pressed="${String(projectFilter.console === id)}">${App.escape(label)}</button>`).join('')}</div>`;
    target.querySelectorAll('[data-ownership-filter]').forEach(btn => btn.addEventListener('click', () => { projectFilter.ownership = btn.dataset.ownershipFilter; renderProjectArchive(); }));
    target.querySelectorAll('[data-console-filter]').forEach(btn => btn.addEventListener('click', () => { projectFilter.console = btn.dataset.consoleFilter; renderProjectArchive(); }));
  }
  function renderProjectArchive() {
    const target = document.querySelector('[data-project-archive]');
    if (!target) return;
    const items = G.projects.filter(p => p.visible && (projectFilter.ownership === 'all' || p.ownership === projectFilter.ownership) && (projectFilter.console === 'all' || p.console === projectFilter.console));
    target.innerHTML = items.length ? items.map(projectCard).join('') : `<div class="empty-state">${App.escape(App.t('searchNoResults'))}</div>`;
    renderProjectFilters();
    App.initReveal();
  }
  function renderPublications() {
    const target = document.querySelector('[data-publications]');
    if (target) { target.innerHTML = G.publications.filter(p => p.visible).map(publicationCard).join(''); App.initReveal(); }
  }
  function renderServices() {
    const target = document.querySelector('[data-services]');
    if (target) { target.innerHTML = G.services.map(serviceCard).join(''); App.initReveal(); }
  }
  function renderProjectDetail() {
    const host = document.querySelector('[data-project-detail]');
    if (!host) return;
    const slug = new URLSearchParams(location.search).get('slug');
    const project = G.projects.find(p => p.visible && p.slug === slug);
    if (!project) { location.replace('404.html'); return; }
    const console = App.consoleById(project.console);
    document.title = `${App.local(project.title)} | ${G.site.brand}`;
    host.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">${App.escape(App.local(console?.label))}</span><h1>${App.escape(App.local(project.title))}</h1><p>${App.escape(App.local(project.summary))}</p></div></section>
      <section class="section section-dark"><div class="container detail-layout">
        <div class="prose"><div class="detail-visual"><img src="${App.escape(project.image)}" alt="" width="960" height="540"></div>
          <h2>${App.escape(App.t('details'))}</h2><p>${App.escape(App.local(project.description))}</p>
          <h2>${App.escape(App.t('method'))}</h2><p>${App.escape(App.local(project.purpose))}</p>
          <h2>${App.escape(App.t('attribution'))}</h2><p>${App.escape(App.local(project.attribution))}</p>
          ${project.linkedPublications?.length ? `<h2>${App.escape(App.t('linkedPublications'))}</h2>${project.linkedPublications.map(id => { const pub = App.publicationById(id); return pub ? `<p><a href="ricerca-pubblicazioni.html#${App.escape(pub.id)}">${App.escape(App.local(pub.title))}</a></p>` : ''; }).join('')}` : ''}
        </div>
        <aside class="detail-sidebar" aria-label="${App.escape(App.t('details'))}"><dl>
          <dt>${App.escape(App.t('console'))}</dt><dd>${App.escape(App.local(console?.label))}</dd>
          <dt>${App.escape(App.t('ownership'))}</dt><dd>${App.escape(App.ownershipLabel(project.ownership))}</dd>
          <dt>${App.escape(App.t('status'))}</dt><dd>${App.escape(App.statusLabel(project.status))}</dd>
          ${App.local(project.institution) ? `<dt>${App.escape(App.t('institution'))}</dt><dd>${App.escape(App.local(project.institution))}</dd>` : ''}
        </dl><div class="card-actions">${projectActions(project, false)}<button type="button" class="card-link" data-copy-link>${App.escape(App.t('copyLink'))}</button></div></aside>
      </div></section>`;
    host.querySelector('[data-copy-link]')?.addEventListener('click', App.copyCurrentLink);
  }
  function renderAboutLinks() {
    document.querySelectorAll('[data-linkedin]').forEach(a => a.href = G.site.linkedin);
    document.querySelectorAll('[data-orcid]').forEach(a => { a.href = `https://orcid.org/${G.site.orcid}`; a.textContent = G.site.orcid; });
    document.querySelectorAll('[data-email]').forEach(a => { a.href = `mailto:${G.site.email}`; a.textContent = G.site.email; });
  }
  function renderAll() {
    renderConsoles(); renderFeatured(); renderStats(); renderManualStats(); renderCollaborations();
    if (document.querySelector('[data-project-archive]')) { readProjectFilterFromUrl(); renderProjectArchive(); }
    renderPublications(); renderServices(); renderProjectDetail(); renderAboutLinks(); App.initReveal();
  }
  App.render = {renderAll, projectCard, publicationCard, serviceCard};
  window.addEventListener('gss:languagechange', renderAll);
})(window.GSSApp, window.GSS || {});
