"use strict";(()=>{var U=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var se=Object.getOwnPropertyNames;var te=Object.prototype.hasOwnProperty;var ne=(n,e)=>()=>(n&&(e=n(n=0)),e);var N=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),ie=(n,e)=>{for(var i in e)U(n,i,{get:e[i],enumerable:!0})},ge=(n,e,i,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of se(e))!te.call(n,r)&&r!==i&&U(n,r,{get:()=>e[r],enumerable:!(m=re(e,r))||m.enumerable});return n};var ae=n=>ge(U({},"__esModule",{value:!0}),n);var H=N(($,I)=>{(function(n,e){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],e);else if(typeof $<"u")e(I);else{var i={exports:{}};e(i),n.browser=i.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:$,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let e="The message port closed before a response was received.",i=m=>{let r={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(r).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class g extends WeakMap{constructor(t,o=void 0){super(o),this.createItem=t}get(t){return this.has(t)||this.set(t,this.createItem(t)),super.get(t)}}let A=s=>s&&typeof s=="object"&&typeof s.then=="function",v=(s,t)=>(...o)=>{m.runtime.lastError?s.reject(new Error(m.runtime.lastError.message)):t.singleCallbackArg||o.length<=1&&t.singleCallbackArg!==!1?s.resolve(o[0]):s.resolve(o)},w=s=>s==1?"argument":"arguments",y=(s,t)=>function(l,...u){if(u.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${w(t.minArgs)} for ${s}(), got ${u.length}`);if(u.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${w(t.maxArgs)} for ${s}(), got ${u.length}`);return new Promise((d,h)=>{if(t.fallbackToNoCallback)try{l[s](...u,v({resolve:d,reject:h},t))}catch(a){console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,a),l[s](...u),t.fallbackToNoCallback=!1,t.noCallback=!0,d()}else t.noCallback?(l[s](...u),d()):l[s](...u,v({resolve:d,reject:h},t))})},_=(s,t,o)=>new Proxy(t,{apply(l,u,d){return o.call(u,s,...d)}}),S=Function.call.bind(Object.prototype.hasOwnProperty),P=(s,t={},o={})=>{let l=Object.create(null),u={has(h,a){return a in s||a in l},get(h,a,p){if(a in l)return l[a];if(!(a in s))return;let c=s[a];if(typeof c=="function")if(typeof t[a]=="function")c=_(s,s[a],t[a]);else if(S(o,a)){let k=y(a,o[a]);c=_(s,s[a],k)}else c=c.bind(s);else if(typeof c=="object"&&c!==null&&(S(t,a)||S(o,a)))c=P(c,t[a],o[a]);else if(S(o,"*"))c=P(c,t[a],o["*"]);else return Object.defineProperty(l,a,{configurable:!0,enumerable:!0,get(){return s[a]},set(k){s[a]=k}}),c;return l[a]=c,c},set(h,a,p,c){return a in l?l[a]=p:s[a]=p,!0},defineProperty(h,a,p){return Reflect.defineProperty(l,a,p)},deleteProperty(h,a){return Reflect.deleteProperty(l,a)}},d=Object.create(s);return new Proxy(d,u)},L=s=>({addListener(t,o,...l){t.addListener(s.get(o),...l)},hasListener(t,o){return t.hasListener(s.get(o))},removeListener(t,o){t.removeListener(s.get(o))}}),J=new g(s=>typeof s!="function"?s:function(o){let l=P(o,{},{getContent:{minArgs:0,maxArgs:0}});s(l)}),B=new g(s=>typeof s!="function"?s:function(o,l,u){let d=!1,h,a=new Promise(T=>{h=function(f){d=!0,T(f)}}),p;try{p=s(o,l,h)}catch(T){p=Promise.reject(T)}let c=p!==!0&&A(p);if(p!==!0&&!c&&!d)return!1;let k=T=>{T.then(f=>{u(f)},f=>{let j;f&&(f instanceof Error||typeof f.message=="string")?j=f.message:j="An unexpected error occurred",u({__mozWebExtensionPolyfillReject__:!0,message:j})}).catch(f=>{console.error("Failed to send onMessage rejected reply",f)})};return k(c?p:a),!0}),Q=({reject:s,resolve:t},o)=>{m.runtime.lastError?m.runtime.lastError.message===e?t():s(new Error(m.runtime.lastError.message)):o&&o.__mozWebExtensionPolyfillReject__?s(new Error(o.message)):t(o)},D=(s,t,o,...l)=>{if(l.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${w(t.minArgs)} for ${s}(), got ${l.length}`);if(l.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${w(t.maxArgs)} for ${s}(), got ${l.length}`);return new Promise((u,d)=>{let h=Q.bind(null,{resolve:u,reject:d});l.push(h),o.sendMessage(...l)})},ee={devtools:{network:{onRequestFinished:L(J)}},runtime:{onMessage:L(B),onMessageExternal:L(B),sendMessage:D.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:D.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},R={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return r.privacy={network:{"*":R},services:{"*":R},websites:{"*":R}},P(m,ee,r)};n.exports=i(chrome)}else n.exports=globalThis.browser})});var W=N((pe,b)=>{"use strict";b.exports.browser=H();var E;typeof browser>"u"&&typeof chrome<"u"&&chrome.runtime?/\bOPR\//.test(navigator.userAgent)?E="opera":E="chrome":/\bEdge\//.test(navigator.userAgent)?E="edge":E="firefox",b.exports.browserType=E,typeof b.exports.browser.action>"u"&&(b.exports.browser.action=b.exports.browser.browserAction),b.exports.isBrowser=(...n)=>{for(let e=0;e<n.length;e++)if(n[e]==b.exports.browserType)return!0;return!1},b.exports.error=n=>{console.groupCollapsed(n.message),n.stack&&console.error(n.stack),console.groupEnd()}});var Z=N((fe,V)=>{"use strict";var F=class{constructor(){this.replyId=0,this.replies={},this.listeners={},this.hook=this.nullHook,this.debugLevel=0,this.useTarget=!1,this.logger=console,this.posts={}}setPost(e,i){typeof e=="string"?this.posts[e]=i:this.post=e}setUseTarget(e){this.useTarget=e}setDebugLevel(e){this.debugLevel=e}setHook(e){let i=this,m=Date.now();function r(){return typeof window<"u"&&typeof window.performance<"u"?window.performance.now():Date.now()-m}e?this.hook=g=>{g.timestamp=r();try{e(g)}catch(A){i.logger.warn("Hoor error",A)}}:this.hook=this.nullHook}nullHook(){}call(){let e=this,i,m,r,g,A=Array.prototype.slice.call(arguments);return typeof A[0]=="function"&&(i=A.shift()),e.useTarget?[m,r,...g]=A:[r,...g]=A,new Promise(function(v,w){let y=++e.replyId;e.debugLevel>=2&&e.logger.info("rpc #"+y,"call =>",r,g),e.hook({type:"call",callee:m,rid:y,method:r,args:g}),e.replies[y]={resolve:v,reject:w,peer:m};let _=i||e.useTarget&&e.posts[m]||e.post;e.useTarget?_(m,{type:"weh#rpc",_request:y,_method:r,_args:[...g]}):_({type:"weh#rpc",_request:y,_method:r,_args:[...g]})})}receive(e,i,m){let r=this;if(e._request)Promise.resolve().then(()=>{let g=r.listeners[e._method];if(typeof g=="function")return r.debugLevel>=2&&r.logger.info("rpc #"+e._request,"serve <= ",e._method,e._args),r.hook({type:"call",caller:m,rid:e._request,method:e._method,args:e._args}),Promise.resolve(g.apply(null,e._args)).then(A=>(r.hook({type:"reply",caller:m,rid:e._request,result:A}),A)).catch(A=>{throw r.hook({type:"reply",caller:m,rid:e._request,error:A.message}),A});throw new Error("Method "+e._method+" is not a function")}).then(g=>{r.debugLevel>=2&&r.logger.info("rpc #"+e._request,"serve => ",g),i({type:"weh#rpc",_reply:e._request,_result:g})}).catch(g=>{r.debugLevel>=1&&r.logger.info("rpc #"+e._request,"serve => !",g.message),i({type:"weh#rpc",_reply:e._request,_error:g.message})});else if(e._reply){let g=r.replies[e._reply];delete r.replies[e._reply],g?e._error?(r.debugLevel>=1&&r.logger.info("rpc #"+e._reply,"call <= !",e._error),r.hook({type:"reply",callee:g.peer,rid:e._reply,error:e._error}),g.reject(new Error(e._error))):(r.debugLevel>=2&&r.logger.info("rpc #"+e._reply,"call <= ",e._result),r.hook({type:"reply",callee:g.peer,rid:e._reply,result:e._result}),g.resolve(e._result)):r.logger.error("Missing reply handler")}}listen(e){Object.assign(this.listeners,e)}};V.exports=new F});var K=N((be,G)=>{"use strict";var x=W(),z=x.browser;x.rpc=Z();x.uiName=window._wehPanelName;x.uiName||(x.uiName="injected-"+Math.round(Math.random()*1e9));var oe="weh:"+z.runtime.id+":"+x.uiName,C=z.runtime.connect({name:oe});x.rpc.setPost(C.postMessage.bind(C));C.onMessage.addListener(n=>{x.rpc.receive(n,C.postMessage.bind(C))});x.rpc.listen({setPrefs:()=>{},close:()=>{}});x.is_safe=(async()=>{await x.rpc.call("appStarted",{uiName:x.uiName}),await x.rpc.call("appReady",{uiName:x.uiName})})();G.exports=x});var X={};ie(X,{SmartNameEvaluate:()=>me});function me(n){let e=n.xpath,i=null;function m(){if(i=i&&i.trim()||"",i&&n.regexp){let g=new RegExp(n.regexp,"m").exec(i);g?typeof g[1]<"u"?i=g[1]||"":i=g[0]||"":i=""}}switch(n.mode){case"page-title":e="/html/head/title/text()";case"page-content":i=document.evaluate(e,document,null,XPathResult.STRING_TYPE,null).stringValue||null;break;case"obfuscated":return new Promise((r,g)=>{crypto.subtle.digest("SHA-256",new TextEncoder("utf-8").encode(window.location.href)).then(A=>{i=Array.from(new Uint8Array(A)).slice(0,16).map(w=>("00"+w.toString(16)).slice(-2)).join(""),m(),r(i)}).catch(g)});case"header-url":if(i=n.headerFilename||n.urlFilename,!i){let r=le.exec(window.location.href);r?i=r[1]:i=""}break;default:i=""}return m(),i.length>128&&(i=i.substr(0,64)),i}var le,Y=ne(()=>{"use strict";le=new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)")});var Ae=K(),{SmartNameEvaluate:ce}=(Y(),ae(X));function ue(){let n={},e=null,i=null,m=[{sel:"meta[property='og:image:secure_url']",attr:"content"},{sel:"meta[property='og:image']",attr:"content"},{sel:"link[as='image']",attr:"href"},{sel:"link[rel='thumbnail']",attr:"href"},{sel:"link[rel='image_src']",attr:"href"},{sel:"meta[property='twitter:image']",attr:"content"}];for(let r=0;r<m.length&&!e;r++){let g=m[r],A=document.querySelector(g.sel);A&&(e=A.getAttribute(g.attr)||null)}if(e){let r=document.createElement("a");r.href=e,e=r.href}else{let r=/^(https?:\/\/(?:[^\/]*\.)?\x79\x6f\x75\x74\x75\x62\x65(?:\.co)?\.(?:[^\.\/]+))\/.*\bv=([^&]+)/.exec(window.location.href);r&&(e="https://i.ytimg.com/vi/"+r[2]+"/default.jpg"),i=document.querySelector("head title")?.firstChild?.nodeValue}if(e)n.thumbnailUrl=e;else{let r=document.querySelectorAll("video");r.length==1&&r[0].poster&&(n.thumbnailUrl=r[0].poster)}return i&&(n.title=i),n}var xe=window.document.URL,M={pageUrl:xe,topUrl:window.top?.document?.URL},q=ue();q.thumbnailUrl&&(M.thumbnailUrl=q.thumbnailUrl);q.title&&(M.title=q.title);var de=window._$vdhHitId,O=window._$vdhSmartNameSpecs;Promise.resolve().then(()=>{if(O)return new Promise((n,e)=>{setTimeout(()=>{n(ce(O))},O.delay)})}).then(n=>{n&&(M.title=n),Ae.rpc.call("hitPageData",{id:de,data:M})});})();
