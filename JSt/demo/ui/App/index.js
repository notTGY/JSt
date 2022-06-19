import App from './app.js'
const TIMEOUT = 2000

export function mount(root, getRoomId, setRoomId, vid) {
  if (!root)
    throw new Error('couldnt init on undefined elem')

  /**
   * Special case where native video opens
   * https://stackoverflow.com/questions/6838104/pure-javascript-method-to-wrap-content-in-a-div
   */
  if (root.nodeName === 'VIDEO') {
    const wrapper = document.createElement('div')
    wrapper.classList.add('JSt-video-wrapper')
    root.parentNode.appendChild(wrapper)

    const fullscreenWrapper = () => {
      if (wrapper.requestFullscreen)
        return wrapper.requestFullscreen()
      if (wrapper.mozRequestFullScreen)
        return wrapper.mozRequestFullScreen()
      if (wrapper.webkitRequestFullScreen)
        return wrapper.webkitRequestFullScreen()
    }

    const openWrapper = () => {
      if (!wrapper) return
      wrapper.appendChild(root)
      window.removeEventListener('click', openWrapper)
      window.removeEventListener('keydown', openWrapper)
      setTimeout(fullscreenWrapper, 200)
    }

    window.addEventListener('click', openWrapper)
    window.addEventListener('keydown', openWrapper)
    return 0
  }
  const jst = document.createElement('section')
  jst.id = 'JSt-pill'
  root.append(jst)
  
  jst.onclick = e => e.stopPropagation()
  function hideJSt() { jst.hidden = true }

  let timeout
  function resetTimeout() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(hideJSt, TIMEOUT)
    jst.hidden = false
  }
  resetTimeout()
  document.addEventListener('click', resetTimeout)
  document.addEventListener('mousedown', resetTimeout)
  document.addEventListener('mousemove', resetTimeout)
  document.addEventListener('keydown', resetTimeout)

  App(getRoomId, setRoomId, vid)
}

export function unmount() {
  const node = document.querySelector('#JSt-pill')
  if (node && node.parentNode)
    node.parentNode.removeChild(node)
  else
    return 0

  const wrapper = document.querySelector('.JSt-video-wrapper')
  if (wrapper) {
    wrapper.parentNode.append(
      wrapper.children.item(0)
    )
    wrapper.remove()
  }
}
