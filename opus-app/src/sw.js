console.log('in sw.js');

// workbox.skipWaiting();
// workbox.clientsClaim();
workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self._precacheManifest || []);
