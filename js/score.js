window.GSSApp = window.GSSApp || {};
(function (App, G) {
  'use strict';
  const KEY = 'gss-black-swan-v2';
  const PREF_KEY = 'gss-experience-choice-v2';
  const EMPTY = () => ({
    enabled: false, sound: false, score: 0, awarded: {}, consoles: [], projects: [], publications: [], sections: [], actions: [],
    startedAt: Date.now(), expiresAt: Date.now() + (G.site.scoreLifetimeDays || 7) * 86400000, platinumShown: false
  });
  let data = EMPTY();
  let audio = null;

  function load() {
    try {
      const stored = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (stored && stored.expiresAt > Date.now()) data = Object.assign(EMPTY(), stored);
      else localStorage.removeItem(KEY);
    } catch (_) { localStorage.removeItem(KEY); }
    return data;
  }
  function save() { if (data.enabled) localStorage.setItem(KEY, JSON.stringify(data)); }
  function updateUI() {
    document.querySelectorAll('[data-score-value]').forEach(el => { el.textContent = String(data.enabled ? data.score : 0); });
    document.querySelectorAll('[data-score-state]').forEach(el => { el.textContent = data.enabled ? App.t('scoringOn') : App.t('scoringOff'); });
    document.querySelectorAll('[data-sound-state]').forEach(el => { el.textContent = data.sound ? App.t('soundOn') : App.t('soundOff'); });
    const profile = getProfile();
    document.querySelectorAll('[data-profile-name]').forEach(el => { el.textContent = profile.name; });
    document.querySelectorAll('[data-profile-text]').forEach(el => { el.textContent = profile.text; });
  }
  function tone(kind = 'select') {
    if (!data.sound) return;
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      const map = {select: [420, .045], open: [560, .055], score: [700, .07], platinum: [880, .22]};
      const [freq, duration] = map[kind] || map.select;
      osc.type = kind === 'platinum' ? 'triangle' : 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(.0001, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(.06, audio.currentTime + .01);
      gain.gain.exponentialRampToValueAtTime(.0001, audio.currentTime + duration);
      osc.connect(gain); gain.connect(audio.destination); osc.start(); osc.stop(audio.currentTime + duration + .02);
    } catch (_) { /* Audio is optional. */ }
  }
  function mark(type, id) {
    const bucket = data[type];
    if (Array.isArray(bucket) && !bucket.includes(id)) bucket.push(id);
  }
  function award(key, points, type, id) {
    if (!data.enabled || data.awarded[key]) return false;
    data.awarded[key] = true;
    data.score += points;
    if (type && id) mark(type, id);
    save(); updateUI(); tone(points >= 15 ? 'score' : 'select');
    const live = document.querySelector('[data-score-live]');
    if (live) live.textContent = `+${points} · ${App.t('scoreLabel')} ${data.score}`;
    if (data.score >= (G.site.platinumScore || 130) && !data.platinumShown) showPlatinum();
    return true;
  }
  function profileText(nameKey) {
    const texts = {
      observer: {it: 'Hai seguito pochi segnali, scegliendo un percorso molto selettivo.', en: 'You followed a few signals through a highly selective path.'},
      explorer: {it: 'Hai attraversato più sistemi e confrontato approcci differenti.', en: 'You crossed multiple systems and compared different approaches.'},
      strategic: {it: 'Hai approfondito progetti e connessioni con attenzione alle conseguenze.', en: 'You explored projects and connections with attention to consequences.'},
      systems: {it: 'Il tuo percorso privilegia sistemi, scenari istituzionali e interdipendenze.', en: 'Your path favours systems, institutional scenarios and interdependencies.'},
      researcher: {it: 'Hai seguito soprattutto pubblicazioni, metodo ed evidenze.', en: 'You mainly followed publications, methods and evidence.'},
      designer: {it: 'Hai esplorato servizi, metodo e logiche di progettazione.', en: 'You explored services, methods and design logics.'},
      hunter: {it: 'Hai attraversato l’archivio in profondità, collegando formati, ricerca e scenari.', en: 'You explored the archive deeply, connecting formats, research and scenarios.'}
    };
    return App.local(texts[nameKey]);
  }
  function getProfile() {
    if (!data.enabled || data.score < 20) return {key: 'observer', name: App.state.lang === 'en' ? 'Prudent observer' : 'Osservatore prudente', text: profileText('observer')};
    if (data.score >= (G.site.platinumScore || 130)) return {key: 'hunter', name: App.state.lang === 'en' ? 'Black swan hunter' : 'Cacciatore di cigni neri', text: profileText('hunter')};
    const pubCount = data.publications.length;
    const serviceCount = data.sections.filter(x => x === 'services').length + Object.keys(data.awarded).filter(x => x.startsWith('service:')).length;
    const instCount = data.projects.map(App.projectById).filter(p => p && p.ownership === 'institutional').length;
    if (pubCount >= 2) return {key: 'researcher', name: App.state.lang === 'en' ? 'Researcher' : 'Ricercatore', text: profileText('researcher')};
    if (serviceCount >= 2) return {key: 'designer', name: App.state.lang === 'en' ? 'Design strategist' : 'Stratega progettuale', text: profileText('designer')};
    if (instCount >= 3) return {key: 'systems', name: App.state.lang === 'en' ? 'Systems analyst' : 'Analista di sistemi', text: profileText('systems')};
    if (data.score >= 80) return {key: 'strategic', name: App.state.lang === 'en' ? 'Strategic analyst' : 'Analista strategico', text: profileText('strategic')};
    return {key: 'explorer', name: App.state.lang === 'en' ? 'Scenario explorer' : 'Esploratore di scenari', text: profileText('explorer')};
  }
  function showPlatinum() {
    data.platinumShown = true; save(); tone('platinum');
    const dialog = document.querySelector('[data-platinum-dialog]');
    App.openDialog(dialog);
  }
  function reset() {
    localStorage.removeItem(KEY); localStorage.removeItem(PREF_KEY); data = EMPTY(); updateUI();
  }
  function choose(enabled, sound) {
    data = EMPTY(); data.enabled = enabled; data.sound = Boolean(sound); data.expiresAt = Date.now() + (G.site.scoreLifetimeDays || 7) * 86400000;
    localStorage.setItem(PREF_KEY, enabled ? 'score' : 'no-score');
    if (enabled) save();
    updateUI();
  }
  function openProfile() {
    const dialog = document.querySelector('[data-profile-dialog]'); updateUI(); App.openDialog(dialog);
  }
  function openSettings() {
    const dialog = document.querySelector('[data-settings-dialog]');
    const scoreToggle = dialog && dialog.querySelector('[data-setting-score]');
    const soundToggle = dialog && dialog.querySelector('[data-setting-sound]');
    if (scoreToggle) scoreToggle.checked = data.enabled;
    if (soundToggle) soundToggle.checked = data.sound;
    App.openDialog(dialog);
  }
  function initDialogs() {
    document.querySelectorAll('.dialog-backdrop').forEach(App.trapDialog);
    document.querySelectorAll('[data-dialog-close]').forEach(btn => btn.addEventListener('click', () => App.closeDialog(btn.closest('.dialog-backdrop'))));
    document.querySelectorAll('.dialog-backdrop').forEach(bg => bg.addEventListener('mousedown', e => { if (e.target === bg && !bg.hasAttribute('data-lock-dialog')) App.closeDialog(bg); }));

    const intro = document.querySelector('[data-intro-dialog]');
    if (intro && !new URLSearchParams(location.search).has('preview') && !localStorage.getItem(PREF_KEY)) App.openDialog(intro);
    document.querySelector('[data-start-score]')?.addEventListener('click', () => {
      const sound = Boolean(intro.querySelector('[data-intro-sound]')?.checked); choose(true, sound); App.closeDialog(intro); tone('open');
    });
    document.querySelector('[data-start-no-score]')?.addEventListener('click', () => {
      const sound = Boolean(intro.querySelector('[data-intro-sound]')?.checked); choose(false, sound); data.sound = sound; App.closeDialog(intro); tone('open');
    });
    document.querySelectorAll('[data-open-profile]').forEach(btn => btn.addEventListener('click', openProfile));
    document.querySelectorAll('[data-open-settings]').forEach(btn => btn.addEventListener('click', openSettings));
    document.querySelectorAll('[data-reset-score]').forEach(btn => btn.addEventListener('click', () => { reset(); App.closeDialog(btn.closest('.dialog-backdrop')); App.toast(App.t('reset')); }));
    document.querySelector('[data-save-settings]')?.addEventListener('click', event => {
      const dialog = event.target.closest('.dialog-backdrop');
      const enabled = Boolean(dialog.querySelector('[data-setting-score]')?.checked);
      const sound = Boolean(dialog.querySelector('[data-setting-sound]')?.checked);
      if (enabled && !data.enabled) choose(true, sound); else { data.enabled = enabled; data.sound = sound; if (enabled) save(); else localStorage.removeItem(KEY); updateUI(); }
      localStorage.setItem(PREF_KEY, enabled ? 'score' : 'no-score'); App.closeDialog(dialog); tone('select');
    });
    document.querySelector('[data-platinum-profile]')?.addEventListener('click', event => { App.closeDialog(event.target.closest('.dialog-backdrop')); openProfile(); });
  }
  function initInteractionScoring() {
    document.addEventListener('click', event => {
      const consoleBtn = event.target.closest('[data-console-id]');
      if (consoleBtn) award(`console:${consoleBtn.dataset.consoleId}`, 5, 'consoles', consoleBtn.dataset.consoleId);
      const project = event.target.closest('[data-project-id]');
      if (project) award(`project:${project.dataset.projectId}`, 10, 'projects', project.dataset.projectId);
      const publication = event.target.closest('[data-publication-id]');
      if (publication) award(`publication:${publication.dataset.publicationId}`, 15, 'publications', publication.dataset.publicationId);
      const action = event.target.closest('[data-external-action]');
      if (action) award(`external:${action.href}`, 20, 'actions', action.href);
    });
    const page = document.body.dataset.page;
    if (page === 'project-detail') {
      const slug = new URLSearchParams(location.search).get('slug');
      if (slug) award(`detail:${slug}`, 15, 'sections', `detail:${slug}`);
    }
    if (page === 'services') award('section:services', 10, 'sections', 'services');
    if (page === 'research') award('section:research', 10, 'sections', 'research');
    const footer = document.querySelector('.site-footer');
    if (footer && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { award('footer', 10, 'sections', 'footer'); obs.disconnect(); } }, {threshold: .35});
      obs.observe(footer);
    }
  }
  function init() { load(); updateUI(); initDialogs(); initInteractionScoring(); }

  App.score = {init, award, reset, getProfile, getData: () => data, updateUI, tone, openProfile, openSettings};
  window.addEventListener('gss:languagechange', updateUI);
})(window.GSSApp, window.GSS || {});
