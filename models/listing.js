const mongoose = require('mongoose')

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