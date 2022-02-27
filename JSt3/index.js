(()=>{function b(t,e){!t||["playing","pause","ratechange","seeked"].forEach(o=>t.addEventListener(o,e))}function $(t){let e=t.querySelector("video");if(e)return e;let o=document.body.querySelectorAll("video");if(o.length<1)throw new Error("haven't found any videos");return o[0]}function E(t){["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach(e=>document.addEventListener(e,t))}var g=0;function C(t){return t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>2}function w(t){let e=new Date().getTime();if(e-g<100)return!1;g=e;let o=e,n=C(t),a=t.currentTime,s=t.playbackRate,r={playing:n,vidCurTime:a,curTime:o,playbackRate:s};return JSON.stringify(r)}function y(t,e){let{vidCurTime:o,playbackRate:n,curTime:a,playing:s}=t;if(!a||a<g)return;let r=new Date().getTime();g=r;let p=(r-a)/1e3,c=o+n*p,i=C(e);s?(Math.abs(e.currentTime-c)>500&&(e.currentTime=c),i||(e.play(),e.currentTime!==c&&(e.currentTime=c))):(e.currentTime!==o&&(e.currentTime=o),i&&e.pause()),e.playbackRate!==t.playbackRate&&(e.playbackRate=t.playbackRate)}var M=5e3,v="https";async function j(t){let e;function o(n,a){if(!a||!n)return r=>r;let s=a.toUpperCase();return e&&clearInterval(e),e=setInterval(()=>{fetch(`${v}://${t}/?method=get&room=${s}`).then(r=>r.json()).then(r=>y(r,n))},M),r=>{let p=w(n);p&&fetch(`${v}://${t}/?method=send&room=${s}&data=${p}`)}}try{let a=function(s,r){if(!r||!s)return i=>i;let p=r.toUpperCase(),c=0;return n.on("message",i=>{y(JSON.parse(i),s)}),i=>{let l=w(s);l&&n.send(`${p} ${l}`)}},n=await io(`https://${t}/`);return a}catch(n){return console.log(n),o}}var B=j;async function P(t,e,o,n){if(window.JST_INITED)return;window.JST_INITED=!0,e();let a=await B(t),s=null,r=null,p=i=>{s=i;let l=a(r,s);b(r,l)};E(i=>{let l=document.fullscreenElement;if(!l)return n();r=$(l);let d=a(r,s);b(r,d),o(l,p,r)})}var L=P;function _(t="",e=n=>n,o=n=>n){return n=>(n.innerHTML=t,n.onclick=e,o(n),n)}var f=_;var A=`<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21C8 21 12.6429 14 21 14C29.3571 14 34 21 34 21C34 21 29.3571 28 21 28C12.6429 28 8 21 8 21Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 1H1V41H41V26.5V18.5M27 1H41M41 1V15M41 1L27 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,R=`<svg transform="scale (-1, 1)" transform-origin="center" viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,q=`<svg viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`,D=`<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M2 20 L12 28 30 4" />
</svg>
`,U=q,V=R,O=A,F=D,N={speedUp:U,speedDown:V,jstBlack:O,checkmark:F},u=N;function H(t){return function(){let e=document.createElement("form"),o=document.createElement("button");return e.classList.add("JSt-form"),e.innerHTML+=`
    <input
      minlength=6
      maxlength=6
      required
      autofocus
      id="JSt-code-input"
      placeholder="______"
    ></input>
    `,o.classList.add("JSt-button"),o.innerHTML=u.checkmark,e.onsubmit=n=>{n.preventDefault();let a=e.querySelector("#JSt-code-input");t(a.value)},e.append(o),e}}var k=H;function z(t,e){t.innerHTML="",e.forEach(o=>{let n=document.createElement("button");n.classList.add("JSt-button"),t.append(o(n))})}var m=z;function Z(t){let e,o;switch(t.dimensions){case void 0:case"normal":e=75,o=800;break;case"big":e=85,o=900;break;case"verybig":e=100,o=1e3}let n,a,s,r;switch(t.color){case void 0:case"white":r="#ccd",s="#aaa",a="#fff",n="#bbbbbb";break;case"black":r="#222",s="#333",a="#222222",n="#000";break;case"green":r="#bfa",s="#7a6",a="#bfa",n="#8b7";break;case"pink":r="#fab",s="#a67",a="#fab",n="#b78";break;case"blue":r="#abf",s="#67a",a="#abf",n="#78b";break}let p;switch(t["border-width"]){case void 0:case"4px":p="box-shadow: 0px 0px 10px 4px;";break;case"6px":p="box-shadow: 0px 0px 10px 6px;";break;case"10px":p="box-shadow: 0px 0px 10px 10px;"}let c=.9,i=`
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
  background-image:linear-gradient(${a},${n});

  opacity: ${c};
  animation: jst-pill-appear 0.5s;
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

  color: #333;
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
  z-index: 102;
}

.JSt-button {
  width: ${2*e}px;
  height: ${2*e}px;
  border: 0px;
  padding: 20px;
  color: #888;
  background-image:linear-gradient(${a},${n});
  z-index: 103;
  transition: 0.5s;
  animation: button-appear 0.5s;
  opacity: ${c};
}

#JSt-code-input {
  width: ${4*e}px;
  height: ${2*e}px;
  border: 0px;
  padding: 20px;
  padding-bottom: ${e/2}px;
  padding-top: ${e/2}px;
  background-image:linear-gradient(${a},${n});
  z-index: 103;
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
  padding: 15px;
}

.JSt-button:active {
  color: #333;
  padding: 0px;
}
    `;return function(){let d=document.createElement("style");d.innerHTML=i,document.head.append(d)}}var S=Z;function G(t,e){if(e){let i=document.querySelector("#JSt-pill");if(i&&i.parentNode)i.parentNode.removeChild(i);else return 0;let l=document.querySelector(".JSt-video-wrapper");l&&(l.parentNode.append(l.children.item(0)),l.remove());return}if(!t)throw new Error("couldnt init on undefined elem");if(t.nodeName==="VIDEO"){let i=document.createElement("div");i.classList.add("JSt-video-wrapper"),t.parentNode.appendChild(i);let l=()=>{if(i.requestFullscreen)return i.requestFullscreen();if(i.mozRequestFullScreen)return i.mozRequestFullScreen();if(i.webkitRequestFullScreen)return i.webkitRequestFullScreen()},d=()=>{i.appendChild(t),window.removeEventListener("click",d),window.removeEventListener("keydown",d),setTimeout(l,200)};return window.addEventListener("click",d),window.addEventListener("keydown",d),0}let o=i=>document.createElement(i),n=o("section"),a=o("div"),s=o("p");n.id="JSt-pill",a.id="JSt-button-container",s.id="JSt-message",n.append(a),n.append(s),t.append(n),n.onclick=i=>i.stopPropagation();function r(){n.hidden=!0}let p;function c(){p&&clearTimeout(p),p=setTimeout(r,5e3),n.hidden=!1}return c(),document.addEventListener("click",c),document.addEventListener("mousemove",c),document.addEventListener("keydown",c),[n,a,s]}var x=G;var T=20,K={dimensions:"normal",color:"white","border-width":"4px"};function I(t,e,o){let n=f(u.jstBlack,J(t,e,o),c=>c.style.padding=T+"px"),a=f(u.jstBlack,J(t,e,o),c=>c.style.padding=T+"px"),s=f(u.speedDown,c=>{o.playbackRate>.25&&(o.playbackRate-=.25)}),r=f(u.speedUp,c=>{o.playbackRate<20&&(o.playbackRate+=.25)});return[n,s,r,a]}function J(t,e,o){return function(a){let[s,r,p,c]=I(t,e,o),i=[f(u.jstBlack,l=>m(t,[c,r,p]),l=>l.style.padding=T+"px"),k(e)];m(t,i)}}async function W(t,e,o){let n=x(t);if(!n)return;let[a,s,r]=n,[p,c,i]=I(s,e,o);m(s,[p,c,i])}function Y(){x(null,!0)}var Q=S(K),h=document.createElement("script");h.src="https://cdn.socket.io/4.3.2/socket.io.min.js";h.crossorigin="anonymous";h.onerror=h.onload=t=>L("symwatch.herokuapp.com",Q,W,Y);document.body.append(h);})();
