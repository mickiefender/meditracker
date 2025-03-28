// Service Worker for MediRemind App
const CACHE_NAME = "mediremind-cache-v1"
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/icons/icon-72x72.png",
  "/icons/icon-96x96.png",
  "/icons/icon-128x128.png",
  "/icons/icon-144x144.png",
  "/icons/icon-152x152.png",
  "/icons/icon-192x192.png",
  "/icons/icon-384x384.png",
  "/icons/icon-512x512.png",
  "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-regular-400.woff2",
]

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing Service Worker...", event)

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Caching app shell and content")
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log("[Service Worker] Skip waiting on install")
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating Service Worker...", event)

  event.waitUntil(
    caches
      .keys()
      .then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log("[Service Worker] Removing old cache", key)
              return caches.delete(key)
            }
          }),
        )
      })
      .then(() => {
        console.log("[Service Worker] Claiming clients")
        return self.clients.claim()
      }),
  )

  return self.clients.claim()
})

// Fetch event - serve from cache, then network
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetching resource: " + event.request.url)

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return the response from the cached version
      if (response) {
        console.log("[Service Worker] Returning from cache: " + event.request.url)
        return response
      }

      // Not in cache - return the result from the live server
      // and add it to the cache for future
      return fetch(event.request)
        .then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            console.log("[Service Worker] Not caching invalid response for: " + event.request.url)
            return response
          }

          // Clone the response - one to return, one to cache
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            console.log("[Service Worker] Caching new resource: " + event.request.url)
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch((error) => {
          console.log("[Service Worker] Fetch failed; returning offline page instead.", error)
          // You could return a custom offline page here
          return caches.match("/index.html")
        })
    }),
  )
})

// Push notification event
self.addEventListener("push", (event) => {
  console.log("[Service Worker] Push Received.")

  const title = "MediRemind"
  const options = {
    body: event.data ? event.data.text() : "Time to take your medication!",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "1",
    },
    actions: [
      {
        action: "take",
        title: "Take Now",
        icon: "/icons/check.png",
      },
      {
        action: "skip",
        title: "Skip",
        icon: "/icons/cancel.png",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// Notification click event
self.addEventListener("notificationclick", (event) => {
  console.log("[Service Worker] Notification click received.", event)

  event.notification.close()

  // Handle notification click - open app and focus window
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then((clientList) => {
        // Check if there is already a window/tab open with the target URL
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) {
            return client.focus()
          }
        }

        // If no window/tab is open, open one
        if (clients.openWindow) {
          return clients.openWindow("/")
        }
      }),
  )
})

// Background sync for offline data
self.addEventListener("sync", (event) => {
  console.log("[Service Worker] Background Sync", event)

  if (event.tag === "sync-medications") {
    event.waitUntil(
      // Here you would implement the code to sync data with a server
      // For now, we'll just log it
      console.log("[Service Worker] Syncing medications data"),
    )
  }
})

