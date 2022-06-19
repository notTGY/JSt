import generateStylesheet from "./generateStylesheet.js"
import svgs from "./svgs.js"
import highlightIframes from "./highlightIframes.js"
import {
  attachFullScreenCallback,
  attachCallbackToVidChange,
  findVideo,
} from "./vidDetection.js"
import { setState, getState } from "./state.js"
import { mount, unmount } from "./App/index.js"


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
function __initUI(options) {
  let port = null
  let vid = null
  let roomId = null

  const getRoomId = () => roomId

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
      setState(msg, vid)
    },
    /**
     * here we connect sending function in order to
     * push updates to core and then to backend
     * in order to change others' video state
     */
    connectPort(__port) {
      port = __port
      // here we endup after connected to backgroud
      if (window.JST) return
      window.JST = 1

      // connect styles
      generateStylesheet(options)
      
      // highlight iframes to open videos deep inside
      highlightIframes()

      // listen for fullscreen event to attach to vid
      const onFSchange = e => {
        const mus = document.querySelector('audio')
        let elem

        if (mus) {
          vid = mus
          elem = document.body
        } else {
          elem = document.fullscreenElement
          if (!elem) return unmount()
          vid = findVideo(elem)
        }
        /**
         * Each time we get new (possibly new)
         * video elem
         * attach its events (play/pause...)
         * to symwatch API
         * (do it for each state change)
         */
        attachCallbackToVidChange(vid, () =>
          port.postMessage({
            roomId, data: getState(vid)
          })
        )

        // when roomId changes
        const setRoomId = newRoomId => {
          roomId = newRoomId
          attachCallbackToVidChange(vid, () =>
            port.postMessage({
              roomId, data: getState(vid)
            })
          )
        }

        // display pill app
        mount(elem, getRoomId, setRoomId, vid)
      }

      attachFullScreenCallback(onFSchange)

    },
  }
}

export { __initUI }

