import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listPerks, getPerk, createPerk, updatePerk, deletePerk } from '../controllers/perkController.js';

const router = Router();

router.get('/', listPerks);
router.get('/:id', getPerk);
router.post('/', requireAuth, createPerk);
router.put('/:id', requireAuth, updatePerk);
router.delete('/:id', requireAuth, deletePerk);

export default router;
