/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icons/android-chrome-72x72.png",
    "revision": "ad8589555d0595422fe65f6eea32775e"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "f4d38c83956b45a7238d223b0ceac21a"
  },
  {
    "url": "assets/icons/browserconfig.xml",
    "revision": "65433698a3d969e7ac5715488c14b869"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "1d7019c4e5c8cc72673bf9ddec9e136e"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "0fc10f6e40094818bf0636f073402a2f"
  },
  {
    "url": "assets/icons/favicon.ico",
    "revision": "748e0c6bd6f2dadcf390e80d7092d37e"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "c9c66068625381e50f24b20bafc3041f"
  },
  {
    "url": "assets/icons/mstile-70x70.png",
    "revision": "7edff9ccb9f8d7a63f0bf579bf5c8ed4"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "0c95d5f88098852ba57637b1afadc9af"
  },
  {
    "url": "assets/image/logo (1).png",
    "revision": "237e2e86192677145f7f0285841b773c"
  },
  {
    "url": "assets/js/main.js",
    "revision": "123a8a1df9a038637b68673b17056809"
  },
  {
    "url": "assets/style/custom.css",
    "revision": "08aad84358ad7a10f9ed396da9e32033"
  },
  {
    "url": "dist/style.min.css",
    "revision": "2f931b3ec3b3b45d8846245e6eccc0e9"
  },
  {
    "url": "index.html",
    "revision": "6c9fe9c8d073213af1978ca17ec48856"
  },
  {
    "url": "site.webmanifest",
    "revision": "9635f91a581c1f280f6ed2e268c951d2"
  }
].concat(self.__precacheManifest || []);
