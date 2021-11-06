function displayButtons(buttonContainer, buttons) {
  buttonContainer.innerHTML = ''
  buttons.forEach(button => {
    const but = document.createElement('button')
    but.classList.add('JSt-button')
    buttonContainer.append(button(but))
  })
}

export default displayButtons
