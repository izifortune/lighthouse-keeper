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
    "url": "webpack-runtime-dde0eb7cb7e70245e01a.js"
  },
  {
    "url": "app-5fd5e9a85ca285cc774e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-0691004cd9de246c1542.js"
  },
  {
    "url": "index.html",
    "revision": "3d04aaa560be9c136faa03f5af22a2f5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "061f73b8c40734b1cf8cc35cf0991576"
  },
  {
    "url": "component---src-pages-index-js.d2bdb62781c644a371a8.css"
  },
  {
    "url": "component---src-pages-index-js-6d6c0b40c9697fbfede9.js"
  },
  {
    "url": "7-bfbb234c85968dcebc9f.js"
  },
  {
    "url": "0-51b0215078c7dba2286e.js"
  },
  {
    "url": "static/d/425/path---index-6a9-JV2kT1IGh7pwje0PgHwKn4vZZeI.json",
    "revision": "54696d04f0952c9dc50b0b5aa24a3dc9"
  },
  {
    "url": "component---src-pages-404-js.d2bdb62781c644a371a8.css"
  },
  {
    "url": "component---src-pages-404-js-d7edd04780e79e6c090d.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
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