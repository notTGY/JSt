import sub2Fullscreen from "./core/index.js"
import {
  Button,
  displayButtons,
  displayMessage,
  generateStylesheet,
  initUI,
  svgs,
} from "./ui/index.js"

const BUT_DEFAULT_PADDING = 30
const options = {
  dimensions: "normal",
  color: "white",
  "border-width": "4px",
}

function initButtons() {
  const jstBut = Button(
    svgs.jstBlack,
    e => e,
    e => e.style.padding = BUT_DEFAULT_PADDING + 'px'
  )
  const speedDown = Button(svgs.speedDown)
  const speedUp = Button(svgs.speedUp)

  return [jstBut, speedDown, speedUp]
}

async function scenario(mountElem) {
  const [
    jstPill,
    buttonContainer,
    messageContainer,
  ] = initUI(mountElem)
  const buttons = initButtons()
  await displayMessage(
    'HI, I\'M JSt',
    messageContainer,
  )
  displayButtons(buttonContainer, buttons)
}

const init = generateStylesheet(options)
sub2Fullscreen(init, el => scenario(el))
