function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=j(a,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function y(){}function g(){}function b(){}var w={};w[a]=function(){return this};var $=Object.getPrototypeOf,x=$&&$($(R([])));x&&x!==r&&o.call(x,a)&&(w=x);var _=b.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(i,a,u,c){var s=l(e[i],e,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:n,done:!0}}return g.prototype=_.constructor=b,b.constructor=g,g.displayName=s(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[u]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),s(_,c,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n,r){return t[1]&&r?y(n.ctx.slice(),t[1](r(e))):n.ctx}function E(e,n,r,o,i,a,u){var c=function(e,n,r,o){if(e[2]&&o){var i=e[2](o(r));if(void 0===n.dirty)return i;if("object"===t(i)){for(var a=[],u=Math.max(n.dirty.length,i.length),c=0;c<u;c+=1)a[c]=n.dirty[c]|i[c];return a}return n.dirty|i}return n.dirty}(n,o,i,a);if(c){var s=_(n,r,o,u);e.p(s,c)}}function S(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function R(){return O(" ")}function P(){return O("")}function A(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function T(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function C(t,e,n,r){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0,u=[];a<i.attributes.length;){var c=i.attributes[a++];n[c.name]||u.push(c.name)}for(var s=0;s<u.length;s++)i.removeAttribute(u[s]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):L(e)}function q(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function D(t){return q(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function J(t){r=t}function B(){if(!r)throw new Error("Function called outside component initialization");return r}function M(t){B().$$.on_mount.push(t)}var V=[],K=[],Y=[],z=[],H=Promise.resolve(),W=!1;function X(t){Y.push(t)}var Q=!1,Z=new Set;function tt(){if(!Q){Q=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];J(e),et(e.$$)}for(J(null),V.length=0;K.length;)K.pop()();for(var n=0;n<Y.length;n+=1){var r=Y[n];Z.has(r)||(Z.add(r),r())}Y.length=0}while(V.length);for(;z.length;)z.pop()();W=!1,Q=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}var nt,rt=new Set;function ot(){nt={r:0,c:[],p:nt}}function it(){nt.r||w(nt.c),nt=nt.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(rt.has(t))return;rt.add(t),nt.c.push((function(){rt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function ct(t,e){for(var n={},r={},o={$$scope:1},i=t.length;i--;){var a=t[i],u=e[i];if(u){for(var c in a)c in u||(r[c]=1);for(var s in u)o[s]||(n[s]=u[s],o[s]=1);t[i]=u}else for(var f in a)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function st(e){return"object"===t(e)&&null!==e?e:{}}function ft(t){t&&t.c()}function lt(t,e){t&&t.l(e)}function pt(t,e,n){var r=t.$$,o=r.fragment,i=r.on_mount,a=r.on_destroy,u=r.after_update;o&&o.m(e,n),X((function(){var e=i.map(g).filter($);a?a.push.apply(a,h(e)):w(e),t.$$.on_mount=[]})),u.forEach(X)}function ht(t,e){var n=t.$$;null!==n.fragment&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(V.push(t),W||(W=!0,H.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(t,e,n,o,i,a){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=r;J(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:a,update:m,not_equal:i,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:u,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&vt(t,e)),n})):[],f.update(),l=!0,w(f.before_update),f.fragment=!!o&&o(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(k)}else f.fragment&&f.fragment.c();e.intro&&at(t.$$.fragment),pt(t,e.target,e.anchor),tt()}J(c)}var mt=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){ht(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),yt=[];function gt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!yt.length,i=0;i<r.length;i+=1){var a=r[i];a[1](),yt.push(a,t)}if(o){for(var u=0;u<yt.length;u+=2)yt[u][0](yt[u+1]);yt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,u=[i,a];return r.push(u),1===r.length&&(e=n(o)||m),i(t),function(){var t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var bt={};function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function $t(t){var e,n,r=t[1].default,o=function(t,e,n,r){if(t){var o=_(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c:function(){e=L("div"),o&&o.c(),this.h()},l:function(t){var n=I(e=C(t,"DIV",{class:!0}));o&&o.l(n),n.forEach(k),this.h()},h:function(){T(e,"class","page")},m:function(t,r){j(t,e,r),o&&o.m(e,null),n=!0},p:function(t,e){var n=u(e,1)[0];o&&o.p&&1&n&&E(o,r,t,t[0],n,null,null)},i:function(t){n||(at(o,t),n=!0)},o:function(t){ut(o,t),n=!1},d:function(t){t&&k(e),o&&o.d(t)}}}function xt(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,i=e.$$scope;return t.$$set=function(t){"$$scope"in t&&n(0,i=t.$$scope)},[i,o]}var _t=function(t){f(n,mt);var e=wt(n);function n(t){var r;return v(this,n),dt(l(r=e.call(this)),t,xt,$t,x,{}),r}return n}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function St(t){var e,n,r,o,i;return document.title=e=t[0]+" | "+t[1].message,{c:function(){n=R(),r=L("div"),o=L("a"),i=L("img"),this.h()},l:function(t){F('[data-svelte="svelte-1p1rztm"]',document.head).forEach(k),n=D(t);var e=I(r=C(t,"DIV",{class:!0})),a=I(o=C(e,"A",{href:!0,rel:!0,class:!0}));i=C(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(k),e.forEach(k),this.h()},h:function(){i.src!=="/phishing__/error404.png"&&T(i,"src","/phishing__/error404.png"),T(i,"alt","404 not found"),T(i,"class","svelte-1n7nbj5"),T(o,"href","/"),T(o,"rel","preload"),T(o,"class","svelte-1n7nbj5"),T(r,"class","layout svelte-1n7nbj5")},m:function(t,e){j(t,n,e),j(t,r,e),S(r,o),S(o,i)},p:function(t,n){3&u(n,1)[0]&&e!==(e=t[0]+" | "+t[1].message)&&(document.title=e)},i:m,o:m,d:function(t){t&&k(n),t&&k(r)}}}function jt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o]}var kt=function(t){f(n,mt);var e=Et(n);function n(t){var r;return v(this,n),dt(l(r=e.call(this)),t,jt,St,x,{status:0,error:1}),r}return n}();function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Ot(t){var e,n,r,o=[t[4].props],i=t[4].component;function a(t){for(var e={},n=0;n<o.length;n+=1)e=y(e,o[n]);return{props:e}}return i&&(e=new i(a())),{c:function(){e&&ft(e.$$.fragment),n=P()},l:function(t){e&&lt(e.$$.fragment,t),n=P()},m:function(t,o){e&&pt(e,t,o),j(t,n,o),r=!0},p:function(t,r){var u=16&r?ct(o,[st(t[4].props)]):{};if(i!==(i=t[4].component)){if(e){ot();var c=e;ut(c.$$.fragment,1,0,(function(){ht(c,1)})),it()}i?(ft((e=new i(a())).$$.fragment),at(e.$$.fragment,1),pt(e,n.parentNode,n)):e=null}else i&&e.$set(u)},i:function(t){r||(e&&at(e.$$.fragment,t),r=!0)},o:function(t){e&&ut(e.$$.fragment,t),r=!1},d:function(t){t&&k(n),e&&ht(e,t)}}}function Rt(t){var e,n;return e=new kt({props:{error:t[0],status:t[1]}}),{c:function(){ft(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,r){pt(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){ht(e,t)}}}function Pt(t){var e,n,r,o,i=[Rt,Ot],a=[];function u(t,e){return t[0]?0:1}return e=u(t),n=a[e]=i[e](t),{c:function(){n.c(),r=P()},l:function(t){n.l(t),r=P()},m:function(t,n){a[e].m(t,n),j(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?a[e].p(t,o):(ot(),ut(a[c],1,1,(function(){a[c]=null})),it(),(n=a[e])?n.p(t,o):(n=a[e]=i[e](t)).c(),at(n,1),n.m(r.parentNode,r))},i:function(t){o||(at(n),o=!0)},o:function(t){ut(n),o=!1},d:function(t){a[e].d(t),t&&k(r)}}}function At(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Pt]},$$scope:{ctx:t}},i=0;i<r.length;i+=1)o=y(o,r[i]);return e=new _t({props:o}),{c:function(){ft(e.$$.fragment)},l:function(t){lt(e.$$.fragment,t)},m:function(t,r){pt(e,t,r),n=!0},p:function(t,n){var o=u(n,1)[0],i=12&o?ct(r,[4&o&&{segment:t[2][0]},8&o&&st(t[3].props)]):{};147&o&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i:function(t){n||(at(e.$$.fragment,t),n=!0)},o:function(t){ut(e.$$.fragment,t),n=!1},d:function(t){ht(e,t)}}}function Nt(t,e,n){var r,o,i=e.stores,a=e.error,u=e.status,c=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,p=e.notify;return function(t){B().$$.after_update.push(t)}(p),r=bt,o=i,B().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,i=t.stores),"error"in t&&n(0,a=t.error),"status"in t&&n(1,u=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[a,u,c,s,l,i,p]}var Tt=function(t){f(n,mt);var e=Lt(n);function n(t){var r;return v(this,n),dt(l(r=e.call(this)),t,Nt,At,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),It=[],Ct=[{js:function(){return Promise.all([import("./index.58f26563.js"),__inject_styles(["client-9ad6eaff.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./auth.11385b0b.js"),__inject_styles(["client-9ad6eaff.css","auth-0b6831b2.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./otp.8a05ee4e.js"),__inject_styles(["client-9ad6eaff.css","otp-6782a8b2.css"])]).then((function(t){return t[0]}))}}],qt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/auth\/?$/,parts:[{i:1}]},{pattern:/^\/otp\/?$/,parts:[{i:2}]}];
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
function Dt(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function Ut(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Gt,Ft=1;var Jt,Bt,Mt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Vt={};function Kt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=u(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],i=r[2],a=void 0===i?"":i;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(a):n[o]=a})),n}function Yt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Jt))return null;var e=t.pathname.slice(Jt.length);if(""===e&&(e="/"),!It.some((function(t){return t.test(e)})))for(var n=0;n<qt.length;n+=1){var r=qt[n],o=r.pattern.exec(e);if(o){var i=Kt(t.search),a=r.parts[r.parts.length-1],u=a.params?a.params(o):{},c={host:location.host,path:e,query:i,params:u};return{href:t.href,route:r,match:o,page:c}}}}function zt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Ut(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=Yt(i);if(a)Xt(a,null,n.hasAttribute("sapper:noscroll"),i.hash),e.preventDefault(),Mt.pushState({id:Gt},"",i.href)}}}else location.hash||e.preventDefault()}}}function Ht(){return{x:pageXOffset,y:pageYOffset}}function Wt(t){if(Vt[Gt]=Ht(),t.state){var e=Yt(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Gt=t})(Ft=Ft+1),Mt.replaceState({id:Gt},"",location.href)}function Xt(t,e,n,r){return Dt(this,void 0,void 0,o.mark((function i(){var a,u,c,s;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(a=!!e)?Gt=e:(u=Ht(),Vt[Gt]=u,Gt=e=++Ft,Vt[Gt]=n?u:{x:0,y:0}),o.next=4,Bt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(c=Vt[e],r&&(s=document.getElementById(r.slice(1)))&&(c={x:0,y:s.getBoundingClientRect().top+scrollY}),Vt[Gt]=c,a||s?scrollTo(c.x,c.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),i)})))}function Qt(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var Zt,te=null;function ee(t){return te&&te.href===t.href?te.promise:we(t)}function ne(t){var e=Ut(t.target);e&&"prefetch"===e.rel&&function(t){var e=Yt(new URL(t,Qt(document)));if(e)te&&t===te.href||(te={href:t,promise:we(e)}),te.promise}(e.href)}function re(t){clearTimeout(Zt),Zt=setTimeout((function(){ne(t)}),20)}function oe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Yt(new URL(t,Qt(document)));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Gt},"",t),Xt(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ie,ae,ue,ce,se,fe,le="undefined"!=typeof __SAPPER__&&__SAPPER__,pe=!1,he=[],ve="{}",de={page:function(t){var e=gt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:gt(null),session:gt(le&&le.session)};function me(t,e){var n=t.error;return Object.assign({error:n},e)}function ye(t){return Dt(this,void 0,void 0,o.mark((function e(){var n,r,i,a,u,c;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie&&de.preloading.set(!0),n=ee(t),r=ae={},e.next=5,n;case 5:if(i=e.sent,a=i.redirect,r===ae){e.next=9;break}return e.abrupt("return");case 9:if(!a){e.next=14;break}return e.next=12,oe(a.location,{replaceState:!0});case 12:e.next=17;break;case 14:return u=i.props,c=i.branch,e.next=17,ge(c,u,me(u,t.page));case 17:case"end":return e.stop()}}),e)})))}function ge(t,e,n){return Dt(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(de.page.set(n),de.preloading.set(!1),!ie){r.next=6;break}ie.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:de.page.subscribe},preloading:{subscribe:de.preloading.subscribe},session:de.session},r.next=9,ue;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=de.page.notify,ie=new Tt({target:fe,props:e,hydrate:!0});case 13:he=t,ve=JSON.stringify(n.query),pe=!0,se=!1;case 17:case"end":return r.stop()}}),r)})))}function be(t,e,n,r){if(r!==ve)return!0;var o=he[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function we(t){return Dt(this,void 0,void 0,o.mark((function e(){var n,r,i,a,u,c,s,f,l,p,h,v,d=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,i=r.path.split("/").filter(Boolean),a=null,u={error:null,status:200,segments:[i[0]]},c={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},ue||(s=function(){return{}},ue=le.preloaded[0]||s.call(c,{host:r.host,path:r.path,query:r.query,params:{}},ce)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Dt(d,void 0,void 0,o.mark((function a(){var s,f,d,m,y,g;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=i[n],be(n,s,h,p)&&(v=!0),u.segments[l]=i[n+1],e){o.next=5;break}return o.abrupt("return",{segment:s});case 5:if(f=l++,se||v||!he[n]||he[n].part!==e.i){o.next=8;break}return o.abrupt("return",he[n]);case 8:return v=!1,o.next=11,Ct[e.i].js();case 11:if(d=o.sent,m=d.default,y=d.preload,!pe&&le.preloaded[n+1]){o.next=25;break}if(!y){o.next=21;break}return o.next=18,y.call(c,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},ce);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:g=o.t0,o.next=26;break;case 25:g=le.preloaded[n+1];case 26:return o.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:s,match:h,part:e.i});case 27:case"end":return o.stop()}}),a)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),u.error=e.t0,u.status=500,f=[];case 21:return e.abrupt("return",{redirect:a,props:u,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}de.session.subscribe((function(t){return Dt(void 0,void 0,void 0,o.mark((function e(){var n,r,i,a,u,c;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce=t,pe){e.next=3;break}return e.abrupt("return");case 3:return se=!0,n=Yt(new URL(location.href)),r=ae={},e.next=8,we(n);case 8:if(i=e.sent,a=i.redirect,u=i.props,c=i.branch,r===ae){e.next=14;break}return e.abrupt("return");case 14:if(!a){e.next=19;break}return e.next=17,oe(a.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,ge(c,u,me(u,n.page));case 21:case"end":return e.stop()}}),e)})))}));const $e=document.querySelector("#sapper");var xe,_e;xe={target:$e}.target,fe=xe,_e=le.baseUrl,Jt=_e,Bt=ye,"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Mt.scrollRestoration="auto"})),addEventListener("load",(function(){Mt.scrollRestoration="manual"})),addEventListener("click",zt),addEventListener("popstate",Wt),addEventListener("touchstart",ne),addEventListener("mousemove",re),le.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=le.session,i=le.preloaded,a=le.status,u=le.error;ue||(ue=i&&i[0]);var c={error:u,status:a,session:o,level0:{props:ue},level1:{props:{status:a,error:u},component:kt},segments:i},s=Kt(r);ge([],c,{host:e,path:n,query:s,params:{},error:u})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Mt.replaceState({id:Ft},"",n);var r=Yt(new URL(location.href));if(r)return Xt(r,Ft,!0,e)}));export{N as A,w as B,mt as S,f as _,c as a,p as b,v as c,l as d,L as e,R as f,C as g,k as h,dt as i,D as j,I as k,T as l,S as m,j as n,u as o,m as p,F as q,o as r,x as s,M as t,oe as u,O as v,q as w,U as x,G as y,A as z};

import __inject_styles from './inject_styles.fe622066.js';