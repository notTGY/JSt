const cors = require('cors')

const express = require('express')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
  },
})

app.use(cors())
app.use(express.static('front/out'))

let storage = {}

app.get('/', (req, res) => {
  const {query} = req
  console.log(query)
  if (query.method === 'send') {
    if (!query.data || !query.room)
      return res.status(400)

    const data = JSON.parse(query.data)

    let emojis = []
    if (storage[query.room] && storage[query.room].emojis)
      emojis = storage[query.room].emojis
    if (data.newEmoji)
      emojis.push(data.newEmoji)

    const newData = {
      vidCurTime: data.vidCurTime,
      curTime: data.curTime,
      playbackRate: data.playbackRate,
      playing: data.playing,
      emojis
    }
    storage[query.room] = newData
    io.to(query.room).emit('message', newData)
    return res.status(200)
  } else if (query.method === 'get') {
    if (!query.room) return res.status(400)
    if (!(storage[query.room])) return res.status(404)

    res.json(storage[query.room])
    return res.status(200)
  } else {
    return res.status(400)
  }
})

io.on('connection', socket => {
  socket.on('message', mes => {
    const [ roomId, rawData ] = mes.split(' ')
    if (!rawData || !roomId) return

    const data = JSON.parse(rawData)

    const newData = {
      vidCurTime: data.vidCurTime,
      curTime: data.curTime,
      playbackRate: data.playbackRate,
      playing: data.playing,
    }
    storage[roomId] = newData

    console.log(`ws\troom: ${roomId}\t${rawData}`)
    socket.join(roomId)
    socket.to(roomId).emit('message', rawData)
  })
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`listening on port ${port}`))
