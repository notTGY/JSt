import sub2Fullscreen from "./core/index.js"
import {
  Button,
  codeInput,
  displayButtons,
  displayMessage,
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

function DefaultButtons(buttonContainer, setRoomId) {
  const jstButton = Button(
    svgs.jstBlack,
    jstButtonCallback(buttonContainer, setRoomId),
    e => e.style.padding = BUT_PADDING + 'px'
  )

  return [
    jstButton,
    Button(svgs.speedDown),
    Button(svgs.speedUp)
  ]
}

function jstButtonCallback(
  buttonContainer, setRoomId
) {
  return function onclick(e) {
    const defaultButtons =
      DefaultButtons(buttonContainer, setRoomId)
    const buttons = [
      Button(
        svgs.jstBlack,
        e => displayButtons(
          buttonContainer, defaultButtons
        ),
        e => e.style.padding = BUT_PADDING + 'px'
      ),
    ]

    displayButtons(buttonContainer, buttons)
  }
}

async function scenario(mountElem, setRoomId) {
  const [
    jstPill,
    buttonContainer,
    messageContainer,
  ] = initUI(mountElem)
  await displayMessage(
    'HI, I\'M JSt',
    messageContainer,
  )

  const defaultButtons =
    DefaultButtons(buttonContainer, setRoomId)
  displayButtons(buttonContainer, defaultButtons)
}

const init = generateStylesheet(options)
sub2Fullscreen(init, scenario)

