import sub2Fullscreen from "./core/index.js"
import {
  Button,
  codeInput,
  displayButtons,
  generateStylesheet,
  initUI,
  svgs,
} from "./ui/index.js"

const BUT_PADDING = 20
const options = {
  dimensions: "normal",
  color: "trans",
  "border-width": "4px",
}

function initButtons(
  buttonContainer, getRoomId, setRoomId, vid
) {
  const jstButtonOpen = Button(
    svgs.jstBlack,
    jstButtonCallback(
      buttonContainer, getRoomId, setRoomId, vid
    ),
    e => e.style.padding = BUT_PADDING + 'px'
  )
  const jstButtonClose = Button(
    svgs.jstBlack,
    jstButtonCallback(
      buttonContainer, getRoomId, setRoomId, vid
    ),
    e => e.style.padding = BUT_PADDING + 'px'
  )
  const speedDownButton = Button(
    svgs.speedDown,
    e => {
      if (vid.playbackRate > .25)
        vid.playbackRate -= .25
    },
  )
  const speedUpButton = Button(
    svgs.speedUp,
    e => {
      if (vid.playbackRate < 20)
        vid.playbackRate += .25
    },
  )

  const bugButton = Button(
    svgs.bug,
    e => {
      window.open(
        'https://jstplayer.com/feedback?from=app',
        '_blank',
      )
    },
  )
  const defaultButtons = [
    jstButtonOpen,
    speedDownButton,
    speedUpButton,
    jstButtonClose,
    bugButton,
  ]
  return defaultButtons
}


function jstButtonCallback(
  buttonContainer, getRoomId, setRoomId, vid
) {
  return function onclick(e) {
    const [
      unused,
      speedDown,
      speedUp,
      jstButton,
      bugButton,
    ] = initButtons(
      buttonContainer, getRoomId, setRoomId, vid
    )
    const buttons = [
      Button(
        svgs.jstBlack,
        e => displayButtons(
          buttonContainer,
          [ jstButton, speedDown, speedUp, bugButton ],
        ),
        e => e.style.padding = BUT_PADDING + 'px'
      ),
      codeInput(setRoomId, getRoomId),
    ]

    displayButtons(buttonContainer, buttons)
  }
}

async function scenario(
  mountElem, getRoomId, setRoomId, vid,
) {
  const initRes = initUI(mountElem)
  if (!initRes) return

  const [
    jstPill,
    buttonContainer,
    messageContainer,
  ] = initRes

  const [
    jstButton,
    speedDownButton,
    speedUpButton,
    unused,
    bugButton,
  ] = initButtons(
    buttonContainer, getRoomId, setRoomId, vid,
  )
  displayButtons(
    buttonContainer,
    [ jstButton, speedDownButton, speedUpButton, bugButton ],
  )
}

function hideJST() {
  initUI(null, true)
}

function start() {
  const init = generateStylesheet(options)

  const socketIOscript =
    document.createElement('script')
  socketIOscript.src =
    'https://cdn.socket.io/4.3.2/socket.io.min.js'
  socketIOscript.crossorigin = 'anonymous'

  socketIOscript.onerror = socketIOscript.onload =
    e => sub2Fullscreen(
      'symwatch.herokuapp.com', init, scenario, hideJST
    )

  document.body.append(socketIOscript)
    
  // highlight iframes to open videos deep inside
  const iframes = [...document.querySelectorAll('iframe')]
  iframes.forEach(iframe => {
    const dimensions = iframe.getBoundingClientRect()
    if (
      dimensions.width === 0
      || dimensions.height === 0
    ) return
    console.log(dimensions)
    const button = document.createElement('button')
    button.style.position = 'absolute'
    button.style.top = dimensions.top
    button.style.left = dimensions.left
    button.style.width = dimensions.width
    button.style.height = dimensions.height
    button.onclick = (e) => {
      window.open(iframe.src)
      e.stopPropagation()
    }
    button.oncontextmenu = (e) => {
      e.preventDefault()
      button.remove()
      return false
    }
    button.style.background = 'transparent'
    button.style.border = '2px solid #e090df'
    button.style.boxShadow = '0 0 10px 4px #e090df'
    iframe.parentElement.append(button)
    console.log(iframe)
  })
  console.log('started')
}

start()

export default start

