/**
 * MAX delay between two screens
 */
const ACCEPTABLE_DELAY = 500
/**
 * MAX delay of our own event returning to us
 */
const CLICK_NEW_TIMEOUT = 100

// time of last interaction with videoElement
let lastChange = 0

function isVideoPlaying(vid) {
  return !!(
    vid.currentTime > 0
    && !vid.paused
    && !vid.ended
    && vid.readyState > 2
  )
}

function getState(vid) {
  /**
   * Contraception against our own changes
   */
  const now = new Date().getTime()
  if (now - lastChange < CLICK_NEW_TIMEOUT)
    return false
  lastChange = now

  const curTime = now
  const playing = isVideoPlaying(vid)
  const vidCurTime = vid.currentTime
  const playbackRate = vid.playbackRate

  const data = {
    playing,
    vidCurTime,
    curTime,
    playbackRate,
  }

  return JSON.stringify(data)
}

function setState(data, vid) {
  const {
    vidCurTime,
    playbackRate,
    curTime,
    playing,
  } = data

  /**
   * Contraception against too old changes
   */
  if (!curTime) return
  if (curTime < lastChange) return
  const time = (new Date()).getTime()
  lastChange = time

  /**
   * timePassed is time of signal travel in seconds
   */
  const timePassed = (time - curTime) / 1000
  /**
   * goodTime is the exact time of changer
   */
  const goodTime = vidCurTime + playbackRate * timePassed

  const isVidPlaying = isVideoPlaying(vid)
  if (playing) {
    /**
     * When we need to fast forward
     */
    if (
      Math.abs(vid.currentTime - goodTime)
      > ACCEPTABLE_DELAY
    ) vid.currentTime = goodTime

    /**
     * If we were paused -> go to best time
     */
    if (!isVidPlaying) {
      vid.play()
      if (vid.currentTime !== goodTime)
        vid.currentTime = goodTime
    }
  } else {
    /**
     * If other guy paused -> go to best time
     */
    if (vid.currentTime !== vidCurTime)
      vid.currentTime = vidCurTime
    if (isVidPlaying) vid.pause()
  }

  /**
   * Sync our speeds (changes once or twice, so ok)
   */
  if (vid.playbackRate !== data.playbackRate)
    vid.playbackRate = data.playbackRate
}

export { setState, getState }

