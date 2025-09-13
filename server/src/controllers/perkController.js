import Joi from 'joi';
import { Perk } from '../models/Perk.js';

const perkSchema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().allow(''),
  category: Joi.string().valid('food','tech','travel','fitness','other').default('other'),
  discountPercent: Joi.number().min(0).max(100).default(0),
  merchant: Joi.string().allow('')
});

export async function listPerks(req, res, next) {
  try {
    const { q, minDiscount } = req.query;
    const filter = {};
    if (q) filter.$or = [
      { title: new RegExp(q, 'i') },
      { merchant: new RegExp(q, 'i') }
    ];
    if (minDiscount) filter.discountPercent = { $gte: Number(minDiscount) };
    const perks = await Perk.find(filter).sort({ createdAt: -1 }).lean();
    res.json({ perks });
  } catch (err) { next(err); }
}

export async function getPerk(req, res, next) {
  try {
    const perk = await Perk.findById(req.params.id).lean();
    if (!perk) return res.status(404).json({ message: 'Perk not found' });
    res.json({ perk });
  } catch (err) { next(err); }
}

export async function createPerk(req, res, next) {
  try {
    const { value, error } = perkSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const doc = await Perk.create({ ...value, createdBy: req.user.id });
    res.status(201).json({ perk: doc });
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: 'Duplicate perk for this merchant' });
    next(err);
  }
}

export async function updatePerk(req, res, next) {
  try {
    const { value, error } = perkSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const doc = await Perk.findByIdAndUpdate(req.params.id, value, { new: true, runValidators: true });
    if (!doc) return res.status(404).json({ message: 'Perk not found' });
    res.json({ perk: doc });
  } catch (err) { next(err); }
}

export async function deletePerk(req, res, next) {
  try {
    const doc = await Perk.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Perk not found' });
    res.json({ ok: true });
  } catch (err) { next(err); }
}
