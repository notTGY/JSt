(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(534)}])},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,s=void 0!==r&&r,c=e.priority,p=void 0!==c&&c,y=e.loading,S=e.lazyRoot,k=void 0===S?null:S,N=e.lazyBoundary,A=void 0===N?"200px":N,P=e.className,O=e.quality,J=e.width,z=e.height,I=e.objectFit,E=e.objectPosition,B=e.onLoadingComplete,C=e.loader,R=void 0===C?j:C,D=e.placeholder,F=void 0===D?"empty":D,q=e.blurDataURL,L=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),W=l.useRef(null),M=l.useContext(h.ImageConfigContext),T=l.useMemo((function(){var e=b||M||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:n})}),[M]),V=L,H=n?"responsive":"intrinsic";"layout"in V&&(V.layout&&(H=V.layout),delete V.layout);var U="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var G=v(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(q=q||G.blurDataURL,U=G.src,(!H||"fill"!==H)&&(z=z||G.height,J=J||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}t="string"===typeof t?t:U;var Z=x(J),X=x(z),Y=x(O),K=!p&&("lazy"===y||"undefined"===typeof y);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,K=!1);g.has(t)&&(K=!1);0;var Q,$=o(f.useIntersection({rootRef:k,rootMargin:A,disabled:!K}),2),ee=$[0],te=$[1],ne=!K||te,re={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:I,objectPosition:E},se="blur"===F?{filter:"blur(20px)",backgroundSize:I||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:E||"0% 0%"}:{};if("fill"===H)re.display="block",re.position="absolute",re.top=0,re.left=0,re.bottom=0,re.right=0;else if("undefined"!==typeof Z&&"undefined"!==typeof X){var ce=X/Z,le=isNaN(ce)?"100%":"".concat(100*ce,"%");"responsive"===H?(re.display="block",re.position="relative",oe=!0,ie.paddingTop=le):"intrinsic"===H?(re.display="inline-block",re.position="relative",re.maxWidth="100%",oe=!0,ie.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Z,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===H&&(re.display="inline-block",re.position="relative",re.width=Z,re.height=X)}else 0;var ue={src:_,srcSet:void 0,sizes:void 0};ne&&(ue=w({config:T,src:t,unoptimized:s,layout:H,width:Z,quality:Y,sizes:n,loader:R}));var de=t;0;var fe;0;var he=(i(fe={},"imagesrcset",ue.srcSet),i(fe,"imagesizes",ue.sizes),fe),pe=l.default.useLayoutEffect,me=l.useRef(B);return l.useEffect((function(){me.current=B}),[B]),pe((function(){ee(W.current)}),[ee]),l.useEffect((function(){!function(e,t,n,r,i){var o=function(){var n=e.current;n&&(n.src!==_&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(g.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(W,de,0,F,me)}),[de,H,F,ne]),l.default.createElement("span",{style:re},oe?l.default.createElement("span",{style:ie},Q?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,l.default.createElement("img",Object.assign({},V,ue,{decoding:"async","data-nimg":H,className:P,ref:W,style:m({},ae,se)})),K&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},V,w({config:T,src:t,unoptimized:s,layout:H,width:Z,quality:Y,sizes:n,loader:R}),{decoding:"async","data-nimg":H,style:ae,className:P,loading:y||"lazy"}))),p?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ue.src+ue.srcSet+ue.sizes,rel:"preload",as:"image",href:ue.srcSet?void 0:ue.src},he))):null)};var c,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(c=n(5443))&&c.__esModule?c:{default:c},d=n(5809),f=n(7190),h=n(9977);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"},g=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(S(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,s=e.quality,c=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(r);s)l.push(parseInt(s[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,a(l));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),d=u.widths,f=u.kind,h=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,r){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:s,width:d[h]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=y.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e){return"/"===e[0]?e.slice(1):e}},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],h=d[1],p=i(o.useState(t?t.current:null),2),m=p[0],b=p[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,f]);return o.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&b(t.current)}),[t]),[g,f]};var o=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},534:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return P},default:function(){return O}});var r=n(5893),i=n(7294),o=n(9106),a=n.n(o),s=(0,i.createContext)("alert()"),c=n(9243),l=n.n(c),u=function(e){var t,n=e.classes,i=e.children,o="".concat(l().JStPill);if(n)for(var a in n){var c=n[a],u="".concat(a).concat((t=c)[0].toUpperCase()+t.substring(1));o+=" ".concat(l()[u])}return(0,r.jsx)(s.Consumer,{children:function(e){return(0,r.jsx)("a",{ref:function(t){return t&&t.setAttribute("href","javascript:".concat(e))},children:(0,r.jsx)("div",{className:l().wrapper,children:(0,r.jsxs)("section",{className:o,children:[(0,r.jsx)("div",{className:l().JStButtonsContainer}),(0,r.jsx)("div",{className:l().JStMessage,children:i})]})})})}})},d=n(5641),f=n(6261),h=n(6060),p=n.n(h),m="Subscribe to newsletter",b={title:"JSt",text:"JSt - video share player",url:"https://jstplayer.com?from=sub_share"},g=function(e){var t=e.className,n=(0,i.useState)(""),o=n[0],a=n[1],s=(0,i.useState)("input"),c=s[0],l=s[1],u=(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t="email=".concat(o);fetch("".concat("https://jst--newsletter.nottgy.autocode.gg","/").concat("","?").concat(t)).then((function(e){l(e.ok?"success":"fail")})),l("loading")},children:[(0,r.jsx)("h2",{className:p().h2,children:m}),(0,r.jsx)("label",{htmlFor:"email",children:"Email: "}),(0,r.jsx)("input",{required:!0,type:"email",name:"email",id:"email",placeholder:"email@email.com*",value:o,onChange:function(e){return a(e.target.value)},className:p().input}),(0,r.jsx)("div",{className:p().flex,children:(0,r.jsx)("button",{className:p().button,children:"sub"})})]}),d=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:p().h2,children:m}),(0,r.jsx)("p",{children:"In the process of subscribing..."})]}),h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:p().h2,children:m}),(0,r.jsx)("p",{children:"Everything went well \ud83d\udc4d. You can share this page, if you want \ud83d\ude09"}),(0,r.jsx)("div",{className:p().flex,children:(0,r.jsx)("button",{onClick:function(e){return navigator.share(b)},className:p().button,children:"share"})})]}),g=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:p().h2,children:m}),(0,r.jsx)("p",{children:"Something went wrong, try entering another email address \ud83d\ude4f"}),(0,r.jsx)("div",{className:p().flex,children:(0,r.jsx)("button",{onClick:function(e){return l("input")},className:p().button,children:"try again"})})]});return(0,r.jsxs)(f.Z,{className:"".concat(t," ").concat(p().popup),children:["input"===c?u:"","loading"===c?d:"","success"===c?h:"","fail"===c?g:""]})},_=n(7288),y=n.n(_),v=function(e){var t=e.className;return(0,r.jsxs)(f.Z,{className:"".concat(y().card," ").concat(t),children:[(0,r.jsx)("h2",{className:y().h2,children:"\nVideo sharing player.\n"}),"\nJSt provides shared access to every video in the internet with no watching delay. \ud83c\udfa5\nAlso it lets you speed up unlimetedly (\ud83c\udfce\ufe0fsurpass x2 barrier).\nDesign can be composed of five ergonomic colors and three variations of size! \ud83d\udd8c\ufe0f\ud83c\udfa8\n".split("\n").map((function(e){return{__html:e}})).map((function(e,t){return(0,r.jsx)("p",{dangerouslySetInnerHTML:e},t)}))]})},w=n(5675),x=n(3443),j=n.n(x),S=function(e){var t=e.className;return(0,r.jsxs)(f.Z,{className:"".concat(j().card," ").concat(t),children:[(0,r.jsx)("h2",{className:j().h2,children:"\nHow to install JSt (Desktop)\n"}),(0,r.jsx)("p",{children:"\nIt's quite easy - just drag pill onto bookmarks bar, like shown on the gif below.\n"}),(0,r.jsx)(w.default,{src:"/download.gif",width:"800",height:"200",className:j().picture,alt:"Downloading JSt by dragging pill onto bookmarks bar"}),(0,r.jsx)("p",{children:"\nTo activate JSt click bookmark on the video page (like on second gif).\n"}),(0,r.jsx)(w.default,{src:"/use.gif",width:"800",height:"250",className:j().picture,alt:"Using JSt player on youtube"}),(0,r.jsx)("p",{children:"\nIf bookmarks bar is not showing, you can turn it on at Browser settings -> Appearance -> Show bookmars bar -> \u2705.\n"})]})},k=function(e){var t=e.classes,n=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:a().backdrop}),(0,r.jsx)("div",{className:a().backdropOld}),(0,r.jsx)(d.Z,{})]});return(0,r.jsxs)("main",{className:a().main,children:[n,(0,r.jsx)(u,{classes:t,children:(0,r.jsx)("h1",{className:a().h1,children:"JSt"})}),(0,r.jsx)(g,{}),(0,r.jsx)(v,{className:a().marginTop}),(0,r.jsx)(S,{className:a().marginTop})]})},N={dimensions:"normal",borderWidth:"4px",color:"white"},A=function(e){var t=(0,i.useState)(N),n=t[0];t[1];return(0,r.jsx)(k,{classes:n})},P=!0,O=function(e){var t=e.jstCode;return(0,r.jsx)(s.Provider,{value:t,children:(0,r.jsx)(A,{})})}},5641:function(e,t,n){"use strict";var r=n(5893),i=n(7312),o=n.n(i);t.Z=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)("span",{className:o().banner1}),(0,r.jsx)("span",{className:o().banner2}),(0,r.jsx)("span",{className:o().banner3}),(0,r.jsx)("span",{className:o().banner4}),(0,r.jsx)("span",{className:o().banner5})]})}},6261:function(e,t,n){"use strict";var r=n(5893),i=n(1416),o=n.n(i);t.Z=function(e){var t=e.children,n=e.className,i="".concat(n," ").concat(o().card);return(0,r.jsx)("div",{className:o().container,children:(0,r.jsx)("div",{className:i,children:t})})}},7312:function(e){e.exports={banner1:"Blobs_banner1__neL7_",banner2:"Blobs_banner2____5_s",banner3:"Blobs_banner3__JfBPb",banner4:"Blobs_banner4__spzVj",banner5:"Blobs_banner5__3EekT"}},1416:function(e){e.exports={container:"Card_container__BIFxP",card:"Card_card__93SJl"}},3443:function(e){e.exports={h2:"Download_h2__Wveta",card:"Download_card__EttNr",slideup:"Download_slideup__z2Y1E",picture:"Download_picture__FToVB"}},9243:function(e){e.exports={wrapper:"JStPill_wrapper__JvO8D",JStPill:"JStPill_JStPill__AHopn",dimensionsNormal:"JStPill_dimensionsNormal__GTE5u",dimensionsBig:"JStPill_dimensionsBig__jhhXd",dimensionsVeryBig:"JStPill_dimensionsVeryBig__DOiI0",borderWidth4px:"JStPill_borderWidth4px__frLwY",borderWidth6px:"JStPill_borderWidth6px__Pbb9e",borderWidth10px:"JStPill_borderWidth10px__j8Fgx",colorWhite:"JStPill_colorWhite__rPoDH",colorBlack:"JStPill_colorBlack__0Bhh0",colorGreen:"JStPill_colorGreen__v9s2l",colorPink:"JStPill_colorPink__5pjF_",colorBlue:"JStPill_colorBlue___yS__",JStMessage:"JStPill_JStMessage__RG8xN",beforeAppear:"JStPill_beforeAppear__93nCV",slideaway:"JStPill_slideaway__2J_cV",JStButtonsContainer:"JStPill_JStButtonsContainer__9CjJQ",JStButton:"JStPill_JStButton__qDIjb"}},9106:function(e){e.exports={backdropOld:"Landing_backdropOld__krKlH",fade:"Landing_fade__VWBgG",backdrop:"Landing_backdrop__sDtra",main:"Landing_main__okR8J",h1:"Landing_h1__LoX_4",marginTop:"Landing_marginTop__KwZwc"}},7288:function(e){e.exports={h2:"ShortInfo_h2__4YkOF",card:"ShortInfo_card__C__mF",slideup:"ShortInfo_slideup__d9Tfj"}},6060:function(e){e.exports={h2:"SubscribeForm_h2__RxV4L",input:"SubscribeForm_input__qSqnI",button:"SubscribeForm_button__jiFrh",shake:"SubscribeForm_shake__kp643",flex:"SubscribeForm_flex__852Rn",popup:"SubscribeForm_popup__q5Co6",slideup:"SubscribeForm_slideup__6qnZA"}},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);