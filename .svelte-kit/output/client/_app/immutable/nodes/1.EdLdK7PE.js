import{s as E,e as b,t as _,p as x,c as d,b as f,q as g,d as p,v as S,g as l,w as h,x as v,n as $,y as q}from"../chunks/scheduler.ZXF-Obww.js";import{S as y,i as w}from"../chunks/index.o5rAxo9B.js";import{s as C}from"../chunks/entry.8-jcbao3.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=_(r),n=x(),i=b("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=f(t);o=g(a,r),a.forEach(p),n=S(e),i=d(e,"P",{});var m=f(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),h(t,o),l(e,n,a),l(e,i,a),h(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(u,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function k(s,t,r){let o;return q(s,P,n=>r(0,o=n)),[o]}let D=class extends y{constructor(t){super(),w(this,t,k,j,E,{})}};export{D as component};
