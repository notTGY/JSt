export function attachAPIToVid(vid, api) {
  if (!vid) return  
  
  [
    'playing',
    'pause',
    'ratechange',
    'seeked',
  ].forEach(eventName =>
    vid.addEventListener(eventName, api)
  )
}

/**
 * Two following function depend on
 * single-layered state
 */
export function copy(obj) {
  const cpy = {}
  for (const key in obj) {
    cpy[key] = obj[key]
  }
  return cpy
}

export function isEqObj(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false
  }
  return true
}

export function findVideo(possibleRoot) {
  const insideVid =
    possibleRoot.querySelector('video')
  if (insideVid) return insideVid

  const pageVid = 
    document.body.querySelectorAll('video')
  if (pageVid.length < 1) 
    throw new Error('haven\'t found any videos')
  if (pageVid.length > 1)
    console.log('found more than 1 vid, using first')

  return pageVid[0]
}

export function isVideoPlaying(vid) {
  return !!(
    vid.currentTime > 0
    && !vid.paused
    && !vid.ended
    && vid.readyState > 2
  )
}

export function attachFullScreenCallback(fn) {
  [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
  ].forEach(eventName =>
    document.addEventListener(eventName, fn)
  )
}

