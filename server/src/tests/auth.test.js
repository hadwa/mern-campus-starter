import request from 'supertest';
import app from '../app.js';
import { setupDB, teardownDB } from './helpers.js';

beforeAll(async () => { await setupDB(); });
afterAll(async () => { await teardownDB(); });

test('register & login flow', async () => {
  const reg = await request(app).post('/api/auth/register').send({
    name: 'Alice', email: 'alice@example.com', password: 'password123'
  });
  expect(reg.status).toBe(201);
  expect(reg.body.token).toBeDefined();

  const login = await request(app).post('/api/auth/login').send({
    email: 'alice@example.com', password: 'password123'
  });
  expect(login.status).toBe(200);
  expect(login.body.user.email).toBe('alice@example.com');

  const me = await request(app).get('/api/auth/me').set('Authorization', "Bearer " + login.body.token);
  expect(me.status).toBe(200);
  expect(me.body.user.name).toBe('Alice');
});
