if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}})).then(e=>{const s=a(...e);return r.default||(r.default=s),r})}))}}define("./sw.js",["./workbox-e41b4514"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/avatar.png",revision:"5a8182d226d77ff740c36dff9bd6deb4"},{url:"assets/images/avatar.svg",revision:"9322f954973d3c37e24cefab93c21726"},{url:"assets/images/favicon-192x192.png",revision:"a8d2dffe0ba20a720021c9e3b13ea70e"},{url:"assets/images/favicon-512x512.png",revision:"54792c81301ac9528efe7e32a79f46a2"},{url:"assets/images/favicon.ico",revision:"56e7f8f72dd237bb34688facf9b20ecf"},{url:"assets/images/og-image.en_US.png",revision:"bcfc62adc45c228ded5cbe1d252e1beb"},{url:"css/icons-text_container.css",revision:"8fc198fc0560ca81ef92db8631039b1c"},{url:"css/main.css",revision:"cd53b22c8d46b07e42fb9854130fe4de"},{url:"css/socials.css",revision:"4a23bbbe2a2eaea7df9a575a0fb9867a"},{url:"css/typography.css",revision:"728d784ab5cdb1638481c6d354c8dd50"},{url:"index.html",revision:"ef16faffdd12da554082eecb48a68110"}],{})}));
//# sourceMappingURL=sw.js.map
