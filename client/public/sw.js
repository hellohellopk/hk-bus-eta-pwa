/* HK Bus ETA PWA service worker: retain the app shell and previously viewed assets offline. */
const CACHE_NAME = "hk-bus-eta-shell-v2";
const APP_SHELL = ["./", "./index.html", "./busapp-improved.html", "./manifest.webmanifest", "./icons/bus-eta-icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("hk-bus-eta-") && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  const cacheResponse = (response) => {
    if (response && response.status === 200 && response.type === "basic") {
      caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
    }
    return response;
  };

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).then(cacheResponse).catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html"))));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then(cacheResponse).catch(() => caches.match("./index.html"))));
});
