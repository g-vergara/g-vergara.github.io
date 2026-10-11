const V='pm-v1',FONTS='pm-fonts',CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com'){
  e.respondWith(caches.open(FONTS).then(async c=>{const hit=await c.match(r);const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res;}).catch(()=>hit);return hit||net;}));return;}
 if(u.origin===location.origin){
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{
   const net=fetch(r).then(res=>{if(res&&res.ok){const cl=res.clone();caches.open(V).then(c=>c.put(r,cl));}return res;}).catch(()=>null);
   return hit||net.then(x=>x||caches.match('./index.html'));}));}});
