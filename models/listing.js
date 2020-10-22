const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log('connecting to MongoDB...')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  const listingSchema = new mongoose.Schema({
      category: String,
      id: String,
      image_link: String,
      price: Number,
      product_link: String,
      region: String,
      subcategory: String,
      time_stamp: String,
      title: String
  })

module.exports = mongoose.model('Listing', listingSchema)