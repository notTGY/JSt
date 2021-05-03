function ControlElement(fatherElement, svg, callback, style, secondSvg) {
  const elem = document.createElement('div')
  elem.innerHTML = svg
  this.elem = elem
  if (secondSvg) {
    this.first = svg
    this.second = secondSvg
  }
  if (style) {
    Object.keys(style).forEach(e => {
      elem.style[e] = style[e]
    })
  }
  elem.addEventListener('click', e => callback(this))
  elem.addEventListener('mouseenter', e => elem.style.opacity = 0.7)
  elem.addEventListener('mouseleave', e => elem.style.opacity = 1)
  fatherElement.append(elem)
}

function isVideoPlaying(vid) {
  return !!(vid.currentTime > 0 && !vid.paused && !vid.ended && vid.readyState > 2)
}

const maxSoundSliderWidth = 50
let curSliderWidth = 0
let animationColor_g, animationBackgroundColor_g, controlsColor_g
let isStretching

let hidingTimeout
let curBottomMargin = 0
let maxBottomMargin = 70
let isHiding = 0
const hidingTime = 5000

let isTimebarPopupTimeShown = false

function displayAllControls(root, vid, settings) {
  const {
    animationColor,
    animationBackgroundColor,
    controlsColor,
    titleColor,
    interfaceColor,
    interfaceBackgroundColor,
    apiURL
  } = settings
  animationColor_g = animationColor
  animationBackgroundColor_g = animationBackgroundColor
  controlsColor_g = controlsColor


  const connectionPopup = document.createElement('div')
  connectionPopup.classList.add('connection-popup')
  connectionPopup.style.color = interfaceColor
  connectionPopup.style.backgroundColor = interfaceBackgroundColor
  const connectionInput = document.createElement('input')
  connectionInput.classList.add('connection-input')
  connectionInput.autofocus = true
  connectionInput.style.color = interfaceColor
  connectionInput.style.backgroundColor = interfaceBackgroundColor
  connectionInput.placeholder = "enter room token here..."
  if (roomUUID) connectionInput.value = roomUUID
  const connectionButton = document.createElement('button')
  connectionButton.style.backgroundColor = interfaceBackgroundColor
  connectionButton.style.color = interfaceColor
  connectionButton.innerHTML = "random"
  connectionButton.classList.add('connection-button')
  
  connectionPopup.onclick = e => {
    e.stopPropagation()
  }

  connectionButton.addEventListener('click', e => {
    connectionInput.value = newUuid(connectionInput.value)
    roomUUID = connectionInput.value
  })

  connectionInput.addEventListener('change', e => {
    roomUUID = connectionInput.value
  })

  connectionPopup.style.display = 'none'
  connectionPopup.append(connectionInput)
  connectionPopup.append(connectionButton)
  root.append(connectionPopup)


  const titlePlaceholder = document.createElement('div')
  titlePlaceholder.style.color = titleColor
  titlePlaceholder.innerHTML = vid.title
  titlePlaceholder.classList.add('title-placeholder')
  root.append(titlePlaceholder)


  const centerAnimationDiv = document.createElement('div')
  centerAnimationDiv.classList.add('center-animation-div')
  root.append(centerAnimationDiv)

  const containingDiv = document.createElement('div')
  containingDiv.classList.add('controls-container')
  root.append(containingDiv)

  onmousemove = e => {
    clearTimeout(hidingTimeout)
    isHiding=-1
    hidingTimeout = setTimeout(e => {isHiding=1}, hidingTime)
  }

  onclick = e => {
    clearTimeout(hidingTimeout)
    isHiding=-1
    hidingTimeout = setTimeout(e => {isHiding=1}, hidingTime)
  }

  root.onclick = e => {
    if (e.clientY > window.visualViewport.height - curBottomMargin - maxBottomMargin) return
    if (connectionPopup.style.display === 'flex') {
      connectionPopup.style.display = 'none'
      return
    }
    if (isVideoPlaying(vid)) {
      vid.pause()
      playButton.elem.innerHTML = playButton.first
      const animElem = document.createElement('div')
      animElem.innerHTML = playButton.second
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(false)
    } else {
      vid.play()
      playButton.elem.innerHTML = playButton.second
      const animElem = document.createElement('div')
      animElem.innerHTML = playButton.first
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(true)
    }
  }


  onkeyup = e => {
    clearTimeout(hidingTimeout)
    isHiding=-1
    hidingTimeout = setTimeout(e => {isHiding=1}, hidingTime)
    if (e.code == 'Space') {
      if (isVideoPlaying(vid)) {
        vid.pause()
        playButton.elem.innerHTML = playButton.first
        const animElem = document.createElement('div')
        animElem.innerHTML = playButton.second
        fancyAnimation(centerAnimationDiv, animElem)
        sendData(false)
      } else {
        vid.play()
        playButton.elem.innerHTML = playButton.second
        const animElem = document.createElement('div')
        animElem.innerHTML = playButton.first
        fancyAnimation(centerAnimationDiv, animElem)
        sendData(false)
      }
    } else if (e.code == 'ArrowUp') {
      vid.volume += .05
      const animElem = document.createElement('div')
      animElem.innerHTML = Math.floor(100*vid.volume)+'%'
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(isVideoPlaying(vid))
    } else if (e.code == 'ArrowDown') {
      vid.volume -= .05
      const animElem = document.createElement('div')
      animElem.innerHTML = Math.floor(100*vid.volume)+'%'
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(isVideoPlaying(vid))
    } else if (e.code == 'ArrowLeft') {
      vid.currentTime -= 5
      if (vid.currentTime < 0) {
        vid.currentTime = 0
      }
      const animElem = document.createElement('div')
      animElem.innerHTML = `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M16 2 L2 16 16 30 16 16 30 30 30 2 16 16 Z" />
      </svg>`
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(isVideoPlaying(vid))
    } else if (e.code == 'ArrowRight') {
      vid.currentTime += 5
      if (vid.currentTime > vid.duration) {
        vid.currentTime = vid.duration
      }
      const animElem = document.createElement('div')
      animElem.innerHTML = `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M16 2 L30 16 16 30 16 16 2 30 2 2 16 16 Z" /> 
      </svg>`
      fancyAnimation(centerAnimationDiv, animElem)
      sendData(isVideoPlaying(vid))
    } else if (e.code == 'Enter') {
      if (!(connectionPopup.style.display === 'flex')) return
      connectionPopup.style.display = 'none'
      roomUUID = connectionInput.value
    }
  }

  hidingTimeout = setTimeout(e => {isHiding=1}, hidingTime)
  startShowingAnimation(containingDiv, root)




  const topPartOfContainingDiv = document.createElement('div')
  topPartOfContainingDiv.classList.add('top-part-of-containing-div')
  containingDiv.append(topPartOfContainingDiv)

  const timebar = document.createElement('input')
  timebar.classList.add('timebar')
  timebar.style.backgroundColor = controlsColor
  timebar.type = "range"
  timebar.min = 0
  timebar.max = vid.duration
  timebar.step = 1


  const timebarPopupTime = document.createElement('div')
  timebarPopupTime.classList.add('timebar-popup-time')
  timebarPopupTime.style.color = animationColor
  timebarPopupTime.style.borderColor = animationColor
  timebarPopupTime.style.background = animationBackgroundColor
  timebarPopupTime.innerText = 'test'
  topPartOfContainingDiv.append(timebarPopupTime)

  topPartOfContainingDiv.append(timebar)


  timebar.addEventListener('mouseleave', e => {
    timebarPopupTime.style.display = 'none'
    isTimebarPopupTimeShown = false
  })

  const hoverCallback = e => {
    timebarPopupTime.style.display = 'block'
    isTimebarPopupTimeShown = true
    const offsetLeft = timebar.offsetLeft
    const offsetWidth = timebar.offsetWidth
    const relX = e.clientX - offsetLeft
    const percentage = relX / offsetWidth
    let timeToShow 
    if (vid.duration < 3600 * 100) timeToShow = vid.duration * percentage
    else timeToShow = vid.currentTime * percentage

    let textToShow = toTime(timeToShow | 0)
    if (vid.duration >= 3600 * 100) textToShow = '-' + textToShow

    timebarPopupTime.innerText = textToShow
    timebarPopupTime.style.left = e.clientX + 10 + 'px'
  }

  timebar.addEventListener('mousemove', hoverCallback)
  timebar.addEventListener('mouseover', hoverCallback)

  timebar.addEventListener('input', e => {
    vid.currentTime = timebar.value
    const percentage = timebar.value / vid.duration

    sendData(isVideoPlaying(vid))
  })


  const bottomPartOfContainingDiv = document.createElement('div')
  bottomPartOfContainingDiv.classList.add('bottom-part-of-containing-div')
  containingDiv.append(bottomPartOfContainingDiv)

  const leftPartOfContainingDiv = document.createElement('div')
  leftPartOfContainingDiv.classList.add('left-part-of-containing-div')
  bottomPartOfContainingDiv.append(leftPartOfContainingDiv)

  const rightPartOfContainingDiv = document.createElement('div')
  rightPartOfContainingDiv.classList.add('right-part-of-containing-div')
  bottomPartOfContainingDiv.append(rightPartOfContainingDiv)

  const playButton = new ControlElement(
    leftPartOfContainingDiv,
    `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M10 2 L10 30 24 16 Z" />
    </svg>`,
    obj => {
      if (isVideoPlaying(vid)) {
        vid.pause()
        obj.elem.innerHTML = obj.first
        const animElem = document.createElement('div')
        animElem.innerHTML = obj.second
        fancyAnimation(centerAnimationDiv, animElem)
        sendData(false)
      } else {
        vid.play()
        obj.elem.innerHTML = obj.second
        const animElem = document.createElement('div')
        animElem.innerHTML = obj.first
        fancyAnimation(centerAnimationDiv, animElem)
        sendData(true)
      }
    },
    {
      color: controlsColor,
      margin: "10px",
      width: "32px",
      height: "32px"
    },
    `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M23 2 L23 30 M9 2 L9 30" />
    </svg>`
  )


  const soundContainerDiv = document.createElement('div')
  soundContainerDiv.classList.add('sound-container-div')

  const soundSlider = document.createElement('input')
  soundSlider.style.backgroundColor = controlsColor
  soundSlider.classList.add('sound-slider')
  soundSlider.style.backgroundColor = controlsColor
  soundSlider.style.display = 'none'
  soundSlider.style.width = curSliderWidth + 'px'
  soundSlider.type = "range"
  soundSlider.min = 0
  soundSlider.max = 1
  soundSlider.step = .01

  const styleInjector = document.createElement('style')
  styleInjector.innerHTML = `.sound-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background: ${controlsColor};
    cursor: pointer;
  }
  .timebar::-webkit-slider-thumb {
    margin-top: -3px;
    -webkit-appearance: none;
    border: 0;
    border-radius: 50%;
    width:10px;
    height:10px;
    border: 1px solid #ccc;
    background: ${controlsColor};
    cursor: pointer;
  }
  `
  root.append(styleInjector)

  soundSlider.addEventListener('change', e => {
    vid.volume = soundSlider.value
    const animElem = document.createElement('div')
    animElem.innerHTML = Math.floor(100*vid.volume)+'%'
    fancyAnimation(centerAnimationDiv, animElem)
  })

  leftPartOfContainingDiv.append(soundContainerDiv)


  const soundButton = new ControlElement(
    soundContainerDiv,
    `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z M21 2 C21 2 25 6 25 16 25 26 21 30 21 30 M27 4 C27 4 30 8 30 16 30 24 27 28 27 28" />
    </svg>`,
    obj => {
      if (vid.muted) {
        vid.muted = false
        obj.elem.innerHTML = obj.first
        const animElem = document.createElement('div')
        animElem.innerHTML = obj.second
        fancyAnimation(centerAnimationDiv, animElem)
      } else {
        vid.muted = true
        obj.elem.innerHTML = obj.second
        const animElem = document.createElement('div')
        animElem.innerHTML = obj.first
        fancyAnimation(centerAnimationDiv, animElem)
      }
    },
    {
      color: controlsColor,
      margin: "10px",
      width: "32px",
      height: "32px"
    },
    `<svg viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z" />
    </svg>`
  )

  soundContainerDiv.addEventListener('mouseenter', e => {
    isStretching = 1
    requestAnimationFrame(e => soundSliderAnimationAppear(soundSlider))
  })
  soundContainerDiv.addEventListener('mouseleave', e => {
    isStretching = -1
    requestAnimationFrame(e => soundSliderAnimationDisappear(soundSlider))
  })


  soundContainerDiv.append(soundSlider)
  

  const timeDisplay = document.createElement('div')
  timeDisplay.classList.add('current-video-time')
  timeDisplay.style.color = controlsColor
  leftPartOfContainingDiv.append(timeDisplay)



  const speedDownButton = new ControlElement(
    rightPartOfContainingDiv,
    `<svg transform="scale (-1, 1)" transform-origin="center" viewBox="0 0 128 128" width="32" height="32" fill="currentcolor">
            <path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
            <path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
            <path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
        </svg>`,
    obj => {
      vid.playbackRate -= .25
      if (vid.playbackRate < 0) {
        vid.playbackRate = 0
      }
      const animElem = document.createElement('div')
      animElem.style.textAlign = 'center'
      animElem.innerHTML = `x${vid.playbackRate}`
      fancyAnimation(centerAnimationDiv, animElem)

      sendData(isVideoPlaying(vid))
    },
    {
      color: controlsColor,
      margin: "10px"
    }
  )


  const speedUpButton = new ControlElement(
    rightPartOfContainingDiv,
    `<svg viewBox="0 0 128 128" width="32" height="32" fill="currentcolor">
            <path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
            <path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
            <path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
        </svg>`,
    obj => {
      vid.playbackRate += .25
      const animElem = document.createElement('div')
      animElem.style.textAlign = 'center'
      animElem.innerHTML = `x${vid.playbackRate}`
      fancyAnimation(centerAnimationDiv, animElem)

      sendData(isVideoPlaying(vid))
    },
    {
      color: controlsColor,
      margin: "10px"
    }
  )


  const rotateButton = new ControlElement(
    rightPartOfContainingDiv,
    `<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" />
    </svg>`,
    obj => {
      screenRotation = (screenRotation + 1) % 4
    },
    {
      color: controlsColor,
      margin: "10px"
    }
  )

  console.log(apiURL)
  if (apiURL !== 'error') {
    const goOnlineButton = new ControlElement(
      rightPartOfContainingDiv,
      `<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="17" cy="15" r="1" />
        <circle cx="16" cy="16" r="6" />
        <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
    </svg>`,
      obj => {
        if (connectionPopup.style.display == 'none') {
          connectionPopup.style.display = 'flex'
        } else {
          connectionPopup.style.display = 'none'
        }
      },
      {
        color: controlsColor,
        margin: "10px"
      }
    )
    const emojiButton = new ControlElement(
      rightPartOfContainingDiv,
      `<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="17" cy="15" r="1" />
        <circle cx="16" cy="16" r="6" />
        <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
    </svg>`,
      obj => {
        console.log('hi')
        sendEmoji('fun')
      },
      {
        color: controlsColor,
        margin: "10px"
      }
    )
  }

  const settingsButton = new ControlElement(
    rightPartOfContainingDiv,
    `<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
        <circle cx="16" cy="16" r="4" />
    </svg>`,
    obj => {
      window.open(chrome.runtime.getURL('options.html'), 'name', 'width=600,height=400')
    },
    {
      color: controlsColor,
      margin: "10px"
    }
  )

  const exitButton = new ControlElement(
    rightPartOfContainingDiv,
    `<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M4 12 L12 12 12 4 M20 4 L20 12 28 12 M4 20 L12 20 12 28 M28 20 L20 20 20 28" />
    </svg>`,
    obj => {
      document.exitFullscreen().then(e => console.log(e))
      clearTimeout(hidingTimeout)
    },
    {
      color: controlsColor,
      margin: "10px"
    }
  )
}

let animationWidth
const maxWidth = window.visualViewport.height - 140
const frames = 50

function fancyAnimation(animationRoot, elem) {
  const animationContainerDiv = document.createElement('div')
  animationContainerDiv.classList.add('animation-container-div')
  animationContainerDiv.style.backgroundColor = animationBackgroundColor_g
  elem.style.width = '75%'
  elem.style.color = animationColor_g
  animationContainerDiv.append(elem)
  animationRoot.innerHTML = ''
  animationRoot.append(animationContainerDiv)
  animationWidth = maxWidth
  requestAnimationFrame(e => {
    animationWidth = 200;
    animation(animationContainerDiv, elem)
  })
}

function animation(animationContainerDiv, elem) {
  animationContainerDiv.style.width = animationWidth + 'px'
  animationContainerDiv.style.height = animationWidth + 'px'
  animationContainerDiv.style.opacity = (1 - (animationWidth - 200) / (maxWidth - 200)).toString()

  elem.style.fontSize = animationWidth / 4 + 'px'

  animationWidth += (maxWidth - 200) / frames

  if (animationWidth >= maxWidth) {
    animationContainerDiv.remove()
  } else {
    requestAnimationFrame(e => animation(animationContainerDiv, elem))
  }
}

function soundSliderAnimationAppear(elem) {
  if (isStretching == -1) return 0
  elem.style.width = curSliderWidth+'px'
  elem.style.display = 'flex'
  if (curSliderWidth < maxSoundSliderWidth) {
    curSliderWidth += maxSoundSliderWidth/10
    requestAnimationFrame(e => soundSliderAnimationAppear(elem))
  } else {
    curSliderWidth = maxSoundSliderWidth
    elem.style.width = maxSoundSliderWidth+'px'
  }
}

function soundSliderAnimationDisappear(elem) {
  if (isStretching == 1) return 0
  elem.style.width = curSliderWidth+'px'
  if (curSliderWidth > 0) {
    curSliderWidth -= maxSoundSliderWidth/10
    requestAnimationFrame(e => soundSliderAnimationDisappear(elem))
  } else {
    curSliderWidth = 0
    elem.style.width = '0px'
    elem.style.display = 'none'
  }
}


function startShowingAnimation(elem, root) {
  if (isHiding == 1) {
    elem.style.marginBottom = curBottomMargin+'px'
    if (curBottomMargin > -maxBottomMargin) {
      curBottomMargin -= maxBottomMargin/20
    } else {
      isHiding = 0
      curBottomMargin = -maxBottomMargin
      elem.style.marginBottom = curBottomMargin+'px'
      elem.style.display = 'none'
      root.style.cursor = 'none'

    }
  }
  if (isHiding == -1) {
    elem.style.display = 'flex'
    root.style.cursor = 'auto'
    elem.style.marginBottom = curBottomMargin+'px'
    if (curBottomMargin < 0) {
      curBottomMargin += maxBottomMargin/20
    } else {
      isHiding = 0
      curBottomMargin = 0
      elem.style.marginBottom = curBottomMargin+'px'
    }
  }
  requestAnimationFrame(e => startShowingAnimation(elem, root))
}


function newUuid(prev) {
  if (prev == '') return 'POSOSI'
  let res = ''
  for (let i = 0; i < 6; i++) {
    const rand = Math.random() * 26
    const letter = String.fromCharCode('A'.charCodeAt(0)+rand)
    res += letter
  }
  return res
}



const sendingPort = chrome.runtime.connect({name: 'sending port'})
sendingPort.onMessage.addListener(e => console.log(e))

function sendData(playState) {
  if (!roomUUID || apiURL === 'error') {
    return 0
  }
  const time = (new Date()).getTime()
  const data = {vidCurTime: vid.currentTime, curTime: time, playbackRate: vid.playbackRate, playing: playState}
  const params = {apiURL, roomUUID, data, type: 'send data'}
  sendingPort.postMessage(params)
}

function sendEmoji(type) {
  if (!roomUUID || apiURL === 'error') {
    return 0
  }
  const emojiData = {type, timestamp: vid.currentTime, id: Math.floor(Math.random() * (10 ** 8))}
  const playState = isVideoPlaying(vid)
  const time = (new Date()).getTime()
  const data = {vidCurTime: vid.currentTime, curTime: time, playbackRate: vid.playbackRate, playing: playState, newEmoji: emojiData}
  const params = {apiURL, roomUUID, data, type: 'send data'}
  sendingPort.postMessage(params)
}
