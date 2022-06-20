(()=>{function q(t){let e,n;switch(t.dimensions){case void 0:case"normal":e=75,n=800;break;case"big":e=85,n=900;break;case"verybig":e=100,n=1e3}let r,i,s,o,c,a,l;switch(t.color){case void 0:case"trans":o="#c8c8c8a0",s="#c8c8c8a0",i="#ffffffa0",r="#eeeeeea0",c="#e090df",a="#a44cd3",l="#8800c7";break;case"white":o="#ccd",s="#aaa",i="#fff",r="#bbbbbb",c="#888",a="#555",l="#333";break;case"black":o="#222",s="#333",i="#222222",r="#000",c="#888",a="#555",l="#333";break;case"green":o="#bfa",s="#7a6",i="#bfa",r="#8b7",c="#888",a="#555",l="#333";break;case"pink":o="#fab",s="#a67",i="#fab",r="#b78",c="#888",a="#555",l="#333";break;case"blue":o="#abf",s="#67a",i="#abf",r="#78b",c="#888",a="#555",l="#333";break}let u;switch(t["border-width"]){case void 0:case"4px":u="box-shadow: 0px 0px 10px 4px;";break;case"6px":u="box-shadow: 0px 0px 10px 6px;";break;case"10px":u="box-shadow: 0px 0px 10px 10px;"}let f=.9,m=`
.JSt-video-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.JSt-video-wrapper>video {
  width: 100%;
  height: 100%;
}

#JSt-pill {
  width: ${n}px;
  height: ${2*e}px;
  border-radius: ${e}px;

  position: fixed;
  top: 50px;
  left: calc(50vw - ${n/2}px);

  overflow: hidden;
  z-index: 100;

  ${u}
  color: ${o};

  border: 2px solid ${s};
  background-image:linear-gradient(${i},${r});
  backdrop-filter: blur(15px);

  opacity: ${f};
  animation: jst-pill-appear 0.5s;
}

#JSt-pill:hover {
  opacity: 1;
}

@keyframes jst-pill-appear{
  from {
    opacity: 0;
  }
  to {
    opacity: ${f};
  }
}

.JSt-button-container {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: ${e}px;

  height: ${2*e}px;
  width: ${n-2*e}px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background: transparent;
  z-index: 102;
}

.JSt-form {
  margin: 0;
  display: flex;
  align-items: center;
  z-index: 400;
}

.JSt-button {
  width: ${2*e}px;
  height: ${2*e}px;
  border: 0px;
  padding: 20px;
  color: ${c};
  background: transparent;
  z-index: 500;
  transition: 0.2s;
  opacity: ${f};
}

.JSt-button-padding {
  padding: 20px!important;
}

#JSt-code-input {
  width: ${4*e}px;
  height: ${2*e}px;
  border: 0px;
  padding: 0px;
  padding-bottom: ${e/2}px;
  padding-top: ${e/2}px;
  background: transparent;
  z-index: 500;
  transition: 0.5s;
  opacity: ${f};
  color: ${c};
  font-weight: 600;
  font-family: monospace;
  font-size: ${e}px;
}

.JSt-button:hover {
  color: ${a};
  padding: 5px;
}

.JSt-button:active {
  color: ${l};
  padding: 20px;
}

.JSt-version {
  width: ${n-2*e}px;
  height: ${2*e}px;

  position: relative;
  top: -${2*e}px;
  margin: 0 auto;

  z-index: 102;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  color: ${c};
  font-family: monospace;
  font-size: 0.6rem;
}

.JSt-iframe-button {
  position: absolute!important;
  background: transparent;
  border: 2px solid #e090df;
  box-shadow: 0 0 10px 4px #e090df;
}
`,d=document.createElement("style");d.innerHTML=m,document.head.append(d)}var L=q;var R=`<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21C8 21 12.6429 14 21 14C29.3571 14 34 21 34 21C34 21 29.3571 28 21 28C12.6429 28 8 21 8 21Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 1H1V41H41V26.5V18.5M27 1H41M41 1V15M41 1L27 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,N=`<svg transform="scale (-1, 1)" transform-origin="center" viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,V=`<svg viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,P=`<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M2 20 L12 28 30 4" />
</svg>
`,j=`<svg viewBox="-1 -1 34 34" stroke="none" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.0814365 10.7248C0.0436545 10.4913 0.256265 10.317 0.509736 10.2401C0.763207 10.1632 1.03683 10.19 1.27055 10.3146L3.03408 11.2551C3.43197 9.35655 4.3757 7.61556 5.74937 6.24595C7.17348 4.82183 8.92286 3.91532 10.7585 3.53066L9.81664 1.76855C9.75359 1.65267 9.71409 1.52546 9.70042 1.39424C9.68675 1.26303 9.69918 1.13041 9.73698 1.00402C9.77479 0.877633 9.83723 0.759973 9.92071 0.657822C10.0042 0.555671 10.1071 0.471047 10.2234 0.408826C10.3397 0.346604 10.4672 0.308015 10.5985 0.29528C10.7298 0.282546 10.8623 0.295918 10.9885 0.334627C11.1146 0.373336 11.2318 0.436617 11.3333 0.520823C11.4349 0.60503 11.5188 0.708499 11.5802 0.825268L12.9124 3.31711C15.5333 3.33807 18.0405 4.39025 19.8915 6.24595L20.5986 5.53884C20.7861 5.3513 20.8915 5.09695 20.8915 4.83173C20.8915 4.56652 20.7861 4.31216 20.5986 4.12463L19.8915 3.41752C19.704 3.22998 19.5986 2.97563 19.5986 2.71041C19.5986 2.4452 19.704 2.19084 19.8915 2.00331C20.079 1.81577 20.3334 1.71041 20.5986 1.71041C20.8638 1.71041 21.1182 1.81577 21.3057 2.00331L22.0128 2.71041C22.5754 3.27302 22.8915 4.03608 22.8915 4.83173C22.8915 5.62738 22.5754 6.39045 22.0128 6.95305L21.3057 7.66016L22.7199 9.07437L24.8412 6.95305C25.0288 6.76552 25.2831 6.66016 25.5484 6.66016C25.8136 6.66016 26.0679 6.76552 26.2555 6.95305C26.443 7.14059 26.5484 7.39494 26.5484 7.66016C26.5484 7.92538 26.443 8.17973 26.2555 8.36727L24.1341 10.4886L25.5484 11.9028L26.2555 11.1957C26.8181 10.6331 27.5811 10.317 28.3768 10.317C29.1724 10.317 29.9355 10.6331 30.4981 11.1957L31.2052 11.9028C31.3927 12.0903 31.4981 12.3447 31.4981 12.6099C31.4981 12.8751 31.3927 13.1295 31.2052 13.317C31.0177 13.5046 30.7633 13.6099 30.4981 13.6099C30.2329 13.6099 29.9785 13.5046 29.791 13.317L29.0839 12.6099C28.8964 12.4224 28.642 12.317 28.3768 12.317C28.1116 12.317 27.8572 12.4224 27.6697 12.6099L26.9626 13.317C28.8379 15.1924 29.8915 17.7359 29.8915 20.3881C29.8915 23.0402 28.8379 25.5838 26.9626 27.4591C25.0872 29.3345 22.5437 30.3881 19.8915 30.3881C17.2393 30.3881 14.6958 29.3345 12.8204 27.4591L12.1133 28.1663C11.9258 28.3538 11.8204 28.6081 11.8204 28.8734C11.8204 29.1386 11.9258 29.3929 12.1133 29.5805L12.8204 30.2876C13.008 30.4751 13.1133 30.7295 13.1133 30.9947C13.1133 31.2599 13.008 31.5143 12.8204 31.7018C12.6329 31.8893 12.3785 31.9947 12.1133 31.9947C11.8481 31.9947 11.5938 31.8893 11.4062 31.7018L10.6991 30.9947C10.1365 30.4321 9.82043 29.669 9.82043 28.8734C9.82043 28.0777 10.1365 27.3147 10.6991 26.752L11.4062 26.0449L9.99201 24.6307L7.87069 26.752C7.68315 26.9396 7.4288 27.0449 7.16358 27.0449C6.89836 27.0449 6.64401 26.9396 6.45647 26.752C6.26894 26.5645 6.16358 26.3102 6.16358 26.0449C6.16358 25.7797 6.26894 25.5254 6.45647 25.3378L8.57779 23.2165L7.16358 21.8023L6.45647 22.5094C5.89386 23.072 5.1308 23.3881 4.33515 23.3881C3.5395 23.3881 2.77644 23.072 2.21383 22.5094L1.50673 21.8023C1.31919 21.6148 1.21383 21.3604 1.21383 21.0952C1.21383 20.83 1.31919 20.5756 1.50673 20.3881C1.69426 20.2005 1.94862 20.0952 2.21383 20.0952C2.47905 20.0952 2.7334 20.2005 2.92094 20.3881L3.62805 21.0952C3.81558 21.2827 4.06994 21.3881 4.33515 21.3881C4.60037 21.3881 4.85472 21.2827 5.04226 21.0952L5.74937 20.3881C3.82038 18.4591 2.84457 15.9361 2.82053 13.4089L0.328685 12.0767C0.0952078 11.9517 -0.0791028 11.739 -0.155992 11.4856C-0.232882 11.2321 -0.206069 10.9585 -0.0814365 10.7248V10.7248ZM8.57779 20.3881L14.2346 26.0449C15.6123 27.4236 17.4459 28.2518 19.3911 28.3742C21.3363 28.4966 23.2592 27.9047 24.7988 26.7096L13.5275 15.4383L8.57779 20.3881ZM14.9418 14.0241L26.213 25.2954C27.4081 23.7558 28 21.8328 27.8777 19.8877C27.7553 17.9425 26.927 16.1089 25.5484 14.7312L19.8915 9.07437L14.9418 14.0241ZM18.4773 7.66016C17.682 6.86292 16.7269 6.24306 15.6749 5.84137C14.6229 5.43968 13.4978 5.26524 12.3735 5.32954C10.4086 5.43625 8.55276 6.26646 7.16358 7.66016C5.76904 9.04948 4.93829 10.9059 4.83154 12.8715C4.76763 13.9957 4.94239 15.1206 5.34432 16.1723C5.74626 17.2241 6.36626 18.1789 7.16358 18.9739L18.4773 7.66016Z"/>
</svg>
`,U=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15" />
</svg>
`,B=V,D=N,F=R,O=P,z=j,H=U,Z={speedUp:B,speedDown:D,jstBlack:F,checkmark:O,bug:z,share:H},C=Z;function w(){[...document.querySelectorAll("iframe")].forEach(e=>{let n=e.getBoundingClientRect();if(n&&n.width&&n.height){let r=document.createElement("button");r.classList="JSt-iframe-button",r.style.top=n.top,r.style.left=n.left,r.style.width=n.width,r.style.height=n.height,r.onclick=i=>{window.open(e.src),i.stopPropagation()},r.oncontextmenu=i=>(i.preventDefault(),r.remove(),0),e.parentElement.append(r)}})}function v(t){let e=t.querySelector("video");if(e)return e;let n=document.body.querySelectorAll("video"),r=document.querySelector("audio");return r||n[0]}function $(t){let e=document.querySelector("audio");if(e)return t(e);["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach(n=>document.addEventListener(n,t))}function k(t,e){!t||["playing","pause","ratechange","seeked"].forEach(n=>{t.addEventListener(n,e)})}var b=0;function E(t){return t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>2}function S(t){let e=new Date().getTime();if(e-b<100)return!1;b=e;let n=e,r=E(t),i=t.currentTime,s=t.playbackRate,o={playing:r,vidCurTime:i,curTime:n,playbackRate:s};return JSON.stringify(o)}function T(t,e){let{vidCurTime:n,playbackRate:r,curTime:i,playing:s}=t;if(!i||i<b)return;let o=new Date().getTime();b=o;let c=(o-i)/1e3,a=n+r*c,l=E(e);s?(Math.abs(e.currentTime-a)>500&&(e.currentTime=a),l||(e.play(),e.currentTime!==a&&(e.currentTime=a))):(e.currentTime!==n&&(e.currentTime=n),l&&e.pause()),e.playbackRate!==t.playbackRate&&(e.playbackRate=t.playbackRate)}var G=(t,e)=>{let n=[],r=()=>{let s=e();if(!Array.isArray(s))return console.error("jstf expects an Array as a vdom");t.innerHTML="",t.append(i(n,s)),n=s},i=(s,o)=>{Array.isArray(o)&&(o={children:o}),typeof o=="string"&&(o={text:o}),o.elem=o.elem||"div",!s||s.elem!==o.elem?o.$el=document.createElement(o.elem):(o.$el=s.$el,o.cleanup=s.cleanup);let{$el:c,elem:a,text:l,value:u,className:f,children:m,...d}=o,p=h=>typeof h<"u";if(p(l)&&(c.innerHTML=l),p(u)&&(c.value=u),p(f)&&(c.className=f),m&&c.append(...m.map((h,g)=>i(s&&s.children&&s.children[g],h))),o.cleanup)for(let h in o.cleanup)c.removeEventListener(h,o.cleanup[h]);o.cleanup={};for(let h in d)c.addEventListener(h,o.cleanup[h]=g=>{d[h](g),r()});return c};return r(),r},J=G;function y(t,e,n){let r=()=>({elem:"button",className:"JSt-button",text:C.speedUp,click:d=>{n.playbackRate<20&&(n.playbackRate+=.25)}}),i=()=>({elem:"button",className:"JSt-button",text:C.speedDown,click:d=>{n.playbackRate>.25&&(n.playbackRate-=.25)}}),s=()=>({elem:"button",className:"JSt-button",text:C.bug,click:d=>{window.open("https://jstplayer.com/feedback?from=app","_blank")}}),o=()=>({elem:"button",className:"JSt-button",text:C.share,click:d=>{let p=window.location;window.open(`https://jstplayer.com/watch?v=${p}`,"_blank")}}),c=()=>({elem:"form",className:"JSt-form",submit:d=>{d.preventDefault(),e(document.querySelector("#JSt-code-input").value.toUpperCase())},text:`
        <input
          minlength=6
          maxlength=6
          required
          autofocus
          id="JSt-code-input"
          placeholder="______"
          value=${t()??""}
        ></input>
      `,children:[{elem:"button",className:"JSt-button",text:C.checkmark}]}),a="default",l=()=>({elem:"button",className:"JSt-button JSt-button-padding",text:C.jstBlack,click:d=>{a==="default"?a="code":a==="code"&&(a="default")}}),u=()=>{switch(a){case"default":return[l(),i(),r(),o()];case"code":return[l(),c()]}},f=()=>[{elem:"div",className:"JSt-button-container",children:u()},{elem:"span",className:"JSt-version",text:`alpha ${15}`}],m=J(document.querySelector("#JSt-pill"),f)}var W=2e3;function M(t,e,n,r){if(!t)throw new Error("couldnt init on undefined elem");if(t.nodeName==="VIDEO"){let a=document.createElement("div");a.classList.add("JSt-video-wrapper"),t.parentNode.appendChild(a);let l=()=>{if(a.requestFullscreen)return a.requestFullscreen();if(a.mozRequestFullScreen)return a.mozRequestFullScreen();if(a.webkitRequestFullScreen)return a.webkitRequestFullScreen()},u=()=>{!a||(a.appendChild(t),window.removeEventListener("click",u),window.removeEventListener("keydown",u),setTimeout(l,200))};return window.addEventListener("click",u),window.addEventListener("keydown",u),0}let i=document.createElement("section");i.id="JSt-pill",t.append(i),i.onclick=a=>a.stopPropagation();function s(){i.hidden=!0}let o;function c(){o&&clearTimeout(o),o=setTimeout(s,W),i.hidden=!1}c(),document.addEventListener("click",c),document.addEventListener("mousedown",c),document.addEventListener("mousemove",c),document.addEventListener("keydown",c),y(e,n,r)}function _(){let t=document.querySelector("#JSt-pill");if(t&&t.parentNode)t.parentNode.removeChild(t);else return 0;let e=document.querySelector(".JSt-video-wrapper");e&&(e.parentNode.append(e.children.item(0)),e.remove())}function I(t){let e=null,n=null,r=null,i=()=>r;return{onIncomingMessage(s){T(s,n)},connectPort(s){if(e=s,window.JST)return;window.JST=1,L(t),w(),$(c=>{let a=document.querySelector("audio"),l;if(a)n=a,l=document.body;else{if(l=document.fullscreenElement,!l)return _();n=v(l)}k(n,()=>e.postMessage({roomId:r,data:S(n)})),M(l,i,f=>{r=f,k(n,()=>e.postMessage({roomId:r,data:S(n)}))},n)})}}}function A(t,e){let r="https",{domain:i}=e,s=null,o=null,c=null,a=null,l=null;function u(m){if(!m)return p=>p;let d=m.toUpperCase();return l&&clearInterval(l),l=setInterval(()=>{fetch(`${r}://${i}/?method=get&room=${d}`).then(p=>p.json()).then(p=>s.postMessage(p))},5e3),p=>{p&&fetch(`${r}://${i}/?method=send&room=${d}&data=${p}`)}}let f;return(async()=>{try{let m=await t(`https://${i}/`);f=d=>{if(!d)return g=>g;let p=d.toUpperCase(),h=0;return m.on("message",g=>{s.postMessage(JSON.parse(g))}),g=>{g&&m.send(`${p} ${g}`)}},o="socket"}catch(m){console.log(m),o="rest"}})(),{onUIMessage(m){let{roomId:d,data:p}=m;d!=a&&(a=d,o==="socket"?c=f(a):c=u(a)),c&&c(p)},connectPort(m){s=m}}}var K={dimensions:"normal",color:"trans","border-width":"4px"},x=document.createElement("script");x.src="https://cdn.socket.io/4.3.2/socket.io.min.js";x.crossorigin="anonymous";x.onerror=x.onload=()=>{let t=I(K),e=A(io,{domain:"symwatch.herokuapp.com"});e.connectPort({postMessage:t.onIncomingMessage}),t.connectPort({postMessage:e.onUIMessage})};document.body.append(x);})();
