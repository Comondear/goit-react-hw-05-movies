"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{9115:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(9439),c=e(2791),a=e(7689),o=e(7433),u=e(3257),i=e(1481),s=e(184);function f(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,a.UO)().movieId;(0,c.useEffect)((function(n){o.IQ(p).then((function(n){return f(n.cast)}))}),[p]);var d=function(n){return null===n?"".concat(u):"https://image.tmdb.org/t/p/w300".concat(n)};return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)(i.uU,{children:e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,c=n.character;return(0,s.jsxs)(i.C3,{children:[(0,s.jsx)("img",{src:"".concat(d(e)),alt:r,width:"300"}),(0,s.jsx)(i.xl,{children:r}),(0,s.jsxs)(i._K,{children:[" ","Character : ",(0,s.jsxs)(i.NI,{children:[" ",c," "]})," "]})]},t)}))})})}},7433:function(n,t,e){function r(n,t,e,r,c,a,o){try{var u=n[a](o),i=u.value}catch(s){return void e(s)}u.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function u(n){r(o,c,a,u,i,"next",n)}function i(n){r(o,c,a,u,i,"throw",n)}u(void 0)}))}}e.d(t,{IQ:function(){return l},yK:function(){return h},NV:function(){return d},Jh:function(){return v},Hg:function(){return p}});var a=e(4687),o=e.n(a),u="https://api.themoviedb.org/3/",i="b4056054434cdd7bb4744d2179c9434f";function s(){return f.apply(this,arguments)}function f(){return f=c(o().mark((function n(){var t,e,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function p(){return s("".concat(u,"/trending/movie/day?api_key=").concat(i))}function d(n){return s("".concat(u,"/search/movie?query=").concat(n,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"))}function h(n){return s("".concat(u,"/movie/").concat(n,"?api_key=").concat(i))}function l(n){return s("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i))}function v(n){return s("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&page=1"))}},3257:function(n,t,e){n.exports=e.p+"static/media/defaultImg.3f9715169e330b10feb4.jpg"}}]);
//# sourceMappingURL=115.cb995e41.chunk.js.map