(function(t){function e(e){for(var o,a,i=e[0],u=e[1],l=e[2],s=0,b=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f0f":function(t,e,n){},"17f9":function(t,e,n){t.exports=n.p+"img/jst-gold.5d074142.svg"},"419f":function(t,e,n){},"4ac5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,r,a){var i=Object(o["o"])("jstAnimation"),u=Object(o["o"])("QuickInfo"),l=Object(o["o"])("Constructor"),d=Object(o["o"])("Download");return Object(o["k"])(),Object(o["e"])(o["a"],null,["show-animation"===t.state?(Object(o["k"])(),Object(o["c"])(i,{key:0})):Object(o["d"])("",!0),"quick-info"===t.state?(Object(o["k"])(),Object(o["c"])(u,{key:1})):Object(o["d"])("",!0),"constructor"===t.state?(Object(o["k"])(),Object(o["c"])(l,{key:2})):Object(o["d"])("",!0),"download"===t.state?(Object(o["k"])(),Object(o["c"])(d,{key:3})):Object(o["d"])("",!0)],64)}n("caad");var r={id:"blackdrop"},a=["src"];function i(t,e,n,c,i,u){return Object(o["k"])(),Object(o["e"])("div",r,[Object(o["f"])("img",{id:"icon",src:t.icon},null,8,a)])}var u={name:"jstAnimation",data:function(){return{icon:n("17f9")}}},l=(n("669c"),n("6b0d")),d=n.n(l),s=d()(u,[["render",i],["__scopeId","data-v-9db00ff8"]]),b=function(t){return Object(o["m"])("data-v-34fbe7ac"),t=t(),Object(o["l"])(),t},f=b((function(){return Object(o["f"])("section",{id:"JSt-pill"},[Object(o["f"])("div",{id:"JSt-buttons-container"}),Object(o["f"])("p",{id:"JSt-message"})],-1)})),j={id:"constructor"},O=b((function(){return Object(o["f"])("svg",{viewBox:"-4 -2 34 32",fill:"none"},[Object(o["f"])("path",{d:"M25 16V23L23.5 24H22H19H13H7H4H2.5L1 23V16M13 1V21M13 21L5 13M13 21L21 13",stroke:"currentcolor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)})),h=[O];function p(t,e,n,c,r,a){var i=Object(o["o"])("Multiselector");return Object(o["k"])(),Object(o["e"])("main",null,[f,Object(o["f"])("section",j,[Object(o["h"])(i,Object(o["i"])({onUpdateState:e[0]||(e[0]=function(t,e){return a.updateState(t,e)})},t.state),null,16)]),Object(o["f"])("button",{id:"download",onClick:e[1]||(e[1]=function(){return a.gdow&&a.gdow.apply(a,arguments)})},h)])}var k={id:"r"},m=["onClick"],g={key:0},v=["onClick"],y={key:1},w=["onClick"],C={key:0},x=["onClick"];function S(t,e,n,c,r,a){return Object(o["k"])(),Object(o["e"])("ul",k,[(Object(o["k"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(t.fields,(function(e,n){return Object(o["k"])(),Object(o["e"])("li",{key:n,onClick:function(e){return t.tpath=n}},[Object(o["g"])(Object(o["p"])(n)+" ",1),Array.isArray(e)&&t.tpath===n?(Object(o["k"])(),Object(o["e"])("ul",g,[(Object(o["k"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(e,(function(e){return Object(o["k"])(),Object(o["e"])("li",{key:n+e,onClick:function(o){return t.$emit("updateState",n,e)}},Object(o["p"])(e),9,v)})),128))])):t.tpath===n?(Object(o["k"])(),Object(o["e"])("ul",y,[(Object(o["k"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(e,(function(e,c){return Object(o["k"])(),Object(o["e"])("li",{key:n+c,onClick:function(e){return t.lpath=c}},[Object(o["g"])(Object(o["p"])(c)+" ",1),t.lpath==c?(Object(o["k"])(),Object(o["e"])("ul",C,[(Object(o["k"])(!0),Object(o["e"])(o["a"],null,Object(o["n"])(e,(function(e){return Object(o["k"])(),Object(o["e"])("li",{key:n+c+e,onClick:function(n){return t.$emit("updateState",c,e)}},Object(o["p"])(e),9,x)})),128))])):Object(o["d"])("",!0)],8,w)})),128))])):Object(o["d"])("",!0)],8,m)})),128))])}var J={Dimensions:["100%","150%","200%"],Color:{"Pill color":["pink","violet","grey","black","teal"],"Pill highlight":["pink","violet","grey","black","teal"],"Pill border":["pink","violet","grey","black","teal"]},"Border width":["4px","10px","6px"]},_={name:"Multiselector",data:function(){return{fields:{},tpath:"",lpath:""}},mounted:function(){this.fields=J}},A=(n("58ef"),d()(_,[["render",S],["__scopeId","data-v-30016784"]])),M={name:"Constructor",components:{Multiselector:A},data:function(){return{state:{}}},methods:{updateState:function(t,e){var n=t.toUpperCase().replaceAll(" ","_");this.state[n]=e,console.log(this.state)},gdow:function(){document.location.hash="#download"}}},T=(n("be87"),d()(M,[["render",p],["__scopeId","data-v-34fbe7ac"]])),I=function(t){return Object(o["m"])("data-v-ed906ff2"),t=t(),Object(o["l"])(),t},P={class:"bg"},B={class:"header-container"},D=Object(o["g"])("Download "),F=["href"],G=I((function(){return Object(o["f"])("img",{src:"https://flex-hq.com/flex-screensaver.png",id:"guide",alt:"drag header <Download JSt> to the bookmarklets bar"},null,-1)})),H=I((function(){return Object(o["f"])("footer",{id:"copyright"},[Object(o["f"])("a",{href:"https://github.com/notTGY"},"© notTGY 2021")],-1)}));function Y(t,e,n,c,r,a){var i=Object(o["o"])("Card");return Object(o["k"])(),Object(o["e"])("main",P,[Object(o["f"])("div",B,[Object(o["f"])("h1",null,[D,Object(o["f"])("a",{href:t.href},"JSt",8,F)])]),t.isCustom?(Object(o["k"])(),Object(o["c"])(i,{key:0,id:"main-card",header:"Download Custom JSt",text:"To download your hand-made, fine-tuned JSt follow instructions on the gif below. If you want, you still can edit your JSt by clicking the button below",headerColor:"linear-gradient(4deg, #BF953F 0%, #FCF6BA 28.65%, #B38728 57.29%, #FBF5B7 79.17%, #AA771C 100%)",headerGrad:"true",textColor:"#aa8"})):Object(o["d"])("",!0),t.isCustom?Object(o["d"])("",!0):(Object(o["k"])(),Object(o["c"])(i,{key:1,id:"main-card",header:"Download basic version of JSt",text:"To download basic version (lite) follow instructions below. However you don't have to :) You can create amazing Custom JSt by clicking <upgrade your JSt> button at the bottom of the screen.",textColor:"darkblue",headerColor:"brown"})),G,Object(o["h"])(i,{id:"edit-jst",header:"upgrade your JSt",text:"",headerColor:"Aqua",onClick:a.gcon},null,8,["onClick"]),H])}n("ac1f"),n("841c");var q={class:"card"};function L(t,e,n,c,r,a){return Object(o["k"])(),Object(o["e"])("div",null,[Object(o["f"])("div",q,[Object(o["f"])("h2",{style:Object(o["j"])(n.headerGrad?{"text-shadow":"1px 1px 1px #00000035","-webkit-text-fill-color":"transparent",background:n.headerColor,"-webkit-background-clip":"text"}:{color:n.headerColor})},Object(o["p"])(n.header),5),Object(o["f"])("div",{style:Object(o["j"])({color:n.textColor}),class:"content"},Object(o["p"])(n.text),5)])])}var Q={name:"Card",props:{header:String,text:String,headerColor:String,headerGrad:Boolean,textColor:String}},V=(n("f79c"),d()(Q,[["render",L],["__scopeId","data-v-358b7cd4"]])),z={name:"Download",components:{Card:V},data:function(){return{isCustom:!1,href:"javascript:(function(){const})()"}},mounted:function(){var t=document.location.search;""!==t&&(this.isCustom=!0)},methods:{gcon:function(){document.location.hash="#constructor"}}},U=(n("833a"),d()(z,[["render",Y],["__scopeId","data-v-ed906ff2"]])),$=function(t){return Object(o["m"])("data-v-421115ce"),t=t(),Object(o["l"])(),t},E={class:"bg"},N=$((function(){return Object(o["f"])("div",{class:"header-container"},[Object(o["f"])("h1",null,"JSt v3")],-1)})),K=$((function(){return Object(o["f"])("footer",{id:"copyright"},[Object(o["f"])("a",{href:"https://github.com/notTGY"},"© notTGY 2021")],-1)}));function R(t,e,n,c,r,a){var i=Object(o["o"])("Card");return Object(o["k"])(),Object(o["e"])("main",E,[N,Object(o["h"])(i,{id:"c1",header:"Download Now!",text:"To download JSt simply click this card, however, you can modify by clicking the other card to provide yourself with amazing look and experience out of the box.",headerColor:"#3256c8",textColor:"#c79",onClick:a.gdow},null,8,["onClick"]),Object(o["h"])(i,{id:"c2",header:"Build your Custom JSt!",text:"Modify look and the feel of your JSt. You can change colors of pretty much everything, add custom widgets, password saving and more... To get to the JSt constructor click this card.",headerColor:"#7256a8",textColor:"#7e9",onClick:a.gcon},null,8,["onClick"]),K])}var W={name:"QuickInfo",components:{Card:V},methods:{gdow:function(){document.location.hash="#download",document.location.reload()},gcon:function(){document.location.hash="#constructor",document.location.reload()}}},X=(n("73cd"),d()(W,[["render",R],["__scopeId","data-v-421115ce"]])),Z={name:"App",data:function(){return{state:"show-animation"}},components:{Constructor:T,jstAnimation:s,Download:U,QuickInfo:X},created:function(){var t=this,e=function e(){var n=document.location.hash.substring(1);t.state=n,requestAnimationFrame(e)};if(e(),["","#show-animation"].includes(document.location.hash)){window.location.hash="#show-animation";var n=function(){document.location.hash="#quick-info"};setTimeout(n,3e3),addEventListener("click",n)}}},tt=(n("57c2"),d()(Z,[["render",c]]));Object(o["b"])(tt).mount("#app")},"57c2":function(t,e,n){"use strict";n("0f0f")},"58ef":function(t,e,n){"use strict";n("4ac5")},"669c":function(t,e,n){"use strict";n("dad2")},"6bb6":function(t,e,n){},"73cd":function(t,e,n){"use strict";n("419f")},"833a":function(t,e,n){"use strict";n("ce91")},be87:function(t,e,n){"use strict";n("d8b3")},ce91:function(t,e,n){},d8b3:function(t,e,n){},dad2:function(t,e,n){},f79c:function(t,e,n){"use strict";n("6bb6")}});
//# sourceMappingURL=app.66aec6fd.js.map