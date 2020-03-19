const express = require('express')
const app = express()
const { artwork, bio } = require('./dummyData')

const PORT = process.env.PORT || 3000

app.use(express.static(`${__dirname}/public`))

app.get('/artwork', (req, res) => {
  res.json(artwork)
})

app.get('/bio', (req, res) => {
  res.json(bio)
})

app.listen(PORT, () => console.log('...listening on port:' + PORT))