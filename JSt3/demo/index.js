const JST_BLACK_SVG =
`<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21C8 21 12.6429 14 21 14C29.3571 14 34 21 34 21C34 21 29.3571 28 21 28C12.6429 28 8 21 8 21Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.5 1H1V41H41V26.5V18.5M27 1H41M41 1V15M41 1L27 15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const SPEED_DOWN_SVG =
`<svg transform="scale (-1, 1)" transform-origin="center" viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`
const SPEED_UP_SVG =
`<svg viewBox="0 0 128 128" fill="currentcolor">
<path d="M106.98929,41.91644c-2.44581-2.028-4.68786-.712-6.16139.45546C93.20426,48.4096,86.782,53.14082,79.89811,58.35221,72.32216,64.08763,64.488,70.01865,56.07861,76.74553c-6.39391,5.11455-7.88014,12.12717-4.07875,19.24,1.06266,2.3214,3.55641,4.37959,6.84458,5.64816a14.19745,14.19745,0,0,0,5.13205,1.00057c4.56513,0,8.77548-2.45564,12.00228-7.1411,6.46007-9.381,11.91934-17.6315,17.6991-26.36671,4.51071-6.817,8.47925-13.20849,13.63935-20.80625C108.96047,45.90074,108.83486,43.447,106.98929,41.91644Z"/>
<path d="M64.00244,38.07609a49.13226,49.13226,0,0,1,18.55737,5.44938c.84934.44674,1.68882.923,2.50379,1.42373.82968-.653,1.65937-1.31082,2.48413-1.96374q5.037-3.99134,10.0789-7.97282a62.61957,62.61957,0,0,0-9.11177-4.69823c-.60876-.2553-1.22243-.50568-1.841-.74132A63.01419,63.01419,0,0,0,1.02029,88.343H6.66605a56.291,56.291,0,0,1,5.98942-21.26243A54.66146,54.66146,0,0,1,25.95983,50.30038,52.82753,52.82753,0,0,1,44.09008,40.26073,51.036,51.036,0,0,1,64.00244,38.07609Z"/>
<path d="M126.97971,88.343q0-.61118-.01474-1.22243a4.46871,4.46871,0,0,0,.00983-.51548c-.09819-2.44485-.25038-4.90444-.58913-7.32967a62.08046,62.08046,0,0,0-11.63519-28.46937l-4.59515,6.77q-3.07816,4.53623-6.19561,9.13139a44.62758,44.62758,0,0,1,1.60046,4.42825A44.163,44.163,0,0,1,107.2048,88.343Z"/>
</svg>
`


const JStMessage = document.getElementById('JSt-message')
const JStButtonsContainer = document.getElementById('JSt-buttons-container')


const slideAway = (element)  =>
  new Promise((resolve, reject) => {
    element.classList.add('before-appear')
    setTimeout(e => {
      element.classList.remove('before-appear')
      element.innerText = ''
      resolve()
    }, 690)
  })
const printText = (text, element) =>
  new Promise((resolve, reject) => {
    let i = 0

    const printChar = e => {
      i++
      const curText =  text.substring(0, i)
      element.innerText = curText
      if (i < text.length)
        setTimeout(printChar, 100)
      else {
        resolve()
      }
    }
    printChar()
  }
)

const sleep = (time) =>
  new Promise((resolve, reject)=> {
    setTimeout(resolve, time)
  }
)

function showButtonsFirstPage() {
  const button1 = document.createElement('button')
  button1.classList.add('JSt-button')
  button1.innerHTML = JST_BLACK_SVG
  button1.style.padding = '30px'
  JStButtonsContainer.appendChild(button1)

  const button2 = document.createElement('button')
  button2.classList.add('JSt-button')
  button2.innerHTML = SPEED_DOWN_SVG
  JStButtonsContainer.appendChild(button2)

  const button3 = document.createElement('button')
  button3.classList.add('JSt-button')
  button3.innerHTML = SPEED_UP_SVG
  JStButtonsContainer.appendChild(button3)

  const button4 = document.createElement('button')
  button4.classList.add('JSt-button')
  button4.innerHTML = SPEED_UP_SVG
  JStButtonsContainer.appendChild(button4)
}

async function start() {
  await printText('HI, I\'M JSt', JStMessage)
  await sleep(500)
  await slideAway(JStMessage)
  await printText(':)', JStMessage)
  await sleep(500)
  await slideAway(JStMessage)
  showButtonsFirstPage()
}

start()
