const CACHE_NAME = 'lookout-app-v1';
const APP_FILES = [
  'index.html',
  'style.css',
  'road-user.html',
  'driver-login.html',
  'driver-dashboard.html',
  'admin-login.html',
  'admin-dashboard.html',
  'hospital-setup.html',
  'app.js',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
