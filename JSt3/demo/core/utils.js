function attachAPIToVid(vid, api) {
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

function findVideo(possibleRoot) {
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

function attachFullScreenCallback(fn) {
  [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'MSFullscreenChange',
  ].forEach(eventName =>
    document.addEventListener(eventName, fn)
  )
}

export {
  attachAPIToVid,
  attachFullScreenCallback,
  findVideo,
}

