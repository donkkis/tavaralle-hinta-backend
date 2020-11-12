require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI

switch (process.env.NODE_ENV) {
    case 'development':
        MONGODB_URI = process.env.MONGODB_URI
        break
    case 'production':
        MONGODB_URI = process.env.MONGODB_URI
        break
    case 'test':
        MONGODB_URI = process.env.MONGODB_TEST_URI
        break
    default:
        break
}

if (process.env.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST
}

module.exports = {
    MONGODB_URI,
    PORT
}