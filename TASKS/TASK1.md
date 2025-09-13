# Task 1 — Intro to Node/Express + CRUD (in-memory)

## Goal
Build a CRUD for **Events** using an in-memory array (no DB yet).

## Steps
1) Wire the router in `server/src/app.js`:
```js
import eventsRoutes from './routes/events.js'
app.use('/api/events', eventsRoutes)

router.get('/', ctrl.list)
router.get('/:id', ctrl.getById)
router.post('/', ctrl.create)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)

curl -i -X POST http://localhost:4000/api/events \
  -H 'Content-Type: application/json' \
  -d '{"title":"Welcome Fair","date":"2025-10-01T10:00:00Z"}'

curl -s http://localhost:4000/api/events
curl -s http://localhost:4000/api/events/1

curl -i -X PUT http://localhost:4000/api/events/1 \
  -H 'Content-Type: application/json' \
  -d '{"title":"Welcome Fair (Updated)","date":"2025-10-02T10:00:00Z"}'

curl -i -X DELETE http://localhost:4000/api/events/1

