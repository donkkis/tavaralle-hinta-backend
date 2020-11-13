const listingRouter = require('express').Router()
const Listing = require('../models/listing')
const InsertOp = require('../models/insertOp')

listingRouter.get('/hello', (req, res) => {
    res.send('Hello, this is Node!').end()
})

listingRouter.get('/search/:query', async (req, res) => {
    // Not scalable
    // https://stackoverflow.com/questions/7101703/how-do-i-make-case-insensitive-queries-on-mongodb
    // TODO use case-insensitive indexing https://docs.mongodb.com/manual/core/index-case-insensitive/
    const result = await Listing
        .find({ title: { $regex: new RegExp(req.params.query, 'i') } })
        .limit(250)
    res.json(result).end()
})

listingRouter.get('/lastinsert', async (req, res) => {
    const result = await InsertOp.findOne().sort({ created: 'desc' })
    res.json(result).end()
})

listingRouter.get('/count', async (req, res) => {
    const result = await Listing.estimatedDocumentCount()
    res.json(result).end()
})

module.exports = listingRouter