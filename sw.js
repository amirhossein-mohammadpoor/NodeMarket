import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

const CAROUSEL_CACHE = "carousel"
const FONT_CACHE = "fonts"

precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  new RegExp(/[1-9].jpg/),
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