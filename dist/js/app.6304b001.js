(function(e){function t(t){for(var o,a,c=t[0],i=t[1],u=t[2],s=0,p=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&p.push(l[a][0]),l[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==l[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},l={app:0},r=[];function c(e){return i.p+"js/"+({about:"about",aboutEn:"aboutEn",contact:"contact",help:"help",helpEn:"helpEn",home:"home",homeEn:"homeEn",plans:"plans",plansEn:"plansEn",portfolio:"portfolio",portfolioEn:"portfolioEn"}[e]||e)+"."+{about:"ee0fd5c5",aboutEn:"961081d6",contact:"81b5f06c",help:"34823911",helpEn:"1c12494b",home:"8df9472a",homeEn:"e4c8ae09",plans:"1c5cf0de",plansEn:"9efd67da",portfolio:"122de381",portfolioEn:"c6dd5328"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={contact:1,plansEn:1,portfolio:1,portfolioEn:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",aboutEn:"aboutEn",contact:"contact",help:"help",helpEn:"helpEn",home:"home",homeEn:"homeEn",plans:"plans",plansEn:"plansEn",portfolio:"portfolio",portfolioEn:"portfolioEn"}[e]||e)+"."+{about:"31d6cfe0",aboutEn:"31d6cfe0",contact:"2829bdd9",help:"31d6cfe0",helpEn:"31d6cfe0",home:"31d6cfe0",homeEn:"31d6cfe0",plans:"31d6cfe0",plansEn:"2829bdd9",portfolio:"07d77395",portfolioEn:"ebe68788"}[e]+".css",l=i.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===l))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],s=u.getAttribute("data-href");if(s===o||s===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||l,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=l;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var o=l[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=l[e]=[t,n]}));t.push(o[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var p=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=l[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}l[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31c3":function(e,t,n){"use strict";n("f3c1")},3557:function(e,t,n){"use strict";n("9a85")},"3dfd":function(e,t,n){"use strict";n("8a79"),n("b0c0");var o=n("7a23"),a={class:"px-1 px-md-5 mx-1"};function l(e,t,n,l,r,c){var i=Object(o["y"])("the-nav-bar"),u=Object(o["y"])("router-view");return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["j"])(i,{lng:e.$route.name.endsWith("En")?"en":"fa"},null,8,["lng"]),Object(o["g"])("main",null,[Object(o["g"])("div",a,[Object(o["j"])(u,null,{default:Object(o["G"])((function(e){var t=e.Component;return[Object(o["j"])(o["b"],{name:"route",mode:"out-in",appear:""},{default:Object(o["G"])((function(){return[(Object(o["t"])(),Object(o["e"])(Object(o["z"])(t)))]})),_:2},1024)]})),_:1})])])],64)}var r=n("6605"),c=(n("9911"),{id:"navbarExample1",class:"navbar navbar-expand fixed-top navbar-light","aria-label":"Main navigation"}),i={class:"nav-item d-lg-none pt-2"},u={class:"nav-item d-none d-lg-block"};function s(e,t,n,a,l,r){var s=Object(o["y"])("router-link");return Object(o["H"])((Object(o["t"])(),Object(o["f"])("nav",c,[Object(o["g"])("div",{class:Object(o["p"])(["container px-0",{"flex-row-reverse":"en"==a.lang}])},[Object(o["j"])(s,{to:a.prefix+"/",class:"navbar-brand logo-image d-none d-lg-block",onClick:a.lang},{default:Object(o["G"])((function(){return t[4]||(t[4]=[Object(o["i"])(" Web Agent "),Object(o["g"])("img",{class:"",src:"/images/favicon.png",alt:"طراحی سایت"},null,-1)])})),_:1},8,["to","onClick"]),Object(o["g"])("ul",{class:Object(o["p"])(["navbar-nav navbar-nav-scroll mx-auto px-0 px-lg-2",{"me-lg-2 flex-row-reverse":"en"==a.lang,"ms-lg-0":"fa"==a.lang}])},[Object(o["g"])("li",{class:"nav-item d-lg-none",onClick:t[0]||(t[0]=function(){return a.lang&&a.lang.apply(a,arguments)})},[Object(o["j"])(s,{to:a.prefix+"/",class:"nav-link",title:"en"==a.lang?"Home":"خانه","aria-current":"page"},{default:Object(o["G"])((function(){return t[5]||(t[5]=[Object(o["g"])("img",{class:"",src:"/images/favicon.png",width:"22px",alt:"طراحی سایت"},null,-1)])})),_:1},8,["to","title"])]),(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["x"])(a.menu,(function(n,l){return Object(o["t"])(),Object(o["f"])("li",{key:l,class:Object(o["p"])(["nav-item",{"d-none d-lg-block":0===l}]),onClick:t[1]||(t[1]=function(){return a.lang&&a.lang.apply(a,arguments)})},[Object(o["j"])(s,{to:a.prefix+n.link,class:Object(o["p"])(["nav-link",{active:e.$route.fullPath===a.prefix+n.link}]),"aria-current":"page"},{default:Object(o["G"])((function(){return[Object(o["i"])(Object(o["C"])("en"==a.lang?n.title_en:n.title),1)]})),_:2},1032,["to","class"])],2)})),128)),Object(o["g"])("li",i,["en"==a.lang?(Object(o["t"])(),Object(o["e"])(s,{key:0,class:"nav-item b-solid",to:"/"},{default:Object(o["G"])((function(){return t[6]||(t[6]=[Object(o["i"])("Fa")])})),_:1})):(Object(o["t"])(),Object(o["e"])(s,{key:1,to:"/en/",class:"nav-item b-solid"},{default:Object(o["G"])((function(){return t[7]||(t[7]=[Object(o["i"])("En")])})),_:1}))])],2),Object(o["g"])("span",u,["en"==a.lang?(Object(o["t"])(),Object(o["e"])(s,{key:0,class:"btn-solid-sm py-4",to:"/",onClick:t[2]||(t[2]=function(e){return a.setLang("fa")})},{default:Object(o["G"])((function(){return t[8]||(t[8]=[Object(o["i"])("Persian")])})),_:1})):(Object(o["t"])(),Object(o["e"])(s,{key:1,class:"btn-solid-sm py-4",to:"/en/",onClick:t[3]||(t[3]=function(e){return a.setLang("en")})},{default:Object(o["G"])((function(){return t[9]||(t[9]=[Object(o["i"])("English")])})),_:1}))])],2)],512)),[[o["E"],"Page404"!==e.$route.name]])}var p={name:"TheNavBar",props:["lng"],setup:function(e){var t=Object(o["w"])(e.lng),n=Object(r["c"])(),a="en"==t?"/en":"",l=[{title:"خانه",title_en:"Home",link:"/"},{title:"درباره ما",title_en:"About Us",link:"/about"},{title:"نمونه کار",title_en:"Portfolio",link:"/portfolio"},{title:"راهنما",title_en:"Help",link:"/help"},{title:"پلن ها",title_en:"Plans",link:"/plans"},{title:"تماس با ما",title_en:"Contact Us",link:"/contact"}],c=function(e){t.value=e};return{menu:l,route:n,prefix:a,lang:t,setLang:c}}},f=n("6b0d"),b=n.n(f);const d=b()(p,[["render",s]]);var m=d,g={components:{TheNavBar:m},setup:function(){var e=Object(o["w"])("fa"),t=Object(r["c"])(),n=[{title_fa:"توت سوییت",title_en:"Toute Sweet",image:"/images/toutesweet.jpg",link:"https://toute-sweet.org/"},{title_fa:"گردونه شانس",title_en:"Chance Wheel",image:"/images/wheel.jpg",link:"https://landing.elitefood.ir/"},{title_fa:"کوپا",title_en:"Copa",image:"/images/copa.jpg",link:"https://mycopa.ir"},{title_fa:"نودالیت",title_en:"Noodelite",image:"/images/elite.jpg",link:"https://elitefood.ir"},{title_fa:"کوپاکافه",title_en:"CopaCafe",image:"/images/cc.jpg",link:"https://copacaffe.co.webagent.ir/"},{title_fa:"بیوتی لند",title_en:"Beauty Land",image:"/images/myshop.jpg",link:"https://myshop.webagent.ir"},{title_fa:"فروشگاه",title_en:"Shop",image:"/images/shop2.jpg",link:"https://shop2.webagent.ir"},{title_fa:"پنل فروشگاه",title_en:"Shop Panel",image:"/images/shop.panel.jpg",link:"https://panel.shop2.webagent.ir/panel/login"},{title_fa:"رستوران",title_en:"Restaurant",image:"/images/delish.jpg",link:"https://res.webagent.ir"},{title_fa:"آموزشگاه",title_en:"School",image:"/images/ielts.jpg",link:"https://school.webagent.ir"},{title_fa:"کار یابی ",title_en:"Job Search",image:"/images/highjob.jpg",link:"https://highjob.webagent.ir"}];return{route:t,portfolio:n,lang:e}}};n("3557");const h=b()(g,[["render",l]]);t["a"]=h},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("3dfd"),l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6605")),r=(n("ac1f"),n("466d"),{key:0,class:"mx-auto text-center mt-5 pt-5"}),c={class:"navbar d-flex justify-content-center py-2"},i={key:1,class:"mx-auto text-center mt-5 pt-5"},u={class:"navbar d-flex justify-content-center py-2"};function s(e,t,n,a,l,s){var p=Object(o["y"])("router-link");return Object(o["t"])(),Object(o["f"])("div",null,[e.$route.match("/en/*")?(Object(o["t"])(),Object(o["f"])("div",r,[t[3]||(t[3]=Object(o["g"])("h1",null,"404",-1)),t[4]||(t[4]=Object(o["g"])("h6",null," This page dose not exist",-1)),Object(o["g"])("div",c,[Object(o["j"])(p,{class:"btn btn-solid-sm m-1",to:"/"},{default:Object(o["G"])((function(){return t[2]||(t[2]=[Object(o["i"])("Home")])})),_:1}),Object(o["g"])("a",{class:"btn btn-solid-sm m-1",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})},"Back")])])):(Object(o["t"])(),Object(o["f"])("div",i,[t[6]||(t[6]=Object(o["g"])("h1",null,"404",-1)),t[7]||(t[7]=Object(o["g"])("h6",null," این صفحه وجود ندارد",-1)),Object(o["g"])("div",u,[Object(o["j"])(p,{class:"btn btn-solid-sm m-1",to:"/"},{default:Object(o["G"])((function(){return t[5]||(t[5]=[Object(o["i"])("خانه")])})),_:1}),Object(o["g"])("a",{class:"btn btn-solid-sm m-1",onClick:t[1]||(t[1]=function(t){return e.$router.go(-1)})},"بازگشت")])]))])}var p={},f=(n("31c3"),n("6b0d")),b=n.n(f);const d=b()(p,[["render",s],["__scopeId","data-v-7753c42f"]]);var m=d,g=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/help",name:"Help",component:function(){return n.e("help").then(n.bind(null,"c3ef"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/plans",name:"Plans",component:function(){return n.e("plans").then(n.bind(null,"0d1e"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"c9e5"))}},{path:"/en/",name:"HomeEn",component:function(){return n.e("homeEn").then(n.bind(null,"4c80"))}},{path:"/en/about",name:"AboutEn",component:function(){return n.e("aboutEn").then(n.bind(null,"83d4"))}},{path:"/en/help",name:"HelpEn",component:function(){return n.e("helpEn").then(n.bind(null,"ede4"))}},{path:"/en/contact",name:"ContactEn",component:function(){return n.e("plansEn").then(n.bind(null,"58c3"))}},{path:"/en/plans",name:"PlansEn",component:function(){return n.e("plansEn").then(n.bind(null,"6aaf"))}},{path:"/en/portfolio",name:"PortfolioEn",component:function(){return n.e("portfolioEn").then(n.bind(null,"dd7d"))}},{path:"/:catchAll(.*)",name:"Page404",component:m}],h=Object(l["a"])({history:Object(l["b"])("/"),routes:g}),j=h;Object(o["d"])(a["a"]).use(j).mount("#app")},"9a85":function(e,t,n){},f3c1:function(e,t,n){}});
//# sourceMappingURL=app.6304b001.js.map