/**
 * core takes care of incoming messages from ui and
 * backend
 *
 * usage:
 * const core = __initCore()
 * chrome.runtime.onConnect.addListener(port => {
 *   if (port.name === 'jst') {
 *     core.connectPort(port.postMessage)
 *     port.onMessage.addListener(core.onUIMessage)
 *   }
 * })
 */
export function __initCore(io, options) {
  const REST_API_TIMEOUT = 5000
  const PROTOCOL = 'https'
  const { domain } = options

  let port = null
  let type = null
  let API = null
  let roomId = null
  let interval = null

  function restAPI(rawRoomId) {
    if (!rawRoomId) return e => e
    const roomId = rawRoomId.toUpperCase()


    if (interval) clearInterval(interval)
    interval = setInterval(() => {
      fetch(
        `${
          PROTOCOL
        }://${
          domain
        }/?method=get&room=${
          roomId
        }`
      ).then(res => res.json())
       .then(data => port.postMessage(data))
    }, REST_API_TIMEOUT)

    return data => {
      if (data) fetch(
        `${
          PROTOCOL
        }://${
          domain
        }/?method=send&room=${
          roomId
        }&data=${
          data
        }`
      )
    }
  }

  let wsAPI

  (async () => {
    try {
      const socket = await io(`https://${domain}/`)
      wsAPI = (rawRoomId) => {
        if (!rawRoomId) return e => e
        const roomId = rawRoomId.toUpperCase()

        let lastChange = 0
        socket.on('message', message => {
            port.postMessage(JSON.parse(message))
        })

        return data => {
          if (data)
            socket.send(`${roomId} ${data}`)
        }
      }
      type = 'socket'
    } catch(e) {
      console.log(e)
      type = 'rest'
    }
  })()

  return {
    /**
     * when button gets clicked/video state change
     * this function gets callbacked with msg
     * that contains current state
     */
    onUIMessage(msg) {
      const { roomId: newRoomId, data } = msg
      if (newRoomId != roomId) {
        roomId = newRoomId
        if (type === 'socket') API = wsAPI(roomId)
        else  API = restAPI(roomId)
      }
      if (API) API(data)
    },
    /**
     * Just connect port for communication
     */
    connectPort(__port) {
      port = __port
    },
  }
}

