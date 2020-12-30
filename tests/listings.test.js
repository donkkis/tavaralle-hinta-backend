const supertest = require('supertest')
const { app, mongoclient } = require('../app')
const config = require('../utils/config')

const api = supertest(app)

test('Server can say hello', async () => {
  const response = await api.get('/api/hello')
  expect(response.text).toBe('Hello, this is Node!')
})

afterAll(async () => {
})
