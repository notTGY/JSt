const JStMessage = document.getElementById('JSt-message')


const printText = (text, element) =>
  new Promise((resolve, reject) => {
    let i = 0

    const printChar = e => {
      i++
      const curText =  text.substring(0, i)
      element.innerText = curText
      if (i < text.length)
        setTimeout(printChar, 100)
      else
        resolve()
    }
    printChar()
  }
)

const sleep = (time) =>
  new Promise((resolve, reject)=> {
    setTimeout(resolve, time)
  }
)

async function start() {
  await printText('HI, I\'M JSt', JStMessage)
  //await sleep(500)
  //await printText('VIDEO TOOL', JStMessage)
  //await sleep(500)
  //await printText(':)', JStMessage)
}

start()
