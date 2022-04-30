const version = "1";
const cacheName = `ttkit-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                    '/',
                    '/offlinekit.zip',
                    '/icon.ico',
                    '/index.html',
                    '/manifest.webmanifest',
                    '/sw.js',
                    '/img/aes.png',
                    '/img/bcash.png',
                    '/img/btc.png',
                    '/img/dash.png',
                    '/img/doge.png',
                    '/img/eth.png',
                    '/img/ltc.png',
                    '/img/tt.png',
                    '/img/ttc.png',
                    '/img/ttfull.png',
                    '/img/ttg.png',
                    '/img/xlm.png',
                    '/img/xrp.png',
                    '/img/zec.png',
                    '/js/aes.js',
                    '/js/bitcoincash-0.1.10.js',
                    '/js/bitcoinjs-lib.js',
                    '/js/bitcore-lib-zcash.js',
                    '/js/bootstrap.min.js',
                    '/js/jquery.min.js',
                    '/js/lodash.js',
                    '/js/popper.min.js',
                    '/js/qrcode.js',
                    '/js/ripple-0.19.0.js',
                    '/js/stellar-base.js',
                    '/js/web3.js',
                    '/css/bootstrap.min.css',
                    '/css/LawyerGothic-Bold.eot',
                    '/css/LawyerGothic-Bold.ttf',
                    '/css/LawyerGothic-Bold.woff',
                    '/css/mainSheet.css',
                    '/html/locked.html',
                    '/html/offline.html',
                    '/html/tool.html',
                    '/html/ttg.html',
                    '/html/ttg/bch.html',
                    '/html/ttg/btc.html',
                    '/html/ttg/dash.html',
                    '/html/ttg/doge.html',
                    '/html/ttg/eth.html',
                    '/html/ttg/ltc.html',
                    '/html/ttg/xlm.html',
                    '/html/ttg/xrp.html',
                    '/html/ttg/zec.html',
                    '/html/ttgl/bchl.html',
                    '/html/ttgl/btcl.html',
                    '/html/ttgl/dashl.html',
                    '/html/ttgl/dogel.html',
                    '/html/ttgl/ethl.html',
                    '/html/ttgl/ltcl.html',
                    '/html/ttgl/xlml.html',
                    '/html/ttgl/xrpl.html',
                    '/html/ttgl/zecl.html',

                ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
        .then(cache => cache.match(event.request, { ignoreSearch: true }))
        .then(response => {
            return response || fetch(event.request);
        })
    );
});