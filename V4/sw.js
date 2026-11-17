// Offline-Unterstützung: zuerst das Neueste aus dem Netz, sonst die gespeicherte Kopie.
// So kommen neue Vokabeln sofort an, und die App läuft trotzdem ohne Internet.
const CACHE = "english-adventure-v3-1";
const FILES = ["./", "index.html", "vokabeln.js", "geschichten.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png",
  "bilder/buch1-unit1/downstairs.jpg", "bilder/buch1-unit1/parcel.jpg", "bilder/buch1-unit1/weird.jpg", "bilder/buch1-unit1/doorbell.jpg", "bilder/buch1-unit1/useful.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;   // Speicherdienst nie cachen
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); if (r.ok) caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
});
