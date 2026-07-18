window.GSSApp = window.GSSApp || {};
(function (App, G) {
  'use strict';
  const state = App.state = App.state || { lang: 'it' };
  const LANG_KEY = 'gss-language';

  App.local = function (value, lang = state.lang) {
    if (value == null) return '';
    if (typeof value === 'string' || typeof value === 'number') return String(value);
    return value[lang] || value.it || value.en || '';
  };
  App.t = function (key) { return (G.ui[state.lang] && G.ui[state.lang][key]) || (G.ui.it && G.ui.it[key]) || key; };
  App.escape = function (value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  };
  App.normalize = function (value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  };
  App.getLanguage = function () {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'it' || saved === 'en') return saved;
    return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'it';
  };
  App.setLanguage = function (lang, persist = true) {
    state.lang = lang === 'en' ? 'en' : 'it';
    document.documentElement.lang = state.lang;
    if (persist) localStorage.setItem(LANG_KEY, state.lang);
    document.querySelectorAll('[data-lang]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === state.lang)));
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = App.t(node.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.setAttribute('placeholder', App.t(node.dataset.i18nPlaceholder)); });
    document.querySelectorAll('[data-local-it]').forEach(node => { node.textContent = node.dataset[`local${state.lang === 'en' ? 'En' : 'It'}`] || node.dataset.localIt || ''; });
    window.dispatchEvent(new CustomEvent('gss:languagechange', {detail: {lang: state.lang}}));
  };
  App.externalLink = function (url, label, className = 'card-link') {
    if (!url) return `<span class="${className} card-link-disabled" aria-disabled="true">${App.escape(label || App.t('comingSoon'))}</span>`;
    return `<a class="${className}" href="${App.escape(url)}" target="_blank" rel="noopener noreferrer" data-external-action>${App.escape(label)}<span class="sr-only"> — ${App.escape(App.t('newWindow'))}</span></a>`;
  };
  App.projectUrl = function (project) { return `progetto.html?slug=${encodeURIComponent(project.slug)}`; };
  App.consoleById = function (id) { return (G.consoles || []).find(item => item.id === id); };
  App.projectById = function (id) { return (G.projects || []).find(item => item.id === id); };
  App.publicationById = function (id) { return (G.publications || []).find(item => item.id === id); };
  App.statusLabel = function (status) {
    const map = {consult: 'consult', play: 'play', buy: 'buy', 'coming-soon': 'comingSoon', published: 'consult', 'editorial-review': 'comingSoon', 'in-progress': 'comingSoon', research: 'consult'};
    return App.t(map[status] || 'comingSoon');
  };
  App.ownershipLabel = function (ownership) { return ownership === 'independent' ? App.t('independent') : App.t('institutional'); };

  App.initMenu = function () {
    const toggle = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-main-nav]');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a') && matchMedia('(max-width: 900px)').matches) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  };

  App.initReveal = function () {
    const items = [...document.querySelectorAll('.reveal')];
    if (!items.length) return;
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {rootMargin: '0px 0px -8% 0px', threshold: .08});
    items.forEach(item => observer.observe(item));
  };

  App.openDialog = function (backdrop) {
    if (!backdrop) return;
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('dialog-open');
    const focusables = App.getFocusable(backdrop);
    (focusables[0] || backdrop).focus();
  };
  App.closeDialog = function (backdrop) {
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('dialog-open');
  };
  App.getFocusable = function (root) {
    return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('hidden'));
  };
  App.trapDialog = function (backdrop) {
    backdrop.addEventListener('keydown', event => {
      if (event.key === 'Escape') { App.closeDialog(backdrop); return; }
      if (event.key !== 'Tab') return;
      const focusables = App.getFocusable(backdrop);
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  };
  App.toast = function (message) {
    const el = document.querySelector('[data-toast]');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(App.toastTimer);
    App.toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  };
  App.copyCurrentLink = async function () {
    try { await navigator.clipboard.writeText(location.href); App.toast(App.t('copied')); }
    catch (_) { App.toast(location.href); }
  };
  App.initLanguageButtons = function () {
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => App.setLanguage(button.dataset.lang)));
  };
  App.initStaticActions = function () {
    document.querySelectorAll('[data-copy-link]').forEach(btn => btn.addEventListener('click', App.copyCurrentLink));
  };
  App.updateYear = function () { document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); }); };
  App.enableAnalytics = function () {
    if (!/giocasulserio\.it$/i.test(location.hostname) && !/\.giocasulserio\.it$/i.test(location.hostname)) return;
    if (document.querySelector('script[data-cf-beacon]')) return;
    // Inserire qui il token Cloudflare Web Analytics quando disponibile.
  };

  App.bootCore = function () {
    App.initMenu();
    App.initLanguageButtons();
    App.initStaticActions();
    App.updateYear();
    App.setLanguage(App.getLanguage(), false);
    App.initReveal();
    App.enableAnalytics();
  };
})(window.GSSApp, window.GSS || {});
