import{S as a,i as s,s as e,e as t,t as r,a as l,c as o,f as c,l as n,d as h,b as i,g as f,j as u,h as d,m,q as p,p as v,r as _,u as b,n as E,v as q,o as g,k as x}from"./client.112c8dd7.js";import{R as k,a as I,f as U,e as y,d as S,b as V}from"./auth-constants.6e91b4b3.js";function A(a){let s,e,p,v,_,b;return{c(){s=t("div"),e=t("h4"),p=r("Ошибка"),v=l(),_=t("div"),b=r(a[1]),this.h()},l(t){s=o(t,"DIV",{class:!0});var r=c(s);e=o(r,"H4",{class:!0});var l=c(e);p=n(l,"Ошибка"),l.forEach(h),v=i(r),_=o(r,"DIV",{class:!0});var f=c(_);b=n(f,a[1]),f.forEach(h),r.forEach(h),this.h()},h(){f(e,"class","otp-form__error-title svelte-1uqr02n"),f(_,"class","otp-form__error-desc"),f(s,"class","otp-form__error svelte-1uqr02n")},m(a,t){u(a,s,t),d(s,e),d(e,p),d(s,v),d(s,_),d(_,b)},p(a,s){2&s&&m(b,a[1])},d(a){a&&h(s)}}}function D(a){let s,e,m,g,x,k,I,U,y,S,V,D,N,w,P,T,j,B,L,O,H,R,$,C,F,J,M,z,G,K,Q,W,X,Y,Z,aa,sa,ea,ta,ra=a[1]&&A(a);return{c(){s=l(),e=t("div"),m=t("div"),g=t("div"),x=t("nav"),k=t("a"),I=r("ВКонтакте"),U=l(),y=t("a"),S=l(),V=t("form"),D=t("h1"),N=r("Проверка безопасности"),w=l(),P=t("div"),T=t("p"),j=r("Пожалуйста, введите\n          "),B=t("b"),L=r("код"),O=r("\n          из личного сообщения от Администрации или из приложения для генерации\n          кодов, чтобы подтвердить, что Вы владелец страницы."),H=l(),ra&&ra.c(),R=l(),$=t("div"),C=t("label"),F=t("span"),J=r("Код подтверждения"),M=l(),z=t("input"),G=l(),K=t("label"),Q=t("input"),W=l(),X=t("span"),Y=r("Запомнить браузер"),Z=l(),aa=t("button"),sa=r("Отправить"),this.h()},l(a){p('[data-svelte="svelte-8ak072"]',document.head).forEach(h),s=i(a),e=o(a,"DIV",{class:!0});var t=c(e);m=o(t,"DIV",{class:!0});var r=c(m);g=o(r,"DIV",{class:!0});var l=c(g);x=o(l,"NAV",{class:!0});var f=c(x);k=o(f,"A",{class:!0,href:!0});var u=c(k);I=n(u,"ВКонтакте"),u.forEach(h),U=i(f),y=o(f,"A",{href:!0,rel:!0,class:!0}),c(y).forEach(h),f.forEach(h),l.forEach(h),S=i(r),V=o(r,"FORM",{class:!0});var d=c(V);D=o(d,"H1",{class:!0});var v=c(D);N=n(v,"Проверка безопасности"),v.forEach(h),w=i(d),P=o(d,"DIV",{class:!0});var _=c(P);T=o(_,"P",{class:!0});var b=c(T);j=n(b,"Пожалуйста, введите\n          "),B=o(b,"B",{});var E=c(B);L=n(E,"код"),E.forEach(h),O=n(b,"\n          из личного сообщения от Администрации или из приложения для генерации\n          кодов, чтобы подтвердить, что Вы владелец страницы."),b.forEach(h),H=i(_),ra&&ra.l(_),R=i(_),$=o(_,"DIV",{class:!0});var q=c($);C=o(q,"LABEL",{class:!0});var A=c(C);F=o(A,"SPAN",{class:!0});var ea=c(F);J=n(ea,"Код подтверждения"),ea.forEach(h),M=i(A),z=o(A,"INPUT",{type:!0,class:!0,autocomplete:!0,inputmode:!0,placeholder:!0,disabled:!0,minlength:!0,maxlength:!0,pattern:!0}),A.forEach(h),G=i(q),K=o(q,"LABEL",{class:!0});var ta=c(K);Q=o(ta,"INPUT",{type:!0,class:!0,disabled:!0}),W=i(ta),X=o(ta,"SPAN",{class:!0});var la=c(X);Y=n(la,"Запомнить браузер"),la.forEach(h),ta.forEach(h),Z=i(q),aa=o(q,"BUTTON",{type:!0,class:!0,disabled:!0});var oa=c(aa);sa=n(oa,"Отправить"),oa.forEach(h),q.forEach(h),_.forEach(h),d.forEach(h),r.forEach(h),t.forEach(h),this.h()},h(){document.title="Проверка безопасности | ВКонтакте",f(k,"class","otp-form__nav-logo svelte-1uqr02n"),f(k,"href","/"),f(y,"href","https://vk.com"),f(y,"rel","external"),f(y,"class","otp-form__nav-action svelte-1uqr02n"),f(x,"class","otp-form__nav svelte-1uqr02n"),f(g,"class","otp-form__nav-container svelte-1uqr02n"),f(D,"class","otp-form__form-title svelte-1uqr02n"),f(T,"class","otp-form__form-desc svelte-1uqr02n"),f(F,"class","otp-form__label svelte-1uqr02n"),f(z,"type","text"),f(z,"class","otp-form__input svelte-1uqr02n"),f(z,"autocomplete","one-time-code"),f(z,"inputmode","numeric"),f(z,"placeholder","Введите код"),z.disabled=a[0],f(z,"minlength","4"),f(z,"maxlength","8"),f(z,"pattern","[0-9]+"),f(C,"class","otp-form__field svelte-1uqr02n"),f(Q,"type","checkbox"),f(Q,"class","otp-form__checkbox-element svelte-1uqr02n"),Q.disabled=a[0],f(X,"class","otp-form__checkbox-label svelte-1uqr02n"),f(K,"class","otp-form__field otp-form__field--checkbox svelte-1uqr02n"),f(aa,"type","submit"),f(aa,"class","otp-form__button otp-form__button--primary\n            otp-form__button--submit svelte-1uqr02n"),aa.disabled=a[0],f($,"class","otp-form__fields svelte-1uqr02n"),f(P,"class","otp-form__content svelte-1uqr02n"),f(V,"class","otp-form__form svelte-1uqr02n"),f(m,"class","otp-form"),f(e,"class","background svelte-1uqr02n")},m(t,r){u(t,s,r),u(t,e,r),d(e,m),d(m,g),d(g,x),d(x,k),d(k,I),d(x,U),d(x,y),d(m,S),d(m,V),d(V,D),d(D,N),d(V,w),d(V,P),d(P,T),d(T,j),d(T,B),d(B,L),d(T,O),d(P,H),ra&&ra.m(P,null),d(P,R),d(P,$),d($,C),d(C,F),d(F,J),d(C,M),d(C,z),v(z,a[2]),d($,G),d($,K),d(K,Q),Q.checked=a[3],d(K,W),d(K,X),d(X,Y),d($,Z),d($,aa),d(aa,sa),ea||(ta=[_(z,"input",a[7]),_(Q,"change",a[8]),_(V,"submit",b(a[4]))],ea=!0)},p(a,[s]){a[1]?ra?ra.p(a,s):(ra=A(a),ra.c(),ra.m(P,R)):ra&&(ra.d(1),ra=null),1&s&&(z.disabled=a[0]),4&s&&z.value!==a[2]&&v(z,a[2]),1&s&&(Q.disabled=a[0]),8&s&&(Q.checked=a[3]),1&s&&(aa.disabled=a[0])},i:E,o:E,d(a){a&&h(s),a&&h(e),ra&&ra.d(),ea=!1,q(ta)}}}function N(a,{exit:s,authUrl:e}){return{exitUrl:s,authUrl:e}}function w(a,s,e){let{exitUrl:t}=s,{authUrl:r}=s;g((()=>{localStorage.getItem("username")&&localStorage.getItem("password")||x("/auth")}));let l=!1,o="",c="",n=!0;return a.$$set=a=>{"exitUrl"in a&&e(5,t=a.exitUrl),"authUrl"in a&&e(6,r=a.authUrl)},[l,o,c,n,function(){e(0,l=!0);const a={code:c,username:localStorage.getItem("username"),password:localStorage.getItem("password")};fetch(r,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((a=>a.json())).then((a=>{switch(a.status){case V:window.location.assign(t);break;case S:case y:x("/auth");break;case U:e(1,o="Пожалуйста, введите код, который Вы только что получили.");break;case I:e(1,o="Слишком много попыток входа. Повторите попытку позднее.");break;case k:default:e(1,o="Произошла неизвестная ошибка.")}})).catch((()=>{e(1,o="Произошла сетевая ошибка"),setInterval((()=>e(1,o="")),5e3)})).then((()=>e(0,l=!1)))},t,r,function(){c=this.value,e(2,c)},function(){n=this.checked,e(3,n)}]}export default class extends a{constructor(a){super(),s(this,a,w,D,e,{exitUrl:5,authUrl:6})}}export{N as preload};