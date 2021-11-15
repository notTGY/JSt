import { getState, setState } from "./state.js"
const REST_API_TIMEOUT = 5000

function Api(domain) {
  let interval

  function restAPI(vid, rawRoomId) {
    if (!rawRoomId || !vid) return e => e
    const roomId = rawRoomId.toUpperCase()


    if (interval) clearInterval(interval)
    interval = setInterval(() => {
      fetch(
        `http://${domain}/?method=get&room=${roomId}`
      ).then(res => res.json())
       .then(data => setState(data, vid))
    }, REST_API_TIMEOUT)

    return e => {
      const data = getState(vid)
      if (data) fetch(
        `http://${domain}/?method=send&room=${roomId}&data=${data}`
      )
    }
  }

  try {
    throw 1
    const socket = io(`ws://${domain}/`)
    function wsAPI(vid, rawRoomId){
      if (!rawRoomId || !vid) return e => e
      const roomId = rawRoomId.toUpperCase()

      let lastChange = 0
      socket.on('message', message => {
          setState(JSON.parse(message), vid)
      })

      return e => {
        const data = getState(vid)
        if (data) socket.send(`${roomId} ${data}`)
      }
    }
    return wsAPI
  } catch(e) {
    return restAPI
  }
}

export default Api

