const staticBailaBollywood = "baila-site"
const assets = [
  
  "index.html",
  "calc-img.jpg",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBailaBollywood).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })