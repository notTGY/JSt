import { __initCore } from './core/index.js'

const core = __initCore(io, { domain: 'jstplayer.com'})

chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'jst') {
    core.connectPort(port)
    port.onMessage.addListener(core.onUIMessage)
  }
})
