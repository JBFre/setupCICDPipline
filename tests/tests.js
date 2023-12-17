const request = require('supertest');
const app = require('../index'); // assuming your index.js is one level above the tests directory

describe('GET /', () => {
  it('responds with "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
  });
});
