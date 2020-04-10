const staticBailaBollywood = "baila-site"
const assets = [
  
  "index.html",
  "calc-img.jpg",
  "calc-img-72x72.png",
  "calc-img-96x96.png",
  "calc-img-144x144.png",
  "calc-img-128x128.png",
  "calc-img-152x152.png",
  "calc-img-196x196.png",
  "calc-img-384x384.png",
  "calc-img-512x512.png"
  
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