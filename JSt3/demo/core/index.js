import {
  attachAPIToVid,
  attachFullScreenCallback,
  copy,
  findVideo,
} from "./utils.js"
import Api from "./api.js"

const api = new Api('http://localhost:3000')

function sub2Fullscreen(initFn, callback) {
  if (window.JST_INITED) return
  window.JST_INITED = true
  initFn()

  let roomId = null
  let vid = null
  const setRoomId = newRoomId => {
    roomId = newRoomId
    attachAPIToVid(vid, api(vid, roomId))
  }

  const onFullScreenChange = e => {
    const elem = document.fullscreenElement
    if (!elem) return false

    vid = findVideo(elem)
    /**
     * Each time we get new (possibly new) video elem
     * attach its events (play/pause...)
     * to symwatch API (do it for each state change)
     */
    attachAPIToVid(vid, api(vid, roomId))

    callback(elem, setRoomId)
  }

  attachFullScreenCallback(onFullScreenChange)
}

export default sub2Fullscreen

