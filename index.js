const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const Listing = require('./models/listing')

app.use(cors())

app.get('/api/search/:query', async (req, res) => {
    const result = await Listing.find({ title: {$regex: req.params.query } })
    console.log(result)
    res.json(result).end()
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
