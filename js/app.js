document.documentElement.classList.add('js');
window.addEventListener('DOMContentLoaded', () => {
  const App = window.GSSApp;
  App.bootCore();
  App.search.init();
  App.score.init();
  document.querySelectorAll('[data-dialog-close]').forEach(button => button.addEventListener('click', () => App.closeDialog(button.closest('.dialog-backdrop'))));
  if ('serviceWorker' in navigator && /(^|\.)giocasulserio\.it$/i.test(location.hostname)) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  }
});
