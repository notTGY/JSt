const express = require('express')
const app = express()

let storage = {}

app.get('/', (req, res) => {
  const {query} = req
  if (query.method == 'send') {
    storage[query.room] = JSON.parse(query.data)
    setTimeout(e => {delete(storage[query.room])}, 10000)
  } else if (query.method == 'get') {
    res.json(storage[query.room])
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))