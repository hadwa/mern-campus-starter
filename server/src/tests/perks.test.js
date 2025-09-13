import request from 'supertest';
import app from '../app.js';
import { setupDB, teardownDB } from './helpers.js';

let token;
beforeAll(async () => {
  await setupDB();
  const reg = await request(app).post('/api/auth/register').send({
    name: 'Bob', email: 'bob@example.com', password: 'password123'
  });
  token = reg.body.token;
});

afterAll(async () => { await teardownDB(); });

test('create & list perks', async () => {
  const create = await request(app)
    .post('/api/perks')
    .set('Authorization', 'Bearer ' + token)
    .send({ title: 'Free Coffee', merchant: 'Campus Cafe', discountPercent: 100 });
  expect(create.status).toBe(201);

  const list = await request(app).get('/api/perks');
  expect(list.status).toBe(200);
  expect(list.body.perks.length).toBe(1);
  expect(list.body.perks[0].title).toBe('Free Coffee');
});

test('prevent anonymous create', async () => {
  const res = await request(app).post('/api/perks').send({ title: 'X', merchant: 'Y' });
  expect(res.status).toBe(401);
});
