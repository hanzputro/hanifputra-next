if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),f={module:{uri:t},exports:n,require:r};s[t]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QWXanpG7ot0_acl_b-w1v/_buildManifest.js",revision:"d47a577046a12b9b2b5dc914766e29da"},{url:"/_next/static/QWXanpG7ot0_acl_b-w1v/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0cc0dbbd-babd6bfbad2964a8.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/106.85d582df9f3df2c8.js",revision:"85d582df9f3df2c8"},{url:"/_next/static/chunks/12.f181b700f7c3d005.js",revision:"f181b700f7c3d005"},{url:"/_next/static/chunks/127.8cbcf8564558f5b9.js",revision:"8cbcf8564558f5b9"},{url:"/_next/static/chunks/139.2097c64de0eb2de9.js",revision:"2097c64de0eb2de9"},{url:"/_next/static/chunks/230.e78169883b33ef17.js",revision:"e78169883b33ef17"},{url:"/_next/static/chunks/288.46d98af5e8345926.js",revision:"46d98af5e8345926"},{url:"/_next/static/chunks/338-8a952907ba4ac19d.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/460.ac8158e29d2e5698.js",revision:"ac8158e29d2e5698"},{url:"/_next/static/chunks/502.76fe462745919612.js",revision:"76fe462745919612"},{url:"/_next/static/chunks/55.5eb558b2000e7f8d.js",revision:"5eb558b2000e7f8d"},{url:"/_next/static/chunks/56e50884-793593f97abc67b6.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/6a9c4db8-cbc59cc475cab74f.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/6bd4c176-d0947f9fe615c9ba.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/718-07080f4669947e1d.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/735-7cf2fe6862698c45.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/765.4832a297c8ec7a77.js",revision:"4832a297c8ec7a77"},{url:"/_next/static/chunks/7672a648.f5fe820fe519629d.js",revision:"f5fe820fe519629d"},{url:"/_next/static/chunks/778.35d2c6e02ff7d2bd.js",revision:"35d2c6e02ff7d2bd"},{url:"/_next/static/chunks/81-21e15179a9ce285b.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/847.f50f22e6adcfbb1e.js",revision:"f50f22e6adcfbb1e"},{url:"/_next/static/chunks/918.cc24a589256dec93.js",revision:"cc24a589256dec93"},{url:"/_next/static/chunks/956.614f012c37f50cce.js",revision:"614f012c37f50cce"},{url:"/_next/static/chunks/974.fc301c178477bc4c.js",revision:"fc301c178477bc4c"},{url:"/_next/static/chunks/987.6760821d0ff4f2a8.js",revision:"6760821d0ff4f2a8"},{url:"/_next/static/chunks/9da9bce3-0a2950d0a53d35df.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/app/_not-found/page-a8653634701e5c5f.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/app/layout-444a179c99406f82.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/app/page-17fff1601fbb923e.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/app/studio/%5B%5B...tool%5D%5D/page-af34683e5babd3f5.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/b27dc69b-7c7c8453af2a60e8.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/cb2cae32-8ed2931e0a70038f.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/cb77dacc-eb94d23226ddf697.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/d5ec6250.6a1e0a2af2836153.js",revision:"6a1e0a2af2836153"},{url:"/_next/static/chunks/d6422cc7-b764de3ec309ab06.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/d8e66b8d.2541e1a3cf1e7019.js",revision:"2541e1a3cf1e7019"},{url:"/_next/static/chunks/f2cc5e91-359ce77b317f6087.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/ffda353b-fc1f343e502cae03.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/framework-ded83d71b51ce901.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/main-31385e2f35b2fc77.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/main-app-7f93fc0ebdd62eda.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/pages/_app-4816ad901029984f.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/pages/_error-4c2ed5f77cc7bdc0.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-beceda07dbf94335.js",revision:"QWXanpG7ot0_acl_b-w1v"},{url:"/_next/static/css/ee3b541751ee2730.css",revision:"ee3b541751ee2730"},{url:"/_next/static/css/f421d3eac55fa1dd.css",revision:"f421d3eac55fa1dd"},{url:"/_next/static/media/07ce98f0c2830616-s.p.woff2",revision:"7b98d3a05951bc5a91864850059bff13"},{url:"/_next/static/media/09b0c31dae5dfae7-s.woff2",revision:"59fce428c4b5764b6c7b483e599dafc5"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/27ab0aa55a83ad87-s.woff2",revision:"b9728a8a714ddd96ff923aeb61190fb8"},{url:"/_next/static/media/30e3083b8303f8e0-s.woff2",revision:"70db0177223bd9682d8b27195b9596ba"},{url:"/_next/static/media/43b35b7cee4e8b32-s.p.woff2",revision:"d4675bc73ecab73d883bfb5f2031283a"},{url:"/_next/static/media/4c7fdd2cb1250485-s.woff2",revision:"362398725678b4ed4a1824af48a0d5bc"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/5c2a00aea3870db6-s.woff2",revision:"169b15dccdbfc2f52c238d565f40d837"},{url:"/_next/static/media/6a6e1a99d64538f2-s.woff2",revision:"7b32aa85ac0ad18145912848def99782"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/8904b649424fc2b6-s.woff2",revision:"0cfe36cbffee9ec5e9d847857ad6b2e2"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/9b0806ad5f3ca1f1-s.woff2",revision:"c5ba3eef5a1f6c881a2a9256acb3b550"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/df932ea5d62b4a1d-s.p.woff2",revision:"58e392c0f84c32653c7fea0f1fe1e206"},{url:"/_next/static/media/f370cc99eabd7905-s.woff2",revision:"7e8f776cf772d817f3a7f9bf8cd345fa"},{url:"/android-chrome-192x192.png",revision:"351ca9c0056e93997e5922203ffd1415"},{url:"/android-chrome-512x512.png",revision:"347d4d8d957f2e66887eadc00995c69c"},{url:"/apple-icon.png",revision:"11e386718377bbe65091fb0f4b026cb0"},{url:"/apple-touch-icon.png",revision:"11e386718377bbe65091fb0f4b026cb0"},{url:"/assets/icons/github.webp",revision:"4099b20519920936661292eeb8d30049"},{url:"/assets/icons/gmail.webp",revision:"a2d83d6b2b016428b7cbcb4b85a604ec"},{url:"/assets/icons/hanifputra.webp",revision:"21ae3d81df6ff1c0c3d212fc738f8c19"},{url:"/assets/icons/linkedin.webp",revision:"55040659a92ad7a54e7a99c7f42229fe"},{url:"/assets/icons/whatsapp.webp",revision:"7cf6ff0190fe951145414a03b5c522e1"},{url:"/assets/images/project/agpi.jpg",revision:"aa443b2b9efd2e7e9051060f2b4725ff"},{url:"/assets/images/project/ags.jpg",revision:"962640f8fb7d081a44f66f925554ff75"},{url:"/assets/images/project/always-on.jpg",revision:"58d1c6b2e96b606c96ffd6d6ff406dca"},{url:"/assets/images/project/anjartanjung.jpg",revision:"43e931a76b9cb806b41a8ad79bdac319"},{url:"/assets/images/project/ayana-hotel.jpg",revision:"d9510e128c37a17a0145b3b1ff0c1f20"},{url:"/assets/images/project/bro-warkop.jpg",revision:"a5d5c600593481ca333d9f9b4daf341d"},{url:"/assets/images/project/flashads-compro.jpg",revision:"ac2f38e3598e254dea2981c0cf2cb761"},{url:"/assets/images/project/flashads-portal.jpg",revision:"3f911d5428b4354df8c3c3e9b96fb9b0"},{url:"/assets/images/project/hino-jabotabek.jpg",revision:"a2fb54570ca341b1dfe9695bd4c8e497"},{url:"/assets/images/project/jms.jpg",revision:"c966f8bddb21018a85955ea33a3e713d"},{url:"/assets/images/project/kenikahan.jpg",revision:"9fd350f7d536292627cc2c0719eb05c5"},{url:"/assets/images/project/kondangdia-theme.jpg",revision:"cdf95ff2ab5379c93563c5e64f862ab7"},{url:"/assets/images/project/limitbreak.jpg",revision:"a84c38e0067dbfe15319caac09ac7a18"},{url:"/assets/images/project/logo-properti1001.jpg",revision:"af4982f891111e5731f458c6fc7e50cd"},{url:"/assets/images/project/mabar.jpg",revision:"3c5ce8bc0dd715b42ffda95268a7253c"},{url:"/assets/images/project/qpocket.jpg",revision:"d7e57e55b6f776ba4888e0336e3cc4c1"},{url:"/assets/images/project/rex-regum-qeon.jpg",revision:"ed3a8af8279f5c8207b8494005660cbc"},{url:"/assets/images/project/rrq-mabar.jpg",revision:"d090c572c245769840c28a7696ead92e"},{url:"/assets/images/project/ruangraung.jpg",revision:"d77df0ba3fe27efe54bb99f0ac5f1c65"},{url:"/assets/images/project/sanica.jpg",revision:"cc29bc209370ec6cad5f20671156fa2f"},{url:"/assets/images/project/thumb/agpi.jpg",revision:"3f7d9ea6aa8d7d4f4392ce3bf5887790"},{url:"/assets/images/project/thumb/ags.jpg",revision:"e132520fdc3b47f456b1fc7ecf9149c4"},{url:"/assets/images/project/thumb/anjartanjung.jpg",revision:"08252323376e98a80f6acc0532705cbb"},{url:"/assets/images/project/thumb/ayana-hotel.jpg",revision:"982bb160100d783505979cfadf6153e0"},{url:"/assets/images/project/thumb/bro-warkop.jpg",revision:"be72f4cc56d0c1e3753d138fbdd9a20c"},{url:"/assets/images/project/thumb/flashads-compro.jpg",revision:"8a7900ad191224966235601563b8cbbc"},{url:"/assets/images/project/thumb/flashads-portal.jpg",revision:"a38690efe9336352c1e9f2cf4b8f4977"},{url:"/assets/images/project/thumb/hino-jabotabek.jpg",revision:"0d2d2ca89cb8da858180192646858b6e"},{url:"/assets/images/project/thumb/jms.jpg",revision:"1cdcd9a52fac5e2e37f5790e1261ee62"},{url:"/assets/images/project/thumb/mabar.jpg",revision:"6d271f9be5fc6a41de9bcb689fc15016"},{url:"/assets/images/project/thumb/qpocket.jpg",revision:"d33082ad28d44f71fbc14534adbfe9f1"},{url:"/assets/images/project/thumb/rex-regum-qeon.jpg",revision:"b3f8900949feb63ea98e217d2e927daf"},{url:"/assets/images/project/thumb/rrq-mabar.jpg",revision:"0fa7334e7fefff07d4e290aebcfdc19a"},{url:"/assets/images/project/thumb/ruangraung.jpg",revision:"83fc1aa4a18debce2e4a830325620fd9"},{url:"/assets/images/project/thumb/sanica.jpg",revision:"69f6cb59c65cc046ce12270a29a39350"},{url:"/assets/images/project/thumb/uin.jpg",revision:"c132afd56b8f6415e7360e581b9af3dc"},{url:"/assets/images/project/thumb/xfloor.jpg",revision:"f5fad01707d37ff47528e6957ecf060e"},{url:"/assets/images/project/uin.jpg",revision:"9c1663be172c220bba047b7584c2a522"},{url:"/assets/images/project/xfloor.jpg",revision:"6633141ebf2d84dfca69f683f11cf6ca"},{url:"/assets/images/skill/affinity-designer-logo.png",revision:"62c185755913c4eef1a197bab4b851dd"},{url:"/assets/images/skill/figma-logo.png",revision:"d1ec1a512cdb8a6c427bbfd5afdf4c1e"},{url:"/assets/images/skill/framer-logo.png",revision:"418c297d077f095c0dadbddaa007f2db"},{url:"/assets/images/skill/gatsbyjs-logo.png",revision:"8e9f81c249f9f3b8c267e78c5ffc2524"},{url:"/assets/images/skill/github-logo.png",revision:"3104964bb41355ac8fb8674c6705f618"},{url:"/assets/images/skill/mui-logo.png",revision:"814278d28506104ad31db8f501b0bfa4"},{url:"/assets/images/skill/nextjs-logo.png",revision:"97d0d3f12070d92f1d470b6fa5bc28aa"},{url:"/assets/images/skill/nodejs-logo.png",revision:"5e934da01e5164c6dd356cf314b4bc41"},{url:"/assets/images/skill/photoshop-logo.png",revision:"dbe3637dcbb9a531497d54b57d336357"},{url:"/assets/images/skill/reactjs-logo.png",revision:"ab06e5e04b2f7100a97bc422efa99b5d"},{url:"/assets/images/skill/redux-logo.png",revision:"870f96f744bf5f74cc2841925169893e"},{url:"/assets/images/skill/spline-logo.png",revision:"395d183154086e07849f6dc6b71812ad"},{url:"/assets/images/skill/strapi-logo.png",revision:"be1c180412c60e797aa32f65651a0bbd"},{url:"/assets/images/skill/tailwind-logo.png",revision:"2a2c76bf6fd9ba06513f6d5dd59ef749"},{url:"/assets/images/skill/vercel-logo.png",revision:"a1adc6e8faa10cace0fce34e9ff257a2"},{url:"/assets/images/skill/wordpress-logo.png",revision:"44ce4f05c6c4fbdc1b0cd97334fce270"},{url:"/favicon-16x16.png",revision:"cbffda24690103cb3d91ec06ebf652ec"},{url:"/favicon-32x32.png",revision:"0598bc1e481dfaebf93dd718af3d0fb8"},{url:"/favicon.ico",revision:"2549b7d5b648bfef0c2d31df388bed28"},{url:"/icon.png",revision:"46d5426306608973f54e50bc81f73e57"},{url:"/manifest.json",revision:"e1a966642ae29b506351c5346d0623ac"},{url:"/og-image.alt.txt",revision:"d523ac3c1d730b6285cb60e706d911f4"},{url:"/og-image.png",revision:"b004e9de4aed09cec6b3aefcddfbf183"},{url:"/robots.txt",revision:"49fd379de13cb7446e76e5729c2db651"},{url:"/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/sitemap.xml",revision:"a3efb8e4a4eff67b564d7d83444ad74f"},{url:"/twitter-image.alt.txt",revision:"d523ac3c1d730b6285cb60e706d911f4"},{url:"/twitter-image.png",revision:"b004e9de4aed09cec6b3aefcddfbf183"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
