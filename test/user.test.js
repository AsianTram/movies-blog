const request =require('supertest')

const User = require('../models/User.js')
const app = require('../index.js')
const dbhandlers = require('./db-handler.js')

describe('user api', ()=>{
  beforeEach(async ()=>{
    await dbhandlers.connect()
  })
  afterEach(async ()=>{
    await dbhandlers.clearDatabase()
  })
  afterAll(async ()=>{
    await dbhandlers.closeDatabase()
  })
  
  it('should let user signup and give token', async()=>{
    const res= await request(app)
      .post('/api/user/signup')
      .send({
        name: 'Tester',
        email: 'tester@gmail.com',
        password: '123456'
      })
    expect(res.status).toBe(200)
    expect(res.body.token).not().toBeNull();
  })
})