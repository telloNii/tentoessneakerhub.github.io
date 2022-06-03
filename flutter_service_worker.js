'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "dd74bdef190dc36fc5dff873fcca9673",
"index.html": "809ded73e64f4a1ab87aa4a53943a67f",
"/": "809ded73e64f4a1ab87aa4a53943a67f",
"manifest.json": "f7979a268bfbed51c88d774f2a5d3b2c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "2d05ae195f4257f66639e951790137ee",
"assets/AssetManifest.json": "50abac0008b8240c1310e46c38dcb24b",
"assets/NOTICES": "de14e159fffa62352215c8df40458b12",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/assets/fonts/NunitoSans-Black.ttf": "cdfd114824e2a9c50aa097085f2e80a2",
"assets/assets/fonts/NunitoSans-Italic.ttf": "3aacbff94598dd3ecac72e3d4978d480",
"assets/assets/fonts/NunitoSans-Bold.ttf": "4aa57ec2fb7650165f1f2fef64d61b2e",
"assets/assets/fonts/NunitoSans-BlackItalic.ttf": "2b063817ae9104ac53c258de3498097f",
"assets/assets/fonts/NunitoSans-Regular.ttf": "05f376c99895ad997a49c579d385d589",
"assets/assets/fonts/NunitoSans-SemiBoldItalic.ttf": "7af60cdafd61cbbbe432453ee39ab317",
"assets/assets/fonts/NunitoSans-Light.ttf": "b73b535f97c0f02d92a0648e8ebc10fa",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "6c7de16a9fe7eeb51fa02e3532c8c119",
"assets/assets/fonts/NunitoSans-BoldItalic.ttf": "862e7060fc0364599a6a9543c90bcddd",
"assets/assets/images/images.zip": "da8b53a5da52b838d9cd789cfa985b36",
"assets/assets/images/auth_screen_background.jpg": "4245fbe8c12304a6ef2ce6e86435ebba",
"assets/assets/images/crocs-logo.png": "ecddafd281f41d1c92f3accca7d1d14a",
"assets/assets/images/images/auth_screen_background.jpg": "4245fbe8c12304a6ef2ce6e86435ebba",
"assets/assets/images/images/crocs-logo.png": "ecddafd281f41d1c92f3accca7d1d14a",
"assets/assets/images/images/airteltigo-money.png": "8812182299dcffbdfe8d16e97250225f",
"assets/assets/images/images/dark_theme_logo.png": "86fca3f26fd875ec55f51a5439090068",
"assets/assets/images/images/app_theme_logo.png": "3d20b26b7aa4b195add02c0dd85f65fd",
"assets/assets/images/images/mtn-momo.png": "90b3f1e9ab13e94bfa0a69108c6510d2",
"assets/assets/images/images/nike-logo.png": "a36bcd21a4c15529e9f98f9f049835bd",
"assets/assets/images/images/credit-card.png": "20ce810706768e1abc6d3f64243fd7d9",
"assets/assets/images/images/light_theme_logo.png": "667156ee9afb2a002874a6d2e25c32cb",
"assets/assets/images/images/puma-logo.png": "a78de7a7f8eb9e32dc46665f3b1b2da4",
"assets/assets/images/images/air-jordan-logo.png": "61c30dc8067786a2cf490d77d4b8809e",
"assets/assets/images/images/reebok-logo.png": "9bad806dd8be25cc70030f803f3ccc69",
"assets/assets/images/images/apple-logo.png": "8a355e8c1e9a58babc5e7f8de97a6065",
"assets/assets/images/images/adidas-logo.png": "769d464d7bdd1b49d7e9d6491b6a65f5",
"assets/assets/images/images/vodafone-cash.png": "d399b07f5022fecfec98d07a04f3ac65",
"assets/assets/images/images/admin-page-auth_screen_background.jpg": "706a5b5951fc9992ee03de4fd6c2d6cd",
"assets/assets/images/airteltigo-money.png": "8812182299dcffbdfe8d16e97250225f",
"assets/assets/images/dark_theme_logo.png": "86fca3f26fd875ec55f51a5439090068",
"assets/assets/images/nike/nike-air-max-95.png": "e332522aa43f8633aba63728f9e24a2f",
"assets/assets/images/nike/nike_kobe_6.png": "08eac3dbbb1f0c26f500015f2aa15814",
"assets/assets/images/nike/nike-air-max-97.png": "954ffa6420a0e218e349fc4ad882e8c5",
"assets/assets/images/nike/nike-air-vapormax.png": "8deee1b69593226a821f171c3e9a0adf",
"assets/assets/images/nike/the-lebron-zoom-solider.png": "aaac7583c1592c6b87386141150fab59",
"assets/assets/images/nike/nike-kd-11-warriors.png": "eb63e2e0490461bc1257a69902e98584",
"assets/assets/images/nike/nike-kyrie-6.png": "940d107db35d4e4060167203a4f449dd",
"assets/assets/images/nike/air_jordan_1_low_green.png": "e677beae3f611fc9a27cbb6d284e639f",
"assets/assets/images/nike/nike-air-force-1.png": "fbfbab99faae5b5add6590a53691783c",
"assets/assets/images/nike/nike-lebron-17.png": "45cee5309743014291c8760637a22331",
"assets/assets/images/app_theme_logo.png": "3d20b26b7aa4b195add02c0dd85f65fd",
"assets/assets/images/mtn-momo.png": "90b3f1e9ab13e94bfa0a69108c6510d2",
"assets/assets/images/nike-logo.png": "a36bcd21a4c15529e9f98f9f049835bd",
"assets/assets/images/credit-card.png": "20ce810706768e1abc6d3f64243fd7d9",
"assets/assets/images/favicon.ico": "f188ae69732439eba6cb6a78443d74d6",
"assets/assets/images/light_theme_logo.png": "667156ee9afb2a002874a6d2e25c32cb",
"assets/assets/images/puma-logo.png": "a78de7a7f8eb9e32dc46665f3b1b2da4",
"assets/assets/images/air-jordan-logo.png": "61c30dc8067786a2cf490d77d4b8809e",
"assets/assets/images/reebok-logo.png": "9bad806dd8be25cc70030f803f3ccc69",
"assets/assets/images/apple-logo.png": "8a355e8c1e9a58babc5e7f8de97a6065",
"assets/assets/images/adidas-logo.png": "769d464d7bdd1b49d7e9d6491b6a65f5",
"assets/assets/images/vodafone-cash.png": "d399b07f5022fecfec98d07a04f3ac65",
"assets/assets/images/discount-image.png": "bb728e3b407aee6fc6fe59af154d04a9",
"assets/assets/images/admin-page-auth_screen_background.jpg": "706a5b5951fc9992ee03de4fd6c2d6cd",
"assets/FontManifest.json": "884aa35ea90c9617ff590d3e0cd23877",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
