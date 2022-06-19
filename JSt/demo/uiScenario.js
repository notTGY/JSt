import { __initUI } from './ui/index.js'

const options = {
  dimensions: "normal",
  color: "trans",
  "border-width": "4px",
}

const ui = __initUI(options)

const port = chrome.runtime.connect({name: 'jst'})
port.onMessage.addListener(ui.onIncomingMessage)
ui.connectPort(port)
