if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return r;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./service-worker.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/image/src/assets/images/copy.b8f09a77889694caee5f5938c400c062.svg",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next//static/image/src/assets/images/google-icon.0dd780689abbd0d4701b06a372dc13a1.svg",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next//static/image/src/assets/images/logo.3cce2a2fa907efa8055d031fbe657811.svg",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/B9c76pmNODQs7sem7LOC-/_buildManifest.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/B9c76pmNODQs7sem7LOC-/_ssgManifest.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/358-69ae6ede63f2ef83e3d5.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/367-b576cf6f71242260495f.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/860-12647c5ca36c96bdbc4a.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/main-3605476ab0165afdb2e3.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/pages/_app-1e14c523ab738eb676b1.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/pages/_error-9faf4177fb4e528b4124.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/pages/admin/rooms/%5Bid%5D-97ad8786ce3305a0520c.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/pages/index-59654f65ee98c811cf45.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/pages/rooms/%5Bid%5D-64e0833f2bbe529209bd.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/chunks/webpack-e6c1964abab17dafbea0.js",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/css/b15ae6826056f31dedd8.css",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/css/b2b9f22a6728cea8f390.css",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/css/f43420ce99341bbf6b17.css",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/_next/static/css/f81032985639748dc316.css",revision:"B9c76pmNODQs7sem7LOC-"},{url:"/apple-icon.png",revision:"0e4d44b70da2039074cf5ca97125a663"},{url:"/favicon.png",revision:"250967a0c5289e5c145f66d0e25afb8e"},{url:"/icon-1024x1024.png",revision:"40d28228fb775a107c0e502a64df2dd6"},{url:"/icon-128x128.png",revision:"123a33fc33bb6a302364de4c8f7c721f"},{url:"/icon-256x256.png",revision:"28f98802bad854a0b606330ca8206352"},{url:"/icon-512x512.png",revision:"b8c81e76e9f31d9ffddc95e9765da31a"},{url:"/letmeask.jpg",revision:"d36a9bf66ae52664b6bb527ad6dd175b"},{url:"/manifest.json",revision:"d0013685b5fc3520495a39b4eacefcee"},{url:"/robots.txt",revision:"24e635d90c1335419d39f20af9901400"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
