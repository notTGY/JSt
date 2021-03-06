(function(){
  /* killing function (this will make code multiexecutable) */
  function killThisScript() {
    let arr = document.querySelectorAll('script');
    arr.forEach(i => {
      let src = i.src;
      let ind = src.indexOf('?');
      if (ind != -1 && src.substring(ind-14,ind) == 'videoModule.js') {
        i.remove();
      }
    });
  }


  /* testing if there is a video element */
  let vidElem = document.querySelectorAll('video')[0];

  if (vidElem == undefined || vidElem == null) {
    let mainCanvas = document.querySelector('#mainCanvas');
    mainCanvas.hidden = false;
    killThisScript();
    return -2;
  }



  /* Magic numbers */
  const OVERLAY_ID = 'overlay_video_module';
  const TESTED_WIDTH = 1536;
  const THIS_WIDTH = Math.floor(window.screen.width);
  const QUALIFIER = THIS_WIDTH/TESTED_WIDTH;
  const OVERLAY_HEIGHT = 50 * QUALIFIER;
  const WIDGET_SIZE = 40 * QUALIFIER;
  const WIDGET_MARGIN = 5 * QUALIFIER;
  const BAR_HEIGHT = 10 * QUALIFIER;
  const BETTER_BAR_HEIGHT = 4 * QUALIFIER;
  const CLOCK_OFFSET = 10 * QUALIFIER;
  const CLOCK_WIDTH = 90 * QUALIFIER;
  const CLOCK_HEIGHT = 20 * QUALIFIER;
  const COUNTDOWN_WIDTH = 300 * QUALIFIER;
  const COUNTDOWN_HEIGHT = 100 * QUALIFIER;
  const COUNTDOWN_FONT_SIZE = 70 * QUALIFIER;
  const FONT_SIZE = 16 * QUALIFIER;
  const BAR_WIDTH = (THIS_WIDTH-700) * QUALIFIER;
  const ONE_PIXEL = 1 * QUALIFIER;
  const BIG_MENU_WIDTH = 500 * QUALIFIER;


  const OVERLAY_TIMEOUT_SECONDS = 5;
  const WRAPPER_ID = 'wrapper_video_module';
  const PROGRESS_BAR_ID = 'progress_bar_video_module';
  const PLAY_BUTTON_ID = 'play_button_video_module';
  const OTHER_OVERLAY_CLASS = 'other_overlay_class_video_module';
  const CLOCK_INPUT_ID = 'clock_input_video_module';
  const MODE_SWITCH_BUTTON_ID = 'mode_switch_button_video_module';

  const DEFAULT_FONT = 'Arial';


  const DT_FONT_COLOR = '#FFF';
  const WT_FONT_COLOR = '#000';
  const DT_BORDER_COLOR = '#FFFE';
  const WT_BORDER_COLOR = '#000E';

  const DT_BACK_GRAD_FROM = '#0008';
  const DT_BACK_GRAD_TO = '#000C';
  const WT_BACK_GRAD_FROM = '#FFF8';
  const WT_BACK_GRAD_TO = '#FFFC';

  const DT_BAR_GRAD_START = '#77F';
  const DT_BAR_GRAD_HALF_PROG = '#00F';
  const DT_BAR_GRAD_PROG = '#77F';
  const DT_BAR_GRAD_END = '#77F0';

  const WT_BAR_GRAD_START = '#77F';
  const WT_BAR_GRAD_HALF_PROG = '#00F';
  const WT_BAR_GRAD_PROG = '#77F';
  const WT_BAR_GRAD_END = '#77F0';


  const DT_OVERLAY_GRAD_FROM = '#0004';
  const DT_OVERLAY_GRAD_TO = '#000F';
  
  const WT_OVERLAY_GRAD_FROM = '#FFF4';
  const WT_OVERLAY_GRAD_TO = '#FFFF';

  const DT_MENU_GRAD_FROM = '#0003';
  const DT_MENU_GRAD_TO = '#0009';
  const WT_MENU_GRAD_FROM = '#FFF3';
  const WT_MENU_GRAD_TO = '#FFF9';


  /* other very important funtions */
  let cacheDate = new Date();
  function ControlElement (fatherElement, imagePath, callback, style, type = '') {
    let elem;
    if (typeof(imagePath) == 'string') {
      elem = document.createElement('img');
      elem.src  = imagePath + '?' + cacheDate;
      elem.title = type;
      fatherElement.appendChild(elem);
      this.imagePath = imagePath.substring(0,imagePath.length -4);
      this.switchTheme = e => {
        let isDark = e;
        if (isDark) {
          this.element.src = this.imagePath + 'DT.png?' + cacheDate;
        } else {
         this.element.src = this.imagePath + '.png?' + cacheDate;
       }
      };
    } else {
      let tmp = imagePath(fatherElement);
      elem = tmp.elem;
      this.width = tmp.width;
      elem.width = tmp.width;
      this.switchTheme = e=>{playButtonThemeCallback(e)};
    }
    if (style) {
      Object.keys(style).forEach(e => {
        elem.style[e] = style[e];
      });
    }
    this.callback = callback;
    this.mouseenter = e => {
      this.element.style.opacity = 0.7;
    }
    this.mouseleave = e => {
      this.element.style.opacity = 1;
    }
    elem.addEventListener('click', this.callback);
    elem.addEventListener('mouseenter', this.mouseenter);
    elem.addEventListener('mouseleave', this.mouseleave);
    this.element = elem;
    this.remove = _ => {
      this.element.removeEventListener('click', this.callback);
      this.element.removeEventListener('mouseenter', this.mouseenter);
      this.element.removeEventListener('mouseleave', this.mouseleave);
      this.element.remove();
    };
  }

  function toggleGamma() {
    if (isGamma) {
      isGamma = false;
    } else {
      isGamma = true;
    }
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function wrap (toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    toWrap.parentNode.appendChild(wrapper);
    wrapper.appendChild(toWrap);
    return wrapper;
  };

  function killOverlay() {
    if (document.querySelector('#'+OVERLAY_ID)) {
      document.querySelector('#'+OVERLAY_ID).remove();
      document.querySelectorAll('.'+OTHER_OVERLAY_CLASS).forEach(e=>e.remove());
    }
  }

  /* INIT local storage thing*/
  let localStorage = window.localStorage;


  /* INIT   theme configuration */
  let isDarkTheme = 1;
  if (localStorage.getItem('JSt_isDarkTheme')) {
    isDarkTheme = Number(localStorage.getItem('JSt_isDarkTheme'));
  } else {
    localStorage.setItem('JSt_isDarkTheme', '1');
  }



  /* INITIALIZATION    creating overlay */
  let overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  overlay.style.width = Math.floor(window.screen.width) + 'px';
  overlay.width = Math.floor(window.screen.width);
  overlay.height = OVERLAY_HEIGHT;
  overlay.style.height = OVERLAY_HEIGHT + 'px';
  overlay.style.visibility = 'visible';
  overlay.style.zIndex = '2147483647';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'space-between';
  let overlayTimeout = OVERLAY_TIMEOUT_SECONDS;

  if (isDarkTheme) {
    overlay.style.background = `linear-gradient(${DT_OVERLAY_GRAD_FROM}, ${DT_OVERLAY_GRAD_TO})`;
  } else {
    overlay.style.background = `linear-gradient(${WT_OVERLAY_GRAD_FROM}, ${WT_OVERLAY_GRAD_TO})`;
  }


  /* INITIALIZATION   creating canvas to copy the video in*/
  let canvas = document.createElement('canvas');
  canvas.style.zIndex = '1';
  document.body.appendChild(canvas);

  /* INIT    creating wrap-around div */
  let wrapper = wrap(canvas);
  wrapper.style.display = 'flex';
  wrapper.style.justifyContent = 'center';
  wrapper.style.alignItems = 'center';
  wrapper.id = WRAPPER_ID;
  wrapper.style.position = 'relative';
  insertAfter(canvas, overlay);


  /* INIT     gamma setting variable */
  let isGamma = false;

  /* INIT     defining clock overlay */
  let clockOverlayShown = 0; // HACK: this is not obligitory

  let clockOverlay = document.createElement('div');
  clockOverlay.classList.add(OTHER_OVERLAY_CLASS);
  clockOverlay.style.top = CLOCK_OFFSET + 'px';
  clockOverlay.style.left = CLOCK_OFFSET + 'px';
  clockOverlay.style.width = CLOCK_WIDTH + 'px';
  clockOverlay.style.textAlign = 'center';
  clockOverlay.style.opacity = 1;
  clockOverlay.style.font = DEFAULT_FONT;
  clockOverlay.style.fontSize = FONT_SIZE + 'px';
  clockOverlay.style.height = CLOCK_HEIGHT + 'px';
  if (isDarkTheme) {
    clockOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
    clockOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
    clockOverlay.style.color = DT_FONT_COLOR;
  } else {
    clockOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
    clockOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
    clockOverlay.style.color = WT_FONT_COLOR;
  }

  wrapper.appendChild(clockOverlay);


  /* INIT   dropdown from clock to select time */
  let clockDropdownOverlay = document.createElement('div');
  clockDropdownOverlay.classList.add(OTHER_OVERLAY_CLASS);
  clockDropdownOverlay.style.top = CLOCK_OFFSET + CLOCK_HEIGHT + 'px';
  clockDropdownOverlay.style.left = CLOCK_OFFSET + 'px';
  clockDropdownOverlay.style.width = CLOCK_WIDTH + 'px';
  clockDropdownOverlay.style.display = 'flex';
  clockDropdownOverlay.style.alignItems = 'center';
  clockDropdownOverlay.style.justifyContent = 'center';
  clockDropdownOverlay.style.opacity = 0;
  clockDropdownOverlay.style.height = 2*CLOCK_HEIGHT + 'px';
  if (isDarkTheme) {
    clockDropdownOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
    clockDropdownOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
  } else {
    clockDropdownOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
    clockDropdownOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
  }

  wrapper.appendChild(clockDropdownOverlay);

  /* INIT    time input field */
  let inputField = document.createElement('input');
  inputField.type = 'time';

  let inputFieldResetButton = document.createElement('button');



  const inputFieldResetButtonOnclick = _ => {
    inputField.value = '';
    startTime = {hours: undefined, minutes: undefined};
    countdownOverlay.style.opacity = 0;
  };

  inputField.id = CLOCK_INPUT_ID;

  clockDropdownOverlay.appendChild(inputField);
  clockDropdownOverlay.appendChild(inputFieldResetButton);
  inputFieldResetButton.innerHTML = 'x';




  /* INIT     clock initializations */
  const clockOverlayOnclick = e => {
    if (clockDropdownOverlay.style.opacity == 0) {
      clockDropdownOverlay.style.opacity = 1;
      inputField.style.opacity = 1;
      inputFieldResetButton.style.opacity = 1;
    } else {
      clockDropdownOverlay.style.opacity = 0;
      inputField.style.opacity = 0;
      inputFieldResetButton.style.opacity = 0;
    }
  };


  clockOverlay.addEventListener('click', clockOverlayOnclick);



  /* INIT     Dual-watch and timer watch settings initialization */
  let startTime = {hours: undefined, minutes: undefined};

  const inputFieldOnchange = e => {
    let value = inputField.value;
    startTime.hours = Number(value.substring(0,2));
    startTime.minutes = Number(value.substring(3,5));
  };


  inputField.addEventListener('change', inputFieldOnchange);

  inputFieldResetButton.addEventListener('click', inputFieldResetButtonOnclick);



  /* INIT     countdown overlay initialization */
  let countdownOverlay = document.createElement('div');
  countdownOverlay.classList.add(OTHER_OVERLAY_CLASS);
  countdownOverlay.style.width = COUNTDOWN_WIDTH + 'px';
  countdownOverlay.style.height = COUNTDOWN_HEIGHT + 'px';
  countdownOverlay.style.justifyContent = 'center';
  countdownOverlay.style.alignItems = 'center';
  countdownOverlay.style.textAlign = 'center';
  countdownOverlay.style.top = Math.floor(window.screen.height/2 - 50)+'px';
  countdownOverlay.style.left = Math.floor(window.screen.width/2 - 150)+'px';
  countdownOverlay.style.font = DEFAULT_FONT;
  countdownOverlay.style.display = 'flex';
  countdownOverlay.style.fontSize = COUNTDOWN_FONT_SIZE + 'px';
  if (isDarkTheme) {
    countdownOverlay.style.color = DT_FONT_COLOR;
    countdownOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
    countdownOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
  } else {
    countdownOverlay.style.color = WT_FONT_COLOR;
    countdownOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
    countdownOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
  }
  wrapper.appendChild(countdownOverlay);
  countdownOverlay.style.opacity = 0;

  function displayTimeLeft() {
    let str = '-';
    let t = new Date();
    let h = t.getHours();
    let m = t.getMinutes();
    let s = t.getSeconds();
    let time = (h - startTime.hours)*60*60 + (m - startTime.minutes)*60 + s;
    time = -time;
    h = Math.floor(time/(60*60));
    m = Math.floor((time - 60*60*h)/60);
    s = Math.floor(time - 60*60*h - 60*m);
    if (h < 10) {
      h = '0' + h;
    }
    str += h;
    str += ':';
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    str += m;
    str += ':';
    str += s;
    countdownOverlay.style.opacity = 1;
    countdownOverlay.innerHTML = str;
  }


  /* array of smaller widgets */
  let overlayControls = [];


  /* INIT   big menu */
  

  let bigMenu = document.createElement('div');
  bigMenu.classList.add(OTHER_OVERLAY_CLASS);
  bigMenu.style.width = BIG_MENU_WIDTH + 'px';
  bigMenu.style.height = Math.floor(window.screen.height) - OVERLAY_HEIGHT + 'px';
  bigMenu.style.justifyContent = 'center';
  bigMenu.style.alignItems = 'center';
  bigMenu.style.textAlign = 'center';
  bigMenu.style.top = '0px';
  bigMenu.style.right = '0px';
  bigMenu.style.display = 'flex';
  if (isDarkTheme) {
    bigMenu.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
    bigMenu.style.background = `radial-gradient(${DT_MENU_GRAD_FROM}, ${DT_MENU_GRAD_TO})`;
  } else {
    bigMenu.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
    bigMenu.style.background = `radial-gradient(${WT_MENU_GRAD_FROM}, ${WT_MENU_GRAD_TO})`;
  }
  wrapper.appendChild(bigMenu);
  bigMenu.style.opacity = 0;



  const menuChangeStyle = e => {
    let isDark = e;
    if (isDark) {
      bigMenu.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
      bigMenu.style.background = `radial-gradient(${DT_MENU_GRAD_FROM}, ${DT_MENU_GRAD_TO})`;
    } else {     
      bigMenu.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
      bigMenu.style.background = `radial-gradient(${WT_MENU_GRAD_FROM}, ${WT_MENU_GRAD_TO})`;
    }
  }

  const bigMenuAppearance = e => {
    bigMenu.style.opacity += .001;
    if (bigMenu.style.opacity < 1) {
      requestAnimationFrame(bigMenuAppearance);
    }
  }

  const bigMenuDisappearance = e => {
    bigMenu.style.opacity -= .001;
    if (bigMenu.style.opacity > 0) {
      requestAnimationFrame(bigMenuDisappearance);
    }
  }

  const toggleBigMenu = e => {

    return 0; // FIX ME



    if (bigMenu.style.opacity == 0) {
      bigMenuAppearance();
    } else if (bigMenu.style.opacity == 1) {
      bigMenuDisappearance();
    }
  };


  /* INIT   menu control elements */
  let menuControls = []; 



  /* INIT     better progress bar */

  let betterProgressBar = document.createElement('div');
  betterProgressBar.classList.add(OTHER_OVERLAY_CLASS);
  betterProgressBar.style.opacity = 0;
  betterProgressBar.style.width = Math.floor(window.screen.width) + 'px';
  betterProgressBar.style.height = BETTER_BAR_HEIGHT + 'px';
  betterProgressBar.style.left = '0px';
  betterProgressBar.style.bottom = '0px';

  wrapper.appendChild(betterProgressBar);

  function drawBetterProgressBar() {
    if (isDarkTheme) {
      let str = `linear-gradient(to right, ${DT_BAR_GRAD_START} 0%, ${DT_BAR_GRAD_HALF_PROG} `;
      let prog = vidElem.currentTime / vidElem.duration;
      str += Math.floor(10000*prog/2)/100 + `%, ${DT_BAR_GRAD_PROG} `;
      str += Math.floor(10000*prog)/100 + `%, ${DT_BAR_GRAD_END} `;
      str += Math.floor(10000*prog)/100 + 1 + `%, ${DT_BAR_GRAD_END} 100%)`;
      betterProgressBar.style.background = str;
    } else {
      let str = `linear-gradient(to right, ${WT_BAR_GRAD_START} 0%, ${WT_BAR_GRAD_HALF_PROG} `;
      let prog = vidElem.currentTime / vidElem.duration;
      str += Math.floor(10000*prog/2)/100 + `%, ${WT_BAR_GRAD_PROG} `;
      str += Math.floor(10000*prog)/100 + `%, ${WT_BAR_GRAD_END} `;
      str += Math.floor(10000*prog)/100 + 1 + `%, ${WT_BAR_GRAD_END} 100%)`;
      betterProgressBar.style.background = str;
    }
  }


  /* INIT of dynamic things */
  /* fullscreen enter point and start of media */
  wrapper.requestFullscreen();
  let w = vidElem.videoWidth;
  let h = vidElem.videoHeight;
  if (h < w) {
    canvas.height = window.screen.height;
    canvas.width = canvas.height * (w/h);
  } else {
    canvas.width = window.screen.width;
    canvas.height = canvas.width * (h/w);
  }
  let ctx = canvas.getContext('2d');

  let mainInterval = 1;
  let prevTimeInSeconds = (new Date()).getTime();

  /* main interval definition */
  const mainIntervalFunction = ()=>{
    let dt = (new Date()).getTime() - prevTimeInSeconds;
    ctx.drawImage(vidElem, 0, 0, canvas.width, canvas.height);

    /* Gamma drawing */
    if (isGamma) {
      let w = canvas.width;
      let h = canvas.height;
      let imageData = ctx.getImageData(0,0,w,h);
      console.log(imageData);
      imageData.data = imageData.data.map(x => {
        return x + 90;
      });
      console.log('second',imageData);
      ctx.putImageData(imageData, 0, 0);
    }

    /* overlay drawing */
    if (overlayTimeout < 0) {
      overlay.style.opacity = 0;
      clockDropdownOverlay.style.opacity = 0;
      if (!clockOverlayShown) {
        clockOverlay.style.opacity = 0;
      }
      inputField.style.opacity = 0;
      inputFieldResetButton.style.opacity = 0;
    } else {
      overlayTimeout -= dt/1000;
    }

    /* better progress bar drawer */
    if (betterProgressBar.style.opacity == 1) {
      drawBetterProgressBar();
    }

    /* clock updater */
    let hours = (new Date()).getHours();
    let minutes = (new Date()).getMinutes();
    let seconds = (new Date()).getSeconds();
    let tmp_minutes = minutes;
    if (minutes < 10) {
      tmp_minutes = '0' + minutes;
    }
    clockOverlay.innerHTML = '' + hours + ':' + tmp_minutes;

    /* Timing start function */
    if (startTime.hours != undefined && startTime.minutes != undefined) {
      let isPlaying = (vidElem.currentTime > 0 && !vidElem.paused && !vidElem.ended && vidElem.readyState > 2);
      let logic = (startTime.hours*60+startTime.minutes > hours*60+minutes);
      if (!logic) {
        if (!isPlaying) {
          countdownOverlay.style.opacity = 0;
          hookPlayButton();
        }
      } else {
        displayTimeLeft();
        if (isPlaying) {
          hookPlayButton();
        }
      }
    }

    /* progress bar updating */
    if (bar) {
      if (isDarkTheme) {
        let str = `linear-gradient(to right, ${DT_BAR_GRAD_START} 0%, ${DT_BAR_GRAD_HALF_PROG} `;
        let prog = vidElem.currentTime / vidElem.duration;
        str += Math.floor(10000*prog/2)/100 + `%, ${DT_BAR_GRAD_PROG} `;
        str += Math.floor(10000*prog)/100 + `%, ${DT_BAR_GRAD_END} `;
        str += Math.floor(10000*prog)/100 + 1 + `%, ${DT_BAR_GRAD_END} 100%)`;
        bar.style.background = str;
      } else {
        let str = `linear-gradient(to right, ${WT_BAR_GRAD_START} 0%, ${WT_BAR_GRAD_HALF_PROG} `;
        let prog = vidElem.currentTime / vidElem.duration;
        str += Math.floor(10000*prog/2)/100 + `%, ${WT_BAR_GRAD_PROG} `;
        str += Math.floor(10000*prog)/100 + `%, ${WT_BAR_GRAD_END} `;
        str += Math.floor(10000*prog)/100 + 1 + `%, ${WT_BAR_GRAD_END} 100%)`;
        bar.style.background = str;
      }
    }

    /* updating current progress in numbers */
    reevaluateCurrentDuration();

    /* next step */
    prevTimeInSeconds = (new Date()).getTime();
    if (mainInterval) {
      requestAnimationFrame(mainIntervalFunction);
    }
  };



  /* keydown handler definition */
  let handler = e => {
    if (e.key == 'q' || e.key == 'й') {
      document.exitFullscreen();
      let mainCanvas = document.querySelector('#mainCanvas');
      mainCanvas.hidden = false;
      mainInterval = 0;
      document.body.removeEventListener('keydown', handler);
      document.body.removeEventListener('mousemove', mousemoveHandler);
      clockOverlay.removeEventListener('click', clockOverlayOnclick);
      inputField.removeEventListener('change', inputFieldOnchange);
      inputFieldResetButton.removeEventListener('click', inputFieldResetButtonOnclick);
      canvas.remove();
      killOverlay();
      killThisScript();
    } else if (e.key == 'ArrowLeft') {
      vidElem.currentTime -= 5;
    } else if (e.key == 'ArrowRight') {
      vidElem.currentTime += 5;
    } else if (e.key == 'ArrowUp') {
      vidElem.volume += .1;
      volumeDisplay.innerHTML = '' + Math.floor(100*vidElem.volume) + '%';
      if (vidElem.volume == 1) {
        volumeDisplay.innerHTML = '';
      }
    } else if (e.key == 'ArrowDown') {
      vidElem.volume -= .1;
      volumeDisplay.innerHTML = '' + Math.floor(100*vidElem.volume) + '%';
      if (vidElem.volume == 1) {
        volumeDisplay.innerHTML = '';
      }
    } else if (e.key == '>' || e.key == '.' || e.key == 'ю') {
      vidElem.playbackRate += .1;
      playbackRateDisplay.innerHTML = 'x' + Math.floor(vidElem.playbackRate*10)/10;
      if (vidElem.playbackRate == 1) {
        playbackRateDisplay.innerHTML = '';
      }
    } else if (e.key == '<' || e.key == ',' || e.key == 'б') {
      vidElem.playbackRate -= .1;
      playbackRateDisplay.innerHTML = 'x' + Math.floor(vidElem.playbackRate*10)/10;
      if (vidElem.playbackRate == 1) {
        playbackRateDisplay.innerHTML = '';
      }
    } else if (e.key == ' ') {
      hookPlayButton();
    } else if (e.key == 'b' || e.key == 'и') {
      if(betterProgressBar.style.opacity == 1) {
        betterProgressBar.style.opacity = 0;
      } else {
        betterProgressBar.style.opacity = 1;
      }
    } else if (e.key == 'c' || e.key == 'с') {
      if (clockOverlay.style.opacity == 0) {
        clockOverlay.style.opacity = 1;
        clockOverlay.hidden = false;
        clockOverlayShown = 1;
      } else {
        clockOverlay.style.opacity = 0;
        clockOverlay.hidden = true;
        clockOverlayShown = 0;
      }
    } else if (e.key == 't' || e.key == 'е') {
      if (isDarkTheme) {
        isDarkTheme = 0;
        localStorage.setItem('JSt_isDarkTheme', '0');
        overlay.style.background = `linear-gradient(${WT_OVERLAY_GRAD_FROM}, ${WT_OVERLAY_GRAD_TO})`;
        clockOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
        clockOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
        clockOverlay.style.color = WT_FONT_COLOR;
        clockDropdownOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
        clockDropdownOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
        countdownOverlay.style.color = WT_FONT_COLOR;
        countdownOverlay.style.border = ONE_PIXEL + 'px solid ' + WT_BORDER_COLOR;
        countdownOverlay.style.background = `radial-gradient(${WT_BACK_GRAD_FROM}, ${WT_BACK_GRAD_TO})`;
        volumeDisplay.style.color = WT_FONT_COLOR;
        playbackRateDisplay.style.color = WT_FONT_COLOR;
        displayCurrentDuration.style.color = WT_FONT_COLOR;
        displayTotalDuration.style.color = WT_FONT_COLOR;
      } else {
        isDarkTheme = 1;
        localStorage.setItem('JSt_isDarkTheme', '1');
        overlay.style.background = `linear-gradient(${DT_OVERLAY_GRAD_FROM}, ${DT_OVERLAY_GRAD_TO})`;
        clockOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
        clockOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
        clockOverlay.style.color = DT_FONT_COLOR;
        clockDropdownOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
        clockDropdownOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
        countdownOverlay.style.color = DT_FONT_COLOR;
        countdownOverlay.style.border = ONE_PIXEL + 'px solid ' + DT_BORDER_COLOR;
        countdownOverlay.style.background = `radial-gradient(${DT_BACK_GRAD_FROM}, ${DT_BACK_GRAD_TO})`;
        volumeDisplay.style.color = DT_FONT_COLOR;
        playbackRateDisplay.style.color = DT_FONT_COLOR;
        displayCurrentDuration.style.color = DT_FONT_COLOR;
        displayTotalDuration.style.color = DT_FONT_COLOR;
      }
    
    overlayControls.forEach(e=>{
      e.switchTheme(isDarkTheme);
    });

    menuChangeStyle(isDarkTheme);
    
    themeSwitchModeCallback(isDarkTheme);
    }
  };
  document.body.addEventListener('keydown', handler);




  /* definition of mousemove handler */
  let prevX = 0;
  let prevY = 0;

  let mousemoveHandler = e => {
    let dx = e.clientX - prevX;
    let dy = e.clientY - prevY;
    let dl = dx*dx + dy*dy;
    if (dl > 5) {
      let isDownOverlay = (e.clientY > (window.screen.height - OVERLAY_HEIGHT)?1:0);
      let isClockOverlay = (e.clientY > 10 && e.clientY < 310 && e.clientX < 210 && e.clientX > 10)?1:0;
      if (isDownOverlay || isClockOverlay) {
        overlayTimeout = +Infinity;
        overlay.style.opacity = 1;
        clockOverlay.style.opacity = 1;
      } else {
        overlayTimeout = OVERLAY_TIMEOUT_SECONDS;
        overlay.style.opacity = 1;
        clockOverlay.style.opacity = 1;
      }
    }
    prevX = e.clientX;
    prevY = e.clientY;
  }
  document.body.addEventListener('mousemove', mousemoveHandler);




  /* WIDGETS */

  /* widget groups */
  let overlayLeft = document.createElement('div');
  let overlayRight = document.createElement('div');
  let overlayCenter = document.createElement('div');

  overlayLeft.style.whiteSpace = 'nowrap';
  overlayLeft.style.overflow = 'hidden';
  overlayLeft.style.textOverflow = 'ellipsis';
  overlayLeft.style.height = OVERLAY_HEIGHT + 'px';
  overlayLeft.style.display = 'flex';
  overlayLeft.style.flexDirection = 'row';
  overlayLeft.style.width = '250px';

  overlayRight.style.whiteSpace = 'nowrap';
  overlayRight.style.overflow = 'hidden';
  overlayRight.style.textOverflow = 'ellipsis';
  overlayRight.style.height = OVERLAY_HEIGHT + 'px';
  overlayRight.style.display = 'flex';
  overlayRight.style.flexDirection = 'row';
  overlayRight.style.width = '300px';

  overlayCenter.style.whiteSpace = 'nowrap';
  overlayCenter.style.overflow = 'hidden';
  overlayCenter.style.textOverflow = 'ellipsis';
  overlayCenter.style.height = OVERLAY_HEIGHT + 'px';
  overlayCenter.style.display = 'flex';
  overlayCenter.style.justifyContent = 'center';
  overlayCenter.style.alignItems = 'center';
  overlayCenter.style.flexDirection = 'row';



  /* !!!!! order does matter */
  overlay.appendChild(overlayLeft);
  overlay.appendChild(overlayCenter);
  overlay.appendChild(overlayRight);


  /* Theme switch initialization */
  let darkThemeSwitchImg = document.createElement('img');
  let lightThemeSwitchImg = document.createElement('img');
  darkThemeSwitchImg.src = 'https://nottgy.github.io/JSt/videoModule/darkModeSwitch.png'+'?'+cacheDate;
  lightThemeSwitchImg.src = 'https://nottgy.github.io/JSt/videoModule/brightModeSwitch.png'+'?'+cacheDate;
  darkThemeSwitchImg.hidden = true;
  brightThemeSwitchImg.hidden = true;
  wrapper.appendChild(darkThemeSwitchImg);
  wrapper.appendChild(brightThemeSwitchImg);
  const themeSwitchModeCallback = e => {
    let isDark = e;
    let element = document.querySelector('#'+MODE_SWITCH_BUTTON_ID);
    if (isDark) {
      element.width = element.height = WIDGET_SIZE;
      element.getContext('2d').drawImage(darkThemeSwitchImg, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
    } else {
      element.width = element.height = WIDGET_SIZE;
      element.getContext('2d').drawImage(brightThemeSwitchImg, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
    }
  }

  const hookModeSwitch = e => {
    isDarkTheme = !isDarkTheme;
    themeSwitchModeCallback(isDarkTheme);
  }


  /* play button images loading and initialization */
  let playButton = document.createElement('img');
  let pauseButton = document.createElement('img');
  playButton.src = 'https://nottgy.github.io/JSt/videoModule/playButtonVideoModule.png'+'?'+cacheDate;
  pauseButton.src = 'https://nottgy.github.io/JSt/videoModule/pauseButtonVideoModule.png'+'?'+cacheDate;
  playButton.title = 'play (space)';
  pauseButton.title = 'pause (space)';
  playButton.hidden = true;
  pauseButton.hidden = true;
  wrapper.appendChild(playButton);
  wrapper.appendChild(pauseButton);


  const playButtonThemeCallback = e => {
    let isDark = e;
        if (isDark) {
          playButton.src = 'https://nottgy.github.io/JSt/videoModule/playButtonVideoModuleDT.png'+'?'+cacheDate;
          pauseButton.src = 'https://nottgy.github.io/JSt/videoModule/pauseButtonVideoModuleDT.png'+'?'+cacheDate;
          playButton.title = 'play (space)';
          pauseButton.title = 'pause (space)';
        } else {
          playButton.src = 'https://nottgy.github.io/JSt/videoModule/playButtonVideoModule.png'+'?'+cacheDate;
          pauseButton.src = 'https://nottgy.github.io/JSt/videoModule/pauseButtonVideoModule.png'+'?'+cacheDate;
          playButton.title = 'play (space)';
          pauseButton.title = 'pause (space)';
       }
  }


  /* hook to start/stop function (it just toggles video state) */
  const hookPlayButton = e => {
    let element = document.querySelector('#'+PLAY_BUTTON_ID);
    let isPlaying = (vidElem.currentTime > 0 && !vidElem.paused && !vidElem.ended && vidElem.readyState > 2);
    if (!isPlaying) {
      vidElem.play();
      element.height = element.width = WIDGET_SIZE;
      element.getContext('2d').drawImage(pauseButton, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
    } else {
      vidElem.pause();
      element.height = element.width = WIDGET_SIZE;
      element.getContext('2d').drawImage(playButton, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
    }
  };



  /* appending widgets */
  overlayControls[overlayControls.length] = new ControlElement(
    overlayLeft,
    f => {
      let e = document.createElement('canvas');
      e.id = PLAY_BUTTON_ID;
      e.height = e.width = WIDGET_SIZE;
      e.getContext('2d').drawImage(playButton, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
      f.appendChild(e);
      return {elem: e , width: WIDGET_SIZE};
    },
    e=>{hookPlayButton(e)},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    }
  );



  /* volume display in numbers */
  let volumeDisplay;



  overlayControls[overlayControls.length] = new ControlElement(
    overlayLeft,
    'https://nottgy.github.io/JSt/videoModule/volumeDownButtonVideoModule.png',
    e => {
      if (vidElem.volume > .1) {
        vidElem.volume -= .1;
      }
      volumeDisplay.innerHTML = '' + Math.floor(100*vidElem.volume) + '%';
      if (vidElem.volume == 1) {
        volumeDisplay.innerHTML = '';
      }
    },
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'quiter (down arrow)'
  );


  /* volume display initialization */
  volumeDisplay = document.createElement('div');
  volumeDisplay.style.font = DEFAULT_FONT;
  volumeDisplay.style.fontSize = FONT_SIZE + 'px';
  volumeDisplay.style.display = 'flex';
  volumeDisplay.style.alignItems = 'center';
  volumeDisplay.style.height = WIDGET_SIZE + 'px';
  overlayLeft.appendChild(volumeDisplay);
  if (isDarkTheme) {
    volumeDisplay.style.color = DT_FONT_COLOR;
  } else {
    volumeDisplay.style.color = WT_FONT_COLOR;
  }


  overlayControls[overlayControls.length] = new ControlElement(
    overlayLeft,
    'https://nottgy.github.io/JSt/videoModule/volumeUpButtonVideoModule.png',
    e => {
      if (vidElem.volume < 1) {
        vidElem.volume += .1;
      }
      volumeDisplay.innerHTML = '' + Math.floor(100*vidElem.volume) + '%';
      if (vidElem.volume == 1) {
        volumeDisplay.innerHTML = '';
      }
    },
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'louder (up arrow)'
  );






  overlayControls[overlayControls.length] = new ControlElement(
    overlayLeft,
    'https://nottgy.github.io/JSt/videoModule/jumpBackwardButtonVideoModule.png',
    e => {vidElem.currentTime -= 5},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'fast backward (left arrow)'
  );






  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/jumpForwardButtonVideoModule.png',
    e => {vidElem.currentTime += 5},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'fast forward (right arrow)'
  );


  /* init playbackrate display info-box */
  let playbackRateDisplay;

  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/speedDownButtonVideoModule.png',
    e => {
      if (vidElem.playbackRate > .2) {
        vidElem.playbackRate -= .1;
      }
      playbackRateDisplay.innerHTML = 'x' + Math.floor(vidElem.playbackRate*10)/10;
      if (vidElem.playbackRate == 1) {
        playbackRateDisplay.innerHTML = '';
      }
    },
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'decrease speed (<)'
  );


  /* playbackrate info-box appending and styles */
  playbackRateDisplay = document.createElement('div');
  playbackRateDisplay.style.font = DEFAULT_FONT;
  playbackRateDisplay.style.fontSize = FONT_SIZE + 'px';
  playbackRateDisplay.style.display = 'flex';
  playbackRateDisplay.style.alignItems = 'center';
  playbackRateDisplay.style.height = WIDGET_SIZE + 'px';
  overlayRight.appendChild(playbackRateDisplay);
  if (isDarkTheme) {
    playbackRateDisplay.style.color = DT_FONT_COLOR;
  } else {
    playbackRateDisplay.style.color = WT_FONT_COLOR;
  }


  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/speedUpButtonVideoModule.png',
    e => {
      vidElem.playbackRate += .1
      playbackRateDisplay.innerHTML = 'x' + Math.floor(vidElem.playbackRate*10)/10;
      if (vidElem.playbackRate == 1) {
        playbackRateDisplay.innerHTML = '';
      }
    },
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'increase speed (>)'
  );


  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/menuButtonVideoModule.png',
    e=>{toggleBigMenu()},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'menu (m)'
  );


  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    f => {
      let e = document.createElement('canvas');
      e.id = MODE_SWITCH_BUTTON_ID;
      e.height = e.width = WIDGET_SIZE;
      e.getContext('2d').drawImage(darkThemeSwitchImg, 0, 0, WIDGET_SIZE, WIDGET_SIZE);
      f.appendChild(e);
      return {elem: e , width: WIDGET_SIZE};
    },
    e=>{hookModeSwitch(e)},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    }
  );





  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/escapeButtonVideoModule.png',
    e=>{handler({key:'q'})},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    },
    'quit (q)'
  );


  /* current duration display */
  let displayCurrentDuration = document.createElement('div');
  displayCurrentDuration.style.font = 'monospace';
  displayCurrentDuration.style.fontSize = FONT_SIZE + 'px';
  displayCurrentDuration.style.display = 'flex';
  displayCurrentDuration.style.alignItems = 'center';
  displayCurrentDuration.style.height = WIDGET_SIZE + 'px';
  overlayCenter.appendChild(displayCurrentDuration);
  if (isDarkTheme) {
    displayCurrentDuration.style.color = DT_FONT_COLOR;
  } else {
    displayCurrentDuration.style.color = WT_FONT_COLOR;
  }

  /* callback function to update current state */
  function reevaluateCurrentDuration() {
    let dur = Math.floor(vidElem.currentTime);
    if (dur < 3600) {
      let minutes = Math.floor(dur/60);
      let seconds = dur - 60*minutes;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      displayCurrentDuration.innerHTML = ''+ minutes + ':' + seconds;
    } else {
      let hours = Math.floor(dur/3600);
      let minutes = Math.floor((dur - hours*60)/60);
      let seconds = dur - hours*3600 - minutes*60;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      displayCurrentDuration.innerHTML = '' + hours + ':' + minutes + ':' + seconds;
    }
  }



  /* main progress bar */
  overlayControls[overlayControls.length] = new ControlElement(
    overlayCenter,
    f => {
      let e = document.createElement('div');
      e.id = PROGRESS_BAR_ID;
      f.appendChild(e);
      return {elem: e , width: BAR_WIDTH };
    },
    e => {
      let element = document.querySelector('#'+PROGRESS_BAR_ID);
      let w = element.width;
      let dx = e.clientX - element.offsetLeft;
      vidElem.currentTime = vidElem.duration * (dx / w);
    },
    {
      margin: WIDGET_MARGIN + 'px',
      width: BAR_WIDTH+'px',
      height: BAR_HEIGHT + 'px'
    },
    'progress bar'
  );

  /* displaying total duration of the video */
  let displayTotalDuration = document.createElement('div');
  displayTotalDuration.style.font = DEFAULT_FONT;
  displayTotalDuration.style.fontSize = FONT_SIZE + 'px';
  displayTotalDuration.style.height = WIDGET_SIZE + 'px';
  displayTotalDuration.style.display = 'flex';
  displayTotalDuration.style.alignItems = 'center';
  if (isDarkTheme) {
    displayTotalDuration.style.color = DT_FONT_COLOR;
  } else {
    displayTotalDuration.style.color = WT_FONT_COLOR;
  }


  overlayCenter.appendChild(displayTotalDuration);

  let dur = Math.floor(vidElem.duration);
  if (dur < 3600) {
    let minutes = Math.floor(dur/60);
    let seconds = dur - 60*minutes;
    displayTotalDuration.innerHTML = ''+ minutes + ':' + seconds;
  } else {
    let hours = Math.floor(dur/3600);
    let minutes = Math.floor((dur - hours*60)/60);
    let seconds = dur - hours*3600 - minutes*60;
    displayTotalDuration.innerHTML = '' + hours + ':' + minutes + ':' + seconds;
  }




  /* gamma button
  overlayControls[overlayControls.length] = new ControlElement(
    overlayRight,
    'https://nottgy.github.io/JSt/videoModule/gammaButtonVideoModule.png',
    e=>{toggleGamma()},
    {
      margin: WIDGET_MARGIN + 'px',
      width: WIDGET_SIZE + 'px',
      height: WIDGET_SIZE + 'px'
    }
  );
  */


  overlayControls.forEach(e=>{
    e.switchTheme(isDarkTheme);
  });


  playButtonThemeCallback(isDarkTheme);

  themeSwitchModeCallback(isDarkTheme);


  /* getting pointer to the main bar */
  const bar = document.querySelector('#'+PROGRESS_BAR_ID);

  /* starting main loop */
  mainIntervalFunction();
})();
