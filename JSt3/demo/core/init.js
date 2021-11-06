export default function init() {
  if (window.JST_INITED) return false
  window.JST_INITED = true
  let roomId = null

  function getRoomId() {
    return roomId
  }
  function setRoomId(val) {
    roomId = val
    return roomId
  }

  return [getRoomId, setRoomId]
}
