import { getState, setState } from "./state.js"
const REST_API_TIMEOUT = 5000

export default function Api(domain) {
  let interval

  // TODO: init websockets
  if (false) {
    return function wsAPI(vid, roomId){
      if (!roomId) return e => e

      let lastChange = 0
      // TODO: add websockets listen

      return e => {
        lastChange = new Date().getTime()
        const state = getState(e.target)
        const data = JSON.stringify(state)
        // TODO: add websockets call
      }
    }
  }

  function restAPI(vid, roomId) {
    if (!roomId || !vid) return e => e

    if (interval) clearInterval(interval)
    // time of last interaction with videoElement
    let lastChange = 0

    interval = setInterval(() => {
      fetch(`${domain}/?method=get&room=${roomId}`)
        .then(res => res.json())
        .then(data => {
          if (!data.curTime) return
          if (data.curTime < lastChange) return
          lastChange = new Date().getTime()
          setState(vid, data)
        })
    }, REST_API_TIMEOUT)

    return e => {
      const now = new Date().getTime()
      if (now - lastChange < 100) return
      lastChange = now
      const state = getState(e.target)
      const data = JSON.stringify(state)
      fetch(
        `${domain}/?method=send&room=${roomId}&data=${data}`
      )
    }
  }
  return restAPI
}

