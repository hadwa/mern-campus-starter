// server/src/controllers/eventController.js

// ⛔ Task 1 is DB-free. Do NOT import Mongoose here.
// Use an in-memory array to practice Express CRUD.
let events = []
let nextId = 1

// Helpers (optional)
const isISO = (s) => typeof s === 'string' && !isNaN(Date.parse(s))
const toInt = (v) => (Number.isInteger(+v) && +v > 0 ? +v : null)

/**
 * TODO (Task 1): Implement using the in-memory array
 * Requirements:
 *  - list:    return { events } sorted newest-first by id
 *  - getById: validate id → 400 if bad id; 404 if not found; else { event }
 *  - create:  require { title, date } (date ISO-ish); 201 on success → { event }
 *  - update:  validate id + body like create; 404 if not found; return { event }
 *  - remove:  validate id; 404 if not found; return { ok: true }
 *  - Use proper status codes: 200, 201, 400, 404
 */

export function list(req, res) {
  return res.status(501).json({ message: 'Not implemented' })
}

export function getById(req, res) {
  return res.status(501).json({ message: 'Not implemented' })
}

export function create(req, res) {
  return res.status(501).json({ message: 'Not implemented' })
}

export function update(req, res) {
  return res.status(501).json({ message: 'Not implemented' })
}

export function remove(req, res) {
  return res.status(501).json({ message: 'Not implemented' })
}
