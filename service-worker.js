const CACHE = 'gss-static-v2-20260718';
const CORE = [
  '/', '/index.html', '/progetti.html', '/ricerca-pubblicazioni.html', '/servizi.html', '/chi-sono.html', '/contatti.html', '/cerca.html',
  '/css/style.css', '/assets/icons/favicon.svg', '/assets/icons/swan.svg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const request = event.request;
  const isPage = request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html');
  if (isPage) {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); return response;
    }).catch(() => caches.match(request).then(hit => hit || caches.match('/404.html'))));
    return;
  }
  event.respondWith(caches.match(request).then(hit => hit || fetch(request).then(response => {
    if (response.ok && new URL(request.url).origin === self.location.origin) caches.open(CACHE).then(cache => cache.put(request, response.clone()));
    return response;
  })));
});
