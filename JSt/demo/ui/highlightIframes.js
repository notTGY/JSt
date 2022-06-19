export default function highlightIframes() {
  const iframes = [
    ...document.querySelectorAll('iframe')
  ]

  iframes.forEach(iframe => {
    const dimensions = iframe.getBoundingClientRect()
    if (
      dimensions
      && dimensions.width
      && dimensions.height
    ) {
      const button = document.createElement('button')
      button.classList = 'JSt-iframe-button'
      button.style.top = dimensions.top
      button.style.left = dimensions.left
      button.style.width = dimensions.width
      button.style.height = dimensions.height
      button.onclick = (e) => {
        window.open(iframe.src)
        e.stopPropagation()
      }
      button.oncontextmenu = (e) => {
        e.preventDefault()
        button.remove()
        return 0
      }
      iframe.parentElement.append(button)
    }
  })
}
