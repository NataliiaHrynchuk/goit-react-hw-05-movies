"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[539],{9539:function(e,t,n){n.r(t);var r=n(885),a=n(4390),c=n(7689),o=n(2791),u=n(184);t.default=function(){var e=(0,c.UO)().movieId,t=(0,o.useState)([]),n=(0,r.Z)(t,2),i=n[0],s=n[1];return(0,o.useEffect)((function(){a.IQ(e).then(s)}),[e]),(0,u.jsx)("div",{children:i.length>0&&(0,u.jsx)("ul",{children:i.map((function(e){var t=e.character,n=e.name,r=e.photo,a=e.id;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:r,alt:"actor"}),(0,u.jsx)("p",{children:n}),t&&(0,u.jsxs)("p",{children:["Character: ",t]})]},a)}))})})}},4390:function(e,t,n){n.d(t,{CJ:function(){return h},IQ:function(){return g},IR:function(){return l},Jh:function(){return w},Pg:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),o=n(4569),u=n.n(o),i="6860d409037e6854532ae07af7af1d83",s="https://api.themoviedb.org/3";u().defaults.baseURL="https://api.themoviedb.org/3",u().defaults.params={api_key:"2123fea73978ac77fe6a3f347cf7ced6",include_adult:!1};var p="https://image.tmdb.org/t/p/w200";function h(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("".concat(s,"/trending/all/day?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),new Error("There is no movie");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:i,language:"en-US",page:1,include_adult:!1,query:t}),e.prev=1,e.next=4,u().get("".concat(s,"/search/movie?").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),new Error("There is no movie with name ".concat(t));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u().get("/movie/".concat(t,"?")).then((function(e){var t=e.data,n=t.id,r=t.poster_path,a=t.title,c=t.name,o=t.release_date,u=t.vote_average,i=t.overview,s=t.genres;return{id:n,poster:p+r,title:a,name:c,releaseYear:new Date(o).getFullYear(),userScore:Math.round(10*u),overview:i,genres:s}})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e){return u().get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,photo:a?p+a:"http://placehold.it/100x200"}}))})).catch((function(e){console.log(e.message)}))},w=function(e){return u().get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}}}]);
//# sourceMappingURL=539.3bdcd83b.chunk.js.map