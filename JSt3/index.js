(()=>{function C(n,e){!n||["playing","pause","ratechange","seeked"].forEach(o=>{n.addEventListener(o,e)})}function T(n){let e=n.querySelector("video");if(e)return e;let o=document.body.querySelectorAll("video"),t=document.querySelector("audio");return t||o[0]}function $(n){let e=document.querySelector("audio");if(e)return n(e);["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach(o=>document.addEventListener(o,n))}var x=0;function v(n){return n.currentTime>0&&!n.paused&&!n.ended&&n.readyState>2}function w(n){let e=new Date().getTime();if(e-x<100)return!1;x=e;let o=e,t=v(n),i=n.currentTime,s=n.playbackRate,r={playing:t,vidCurTime:i,curTime:o,playbackRate:s};return JSON.stringify(r)}function y(n,e){let{vidCurTime:o,playbackRate:t,curTime:i,playing:s}=n;if(!i||i<x)return;let r=new Date().getTime();x=r;let p=(r-i)/1e3,c=o+t*p,l=v(e);s?(Math.abs(e.currentTime-c)>500&&(e.currentTime=c),l||(e.play(),e.currentTime!==c&&(e.currentTime=c))):(e.currentTime!==o&&(e.currentTime=o),l&&e.pause()),e.playbackRate!==n.playbackRate&&(e.playbackRate=n.playbackRate)}var I=5e3,E="https";async function P(n){let e;function o(t,i){if(!i||!t)return r=>r;let s=i.toUpperCase();return e&&clearInterval(e),e=setInterval(()=>{fetch(`${E}://${n}/?method=get&room=${s}`).then(r=>r.json()).then(r=>y(r,t))},I),r=>{let p=w(t);p&&fetch(`${E}://${n}/?method=send&room=${s}&data=${p}`)}}try{let i=function(s,r){if(!r||!s)return l=>l;let p=r.toUpperCase(),c=0;return t.on("message",l=>{y(JSON.parse(l),s)}),l=>{let a=w(s);a&&t.send(`${p} ${a}`)}},t=await io(`https://${n}/`);return i}catch(t){return console.log(t),o}}var B=P;async function A(n,e,o,t){if(window.JST_INITED)return;window.JST_INITED=!0,e();let i=await B(n),s=null,r=null,p=()=>s,c=a=>{s=a;let u=i(r,s);C(r,u)};$(a=>{let u=document.querySelector("audio");if(u){let d=i(u,s);C(u,d),r=u,o(document.body,p,c,u)}else{let d=document.fullscreenElement;if(!d)return t();r=T(d);let j=i(r,s);C(r,j),o(d,p,c,r)}})}var J=A;function q(n="",e=t=>t,o=t=>t){return t=>(t.innerHTML=n,t.onclick=e,o(t),t)}var m=q;var V=`<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21C8 21 12.6429 14 21 14C29.3571 14 34 21 34 21C34 21 29.3571 28 21 28C12.6429 28 8 21 8 21Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 1H1V41H41V26.5V18.5M27 1H41M41 1V15M41 1L27 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,D=`<svg transform="scale (-1, 1)" transform-origin="center" viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,R=`<svg viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,U=`<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M2 20 L12 28 30 4" />
</svg>
`,O=`<svg viewBox="-1 -1 34 34" stroke="none" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
<path d="M-0.0814365 10.7248C0.0436545 10.4913 0.256265 10.317 0.509736 10.2401C0.763207 10.1632 1.03683 10.19 1.27055 10.3146L3.03408 11.2551C3.43197 9.35655 4.3757 7.61556 5.74937 6.24595C7.17348 4.82183 8.92286 3.91532 10.7585 3.53066L9.81664 1.76855C9.75359 1.65267 9.71409 1.52546 9.70042 1.39424C9.68675 1.26303 9.69918 1.13041 9.73698 1.00402C9.77479 0.877633 9.83723 0.759973 9.92071 0.657822C10.0042 0.555671 10.1071 0.471047 10.2234 0.408826C10.3397 0.346604 10.4672 0.308015 10.5985 0.29528C10.7298 0.282546 10.8623 0.295918 10.9885 0.334627C11.1146 0.373336 11.2318 0.436617 11.3333 0.520823C11.4349 0.60503 11.5188 0.708499 11.5802 0.825268L12.9124 3.31711C15.5333 3.33807 18.0405 4.39025 19.8915 6.24595L20.5986 5.53884C20.7861 5.3513 20.8915 5.09695 20.8915 4.83173C20.8915 4.56652 20.7861 4.31216 20.5986 4.12463L19.8915 3.41752C19.704 3.22998 19.5986 2.97563 19.5986 2.71041C19.5986 2.4452 19.704 2.19084 19.8915 2.00331C20.079 1.81577 20.3334 1.71041 20.5986 1.71041C20.8638 1.71041 21.1182 1.81577 21.3057 2.00331L22.0128 2.71041C22.5754 3.27302 22.8915 4.03608 22.8915 4.83173C22.8915 5.62738 22.5754 6.39045 22.0128 6.95305L21.3057 7.66016L22.7199 9.07437L24.8412 6.95305C25.0288 6.76552 25.2831 6.66016 25.5484 6.66016C25.8136 6.66016 26.0679 6.76552 26.2555 6.95305C26.443 7.14059 26.5484 7.39494 26.5484 7.66016C26.5484 7.92538 26.443 8.17973 26.2555 8.36727L24.1341 10.4886L25.5484 11.9028L26.2555 11.1957C26.8181 10.6331 27.5811 10.317 28.3768 10.317C29.1724 10.317 29.9355 10.6331 30.4981 11.1957L31.2052 11.9028C31.3927 12.0903 31.4981 12.3447 31.4981 12.6099C31.4981 12.8751 31.3927 13.1295 31.2052 13.317C31.0177 13.5046 30.7633 13.6099 30.4981 13.6099C30.2329 13.6099 29.9785 13.5046 29.791 13.317L29.0839 12.6099C28.8964 12.4224 28.642 12.317 28.3768 12.317C28.1116 12.317 27.8572 12.4224 27.6697 12.6099L26.9626 13.317C28.8379 15.1924 29.8915 17.7359 29.8915 20.3881C29.8915 23.0402 28.8379 25.5838 26.9626 27.4591C25.0872 29.3345 22.5437 30.3881 19.8915 30.3881C17.2393 30.3881 14.6958 29.3345 12.8204 27.4591L12.1133 28.1663C11.9258 28.3538 11.8204 28.6081 11.8204 28.8734C11.8204 29.1386 11.9258 29.3929 12.1133 29.5805L12.8204 30.2876C13.008 30.4751 13.1133 30.7295 13.1133 30.9947C13.1133 31.2599 13.008 31.5143 12.8204 31.7018C12.6329 31.8893 12.3785 31.9947 12.1133 31.9947C11.8481 31.9947 11.5938 31.8893 11.4062 31.7018L10.6991 30.9947C10.1365 30.4321 9.82043 29.669 9.82043 28.8734C9.82043 28.0777 10.1365 27.3147 10.6991 26.752L11.4062 26.0449L9.99201 24.6307L7.87069 26.752C7.68315 26.9396 7.4288 27.0449 7.16358 27.0449C6.89836 27.0449 6.64401 26.9396 6.45647 26.752C6.26894 26.5645 6.16358 26.3102 6.16358 26.0449C6.16358 25.7797 6.26894 25.5254 6.45647 25.3378L8.57779 23.2165L7.16358 21.8023L6.45647 22.5094C5.89386 23.072 5.1308 23.3881 4.33515 23.3881C3.5395 23.3881 2.77644 23.072 2.21383 22.5094L1.50673 21.8023C1.31919 21.6148 1.21383 21.3604 1.21383 21.0952C1.21383 20.83 1.31919 20.5756 1.50673 20.3881C1.69426 20.2005 1.94862 20.0952 2.21383 20.0952C2.47905 20.0952 2.7334 20.2005 2.92094 20.3881L3.62805 21.0952C3.81558 21.2827 4.06994 21.3881 4.33515 21.3881C4.60037 21.3881 4.85472 21.2827 5.04226 21.0952L5.74937 20.3881C3.82038 18.4591 2.84457 15.9361 2.82053 13.4089L0.328685 12.0767C0.0952078 11.9517 -0.0791028 11.739 -0.155992 11.4856C-0.232882 11.2321 -0.206069 10.9585 -0.0814365 10.7248V10.7248ZM8.57779 20.3881L14.2346 26.0449C15.6123 27.4236 17.4459 28.2518 19.3911 28.3742C21.3363 28.4966 23.2592 27.9047 24.7988 26.7096L13.5275 15.4383L8.57779 20.3881ZM14.9418 14.0241L26.213 25.2954C27.4081 23.7558 28 21.8328 27.8777 19.8877C27.7553 17.9425 26.927 16.1089 25.5484 14.7312L19.8915 9.07437L14.9418 14.0241ZM18.4773 7.66016C17.682 6.86292 16.7269 6.24306 15.6749 5.84137C14.6229 5.43968 13.4978 5.26524 12.3735 5.32954C10.4086 5.43625 8.55276 6.26646 7.16358 7.66016C5.76904 9.04948 4.93829 10.9059 4.83154 12.8715C4.76763 13.9957 4.94239 15.1206 5.34432 16.1723C5.74626 17.2241 6.36626 18.1789 7.16358 18.9739L18.4773 7.66016Z"/>
</svg>
`,z=R,F=D,N=V,H=U,Z=O,G={speedUp:z,speedDown:F,jstBlack:N,checkmark:H,bug:Z},f=G;function K(n,e){return function(){let o=document.createElement("form"),t=document.createElement("button");o.classList.add("JSt-form"),o.innerHTML+=`
    <input
      minlength=6
      maxlength=6
      required
      autofocus
      id="JSt-code-input"
      placeholder="______"
    ></input>
    `;let i=o.querySelector("#JSt-code-input");return i.value=e(),t.classList.add("JSt-button"),t.innerHTML=f.checkmark,o.onsubmit=s=>{s.preventDefault(),n(i.value)},o.append(t),o}}var k=K;function W(n,e){n.innerHTML="",e.forEach(o=>{let t=document.createElement("button");t.classList.add("JSt-button"),n.append(o(t))})}var g=W;function Y(n){let e,o;switch(n.dimensions){case void 0:case"normal":e=75,o=800;break;case"big":e=85,o=900;break;case"verybig":e=100,o=1e3}let t,i,s,r;switch(n.color){case void 0:case"white":r="#ccd",s="#aaa",i="#fff",t="#bbbbbb";break;case"black":r="#222",s="#333",i="#222222",t="#000";break;case"green":r="#bfa",s="#7a6",i="#bfa",t="#8b7";break;case"pink":r="#fab",s="#a67",i="#fab",t="#b78";break;case"blue":r="#abf",s="#67a",i="#abf",t="#78b";break}let p;switch(n["border-width"]){case void 0:case"4px":p="box-shadow: 0px 0px 10px 4px;";break;case"6px":p="box-shadow: 0px 0px 10px 6px;";break;case"10px":p="box-shadow: 0px 0px 10px 10px;"}let c=.9,l=`
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
  width: ${o}px;
  height: ${2*e}px;
  border-radius: ${e}px;

  position: fixed;
  top: 50px;
  left: calc(50vw - ${o/2}px);

  overflow: hidden;
  z-index: 100;

  ${p}
  color: ${r};

  border: 2px solid ${s};
  background-image:linear-gradient(${i},${t});

  opacity: ${c};
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
    opacity: ${c};
  }
}

#JSt-message {
  width: ${o-2*e}px;
  height: ${2*e}px;

  position: relative;
  top: -${2*e}px;
  margin: 0 auto;

  z-index: 101;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  color: #567;
  font-family: monospace;
  font-size: ${e}px;
}

#JSt-button-container {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: ${e}px;

  height: ${2*e}px;
  width: ${o-2*e}px;

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
  color: #888;
  background-image:linear-gradient(${i},${t});
  z-index: 500;
  transition: 0.2s;
  animation: button-appear 0.5s;
  opacity: ${c};
}

#JSt-code-input {
  width: ${4*e}px;
  height: ${2*e}px;
  border: 0px;
  padding: 0px;
  padding-bottom: ${e/2}px;
  padding-top: ${e/2}px;
  background-image:linear-gradient(${i},${t});
  z-index: 500;
  transition: 0.5s;
  opacity: ${c};
  color: #333;
  font-weight: 600;
  font-family: monospace;
  font-size: ${e}px;
  animation: input-appear 0.5s;
}

@keyframes input-appear{
  from {
    opacity: 0;
    padding: ${2*e}px;
  }
  to {
    opacity: ${c};
    padding: 20px;
  }
}

@keyframes button-appear{
  from {
    opacity: 0;
    padding: ${e}px;
  }
  to {
    opacity: ${c};
    padding: 20px;
  }
}

.JSt-button:hover {
  color: #555;
  padding: 5px;
}

.JSt-button:active {
  color: #333;
  padding: 20px;
}

#JSt-version {
  width: ${o-2*e}px;
  height: ${2*e}px;

  position: relative;
  top: -${4*e}px;
  margin: 0 auto;

  z-index: 102;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  color: #5678;
  font-family: monospace;
  font-size: 0.6rem;
}
    `;return function(){let u=document.createElement("style");u.innerHTML=l,document.head.append(u)}}var L=Y;function Q(n,e){if(e){let a=document.querySelector("#JSt-pill");if(a&&a.parentNode)a.parentNode.removeChild(a);else return 0;let u=document.querySelector(".JSt-video-wrapper");u&&(u.parentNode.append(u.children.item(0)),u.remove());return}if(!n)throw new Error("couldnt init on undefined elem");if(n.nodeName==="VIDEO"){let a=document.createElement("div");a.classList.add("JSt-video-wrapper"),n.parentNode.appendChild(a);let u=()=>{if(a.requestFullscreen)return a.requestFullscreen();if(a.mozRequestFullScreen)return a.mozRequestFullScreen();if(a.webkitRequestFullScreen)return a.webkitRequestFullScreen()},d=()=>{a.appendChild(n),window.removeEventListener("click",d),window.removeEventListener("keydown",d),setTimeout(u,200)};return window.addEventListener("click",d),window.addEventListener("keydown",d),0}let o=a=>document.createElement(a),t=o("section"),i=o("div"),s=o("p"),r=o("span");t.id="JSt-pill",i.id="JSt-button-container",s.id="JSt-message",r.id="JSt-version",r.innerText=`alpha ${3}`,t.append(i),t.append(s),t.append(r),n.append(t),t.onclick=a=>a.stopPropagation();function p(){t.hidden=!0}let c;function l(){c&&clearTimeout(c),c=setTimeout(p,2e3),t.hidden=!1}return l(),document.addEventListener("click",l),document.addEventListener("mousedown",l),document.addEventListener("mousemove",l),document.addEventListener("keydown",l),[t,i,s]}var b=Q;var S=20,X={dimensions:"normal",color:"white","border-width":"4px"};function _(n,e,o,t){let i=m(f.jstBlack,M(n,e,o,t),a=>a.style.padding=S+"px"),s=m(f.jstBlack,M(n,e,o,t),a=>a.style.padding=S+"px"),r=m(f.speedDown,a=>{t.playbackRate>.25&&(t.playbackRate-=.25)}),p=m(f.speedUp,a=>{t.playbackRate<20&&(t.playbackRate+=.25)}),c=m(f.bug,a=>{window.open("https://jstplayer.com/feedback?from=app","_blank")});return[i,r,p,s,c]}function M(n,e,o,t){return function(s){let[r,p,c,l,a]=_(n,e,o,t),u=[m(f.jstBlack,d=>g(n,[l,p,c,a]),d=>d.style.padding=S+"px"),k(o,e)];g(n,u)}}async function ee(n,e,o,t){let i=b(n);if(!i)return;let[s,r,p]=i,[c,l,a,u,d]=_(r,e,o,t);g(r,[c,l,a,d])}function te(){b(null,!0)}var ne=L(X),h=document.createElement("script");h.src="https://cdn.socket.io/4.3.2/socket.io.min.js";h.crossorigin="anonymous";h.onerror=h.onload=n=>J("symwatch.herokuapp.com",ne,ee,te);document.body.append(h);})();
