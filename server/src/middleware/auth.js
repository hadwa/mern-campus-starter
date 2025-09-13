import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const [, token] = authHeader.split(' '); // "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

// Optional: load full user document
export async function attachUser(req, res, next) {
  if (!req.user?.id) return next();
  const user = await User.findById(req.user.id).lean();
  req.userDoc = user;
  next();
}
