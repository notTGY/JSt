const DELAY = 1000
let vid
let weWereOpen = false
let wrapper
let doWeContinue = false

let roomUUID

const imageRelPath = "imgs/icon.png"

let refreshInterval

let apiURL

let screenRotation = 0

let displayedEmojis = []
let allEmojis = []


function init(root) {

  root.classList.add('container')
  chrome.storage.sync.get(['backgroundColor'], e => {
    root.style.backgroundColor = e['backgroundColor']
  })

  const canvas = document.createElement('canvas')
  root.append(canvas)
  canvas.style.zIndex = '1'
  const ctx = canvas.getContext('2d')

  const videoW = vid.videoWidth
  const videoH = vid.videoHeight

  const videoRatio = videoW / videoH

  const screenW = window.visualViewport.width
  const screenH = window.visualViewport.height

  const screenRatio = screenW / screenH

  if (screenRatio > videoRatio) {
    canvas.height = screenH
    canvas.width = screenH * videoRatio
  } else {
    canvas.width = screenW
    canvas.height = screenW / videoRatio
  }

  let settings = {}


  chrome.storage.sync.get(null, e => {
    settings = e
    displayAllControls(root, vid, settings)
    apiURL = settings.apiURL
    if (apiURL !== 'error') {
      refreshInterval = setInterval(refresh, DELAY)
    }
  })

  const timebarStyles = document.createElement('style')
  root.append(timebarStyles)

  doWeContinue = true
  update()

  function update() {
    canvas.style.transform = `rotate(${90*screenRotation}deg)`

    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height)
    ctx.font = '5rem"'
    emojisOnScreen.forEach((item, i) => {
      let text
      if (item.type === 'fun') {
        text = '😀'
      } else if (item.type === 'love') {
      	text = '😍'
      } else if (item.type === 'cringe') {
      	text = '😲'
      } else if (item.type === 'nice') {
      	text = '😊'
      }
      ctx.fillText(text, item.x, item.y)
      item.y -= 3
      if (item.y < 0) emojisOnScreen.splice(i, 1)
    })

    if (document.querySelector('.timebar')) {
      const timebar = document.querySelector('.timebar')
      timebar.value = vid.currentTime
      const percentage = 100 * vid.currentTime / vid.duration
      timebarStyles.innerHTML = `
  .timebar::-webkit-slider-runnable-track{
    height: 4px;
    background: linear-gradient(to right, 
    ${settings.timebarColor||"#fff"} 0%, 
    ${settings.timebarColor||"#fff"} ${percentage}%, 
    ${settings.controlsColor||"#fff"} ${percentage}%, 
    ${settings.controlsColor||"#fff"} 100%);
  }
  `
    }

    if (document.querySelector('.current-video-time')) {
      const timeDisplay = document.querySelector('.current-video-time') 
      const text = toTime(vid.currentTime | 0) + ' / ' + toTime(vid.duration | 0) 
      timeDisplay.innerText = text.length<20?text:'stream'
    }

    if (allEmojis.length) {
      allEmojis.forEach(item => {
        if (displayedEmojis.includes(item.id)) return
        if (item.timestamp <= vid.currentTime) {
          displayEmoji(item.type)
          displayedEmojis.push(item.id)
        }
      })
    }

    if (doWeContinue) {
      requestAnimationFrame(update)
    }
  }
}



function del() {
  doWeContinue = false
}


function popupButtonCallback(url) {
  vid = document.querySelector('video')

  const allVideos = document.querySelectorAll('video')
  for (let i = 0; i < allVideos.length; i++) {
    if (allVideos[i].src === url) {
      vid = allVideos[i]
    }
  }


  wrapper = document.createElement('div')
  document.body.append(wrapper)

  wrapper.onfullscreenchange = _ => {
    if (weWereOpen) {
      wrapper.remove()
      del()
    } else {
      init(wrapper)
    }
    weWereOpen = !weWereOpen
  }
  wrapper.requestFullscreen().then(r => r ? console.log(r) : 0)
}


function openPopup() {
  if (vid && !document.querySelector('#JSt-popup')) {
    let path = chrome.runtime.getURL(imageRelPath)
    const popup = document.createElement('div')
    const but = document.createElement('img')
    but.src = path
    but.onclick = popupButtonCallback
    popup.classList.add('popup')
    popup.id = 'JSt-popup'
    but.classList.add('popup-button')
    popup.append(but)
    document.body.append(popup)

    setTimeout(_ => popup.remove(), 5000)
  }
}

vid = document.querySelector('video')

openPopup()



chrome.runtime.onMessage.addListener(msg => {
  const {message, url} = msg
  if (message === 'open popup') {
    popupButtonCallback(url)
  }
})

const receivingPort = chrome.runtime.connect({name: 'receiving port'})
receivingPort.onMessage.addListener(json => {
  console.log(json)
  const data = json


  if (data.emojis) allEmojis = data.emojis


  const time = (new Date()).getTime()
  const goodTime = data.vidCurTime + data.playbackRate * (time - data.curTime) /1000
  if (data.playing) {
    if (Math.abs(vid.currentTime-goodTime) > DELAY/2) vid.currentTime = goodTime
    if (!isVideoPlaying(vid)) {
      vid.currentTime = goodTime
      vid.play()
    }
  } else {
    vid.currentTime = data.vidCurTime
    vid.pause()
  }
  vid.playbackRate = data.playbackRate
})

const refresh = e => {
  if (!roomUUID) {
    return 0
  }

  const params = {apiURL, roomUUID}
  receivingPort.postMessage(params) 
}

function toTime(seconds) {
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - 60 * minutes
  if (seconds < 10) seconds = '0' + seconds
  if (minutes < 60) return minutes + ':' + seconds

  let hours = Math.floor(minutes / 60)
  minutes = minutes - 60 * hours
  if (minutes < 10) minutes = '0' + minutes
  return hours + ':' + minutes + ':' + seconds
}


let emojisOnScreen = []

function displayEmoji(type) {
  let newEmoji = {type, x: 100, y: window.visualViewport.height - 200, id: Math.random()}
  emojisOnScreen.push(newEmoji)
}
