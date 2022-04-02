import Button from "./button.js"
import codeInput from "./codeInput.js"
import displayButtons from "./displayButtons.js"
import displayMessage from "./displayMessage.js"
import generateStylesheet from "./generateStylesheet.js"
import mountUI from "./initUI.js"
import svgs from "./svgs.js"


const initUI = mountUI

/**
 * UI part of the application handles messages from
 * core and gives it relevant information
 * it provides buttons and scenarios for core to use
 * 
 * usage:
 * ui = initUI()
 * const port = chrome.runtime.connect({name: 'jst'})
 * port.onMessage.addListener(ui.onIncomingMessage)
 * ui.connectPort(port.postMessage)
 *
 */
function __initUI(settings) {
  let portPostMessage = null

  return {
    /**
     * this function gets executed when new piece of
     * data arrives from the backend (other user
     * changes video state)
     *
     * so here we handle all needed changes for our
     * video
     */
    onIncomingMessage(msg) {
    },
    /**
     * here we connect sending function in order to
     * push updates to core and then to backend
     * in order to change others' video state
     */
    connectPort(__port) {
      portPostMessage = __port
    },
  }
}

export {
  Button,
  codeInput,
  displayButtons,
  displayMessage,
  generateStylesheet,
  initUI,
  svgs,
  __initUI,
}

