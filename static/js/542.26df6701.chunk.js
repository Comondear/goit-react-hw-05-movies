"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{5542:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(9439),c=n(1481),o=n(2791),a=n(7596),u=n(184);function i(e){var t=(0,o.useState)(e.search),n=(0,r.Z)(t,2),i=n[0],s=n[1],f=(0,o.useState)(!1),h=(0,r.Z)(f,2),l=h[0],p=h[1];return(0,u.jsxs)(c.l0,{onSubmit:function(t){if(t.preventDefault(),p(!0),""===i.trim())return a.Am.error("Enter your query");e.searchProps(i),s(""),p(!1)},children:[(0,u.jsx)(c.II,{name:"search",autoComplete:"off",autoFocus:!0,placeholder:"what r u gonna watch?:)",value:i,type:"search",onChange:function(e){s(e.target.value)},isLoading:l}),(0,u.jsx)(c.zx,{type:"submit",children:"Search"})]})}var s=n(1087),f=n(7689),h=n(7433),l=n(4078);function p(){var e=(0,s.lr)(),t=(0,r.Z)(e,1)[0],n=(0,o.useState)(t.get("query")||""),p=(0,r.Z)(n,2),d=p[0],v=p[1],m=(0,o.useState)([]),y=(0,r.Z)(m,2),x=y[0],g=y[1],k=(0,f.TH)(),j=(0,f.s0)(),w=(0,o.useState)(!1),b=(0,r.Z)(w,2),S=b[0],_=b[1];(0,o.useEffect)((function(){d&&(_(!0),h.NV(d).then((function(e){if(0===e.results.length)return a.Am.info("Sorry, there are no more movies matching your search query!!!");g(e.results),_(!1)})))}),[d]);return S?(0,u.jsx)(l.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("header",{text:"SEARCH MOVIES"}),(0,u.jsx)(i,{searchProps:function(e){j("/movies/?query=".concat(e)),v(e),g([])},search:d}),x&&x.length>0?(0,u.jsx)("ul",{isLoading:S,children:x.map((function(e){var t=e.id,n=e.title;return(0,u.jsx)(s.rU,{to:"/movies/".concat(t),state:k,children:(0,u.jsx)(c.Dx,{children:n})},t)}))}):(0,u.jsx)("p",{})]})}},7433:function(e,t,n){function r(e,t,n,r,c,o,a){try{var u=e[o](a),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,o){var a=e.apply(t,n);function u(e){r(a,c,o,u,i,"next",e)}function i(e){r(a,c,o,u,i,"throw",e)}u(void 0)}))}}n.d(t,{IQ:function(){return d},yK:function(){return p},NV:function(){return l},Jh:function(){return v},Hg:function(){return h}});var o=n(4687),a=n.n(o),u="https://api.themoviedb.org/3/",i="b4056054434cdd7bb4744d2179c9434f";function s(){return f.apply(this,arguments)}function f(){return f=c(a().mark((function e(){var t,n,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function h(){return s("".concat(u,"/trending/movie/day?api_key=").concat(i))}function l(e){return s("".concat(u,"/search/movie?query=").concat(e,"&api_key=").concat(i,"&language=en-US&page=1&include_adult=false"))}function p(e){return s("".concat(u,"/movie/").concat(e,"?api_key=").concat(i))}function d(e){return s("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i))}function v(e){return s("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&page=1"))}}}]);
//# sourceMappingURL=542.26df6701.chunk.js.map