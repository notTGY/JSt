import { __initUI } from './ui/index.js'
import { __initCore } from './core/index.js'

const ui = __initUI()

const core = __initCore()
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
core.connectPort(ui.onIncomingMessage)
ui.connectPort(core.onUIMessage)

