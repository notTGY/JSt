const express = require('express')
const cors = require("cors")
const app = express()

app.use(cors())

let storage = {}

app.get('/', (req, res) => {
  const {query} = req
  console.log(query)
  if (query.method === 'send') {
    if (!query.data || !query.room)
      return res.status(400)
    const data = JSON.parse(query.data)
    let emojis = []
    if (storage[query.room] && storage[query.room].emojis) emojis = storage[query.room].emojis
    if (data.newEmoji) emojis.push(data.newEmoji)
    const newData = {vidCurTime: data.vidCurTime, curTime: data.curTime, playbackRate: data.playbackRate, playing: data.playing, emojis}
    storage[query.room] = newData
    res.json({message: "ok"})
    return res.status(200)
  } else if (query.method === 'get') {
    if (!query.room) return res.status(400)
    if (!(storage[query.room])) return res.status(404)
    res.json(storage[query.room])
    return res.status(200)
  } else {
    return res.status(400)
  }
  console.log('closing request')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))
