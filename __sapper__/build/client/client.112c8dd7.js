function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function E(t){return _(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e){t.value=null==e?"":e}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let j;function N(t){j=t}function P(){if(!j)throw new Error("Function called outside component initialization");return j}function R(t){P().$$.on_mount.push(t)}const A=[],L=[],O=[],C=[],q=Promise.resolve();let I=!1;function T(t){O.push(t)}let U=!1;const k=new Set;function J(){if(!U){U=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];N(e),B(e.$$)}for(N(null),A.length=0;L.length;)L.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];k.has(e)||(k.add(e),e())}O.length=0}while(A.length);for(;C.length;)C.pop()();I=!1,U=!1,k.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const D=new Set;let V;function K(){V={r:0,c:[],p:V}}function M(){V.r||o(V.c),V=V.p}function z(t,e){t&&t.i&&(D.delete(t),t.i(e))}function G(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),V.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),T((()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(T)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(A.push(t),I||(I=!0,q.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,c,i,a,l=[-1]){const u=j;N(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&Z(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&z(e.$$.fragment),X(e,n.target,n.anchor),J()}N(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={};function st(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=p("div"),o&&o.c(),this.h()},l(t){e=b(t,"DIV",{class:!0});var n=v(e);o&&o.l(n),n.forEach(f),this.h()},h(){y(e,"class","page")},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(z(o,t),n=!0)},o(t){G(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function ct(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class it extends et{constructor(t){super(),tt(this,t,ct,st,c,{})}}function at(e){let n,r,o,s,c,i;return document.title=n=e[0]+" | "+e[1].message,{c(){r=h(),o=p("div"),s=p("a"),c=p("img"),this.h()},l(t){w('[data-svelte="svelte-1p1rztm"]',document.head).forEach(f),r=E(t),o=b(t,"DIV",{class:!0});var e=v(o);s=b(e,"A",{href:!0,rel:!0,class:!0});var n=v(s);c=b(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(f),e.forEach(f),this.h()},h(){c.src!==(i="/phishing__/error404.png")&&y(c,"src","/phishing__/error404.png"),y(c,"alt","404 not found"),y(c,"class","svelte-1n7nbj5"),y(s,"href","/"),y(s,"rel","preload"),y(s,"class","svelte-1n7nbj5"),y(o,"class","layout svelte-1n7nbj5")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),l(s,c)},p(t,[e]){3&e&&n!==(n=t[0]+" | "+t[1].message)&&(document.title=n)},i:t,o:t,d(t){t&&f(r),t&&f(o)}}}function lt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}class ut extends et{constructor(t){super(),tt(this,t,lt,at,c,{status:0,error:1})}}function ft(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&H(n.$$.fragment),r=m()},l(t){n&&W(n.$$.fragment,t),r=m()},m(t,e){n&&X(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[F(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;G(t.$$.fragment,1,0,(()=>{Q(t,1)})),M()}c?(n=new c(i()),H(n.$$.fragment),z(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&z(n.$$.fragment,t),o=!0)},o(t){n&&G(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Q(n,t)}}}function pt(t){let e,n;return e=new ut({props:{error:t[0],status:t[1]}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){G(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function dt(t){let e,n,r,o;const s=[pt,ft],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(K(),G(c[a],1,1,(()=>{c[a]=null})),M(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),z(n,1),n.m(r.parentNode,r))},i(t){o||(z(n),o=!0)},o(t){G(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function ht(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[dt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new it({props:s}),{c(){H(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(z(n.$$.fragment,t),r=!0)},o(t){G(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,P().$$.after_update.push(u),f=ot,p=r,P().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class gt extends et{constructor(t){super(),tt(this,t,mt,ht,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const $t=[],yt=[{js:()=>Promise.all([import("./index.3c4e89d9.js"),__inject_styles(["client-9ad6eaff.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./auth.b2016e21.js"),__inject_styles(["client-9ad6eaff.css","auth-0b6831b2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./otp.ecabf212.js"),__inject_styles(["client-9ad6eaff.css","otp-6782a8b2.css"])]).then((function(t){return t[0]}))}],vt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/auth\/?$/,parts:[{i:1}]},{pattern:/^\/otp\/?$/,parts:[{i:2}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function bt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function _t(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Et,xt=1;const St="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},wt={};let jt,Nt;function Pt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Rt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt))return null;let e=t.pathname.slice(jt.length);if(""===e&&(e="/"),!$t.some((t=>t.test(e))))for(let n=0;n<vt.length;n+=1){const r=vt[n],o=r.pattern.exec(e);if(o){const n=Pt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function At(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=_t(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Rt(o);if(s){Ct(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),St.pushState({id:Et},"",o.href)}}function Lt(){return{x:pageXOffset,y:pageYOffset}}function Ot(t){if(wt[Et]=Lt(),t.state){const e=Rt(new URL(location.href));e?Ct(e,t.state.id):location.href=location.href}else xt=xt+1,function(t){Et=t}(xt),St.replaceState({id:Et},"",location.href)}function Ct(t,e,n,r){return bt(this,void 0,void 0,(function*(){const o=!!e;if(o)Et=e;else{const t=Lt();wt[Et]=t,Et=e=++xt,wt[Et]=n?t:{x:0,y:0}}if(yield Nt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=wt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),wt[Et]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function qt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let It,Tt=null;function Ut(t){const e=_t(t.target);e&&"prefetch"===e.rel&&function(t){const e=Rt(new URL(t,qt(document)));if(e)Tt&&t===Tt.href||(Tt={href:t,promise:te(e)}),Tt.promise}(e.href)}function kt(t){clearTimeout(It),It=setTimeout((()=>{Ut(t)}),20)}function Jt(t,e={noscroll:!1,replaceState:!1}){const n=Rt(new URL(t,qt(document)));return n?(St[e.replaceState?"replaceState":"pushState"]({id:Et},"",t),Ct(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Bt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Dt,Vt,Kt,Mt=!1,zt=[],Gt="{}";const Yt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:rt(null),session:rt(Bt&&Bt.session)};let Ft,Ht,Wt;function Xt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Qt(t){return bt(this,void 0,void 0,(function*(){Dt&&Yt.preloading.set(!0);const e=function(t){return Tt&&Tt.href===t.href?Tt.promise:te(t)}(t),n=Vt={},r=yield e,{redirect:o}=r;if(n===Vt)if(o)yield Jt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Zt(n,e,Xt(e,t.page))}}))}function Zt(t,e,n){return bt(this,void 0,void 0,(function*(){Yt.page.set(n),Yt.preloading.set(!1),Dt?Dt.$set(e):(e.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},e.level0={props:yield Kt},e.notify=Yt.page.notify,Dt=new gt({target:Wt,props:e,hydrate:!0})),zt=t,Gt=JSON.stringify(n.query),Mt=!0,Ht=!1}))}function te(t){return bt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Kt){const t=()=>({});Kt=Bt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Ft)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>bt(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Gt)return!0;const o=zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!Ht&&!u&&zt[i]&&zt[i].part===e.i)return zt[i];u=!1;const{default:d,preload:h}=yield yt[e.i].js();let m;return m=Mt||!Bt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ft):{}:Bt.preloaded[i+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}Yt.session.subscribe((t=>bt(void 0,void 0,void 0,(function*(){if(Ft=t,!Mt)return;Ht=!0;const e=Rt(new URL(location.href)),n=Vt={},{redirect:r,props:o,branch:s}=yield te(e);n===Vt&&(r?yield Jt(r.location,{replaceState:!0}):yield Zt(s,o,Xt(o,e.page)))}))));const ee=document.querySelector("#sapper");var ne,re;ne={target:ee}.target,Wt=ne,re=Bt.baseUrl,jt=re,Nt=Qt,"scrollRestoration"in St&&(St.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{St.scrollRestoration="auto"})),addEventListener("load",(()=>{St.scrollRestoration="manual"})),addEventListener("click",At),addEventListener("popstate",Ot),addEventListener("touchstart",Ut),addEventListener("mousemove",kt),Bt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Bt;Kt||(Kt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Kt},level1:{props:{status:s,error:c},component:ut},segments:o},a=Pt(n);Zt([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;St.replaceState({id:xt},"",e);const n=Rt(new URL(location.href));if(n)return Ct(n,xt,!0,t)}));export{et as S,h as a,E as b,b as c,f as d,p as e,v as f,y as g,l as h,tt as i,u as j,Jt as k,_ as l,x as m,t as n,R as o,S as p,w as q,g as r,c as s,d as t,$ as u,o as v};

import __inject_styles from './inject_styles.5607aec6.js';