"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{6800:function(n,e,t){t.d(e,{e:function(){return p}});var r,a=t(168),c=t(6444),u=t(6731),i=(0,c.ZP)(u.OL)(r||(r=(0,a.Z)(["\n    padding: 8px 16px;\n    border-radius: 4px;\n    /* text-decoration: none; */\n    color: black;\n    font-weight: 500;\n\n    /* &.active {\n    color: #C71585;\n    } */\n\n    :hover {\n        text-decoration: underline;\n    }\n"]))),o=t(7689),s=t(184),p=function(n){var e=n.movies,t=(0,o.TH)();return(0,s.jsx)("ul",{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(i,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})}},5415:function(n,e,t){t.r(e);var r=t(2982),a=t(885),c=t(2791),u=t(6800),i=t(4390),o=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),t=e[0],s=e[1];return(0,c.useEffect)((function(){i.CJ().then((function(n){var e=n.results.map((function(n){return{id:n.id,title:n.title,name:n.name}}));console.log(n.results.map((function(n){return n}))),s((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))}))}))}),[]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),t&&(0,o.jsx)(u.e,{movies:t})]})}},4390:function(n,e,t){t.d(e,{CJ:function(){return p},IQ:function(){return m},IR:function(){return l},Pg:function(){return d}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),o="6860d409037e6854532ae07af7af1d83",s="https://api.themoviedb.org/3";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(s,"/trending/all/day?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:o,language:"en-US",page:1,include_adult:!1,query:e}),n.prev=1,n.next=4,i().get("".concat(s,"/search/movie?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),new Error("There is no movie with name ".concat(e));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.3c1ffb4e.chunk.js.map