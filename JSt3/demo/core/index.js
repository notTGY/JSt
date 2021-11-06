import init from "./init.js"

function sub2Fullscreen(initFn, callback) {
  if (window.JST_INITED) return
  initFn()
  init()
  const fn = e => {
    const elem = document.fullscreenElement
    if (!elem) return false
    callback(elem)
  }

  document.addEventListener('MSFullscreenChange', fn)
  document.addEventListener(
    'mozfullscreenchange', fn
  )
  document.addEventListener(
    'fullscreenchange', fn
  )
  document.addEventListener(
    'webkitfullscreenchange', fn
  )
}
export default sub2Fullscreen
