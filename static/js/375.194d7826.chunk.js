"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{1375:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,a,o,c,i=r(885),s=r(7689),u=r(2791),p=r(2134),d=r(168),l=r(6444),h=r(6731),x=(0,l.ZP)(h.rU)(t||(t=(0,d.Z)(["\nmargin-left: 12px;\npadding: 4px;\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\ntext-decoration: none;\nborder: 1px solid black;\nborder-radius: 4px;\ncolor: black;\nbackground-color: #c6bacb;\n\n:hover, :focus {\n    color: white;\n    background-color:#c71585;\n}\n"]))),v=r(184),f=function(n){var e=n.to,r=n.children;return(0,v.jsxs)(x,{to:e,children:[(0,v.jsx)(p.kyg,{}),r]})},g=r(4390),m=l.ZP.div(a||(a=(0,d.Z)(["\n    display: flex;\n    gap: 12px;\n    padding: 12px;\n    border-bottom: solid 1px grey;\n    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);\n"]))),b=l.ZP.div(o||(o=(0,d.Z)(["\n    border-bottom: gray;\n    padding: 12px;\n    border-bottom: solid 1px grey;\n    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);\n"]))),j=(0,l.ZP)(h.OL)(c||(c=(0,d.Z)(["\n    padding: 8px 16px;\n    border-radius: 4px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n\n    &.active {\n    color: #C71585;\n    }\n\n    :hover {\n        text-decoration: underline;\n    }\n"]))),w="resolved",k="rejected";function y(){var n,e,r=(0,s.UO)().movieId,t=(0,u.useState)(""),a=(0,i.Z)(t,2),o=a[0],c=a[1],p=(0,u.useState)("idle"),d=(0,i.Z)(p,2),l=d[0],h=d[1],x=(0,u.useState)(null),y=(0,i.Z)(x,2),_=y[0],Z=y[1],S=(0,s.TH)(),P=null!==(n=null===S||void 0===S||null===(e=S.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,u.useEffect)((function(){r&&g.Pg(r).then((function(n){console.log(n),c(n),h(w)})).catch((function(n){Z(n),h(k)}))}),[r]),(0,v.jsxs)("div",{children:[l===k&&(0,v.jsx)("p",{children:_.message}),o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{to:P,children:"Go back"}),(0,v.jsxs)(m,{children:[o.poster_path?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(o.poster_path),alt:"movie cover"}):(0,v.jsx)("img",{src:"https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg",alt:"movie cover",width:"200px"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:o.title||o.name}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*o.vote_average),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:o.overview}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:o.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,v.jsxs)(b,{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(j,{to:"cast",state:{from:S},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(j,{to:"reviews",state:{from:S},children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(s.j3,{})})]})]})]})}},4390:function(n,e,r){r.d(e,{CJ:function(){return p},IQ:function(){return f},IR:function(){return l},Pg:function(){return x}});var t=r(5861),a=r(7757),o=r.n(a),c=r(4569),i=r.n(c),s="6860d409037e6854532ae07af7af1d83",u="https://api.themoviedb.org/3";function p(){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"/trending/all/day?api_key=").concat(s));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({api_key:s,language:"en-US",page:1,include_adult:!1,query:e}),n.prev=1,n.next=4,i().get("".concat(u,"/search/movie?").concat(r));case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(1),new Error("There is no movie with name ".concat(e));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i().get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=375.194d7826.chunk.js.map