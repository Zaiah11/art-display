const express = require('express')
const app = express()
const { images } = require('./dummyData')

const PORT = process.env.PORT || 3000

app.use(express.static(`${__dirname}/public`))

app.get('/images', (req, res) => {
  res.send(JSON.stringify(images))
})

app.listen(PORT, () => console.log('...listening on port:' + PORT))