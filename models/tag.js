const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    tag: String,
    count: Number
})

module.exports = mongoose.model('Tag', tagSchema, 'tags')