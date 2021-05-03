const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

let storage = {}

app.get('/', (req, res) => {
  const {query} = req
  console.log(query)
  if (query.method === 'send') {
    storage[query.room] = JSON.parse(query.data)
    setTimeout(e => {delete(storage[query.room])}, 10000)
    res.json({message: "ok"})
    res.status(200)
    return res
  } else if (query.method === 'get') {
    if (!storage[query.room]) return
    res.json(storage[query.room])
    res.status(200)
    return res
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))
