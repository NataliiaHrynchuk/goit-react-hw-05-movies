"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[491],{5491:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,o,i,c,a,s=t(885),l=t(470),d=t(2791),u=t(2134),x=t(168),h=t(6444),p=t(6731),g=(0,h.ZP)(p.rU)(r||(r=(0,x.Z)(["\nmargin-left: 12px;\npadding: 4px;\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\ntext-decoration: none;\nborder: 1px solid black;\nborder-radius: 4px;\ncolor: black;\nbackground-color: #c6bacb;\n\n:hover, :focus {\n    color: white;\n    background-color:#c71585;\n}\n"]))),f=t(184),v=function(e){var n=e.to,t=e.children;return(0,f.jsxs)(g,{to:n,children:[(0,f.jsx)(u.kyg,{}),t]})},m=t(4390),b=h.ZP.div(o||(o=(0,x.Z)(["\n    display: flex;\n    gap: 12px;\n    padding: 12px;\n    border-bottom: solid 1px grey;\n    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);\n"]))),j=h.ZP.div(i||(i=(0,x.Z)(["\n    border-bottom: gray;\n    padding: 12px;\n    border-bottom: solid 1px grey;\n    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);\n"]))),w=(0,h.ZP)(p.OL)(c||(c=(0,x.Z)(["\n    padding: 8px 16px;\n    border-radius: 4px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n\n    &.active {\n    color: #C71585;\n    }\n\n    :hover {\n        text-decoration: underline;\n    }\n"]))),k=h.ZP.ul(a||(a=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column; \ngap: 20px;\n"])));function _(){var e,n,t=(0,l.UO)().movieId,r=(0,d.useState)(null),o=(0,s.Z)(r,2),i=o[0],c=o[1],a=(0,l.TH)(),u=null!==(e=null===a||void 0===a||null===(n=a.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",x=null!==i&&void 0!==i?i:{},h=x.poster,p=x.title,g=x.name,_=x.releaseYear,Z=x.userScore,y=x.overview,P=x.genres;return(0,d.useEffect)((function(){t&&m.Pg(t).then(c)}),[t]),(0,f.jsx)("div",{children:i&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{to:u,children:"Go back"}),(0,f.jsxs)(b,{children:[h?(0,f.jsx)("img",{src:h,alt:"movie cover"}):(0,f.jsx)("img",{src:"https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg",alt:"movie cover",width:"200px"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[p||g,"(",_,")"]}),(0,f.jsxs)("p",{children:["User Score: ",Z,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:y}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{children:P.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsxs)(j,{children:[(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)(k,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(w,{to:"cast",state:{from:a},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(w,{to:"reviews",state:{from:a},children:"Reviews"})})]}),(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(l.j3,{})})]})]})})}},4390:function(e,n,t){t.d(n,{CJ:function(){return i},IQ:function(){return s},IR:function(){return c},Jh:function(){return l},Pg:function(){return a}});var r=t(4569),o=t.n(r);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"6860d409037e6854532ae07af7af1d83",include_adult:!1};var i=function(){return o().get("/trending/all/day?").then((function(e){return e.data.results})).catch((function(e){console.log(e.message)}))},c=function(e){return o().get("/search/movie?query=".concat(e)).then((function(e){return e.data.results})).catch((function(e){console.log(e.message)}))},a=function(e){return o().get("/movie/".concat(e,"?")).then((function(e){var n=e.data,t=n.id,r=n.poster_path,o=n.title,i=n.name,c=n.release_date,a=n.vote_average,s=n.overview,l=n.genres;return{id:t,poster:"https://image.tmdb.org/t/p/w200"+r,title:o,name:i,releaseYear:new Date(c).getFullYear(),userScore:Math.round(10*a),overview:s,genres:l}})).catch((function(e){console.log(e.message)}))},s=function(e){return o().get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast})).catch((function(e){console.log(e.message)}))},l=function(e){return o().get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results})).catch((function(e){console.log(e.message)}))}}}]);
//# sourceMappingURL=491.89a68af0.chunk.js.map