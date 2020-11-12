const express = require('express')
// require('dotenv').config()
const cors = require('cors')
const app = express()
const config = require('./utils/config')
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const InsertOp = require('./models/insertOp')

console.log('connecting to MongoDB...')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))

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

const PORT = config.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
