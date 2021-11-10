/**
 * Function that prints text into the JSt pill
 * You can specify wipeout timeout in options
 * as well as appearing timeout
 */
async function displayMessage(text, element, options) {
  const {
    wipeout,
    appear,
    sleep,
  } = options || {}
  const wipeoutReal = wipeout || 70
  const sleepReal = sleep || 1000
  const appearReal = appear || 100

  const printProm = new Promise(
    (resolve, reject) => {
      let i = 0

      const printChar = e => {
        i++
        const curText =  text.substring(0, i)
        element.innerText = curText

        if (i < text.length)
          setTimeout(printChar, appearReal)
        else
          resolve()
      }
      printChar()
    }
  )
  await printProm // print text to the pill
  await new Promise( // wait before unmount
    (res, rej) => setTimeout(res, sleepReal)
  )
  const slideProm = new Promise(
    (resolve, reject) => {
      let i = 0

      const eraseChar = e => {
        i++
        const fpos =  text.length - i
        const curText =  text.substring(0, fpos)
        element.innerText = curText

        if (i < text.length)
          setTimeout(eraseChar, wipeoutReal)
        else
          resolve()
      }
      eraseChar()
    }
  )
  await slideProm
}

export default displayMessage

