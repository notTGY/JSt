import { isVideoPlaying } from "./utils.js"
const ACCEPTABLE_DELAY = 500

export function getState(vid) {
  const playing = isVideoPlaying(vid)
  const vidCurTime = vid.currentTime
  const curTime = new Date().getTime()
  const playbackRate = vid.playbackRate
  return {
    playing,
    vidCurTime,
    curTime,
    playbackRate,
  }
}

export function setState(vid, data) {
  const time = (new Date()).getTime()
  const {
    vidCurTime,
    playbackRate,
    curTime,
    playing,
  } = data
  const timeSinceLastUpdate = (time - curTime) / 1000
  const goodTime = vidCurTime + playbackRate * timeSinceLastUpdate
  const isVidPlaying = isVideoPlaying(vid)
  if (playing) {
    if (Math.abs(vid.currentTime - goodTime) > ACCEPTABLE_DELAY) vid.currentTime = goodTime
    if (!isVidPlaying) {
      vid.currentTime = goodTime
      vid.play()
    }
  } else {
    if (vid.currentTime !== vidCurTime)
      vid.currentTime = vidCurTime
    if (isVidPlaying) vid.pause()
  }
  if (vid.playbackRate !== data.playbackRate)
    vid.playbackRate = data.playbackRate
}

