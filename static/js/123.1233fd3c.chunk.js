"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{543:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{IQ:function(){return v},yK:function(){return p},NV:function(){return d},Jh:function(){return l},Hg:function(){return h}});var o=e(687),i=e.n(o),u="https://api.themoviedb.org/3/",a="b4056054434cdd7bb4744d2179c9434f";function s(){return f.apply(this,arguments)}function f(){return f=c(i().mark((function n(){var t,e,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function h(){return s("".concat(u,"/trending/movie/day?api_key=").concat(a))}function d(n){return s("".concat(u,"/search/movie?query=").concat(n,"&api_key=").concat(a,"&language=en-US&page=1&include_adult=false"))}function p(n){return s("".concat(u,"/movie/").concat(n,"?api_key=").concat(a))}function v(n){return s("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(a))}function l(n){return s("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&page=1"))}},123:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(439),c=e(791),o=e(689),i=e(543),u=e(856),a=e(184);function s(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,o.UO)().movieId;return(0,c.useEffect)((function(){i.Jh(f).then((function(n){return s(n.results)}))}),[f]),(0,a.jsx)(a.Fragment,{children:e.length>0?(0,a.jsx)(u.W2,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{children:["Autor : ",(0,a.jsx)("span",{children:e})]}),(0,a.jsx)("p",{children:r})]},t)}))}):(0,a.jsx)("h3",{children:(0,a.jsx)("p",{text:"We don\u2019t have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=123.1233fd3c.chunk.js.map