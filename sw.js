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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-443d8b6396425c57abd8.js"
  },
  {
    "url": "app-7a266f0ef53ebd7be6e4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-71711f3fcf4a9e293ed9.js"
  },
  {
    "url": "index.html",
    "revision": "ac26def2622ff2fc7de58518533de7e1"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "05d2bc7997c131af85929ceec8eeb93c"
  },
  {
    "url": "styles.d2bdb62781c644a371a8.css"
  },
  {
    "url": "styles-418033097879e564b026.js"
  },
  {
    "url": "1-2e8b1391cddd0a4c108c.js"
  },
  {
    "url": "9-bb94515212f2b0ac1c2a.js"
  },
  {
    "url": "component---src-pages-index-js-7cacf7d9495823057e37.js"
  },
  {
    "url": "static/d/219/path---index-6a9-B8DQzTO7wRdbMXQTeYpCZERzL4.json",
    "revision": "41b24c49d170af66e74b88ca82ac0712"
  },
  {
    "url": "component---src-pages-404-js-eec453494ce9d1d10bcc.js"
  },
  {
    "url": "static/d/285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8.json",
    "revision": "02094403799cfe9d216f51de06d00d63"
  },
  {
    "url": "static/d/604/path---offline-plugin-app-shell-fallback-a-30-c5a-BawJvyh36KKFwbrWPg4a4aYuc8.json",
    "revision": "e0f3b054b6dcf2c5a113801b73f75867"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/lighthouse-keeper/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});