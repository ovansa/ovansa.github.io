'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9e0b8becd45dd36dc6951ffe02787cc6",
"/": "9e0b8becd45dd36dc6951ffe02787cc6",
"main.dart.js": "a843db3427e3ee59c5d7c1cb0d134676",
"logo-white.png": "8c03f5634c8bbb16454f4008401877d1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "d92f04185c125601d13cd77a73dae56d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "975eaa9e1d67f2d3bfc618eac09698a7",
".git/config": "d72f1c78871f09075c21ed3b4cf743ab",
".git/objects/0d/1a1675679597a7cc45499865a602ad739e0937": "861543fa43edda519b2d938ef8259000",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/6f/ec3118445d52af5d33cc53db8b6df26af46ae8": "9e33d3d585c047c628e5f4be2daf8915",
".git/objects/9b/68e56ad524d2c004bffc5b50b65b9dd12f369d": "a1a990872d0fd167f1a04d0c407a60b0",
".git/objects/0e/0e46aabec09f8360bd51d303967883312f57ee": "50ea86ec6ee5c5a647a92e8112cf6a1f",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/a2/1d2a6260657a9cec3431f993689b35407ac156": "615db36ede17835529f32fbfd2106429",
".git/objects/e3/c7d11c5d34a7e1a8b6a1a6b36f07c47641bdae": "f5bf9b7378e44f8fdff0d9d7a5f8897d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/bcec81873297f4066674b90936b92f63bbd3df": "fcba33fa3095454faff1277b3c8b2be9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/843cccdb9c9741901603068c3848e09eca66ff": "b47973c1f1a96a75333e60c851deddc7",
".git/objects/31/afb375145b6058f1b76bde2a11dbb300da1e97": "0a29e4418da0a870246999be15f7e31f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/a9/a12c89f93f02b4ef27b7ef63eb8e629e230d83": "aaac5f3684a0e52ace325400adb755cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/42dede2110e466be7b6334dc9f7621cf2c5bdc": "bc37bcf98d1d8df7a1de0a2d2816b4f3",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f0/0bef1ff1e9698907426cbe3b4c65d1231155be": "b3e946d08515055afc9ae8e5195e63cd",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/1b/21684856d47c736e4f530adac5b24a490c0e22": "07e26116256ec09976c8ca86a19584bd",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/2e/3f8e4ffdfe31efa33b6b02312c26370b232be2": "fa7266bb842c37a697ce21d29e571271",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7cfce05418086204973ec0d1d0667265",
".git/logs/refs/heads/master": "7cfce05418086204973ec0d1d0667265",
".git/logs/refs/remotes/origin/master": "399e200e4e289f726cb9c163861dbc67",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "39272da7cc0a688bbad10e623d88ed33",
".git/refs/remotes/origin/master": "39272da7cc0a688bbad10e623d88ed33",
".git/index": "7b5c71e17e0e29d2cb2d2f1bfc2a4bfc",
".git/COMMIT_EDITMSG": "98571c2e37401c3c6cce902169e7a6c9",
"assets/LICENSE": "9ab49daeb9d789fc1d7ae4aeaa13c30b",
"assets/AssetManifest.json": "e26ab0f0a9ebee8025260de29a88a4ca",
"assets/FontManifest.json": "5fa2baa1355ee1ffd882bec6ab6780c7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
