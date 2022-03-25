const TIMEOUT = 2000

function initUI(parentElem, isHiding) {
  if (isHiding) {
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
    return
  }
  if (!parentElem)
    throw new Error('couldnt init on undefined elem')

  /**
   * Special case where native video opens
   * https://stackoverflow.com/questions/6838104/pure-javascript-method-to-wrap-content-in-a-div
   */
  if (parentElem.nodeName === 'VIDEO') {
    const wrapper = document.createElement('div')
    wrapper.classList.add('JSt-video-wrapper')
    parentElem.parentNode.appendChild(wrapper)

    const callback = () => {
      if (wrapper.requestFullscreen)
        return wrapper.requestFullscreen()
      if (wrapper.mozRequestFullScreen)
        return wrapper.mozRequestFullScreen()
      if (wrapper.webkitRequestFullScreen)
        return wrapper.webkitRequestFullScreen()
    }

    const openWrapper = () => {
      wrapper.appendChild(parentElem)
      window.removeEventListener('click', openWrapper)
      window.removeEventListener('keydown', openWrapper)
      setTimeout(callback, 200)
    }

    window.addEventListener('click', openWrapper)
    window.addEventListener('keydown', openWrapper)
    return 0
  }

  const newEl = e => document.createElement(e)
  const jst = newEl('section')
  const buttonContainer = newEl('div')
  const messageContainer = newEl('p')
  const versionContainer = newEl('span')

  jst.id = 'JSt-pill'
  buttonContainer.id = 'JSt-button-container'
  messageContainer.id = 'JSt-message'
  versionContainer.id = 'JSt-version'

  versionContainer.innerText =
    typeof __version === 'undefined'
      ? versionContainer.innerText = `dev`
      : `alpha ${__version}`

  jst.append(buttonContainer)
  jst.append(messageContainer)
  jst.append(versionContainer)


  parentElem.append(jst)

  jst.onclick = e => e.stopPropagation()

  function hideJSt() {
    jst.hidden = true
  }

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

  return [ jst, buttonContainer, messageContainer ]
}

export default initUI

