const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Server can say hello', async () => {
  const response = await api.get('/api/hello')
  expect(response.text).toBe('Hello, this is Node!')
})

afterAll(() => {
  mongoose.connection.close()
})
