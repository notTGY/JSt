import svgs from "./svgs.js"

function codeInput(setRoomId) {
  return function () {
    const el = document.createElement('form')
    const submitEl = document.createElement('button')

    el.classList.add('JSt-form')

    el.innerHTML += `
    <input
      minlength=6
      maxlength=6
      required
      autofocus
      id="JSt-code-input"
      placeholder="______"
    ></input>
    `

    submitEl.classList.add('JSt-button')
    submitEl.innerHTML = svgs.checkmark

    el.onsubmit = e => {
      e.preventDefault()
      const inputEl =
        el.querySelector('#JSt-code-input')
      setRoomId(inputEl.value)
    }

    el.append(submitEl)
    return el
  }
}

export default codeInput

