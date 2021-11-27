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
  color: "white",
  "border-width": "4px",
}

function initButtons(
  buttonContainer, setRoomId, vid
) {
  const jstButtonOpen = Button(
    svgs.jstBlack,
    jstButtonCallback(buttonContainer, setRoomId, vid),
    e => e.style.padding = BUT_PADDING + 'px'
  )
  const jstButtonClose = Button(
    svgs.jstBlack,
    jstButtonCallback(buttonContainer, setRoomId, vid),
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
  const defaultButtons = [
    jstButtonOpen,
    speedDownButton,
    speedUpButton,
    jstButtonClose,
  ]
  return defaultButtons
}


function jstButtonCallback(
  buttonContainer, setRoomId, vid
) {
  return function onclick(e) {
    const [
      unused,
      speedDown,
      speedUp,
      jstButton,
    ] = initButtons(buttonContainer, setRoomId, vid)
    const buttons = [
      Button(
        svgs.jstBlack,
        e => displayButtons(
          buttonContainer,
          [ jstButton, speedDown, speedUp ],
        ),
        e => e.style.padding = BUT_PADDING + 'px'
      ),
      codeInput(setRoomId),
    ]

    displayButtons(buttonContainer, buttons)
  }
}

async function scenario(mountElem, setRoomId, vid) {
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
  ] = initButtons(buttonContainer, setRoomId, vid)
  displayButtons(
    buttonContainer,
    [ jstButton, speedDownButton, speedUpButton ],
  )
}

const init = generateStylesheet(options)
init()

scenario(document.body, e => e, null)

