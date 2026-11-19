const CACHE="english-random-review-2026-11-19-landtrap-ch11-epilogue-v26";
const FILES=["./","./index.html","./app.js","./vocabulary.js","./manifest.json","./icon.svg"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k.startsWith("english-random-review-")&&k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET"||new URL(req.url).origin!==location.origin)return;
  const url=new URL(req.url);
  const isAppFile=url.pathname.includes("/english/") && (
    url.pathname.endsWith("/english/") ||
    ["/index.html","/app.js","/vocabulary.js","/sw.js"].some(name=>url.pathname.endsWith(name))
  );
  if(!isAppFile)return;
  // Network-first: a previously installed PWA must never be trapped on old JS.
  // Fall back to the offline copy when the network is unavailable.
  event.respondWith(fetch(req).then(response=>{
    if(response.ok){
      const copy=response.clone();
      event.waitUntil(caches.open(CACHE).then(cache=>cache.put(req,copy)));
    }
    return response;
  }).catch(()=>caches.match(req,{ignoreSearch:true}).then(cached=>
    cached||caches.match("./index.html")
  )));
});
