"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{9123:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(9439),c=e(2791),o=e(7689),u=e(7433),i=e(1481),a=e(184);function s(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,o.UO)().movieId;return(0,c.useEffect)((function(){u.Jh(f).then((function(n){return s(n.results)}))}),[f]),(0,a.jsx)(a.Fragment,{children:e.length>0?(0,a.jsx)(i.mB,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{children:["Autor : ",(0,a.jsx)("span",{children:e})]}),(0,a.jsx)("p",{children:r})]},t)}))}):(0,a.jsx)("p",{text:"We don\u2019t have any reviews for this movie"})})}},7433:function(n,t,e){function r(n,t,e,r,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var u=n.apply(t,e);function i(n){r(u,c,o,i,a,"next",n)}function a(n){r(u,c,o,i,a,"throw",n)}i(void 0)}))}}e.d(t,{IQ:function(){return v},yK:function(){return p},NV:function(){return d},Jh:function(){return l},Hg:function(){return h}});var o=e(4687),u=e.n(o),i="https://api.themoviedb.org/3/",a="b4056054434cdd7bb4744d2179c9434f";function s(){return f.apply(this,arguments)}function f(){return f=c(u().mark((function n(){var t,e,r,c=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(){return s("".concat(i,"/trending/movie/day?api_key=").concat(a))}function d(n){return s("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(a,"&language=en-US&page=1&include_adult=false"))}function p(n){return s("".concat(i,"/movie/").concat(n,"?api_key=").concat(a))}function v(n){return s("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(a))}function l(n){return s("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&page=1"))}}}]);
//# sourceMappingURL=123.49d1c04c.chunk.js.map