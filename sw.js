if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>i(e,n),u={module:{uri:n},exports:t,require:o};s[n]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AuthService-DQWrAYmy.js",revision:null},{url:"assets/DarkModeService-CZbGOy82.js",revision:null},{url:"assets/DarkModeViewModel-BKril9E9.js",revision:null},{url:"assets/index-BAHnhcc5.css",revision:null},{url:"assets/index-C_xTnBHH.js",revision:null},{url:"assets/index-DXqQCM1T.js",revision:null},{url:"assets/inject-n6UYS-vq.js",revision:null},{url:"assets/injectable-B6feLNdE.js",revision:null},{url:"assets/LoginViewModel-D15E8YKl.js",revision:null},{url:"assets/PortalConfigurationService-BF-RHvsK.js",revision:null},{url:"assets/PortalConfigurationViewModel-dDd9faaM.js",revision:null},{url:"assets/router-DSIfXc5w.js",revision:null},{url:"assets/ToastService-B8WK0MUh.js",revision:null},{url:"assets/ToastViewModel-DUGdddUO.js",revision:null},{url:"assets/types-C6B3wf9j.js",revision:null},{url:"assets/types-DSfe_H9G.js",revision:null},{url:"index.html",revision:"9aca92a1a05f82278047cddee99941d0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"9a07ed52f87be5fc813763d0c24a1833"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));