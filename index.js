const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const Listing = require('./models/listing')
const InsertOp = require('./models/insertOp')

app.use(cors())

app.get('/api/search/:query', async (req, res) => {
    // Not scalable
    // https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb
    // TODO use case-insensitive indexing https://docs.mongodb.com/manual/core/index-case-insensitive/
    const result = await Listing
      .find({ title: {$regex: new RegExp(req.params.query, 'i') } })
      .limit(250)
    res.json(result).end()
})

app.get('/api/lastinsert', async (req, res) => {
  const result = await InsertOp.findOne().sort({created: 'desc'})
  res.json(result).end()
})

app.get('/api/count', async (req, res) => {
  const result = await Listing.estimatedDocumentCount()
  res.json(result).end()
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
