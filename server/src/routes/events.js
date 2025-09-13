// server/src/routes/events.js
import { Router } from 'express'
import * as ctrl from '../controllers/eventController.js'

const router = Router()

/**
 * TODO (Task 1):
 *  - Map routes to controller functions:
 *    GET    /        → ctrl.list
 *    GET    /:id     → ctrl.getById
 *    POST   /        → ctrl.create
 *    PUT    /:id     → ctrl.update
 *    DELETE /:id     → ctrl.remove
 *
 * Example:
 * router.get('/', ctrl.list)
 */

export default router
