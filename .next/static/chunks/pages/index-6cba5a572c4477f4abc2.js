_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{RNiq:function(t,e,n){"use strict";n.r(e);var c=n("KQm4"),a=n("nKUr"),o=n("vDqi"),i=n.n(o),s=n("q1tI"),l=(n("Gpft"),n("wd/R")),d=n.n(l),r=n("2pyn"),u=n("9+Bb"),j=n("DzJC"),b=n.n(j);e.default=function(){var t=Object(s.useState)(!1),e=t[0],n=t[1],o=Object(s.useState)([]),l=o[0],j=o[1],f=Object(s.useState)({}),m=f[0],h=f[1],w=Object(s.useState)(0),p=w[0],O=w[1],g=Object(s.useState)(!1),v=g[0],N=g[1],x=Object(s.useState)(!1),S=x[0],k=x[1],C=Object(s.useState)(!1),_=C[0],E=C[1],y=Object(s.useState)(!1),D=y[0],M=y[1],R=Object(s.useState)({}),T=R[0],J=R[1],Y=Object(s.useState)([]),I=Y[0],q=Y[1],H=function(t){var e=window.localStorage.getItem("localLikeList");!I.length&&e&&q(JSON.parse(e)),t&&((e=e?JSON.parse(e):[]).includes(t)||i()("/api/sort?date=".concat(t,"&k=likeCount")).then((function(n){n.data.likeCount&&(T[t]||(T[t]={likeCount:0}),T[t].likeCount=n.data.likeCount,J(T),e.push(t),q(e),window.localStorage.setItem("localLikeList",JSON.stringify(e)))})))},L=b()((function(t){return H(t)}),1500);window&&H();var z=function(t,e){N(!0),i()("/api/list?date=".concat(t,"&count=28")).then((function(t){var n=t.data,a=0,o=e?0:2;n.data.forEach((function(t,e){var n=1;a<o&&o&&(n=Math.ceil(2*Math.random())),!(e%8)&&o&&(n=2),2===n&&(a+=1),t.style={gridColumnStart:"span ".concat(n),gridRowStart:"span ".concat(n)},t.dateStr=d()(t.date,"YYYYMMDD").format("YY.MM.DD"),t.span=n}));var i=n.data.last();j([].concat(Object(c.a)(l),Object(c.a)(n.data))),!i.prev&&M(!0),O(i.prev),N(!1)}))},B=Object(s.useRef)();return Object(s.useEffect)((function(t){window.onscroll=function(){v||D||(E(document.documentElement.scrollTop>700),document.documentElement.clientHeight+document.documentElement.scrollTop+500>B.current.clientHeight&&z(p,S))},setTimeout((function(){window.onscroll()}))}),[p,v]),Object(s.useEffect)((function(){var t=window.innerWidth<1024||window.innerWidth<window.innerHeight?(k(!0),!0):(k(!1),!1);Array.prototype.last=function(){return this[this.length-1]},i()("/api/sort").then((function(t){J(t.data)})),z(p,t)}),[]),Object(a.jsxs)("div",{className:"index-page ".concat(S&&"mobile-page"),ref:B,children:[Object(a.jsx)(r.a,{}),Object(a.jsx)("div",{className:"img-list",style:{gridTemplateRows:S?"repeat(".concat(l.length,", 75vw)"):"repeat(".concat(4*Math.ceil(l.length/28),", 19vw)")},children:l.map((function(t){return Object(a.jsxs)("div",{className:"img-item",style:t.style,children:[Object(a.jsxs)("div",{className:"cover",children:[Object(a.jsx)("a",{className:"iconfont icon-fangda actionBtn",href:"/".concat(t.date)}),Object(a.jsx)("span",{className:"text",children:t.cp})]}),Object(a.jsx)("div",{className:"date-str size-".concat(t.span),children:t.dateStr}),Object(a.jsx)("div",{className:"img-bg",style:{backgroundImage:"url('//cn.bing.com".concat(t.urlbase,"_").concat("1024x768",".jpg')")}}),Object(a.jsxs)("div",{className:"handleButton",children:[Object(a.jsx)("span",{className:(I.includes(t.date)?"icon-like-fill":"icon-xihuan")+" iconfont",onClick:function(){L(t.date)},children:Object(a.jsx)("span",{className:"count",children:T[t.date]&&T[t.date].likeCount||0})}),Object(a.jsx)("span",{onClick:function(){n(!0),h(t)},className:"iconfont icon-download",children:Object(a.jsx)("span",{className:"count",children:T[t.date]&&T[t.date].downloadCount||0})})]})]},t.date)}))}),D&&Object(a.jsx)("div",{className:"empty-text",children:"\u2014\u2014 \u5230\u5e95\u5566 \u2014\u2014"}),Object(a.jsxs)("div",{className:"right-btn",children:[Object(a.jsx)("div",{className:"to-top iconfont icon-arrow-left ".concat(!_&&"hide"),onClick:function(){return window.scrollTo(0,0)}}),Object(a.jsx)("a",{className:"iconfont icon-touzi",href:"/random"})]}),Object(a.jsx)(u.a,{downloadFun:function(t){t&&i()("/api/sort?date=".concat(t,"&k=downloadCount")).then((function(e){e.data.likeCount&&(T[t]||(T[t]={downloadCount:0}),T[t].downloadCount=e.data.downloadCount,J(T))}))},isMobile:S,visible:e,onHide:function(){n(!1),h({})},imgInfo:m})]})}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,6,1,5,4]]]);