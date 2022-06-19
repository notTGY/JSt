import { __initUI } from './ui/index.js'
import { __initCore } from './core/index.js'

const options = {
  dimensions: "normal",
  color: "trans",
  "border-width": "4px",
}

const socketIOscript =
  document.createElement('script')
socketIOscript.src =
  'https://cdn.socket.io/4.3.2/socket.io.min.js'
socketIOscript.crossorigin = 'anonymous'

socketIOscript.onerror = socketIOscript.onload =
  () => {
  const ui = __initUI(options)

  const core = __initCore(io, {
    domain: 'symwatch.herokuapp.com'
  })

  /**
   * This part is reference to how it will be used
   * inside chrome exstension
   **
  const port = chrome.runtime.connect({name: 'jst'})
  port.onMessage.addListener(ui.onIncomingMessage)
  ui.connectPort(port.postMessage)

   **
   * and this is for core part
   **
  chrome.runtime.onConnect.addListener(port => {
    if (port.name === 'jst') {
      core.connectPort(port.postMessage)
      port.onMessage.addListener(core.onUIMessage)
    }
  })
  */

  /**
   * following code used in bookmark and embeds
   * this is a connection straigh-away
   */
  core.connectPort({ postMessage: ui.onIncomingMessage })
  ui.connectPort({ postMessage: core.onUIMessage })
}

document.body.append(socketIOscript)
