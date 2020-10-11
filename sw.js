import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { setCacheNameDetails } from 'workbox-core'

const PRECACHE_PREFIX = "node-market"
const PRECACHE = "cache"
const PRECACHE_VERSION = "v1"
const PRECACHE_NAME = `${PRECACHE_PREFIX}-${PRECACHE}-${PRECACHE_VERSION}`
const CAROUSEL_CACHE = "carousel-v2"
const FONT_CACHE = "fonts-v2"

setCacheNameDetails({
  prefix: PRECACHE_PREFIX,
  suffix: PRECACHE_VERSION,
  precache: PRECACHE
})

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  new RegExp(/[1-9]\..*\.jpg/),
  new StaleWhileRevalidate({
    cacheName: CAROUSEL_CACHE,
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60,
        maxEntries: 5,
      })
    ]
  })
)

registerRoute(
  ({ request }) => request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
      }),
    ]
  })
)

self.addEventListener("message", () => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
})


self.addEventListener('activate', event => {  
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {          
          if (
            key !== PRECACHE_NAME &&
            key !== CAROUSEL_CACHE &&
            key !== FONT_CACHE
          ) {
            console.log(key)
            return caches.delete(key)
          }
        }))
      })
  )
  return self.clients.claim()
})