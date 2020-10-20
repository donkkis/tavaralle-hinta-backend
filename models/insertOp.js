const mongoose = require('mongoose')

const insertOpSchema = new mongoose.Schema({
    created: Date,
    insert_count: Number
})

module.exports = mongoose.model('InsertOp', insertOpSchema, 'insertOps')