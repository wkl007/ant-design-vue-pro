if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return n[s]||(e=new Promise((async e=>{if("document"in self){const n=document.createElement("script");n.src=s,document.head.appendChild(n),n.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!n[s])throw new Error(`Module ${s} didn’t register its module`);return n[s]}))},e=(e,n)=>{Promise.all(e.map(s)).then((s=>n(1===s.length?s[0]:s)))},n={require:Promise.resolve(e)};self.define=(e,r,i)=>{n[e]||(n[e]=Promise.resolve().then((()=>{let n={};const l={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return n;case"module":return l;default:return s(e)}}))).then((s=>{const e=i(...s);return n.default||(n.default=e),n}))})))}}define("./service-worker.js",["./workbox-bf0aabb3"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ant-design-vue-pro"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/ant-design-vue-pro/css/advance-form.e3bc70ce.css",revision:null},{url:"/ant-design-vue-pro/css/analysis.df7f4d3c.css",revision:null},{url:"/ant-design-vue-pro/css/app.dd664a80.css",revision:null},{url:"/ant-design-vue-pro/css/base.a21dd1cc.css",revision:null},{url:"/ant-design-vue-pro/css/basic-list.72bb3121.css",revision:null},{url:"/ant-design-vue-pro/css/button.c7adb729.css",revision:null},{url:"/ant-design-vue-pro/css/card-list.fdaab9bf.css",revision:null},{url:"/ant-design-vue-pro/css/center.4479e66d.css",revision:null},{url:"/ant-design-vue-pro/css/chunk-vendors.09071cfc.css",revision:null},{url:"/ant-design-vue-pro/css/fail.85127db0.css",revision:null},{url:"/ant-design-vue-pro/css/input.bbbcaab8.css",revision:null},{url:"/ant-design-vue-pro/css/login.30cb5a03.css",revision:null},{url:"/ant-design-vue-pro/css/monitor.8ff37d55.css",revision:null},{url:"/ant-design-vue-pro/css/register-result.606f58c3.css",revision:null},{url:"/ant-design-vue-pro/css/register.76a692ea.css",revision:null},{url:"/ant-design-vue-pro/css/settings.cf659654.css",revision:null},{url:"/ant-design-vue-pro/css/step-form.a8074c3f.css",revision:null},{url:"/ant-design-vue-pro/css/success.89cbb1a1.css",revision:null},{url:"/ant-design-vue-pro/css/welcome.720e124b.css",revision:null},{url:"/ant-design-vue-pro/css/workplace.d3a56cf9.css",revision:null},{url:"/ant-design-vue-pro/img/1.b74c2745.png",revision:null},{url:"/ant-design-vue-pro/img/2.1b763900.png",revision:null},{url:"/ant-design-vue-pro/img/3.234d6ee2.png",revision:null},{url:"/ant-design-vue-pro/img/background.d0eb804a.svg",revision:null},{url:"/ant-design-vue-pro/img/logo.4be25f36.svg",revision:null},{url:"/ant-design-vue-pro/img/logo.cd0cd4cf.png",revision:null},{url:"/ant-design-vue-pro/index.html",revision:"b913e29ba818932f28a9ebd960ec4d36"},{url:"/ant-design-vue-pro/js/1662.f8ce9c06.js",revision:null},{url:"/ant-design-vue-pro/js/403.19369416.js",revision:null},{url:"/ant-design-vue-pro/js/404.fff40ded.js",revision:null},{url:"/ant-design-vue-pro/js/500.ca9ad0e0.js",revision:null},{url:"/ant-design-vue-pro/js/5997.10f36b87.js",revision:null},{url:"/ant-design-vue-pro/js/advance-form.98aca1af.js",revision:null},{url:"/ant-design-vue-pro/js/advance-profile.46e5f7ca.js",revision:null},{url:"/ant-design-vue-pro/js/advance-table-list.1e5d0ce4.js",revision:null},{url:"/ant-design-vue-pro/js/analysis.48ae4c72.js",revision:null},{url:"/ant-design-vue-pro/js/app.735b026e.js",revision:null},{url:"/ant-design-vue-pro/js/base.3fbd7fff.js",revision:null},{url:"/ant-design-vue-pro/js/basic-form.43900b30.js",revision:null},{url:"/ant-design-vue-pro/js/basic-list.d9b290fc.js",revision:null},{url:"/ant-design-vue-pro/js/basic-profile.ae1281bf.js",revision:null},{url:"/ant-design-vue-pro/js/binding.563f42b4.js",revision:null},{url:"/ant-design-vue-pro/js/button.f4b8a6d9.js",revision:null},{url:"/ant-design-vue-pro/js/card-list.091b764d.js",revision:null},{url:"/ant-design-vue-pro/js/center.8f74c055.js",revision:null},{url:"/ant-design-vue-pro/js/chunk-vendors.f2cf2cde.js.LICENSE.txt",revision:"5b22bc0fbb079e3682d5dad663181a71"},{url:"/ant-design-vue-pro/js/custom.ea14ab79.js",revision:null},{url:"/ant-design-vue-pro/js/fail.656a3851.js",revision:null},{url:"/ant-design-vue-pro/js/input.2c70683e.js",revision:null},{url:"/ant-design-vue-pro/js/lang-components-en-US.f8f018bc.js",revision:null},{url:"/ant-design-vue-pro/js/lang-components-setting-drawer-en-US.051402af.js",revision:null},{url:"/ant-design-vue-pro/js/lang-en-US.aaeac624.js",revision:null},{url:"/ant-design-vue-pro/js/lang-en-US.aaeac624.js.LICENSE.txt",revision:"97b1dd9a5ce65cae24524bdba36cd9c8"},{url:"/ant-design-vue-pro/js/lang-globals-en-US.4be86f67.js",revision:null},{url:"/ant-design-vue-pro/js/lang-pages-en-US.4e4b309e.js",revision:null},{url:"/ant-design-vue-pro/js/lang-routes-en-US.623eebb6.js",revision:null},{url:"/ant-design-vue-pro/js/login.b5e5a0f1.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-1.7299af5e.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-2-1.89f37fb8.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-2.0fdf62fb.js",revision:null},{url:"/ant-design-vue-pro/js/menu1.0c14a01d.js",revision:null},{url:"/ant-design-vue-pro/js/menu2.ea7d9742.js",revision:null},{url:"/ant-design-vue-pro/js/menu3-1.92592cb0.js",revision:null},{url:"/ant-design-vue-pro/js/menu3.89666f37.js",revision:null},{url:"/ant-design-vue-pro/js/monitor.6b89cf59.js",revision:null},{url:"/ant-design-vue-pro/js/notification.54cb4ba6.js",revision:null},{url:"/ant-design-vue-pro/js/permission-list.f2533a5a.js",revision:null},{url:"/ant-design-vue-pro/js/rate.6ef949e7.js",revision:null},{url:"/ant-design-vue-pro/js/register-result.983c1f87.js",revision:null},{url:"/ant-design-vue-pro/js/register.ba200220.js",revision:null},{url:"/ant-design-vue-pro/js/role-list.e4ea512c.js",revision:null},{url:"/ant-design-vue-pro/js/router.924d5f6e.js",revision:null},{url:"/ant-design-vue-pro/js/security.5fbbf151.js",revision:null},{url:"/ant-design-vue-pro/js/settings.84c3ee9b.js",revision:null},{url:"/ant-design-vue-pro/js/step-form.0807668d.js",revision:null},{url:"/ant-design-vue-pro/js/success.41afefaf.js",revision:null},{url:"/ant-design-vue-pro/js/table-list.f02db9a3.js",revision:null},{url:"/ant-design-vue-pro/js/welcome.e434d2f8.js",revision:null},{url:"/ant-design-vue-pro/js/workplace.a0fd74b3.js",revision:null},{url:"/ant-design-vue-pro/manifest.json",revision:"0662225c7b62ab82291f9adb0c0fc3f4"},{url:"/ant-design-vue-pro/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
