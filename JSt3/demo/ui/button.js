function Button(
  template = '',
  callback = e => e,
  modify = e => e,
) {
  // render function
  return (element) => {
    element.innerHTML = template
    element.onclick = callback
    modify(element)
    return element
  }
}

export default Button

