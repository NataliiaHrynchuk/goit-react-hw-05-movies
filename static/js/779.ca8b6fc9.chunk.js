"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{9779:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e,u=r(885),a=r(4390),c=r(168),o=r(6444).ZP.ul(e||(e=(0,c.Z)(["\n    list-style: none;\n    padding-left: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n"]))),i=r(470),s=r(2791),f=r(184),d=function(){var n=(0,i.UO)().movieId,t=(0,s.useState)([]),r=(0,u.Z)(t,2),e=r[0],c=r[1];return(0,s.useEffect)((function(){a.Jh(n).then((function(n){return c(n.map((function(n){return{id:n.id,author:n.author,content:n.content}})))}))}),[n]),(0,f.jsx)("div",{children:e.length>0?(0,f.jsx)(o,{children:e.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:r}),(0,f.jsx)("p",{children:e})]},t)}))}):(0,f.jsx)("p",{children:"We don`t have any reviews for this movie"})})}},4390:function(n,t,r){r.d(t,{CJ:function(){return i},IQ:function(){return d},IR:function(){return s},Jh:function(){return l},Pg:function(){return f}});var e=r(5861),u=r(7757),a=r.n(u),c=r(4569),o=r.n(c);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"6860d409037e6854532ae07af7af1d83",include_adult:!1};var i=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/all/day?");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?query=".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){try{return o().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast}))}catch(t){console.log("error",{error:t})}},l=function(n){try{return o().get("/movie/".concat(n,"/reviews?")).then((function(n){return n.data.results}))}catch(t){console.log("error",{error:t})}}}}]);
//# sourceMappingURL=779.ca8b6fc9.chunk.js.map