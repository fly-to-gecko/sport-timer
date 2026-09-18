/* Service Worker: macht die App offline nutzbar.
   Bei einer neuen Version die Nummer unten erhöhen (v1 -> v2),
   dann holen sich die Handys beim nächsten Start mit Internet das Update. */
const CACHE = "stretching-v1";
const FILES = ["./", "index.html", "manifest.webmanifest",
               "icon-192.png", "icon-512.png", "apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Erst aus dem Speicher antworten, im Hintergrund aktualisieren */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(e.request, { ignoreSearch: true });
      const net = fetch(e.request).then(res => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          cache.put(e.request, res.clone());
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
