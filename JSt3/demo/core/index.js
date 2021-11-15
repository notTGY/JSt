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

  const api = new Api(domain)

  let roomId = null
  let vid = null
  const setRoomId = newRoomId => {
    roomId = newRoomId
    const eventListener = api(vid, roomId)
    attachAPIToVid(vid, eventListener)
  }

  const onFullScreenChange = e => {
    const elem = document.fullscreenElement
    if (!elem) return hideCallback()

    vid = findVideo(elem)
    /**
     * Each time we get new (possibly new) video elem
     * attach its events (play/pause...)
     * to symwatch API (do it for each state change)
     */
    const eventListener = api(vid, roomId)
    attachAPIToVid(vid, eventListener)

    callback(elem, setRoomId, vid)
  }

  attachFullScreenCallback(onFullScreenChange)
}

export default sub2Fullscreen

