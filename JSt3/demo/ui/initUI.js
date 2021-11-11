const TIMEOUT = 5000

function initUI(parentElem, isHiding) {
  if (isHiding) {
    const node = document.querySelector('#JSt-pill')
    if (node && node.parentNode)
      node.parentNode.removeChild(node)
    else
      throw new Error('cannot unmount JSt / unmounted automatically')

    return
  }
  if (!parentElem)
    throw new Error('couldnt init on undefined elem')
  const newEl = e => document.createElement(e)
  const jst = newEl('section')
  const buttonContainer = newEl('div')
  const messageContainer = newEl('p')

  jst.id = 'JSt-pill'
  buttonContainer.id = 'JSt-button-container'
  messageContainer.id = 'JSt-message'

  jst.append(buttonContainer)
  jst.append(messageContainer)
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
  document.addEventListener('mousemove', resetTimeout)
  document.addEventListener('keydown', resetTimeout)

  return [ jst, buttonContainer, messageContainer ]
}

export default initUI

