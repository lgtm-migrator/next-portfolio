if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV_Akim_BENCHIHA_EN.pdf",revision:"9444891ca5c6ad526bb7b4531adb4a71"},{url:"/_next//static/media/bitmoji-hi.66c98c9f.png",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next//static/media/bitmoji-think.af33d613.png",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/5uVefp2GS_kKIkK97kvqx/_buildManifest.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/5uVefp2GS_kKIkK97kvqx/_middlewareManifest.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/5uVefp2GS_kKIkK97kvqx/_ssgManifest.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/1bfc9850-bcaee15dceed619e.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/29107295-a2d0c8e72019a3ed.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/527-8c252b0085a2275c.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/main-ec95d66e0c86d60d.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/pages/_app-0d6d903e99fd6dbd.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/pages/index-232d8967d895e339.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"5uVefp2GS_kKIkK97kvqx"},{url:"/assets/favicons/favicon-16x16.png",revision:"ab7c4154590b71c3c217e7d1a5cce2c5"},{url:"/assets/favicons/favicon-32x32.png",revision:"1b214ba4ba1d439520dcfa310401e9db"},{url:"/assets/favicons/favicon.ico",revision:"9d9526a3f95b0483c9f7ec3ef71ab871"},{url:"/assets/icons/android-chrome-192x192.png",revision:"e49ecea016c33658acc40e0ea9275e29"},{url:"/assets/icons/apple-touch-icon.png",revision:"01cacd3d5b34dac79ac8a913fe1d2ed1"},{url:"/assets/icons/icon-128x128.png",revision:"d94729e683bea6ea11ce253aae846c94"},{url:"/assets/icons/icon-144x144.png",revision:"6950d3f8274706b66e07f461b332c353"},{url:"/assets/icons/icon-152x152.png",revision:"870a75cda86688a5d3fa4d49ae78dbbb"},{url:"/assets/icons/icon-192x192.png",revision:"83afc694aeb39b21dd7a362194056df2"},{url:"/assets/icons/icon-284x284.png",revision:"78da146743f1cde306aa654755067338"},{url:"/assets/icons/icon-384x384.png",revision:"1cf186cc7835cf825f330709caaed857"},{url:"/assets/icons/icon-48x48.png",revision:"b1106be3148892bb9c747456734d11c9"},{url:"/assets/icons/icon-512x512.png",revision:"50621ba1aa448ff270c35180b4c9a99e"},{url:"/assets/icons/icon-72x72.png",revision:"9bd7985a2d582f13b44e50ad19a40da6"},{url:"/assets/icons/icon-96x96.png",revision:"b1b608166cbb29d6175fe23cbe124ac9"},{url:"/assets/icons/mstile-150x150.png",revision:"c20567f5f10a4a5a4250db2c73fc17d1"},{url:"/assets/icons/safari-pinned-tab.svg",revision:"8652ed270cc19faf8bdefe6a28289310"},{url:"/bitmoji-door.png",revision:"5e3f24b4e17eaf0f82dd7ec5e5ea712b"},{url:"/bitmoji-hi.png",revision:"f481ce1cf0b08e6f77ab36c787dbb015"},{url:"/bitmoji-think.png",revision:"83eb18fc110fa7f7bc8fd013aadb1161"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/portfolioShot.png",revision:"6004ffce6aac6faebadd7165e195e018"},{url:"/site.webmanifest",revision:"240d7dd93f34857f8fe4fbf25b8a3d22"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
