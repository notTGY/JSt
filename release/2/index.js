const presentation = document.querySelector('#presentation')

const ray = document.querySelector('#ray')
const rayContainer = document.querySelector('.ray-container')

const trek = document.querySelector('#trek')

const imgBackground = document.querySelector('#img-background')
imgBackground.width = 800
imgBackground.height = 800
const imgBackgroundCtx = imgBackground.getContext('2d')


const imgBackgroundDivContainer = document.querySelector('#img-background-div-container')
const imgBackgroundDiv = document.querySelector('#img-background-div')

const imgWrapper = document.querySelector('.image-wrapper')

function startAnimation() {
  presentation.hidden = false
  presentation.requestFullscreen().then(e => console.log(e))

  //showRay()
  trek.currentTime = 38
  trek.play()
  setTimeout(showRay, 10000)
}


function showRay() {
  ray.hidden = false
  rayContainer.hidden = false
  setTimeout(startSpinning, 400)
}

let rotation = 0
function startSpinning() {
  spin()
}

function spin() {
  ray.style.transform = `rotate(${rotation}deg)`
  rotation += 1

  imgBackgroundCtx.fillStyle = '#ccc'


  const r = 400
  imgBackgroundCtx.beginPath()
  if (rotation <= 180) {
    imgBackgroundCtx.arc(200, 200, r, 0, 2*Math.PI*rotation/360 , 0)
  } else {
    imgBackgroundCtx.arc(200, 200, r, 2*Math.PI*rotation/360, Math.PI , 1)
  }

  imgBackgroundCtx.fill()

  imgBackgroundCtx.beginPath()
  imgBackgroundCtx.moveTo(200,200)
  if (rotation <= 180) {
    imgBackgroundCtx.lineTo(200+r,200)
    imgBackgroundCtx.lineTo(200+r*Math.cos(2*Math.PI*rotation/360),200+r*Math.sin(2*Math.PI*rotation/360))
  } else {
    imgBackgroundCtx.lineTo(200-r,200)
    imgBackgroundCtx.lineTo(200+r*Math.cos(2*Math.PI*rotation/360),200+r*Math.sin(2*Math.PI*rotation/360))
  }
  imgBackgroundCtx.fill()

  if (rotation <= 360) {
    requestAnimationFrame(spin)
  } else {
    setTimeout(rayDisappear, 600)
  }
}

function rayDisappear() {
  imgBackgroundCtx.fillStyle = '#fff'
  imgBackgroundCtx.fillRect(0,0,800,800)
  ray.hidden = true

  setTimeout(startGradientAnimation, 1000)
}

function startGradientAnimation() {
  imgBackground.hidden = true

  imgWrapper.style.top = '-396px'
  imgBackgroundDivContainer.hidden = false
  spinGradient()
}

rotation = 0
function spinGradient() {
  rotation+=1
  imgBackgroundDiv.style.background = `linear-gradient(${(217+rotation)%360}deg, rgba(255,0,0,.7), rgba(255,0,0,0) 70.71%),
          linear-gradient(${(127+rotation)%360}deg, rgba(0,255,0,.7), rgba(0,255,0,0) 70.71%),
          linear-gradient(${(336+rotation)%360}deg, rgba(0,0,255,.7), rgba(0,0,255,0) 70.71%)`
  requestAnimationFrame(spinGradient)
}