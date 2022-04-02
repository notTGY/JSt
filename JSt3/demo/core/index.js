import {
  attachAPIToVid,
  attachFullScreenCallback,
  findVideo,
} from "./utils.js"
import Api from "./api.js"


async function sub2Fullscreen(
  domain, initFn, callback, hideCallback
) {
  if (window.JST_INITED) return
  window.JST_INITED = true
  initFn()

  const api = await Api(domain)

  let roomId = null
  let vid = null
  const getRoomId = () => roomId

  const setRoomId = newRoomId => {
    roomId = newRoomId
    const eventListener = api(vid, roomId)
    attachAPIToVid(vid, eventListener)
  }

  const onFullScreenChange = e => {
    const mus = document.querySelector('audio')

    if (mus) {
      const eventListener = api(mus, roomId)
      attachAPIToVid(mus, eventListener)
      vid = mus

      callback(
        document.body, getRoomId, setRoomId, mus,
      )
    } else {
      const elem = document.fullscreenElement
      if (!elem) return hideCallback()

      vid = findVideo(elem)
      /**
       * Each time we get new (possibly new)
       * video elem
       * attach its events (play/pause...)
       * to symwatch API
       * (do it for each state change)
       */
      const eventListener = api(vid, roomId)
      attachAPIToVid(vid, eventListener)

      callback(elem, getRoomId, setRoomId, vid)
    }
  }

  attachFullScreenCallback(onFullScreenChange)
}

export default sub2Fullscreen

/**
 * core takes care of incoming messages from ui and
 * backend and routes everything around
 *
 * usage:
 * const core = __initCore()
 * chrome.runtime.onConnect.addListener(port => {
 *   if (port.name === 'jst') {
 *     core.connectPort(port.postMessage)
 *     port.onMessage.addListener(core.onUIMessage)
 *   }
 * })
 */
export function __initCore(settings) {
  let portPostMessage = null

  return {
    /**
     * when button gets clicked/video state change
     * this function gets callbacked with msg
     * that contains current state
     */
    onUIMessage(msg) {
    },
    /**
     * Just connect port for communication
     */
    connectPort(__port) {
      portPostMessage = __port
    },
  }
}

