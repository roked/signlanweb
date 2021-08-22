'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21e5670748a8aebc1f00758edd8f51a6",
"index.html": "3e8d4515611790ef2032894de73609db",
"/": "3e8d4515611790ef2032894de73609db",
"main.dart.js": "7672cb009a88f3a14bad7d02f74aa274",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0a89558af80aef0aed5ca0b5b067bb20",
"assets/images/jo-hilton-proto-image.jpg": "60ba829567172dca13a07dbaf7de9719",
"assets/images/9.png": "86e56ad1aba106507e0f1dcbf3acd5a1",
"assets/images/14.png": "260cbf2b53ab5ea77ed8ed8dc4f81d5c",
"assets/images/15.png": "c2b10115a54748a7e95be9e6e4bf7b8e",
"assets/images/13-selected.png": "ccd3036d209ba60487f2215778a95156",
"assets/images/14-selected.png": "9e973f164ecb7ad3e6567aca68785b47",
"assets/images/17.png": "cce37bac5b1fe86b5bf9ab991a5ae0b6",
"assets/images/16.png": "14acc8e33f0528b28266ddec7c5f27bc",
"assets/images/12.png": "2b1352c1db506daf0901b311c0be9543",
"assets/images/personImage.png": "8f4465f34c48c0401ae3e624601a2b00",
"assets/images/13.png": "b1846a9dd2cba8bc6320699b45681a63",
"assets/images/11.png": "b5f61d5867c243c088dfc40a24bf660d",
"assets/images/12-selected.png": "eff9245fa47bce660b0c422aef00e0d4",
"assets/images/10.png": "dabc9e4cdf2b759feb0d065c9869fb9f",
"assets/images/10-selected.png": "f6a4818f7ca67690574f89538809d789",
"assets/images/logo.png": "8a25d8f4fb65bab45d9f34a05400ca73",
"assets/images/18.png": "5948a22cddaab1ba075f07270d787bba",
"assets/images/11-selected.png": "deafc941cff27c83eec7a4ba2c275992",
"assets/images/19.png": "0a1c35243cbc5146f92b26639dde4f32",
"assets/images/4.png": "280158e04308fa4815db538d58d11911",
"assets/images/5.png": "6b66079ff9c0124ecbcd67042778e0e2",
"assets/images/6.png": "bd3da9a196c02e0b476a02f4aaab07e9",
"assets/images/element1.png": "a5a5cc8e0b8d4503c497b4c5c14eecac",
"assets/images/element3.png": "f66ddc231c60439c0935b7599d8d1dc4",
"assets/images/9-selected.png": "0a1fce891b8b5b7039f1c764482b48fe",
"assets/images/element2.png": "143ca5c1ba47745c2a307a0d8d9524b3",
"assets/web/assets/images/jo-hilton-proto-image.jpg": "60ba829567172dca13a07dbaf7de9719",
"assets/web/assets/images/9.png": "86e56ad1aba106507e0f1dcbf3acd5a1",
"assets/web/assets/images/14.png": "260cbf2b53ab5ea77ed8ed8dc4f81d5c",
"assets/web/assets/images/15.png": "c2b10115a54748a7e95be9e6e4bf7b8e",
"assets/web/assets/images/13-selected.png": "ccd3036d209ba60487f2215778a95156",
"assets/web/assets/images/14-selected.png": "9e973f164ecb7ad3e6567aca68785b47",
"assets/web/assets/images/17.png": "cce37bac5b1fe86b5bf9ab991a5ae0b6",
"assets/web/assets/images/16.png": "14acc8e33f0528b28266ddec7c5f27bc",
"assets/web/assets/images/12.png": "2b1352c1db506daf0901b311c0be9543",
"assets/web/assets/images/personImage.png": "8f4465f34c48c0401ae3e624601a2b00",
"assets/web/assets/images/13.png": "b1846a9dd2cba8bc6320699b45681a63",
"assets/web/assets/images/11.png": "b5f61d5867c243c088dfc40a24bf660d",
"assets/web/assets/images/12-selected.png": "eff9245fa47bce660b0c422aef00e0d4",
"assets/web/assets/images/10.png": "dabc9e4cdf2b759feb0d065c9869fb9f",
"assets/web/assets/images/10-selected.png": "f6a4818f7ca67690574f89538809d789",
"assets/web/assets/images/logo.png": "8a25d8f4fb65bab45d9f34a05400ca73",
"assets/web/assets/images/18.png": "5948a22cddaab1ba075f07270d787bba",
"assets/web/assets/images/11-selected.png": "deafc941cff27c83eec7a4ba2c275992",
"assets/web/assets/images/19.png": "0a1c35243cbc5146f92b26639dde4f32",
"assets/web/assets/images/4.png": "280158e04308fa4815db538d58d11911",
"assets/web/assets/images/5.png": "6b66079ff9c0124ecbcd67042778e0e2",
"assets/web/assets/images/6.png": "bd3da9a196c02e0b476a02f4aaab07e9",
"assets/web/assets/images/element1.png": "a5a5cc8e0b8d4503c497b4c5c14eecac",
"assets/web/assets/images/element3.png": "f66ddc231c60439c0935b7599d8d1dc4",
"assets/web/assets/images/9-selected.png": "0a1fce891b8b5b7039f1c764482b48fe",
"assets/web/assets/images/element2.png": "143ca5c1ba47745c2a307a0d8d9524b3",
"assets/web/assets/fonts/Mont-Heavy.otf": "7d90a574d6ef3b7949d79a56b4d201db",
"assets/web/assets/fonts/Mont.otf": "35ae702d95bc967034a2a9c15568e726",
"assets/AssetManifest.json": "0b337d6ee19c0930570343910ddeaffa",
"assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
"assets/FontManifest.json": "a9489341be08d67a2896d5114fdcdaab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Mont-Heavy.otf": "7d90a574d6ef3b7949d79a56b4d201db",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Mont.otf": "35ae702d95bc967034a2a9c15568e726"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
