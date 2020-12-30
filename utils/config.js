require('dotenv').config()
const mongoose = require('mongoose')
const mongomock = require('mongo-mock')

let PORT = process.env.PORT
let MONGODB_URI
let mongoclient

switch (process.env.NODE_ENV) {
    case 'development':
        MONGODB_URI = process.env.MONGODB_URI
        mongoclient = mongoose
        break
    case 'production':
        MONGODB_URI = process.env.MONGODB_URI
        mongoclient = mongoose
        break
    case 'test':
        MONGODB_URI = process.env.MONGODB_TEST_URI
        mongoclient = mongomock.MongoClient
        break
    default:
        break
}

module.exports = {
    MONGODB_URI,
    PORT,
    mongoclient
}