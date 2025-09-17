// версию кэша обновляй при изменениях
const CACHE_NAME = "pwa-cache-v1";
const PRECACHE_URLS = [
  "/",           // кешировать главную
  "/offline.html",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];

// install: предзагрузка основных файлов
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// activate: удаляем старые кэши
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key)).filter(Boolean)
      )
    )
  );
  self.clients.claim();
});

// fetch: network-first для API, cache-first для статических
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin === location.origin && url.pathname.startsWith("/api")) {
    // network-first для API
    event.respondWith(
      fetch(event.request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // для всего остального — cache-first
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match("/offline.html")))
  );
});

// Push: показываем уведомление (если используешь push)
self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  const title = data.title || "Notification";
  const options = {
    body: data.body,
    icon: data.icon || "/icons/icon-192x192.png",
    badge: data.badge || "/icons/icon-192x192.png",
    data: data.url || "/"
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// notification click: открываем/фокусируем окно
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(urlToOpen);
    })
  );
});