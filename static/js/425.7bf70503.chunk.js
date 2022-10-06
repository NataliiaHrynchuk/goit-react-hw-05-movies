"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[425],{6800:function(n,e,t){t.d(e,{e:function(){return s}});var r,o=t(168),a=t(6444),i=t(1087),c=(0,a.ZP)(i.OL)(r||(r=(0,o.Z)(["\n    padding: 8px 16px;\n    border-radius: 4px;\n    /* text-decoration: none; */\n    color: black;\n    font-weight: 500;\n\n    /* &.active {\n    color: #C71585;\n    } */\n\n    :hover {\n        text-decoration: underline;\n    }\n"]))),u=t(184),s=function(n){var e=n.movies;return(0,u.jsx)("ul",{children:e.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(c,{to:"".concat(n.id),children:n.title||n.name})},n.id)}))})}},425:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,a,i=t(2982),c=t(885),u=t(2791),s=t(168),p=t(6444),l=p.ZP.form(r||(r=(0,s.Z)(["\n    display: flex;\n    margin-left: 10px;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n"]))),d=p.ZP.button(o||(o=(0,s.Z)(["\n    display: inline-block;\n    height: 31px;\n    padding: 4px;\n    opacity: 0.8;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n    border: solid 1px #b7b2b2;\n    color: black;\n    background-color: #c6bacb;\n    :hover, :focus {\n        color: white;\n        background-color:#c71585;\n        border: solid 1px #c71585;\n        opacity: 1;\n    }\n"]))),f=p.ZP.input(a||(a=(0,s.Z)(["\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: solid 1px #b7b2b2;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    :focus {\n        border: solid 1px #139cd1;\n    }\n    ::placeholder {\n        font: inherit;\n        font-size: 18px;\n}\n"]))),h=t(184);function v(n){var e=n.onSubmit,t=(0,u.useState)(""),r=(0,c.Z)(t,2),o=r[0],a=r[1];return(0,h.jsxs)(l,{onSubmit:function(n){n.preventDefault()," "!==o?(e(o),a(" ")):alert("Enter movies name")},children:[(0,h.jsx)(f,{type:"text",name:"imagesName",value:o,onChange:function(n){a(n.currentTarget.value.toLowerCase())},autoFocus:!0,utocomplete:"off",placeholder:""}),(0,h.jsx)(d,{type:"submit",children:"Search"})]})}var m=t(6800),x=t(4390),b=function(){var n=(0,u.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)([]),a=(0,c.Z)(o,2),s=a[0],p=a[1];return(0,u.useEffect)((function(){t&&x.IR(t).then((function(n){var e=n.results.map((function(n){return{id:n.id,title:n.title,name:n.name}}));console.log(e),p((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))}))}))}),[t]),(0,h.jsxs)("main",{children:[(0,h.jsx)(v,{onSubmit:function(n){r(n),p([])}}),s&&(0,h.jsx)(m.e,{movies:s})]})}},4390:function(n,e,t){t.d(e,{CJ:function(){return p},IR:function(){return d},Pg:function(){return h}});var r=t(5861),o=t(7757),a=t.n(o),i=t(4569),c=t.n(i),u="6860d409037e6854532ae07af7af1d83",s="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("".concat(s,"/trending/all/day?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:u,language:"en-US",page:1,include_adult:!1,query:e}),n.prev=1,n.next=4,c().get("".concat(s,"/search/movie?").concat(t));case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(1),new Error("There is no movie with name ".concat(e));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c().get("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("There is no movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=425.7bf70503.chunk.js.map