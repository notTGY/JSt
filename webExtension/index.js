let vid
let weWereOpen = false
let wrapper
let doWeContinue = false
let roomUUID

const imageRelPath = "imgs/icon.png"


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

  chrome.storage.sync.get(null, e => {
    const settings = e
    displayAllControls(root, vid, settings)
  })


  doWeContinue = true
  update()

  function update() {
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height)



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