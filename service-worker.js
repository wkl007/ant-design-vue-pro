if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let n=Promise.resolve();return e[s]||(n=new Promise((async n=>{if("document"in self){const e=document.createElement("script");e.src=s,document.head.appendChild(e),e.onload=n}else importScripts(s),n()}))),n.then((()=>{if(!e[s])throw new Error(`Module ${s} didn’t register its module`);return e[s]}))},n=(n,e)=>{Promise.all(n.map(s)).then((s=>e(1===s.length?s[0]:s)))},e={require:Promise.resolve(n)};self.define=(n,r,i)=>{e[n]||(e[n]=Promise.resolve().then((()=>{let e={};const l={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return e;case"module":return l;default:return s(n)}}))).then((s=>{const n=i(...s);return e.default||(e.default=n),e}))})))}}define("./service-worker.js",["./workbox-1a49dbba"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ant-design-vue-pro"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/ant-design-vue-pro/css/advance-form.3297973d.css",revision:null},{url:"/ant-design-vue-pro/css/analysis.cc29c5a0.css",revision:null},{url:"/ant-design-vue-pro/css/app.a7f4d9d2.css",revision:null},{url:"/ant-design-vue-pro/css/base.f4791c00.css",revision:null},{url:"/ant-design-vue-pro/css/basic-list.3c6f7012.css",revision:null},{url:"/ant-design-vue-pro/css/button.2cd0988a.css",revision:null},{url:"/ant-design-vue-pro/css/card-list.3469d5dc.css",revision:null},{url:"/ant-design-vue-pro/css/center.f091788d.css",revision:null},{url:"/ant-design-vue-pro/css/chunk-vendors.6f49ad6e.css",revision:null},{url:"/ant-design-vue-pro/css/fail.ae7fec6b.css",revision:null},{url:"/ant-design-vue-pro/css/input.37352d0c.css",revision:null},{url:"/ant-design-vue-pro/css/login.aea89879.css",revision:null},{url:"/ant-design-vue-pro/css/monitor.d5d03c2e.css",revision:null},{url:"/ant-design-vue-pro/css/register-result.a3501440.css",revision:null},{url:"/ant-design-vue-pro/css/register.2006fa76.css",revision:null},{url:"/ant-design-vue-pro/css/settings.28592a61.css",revision:null},{url:"/ant-design-vue-pro/css/step-form.1666a1bc.css",revision:null},{url:"/ant-design-vue-pro/css/success.789a1d98.css",revision:null},{url:"/ant-design-vue-pro/css/welcome.68811835.css",revision:null},{url:"/ant-design-vue-pro/css/workplace.48ca895f.css",revision:null},{url:"/ant-design-vue-pro/img/1.b74c2745.png",revision:null},{url:"/ant-design-vue-pro/img/2.1b763900.png",revision:null},{url:"/ant-design-vue-pro/img/3.234d6ee2.png",revision:null},{url:"/ant-design-vue-pro/img/background.d0eb804a.svg",revision:null},{url:"/ant-design-vue-pro/img/logo.4be25f36.svg",revision:null},{url:"/ant-design-vue-pro/img/logo.cd0cd4cf.png",revision:null},{url:"/ant-design-vue-pro/index.html",revision:"9084615417f4169c2d619c92764eb415"},{url:"/ant-design-vue-pro/js/403.3db8e2b9.js",revision:null},{url:"/ant-design-vue-pro/js/404.04bd5155.js",revision:null},{url:"/ant-design-vue-pro/js/500.ce5f024f.js",revision:null},{url:"/ant-design-vue-pro/js/advance-form.2d94b063.js",revision:null},{url:"/ant-design-vue-pro/js/advance-profile.5edd078f.js",revision:null},{url:"/ant-design-vue-pro/js/advance-table-list.79bea664.js",revision:null},{url:"/ant-design-vue-pro/js/analysis.29c7683f.js",revision:null},{url:"/ant-design-vue-pro/js/app.32050f92.js",revision:null},{url:"/ant-design-vue-pro/js/base.991d9201.js",revision:null},{url:"/ant-design-vue-pro/js/basic-form.d3832106.js",revision:null},{url:"/ant-design-vue-pro/js/basic-list.dbce845b.js",revision:null},{url:"/ant-design-vue-pro/js/basic-profile.417c7fc9.js",revision:null},{url:"/ant-design-vue-pro/js/binding.5e50fd0b.js",revision:null},{url:"/ant-design-vue-pro/js/button.17b9086e.js",revision:null},{url:"/ant-design-vue-pro/js/card-list.8ccc98c9.js",revision:null},{url:"/ant-design-vue-pro/js/center.7fd1a8d2.js",revision:null},{url:"/ant-design-vue-pro/js/chunk-vendors.9752a8ab.js.LICENSE.txt",revision:"646d8f017fb09431476dd2ca2a58af34"},{url:"/ant-design-vue-pro/js/custom.cb1ca707.js",revision:null},{url:"/ant-design-vue-pro/js/fail.01d54038.js",revision:null},{url:"/ant-design-vue-pro/js/input.6a9b4090.js",revision:null},{url:"/ant-design-vue-pro/js/lang-components-en-US.20ff9133.js",revision:null},{url:"/ant-design-vue-pro/js/lang-components-setting-drawer-en-US.a022ca60.js",revision:null},{url:"/ant-design-vue-pro/js/lang-en-US.c21a24a7.js",revision:null},{url:"/ant-design-vue-pro/js/lang-en-US.c21a24a7.js.LICENSE.txt",revision:"97b1dd9a5ce65cae24524bdba36cd9c8"},{url:"/ant-design-vue-pro/js/lang-globals-en-US.d1dd1917.js",revision:null},{url:"/ant-design-vue-pro/js/lang-pages-en-US.637c416b.js",revision:null},{url:"/ant-design-vue-pro/js/lang-routes-en-US.e3a63063.js",revision:null},{url:"/ant-design-vue-pro/js/login.e96db905.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-1.10947502.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-2-1.60e2af3b.js",revision:null},{url:"/ant-design-vue-pro/js/menu1-2.f1cbd277.js",revision:null},{url:"/ant-design-vue-pro/js/menu1.44f97911.js",revision:null},{url:"/ant-design-vue-pro/js/menu2.d3002dec.js",revision:null},{url:"/ant-design-vue-pro/js/menu3-1.7bc54ca6.js",revision:null},{url:"/ant-design-vue-pro/js/menu3.cd42322e.js",revision:null},{url:"/ant-design-vue-pro/js/monitor.dd00b7d4.js",revision:null},{url:"/ant-design-vue-pro/js/notification.dbc5998d.js",revision:null},{url:"/ant-design-vue-pro/js/permission-list.e7ca3309.js",revision:null},{url:"/ant-design-vue-pro/js/rate.fb0f2f8f.js",revision:null},{url:"/ant-design-vue-pro/js/register-result.b8d5118f.js",revision:null},{url:"/ant-design-vue-pro/js/register.60c54f38.js",revision:null},{url:"/ant-design-vue-pro/js/role-list.9c4667a9.js",revision:null},{url:"/ant-design-vue-pro/js/router.65ddfe5d.js",revision:null},{url:"/ant-design-vue-pro/js/security.fabc3a0e.js",revision:null},{url:"/ant-design-vue-pro/js/settings.9f035018.js",revision:null},{url:"/ant-design-vue-pro/js/step-form.4509d970.js",revision:null},{url:"/ant-design-vue-pro/js/success.4838a7b3.js",revision:null},{url:"/ant-design-vue-pro/js/table-list.a6cef6bd.js",revision:null},{url:"/ant-design-vue-pro/js/welcome.2b16fc03.js",revision:null},{url:"/ant-design-vue-pro/js/workplace.a213f6c8.js",revision:null},{url:"/ant-design-vue-pro/manifest.json",revision:"0662225c7b62ab82291f9adb0c0fc3f4"},{url:"/ant-design-vue-pro/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
