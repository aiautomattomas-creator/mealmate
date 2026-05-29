// MealMate Service Worker — Network-first strategy
// Pri každom otvorení sa skúsi stiahnuť čerstvý kód. Cache je len pre offline fallback.

const CACHE_NAME = 'mealmate-v12';
const ASSETS = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './manifest.json'
];

// INSTALL — pred-cache hlavných súborov
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE — zmaž starý cache, prevezmi kontrolu nad otvorenými klientmi
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME ? caches.delete(key) : null))
    ).then(() => self.clients.claim())
  );
});

// FETCH — NETWORK FIRST pre HTML/CSS/JS (vždy fresh kód), cache fallback ak offline
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Pre externé API (Open Food Facts) — len network, nikdy necacheovať
  const url = new URL(req.url);
  if (url.hostname.includes('openfoodfacts.org')) {
    e.respondWith(fetch(req).catch(() => new Response('{"products":[]}', {headers:{'Content-Type':'application/json'}})));
    return;
  }

  // Pre google fonts CDN — cache-first (nemení sa)
  if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
    e.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        return res;
      }))
    );
    return;
  }

  // Pre vlastný kód (HTML/CSS/JS/manifest) — NETWORK FIRST
  e.respondWith(
    fetch(req)
      .then((res) => {
        // Úspešná odpoveď zo siete — ulož do cache pre prípad offline a vráť ju
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      })
      .catch(() => {
        // Sieť zlyhala — skús cache
        return caches.match(req).then((cached) => {
          if (cached) return cached;
          // Pre HTML navigáciu vráť index.html ako fallback
          if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// Umožni klientovi vyžiadať okamžitý update SW (cez postMessage)
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
