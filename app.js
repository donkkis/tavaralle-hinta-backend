const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const config = require('./utils/config')
const listingRouter = require('./controllers/listings')
const mongoclient = config.mongoclient

console.log('connecting to MongoDB...')
mongoclient.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use('/api', listingRouter)

module.exports = {
  app,
  mongoclient
}