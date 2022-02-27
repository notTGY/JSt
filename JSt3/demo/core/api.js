import { getState, setState } from "./state.js"
const REST_API_TIMEOUT = 5000
const PROTOCOL = 'https'

async function Api(domain) {
  let interval

  function restAPI(vid, rawRoomId) {
    if (!rawRoomId || !vid) return e => e
    const roomId = rawRoomId.toUpperCase()


    if (interval) clearInterval(interval)
    interval = setInterval(() => {
      fetch(
        `${PROTOCOL}://${domain}/?method=get&room=${roomId}`
      ).then(res => res.json())
       .then(data => setState(data, vid))
    }, REST_API_TIMEOUT)

    return e => {
      const data = getState(vid)
      if (data) fetch(
        `${PROTOCOL}://${domain}/?method=send&room=${roomId}&data=${data}`
      )
    }
  }

  try {
    const socket = await io(`https://${domain}/`)
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
    console.log(e)
    return restAPI
  }
}

export default Api

