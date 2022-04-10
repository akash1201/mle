import express from 'express';
import { calculateHash } from '../Controllers/payu.js';
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router();

router.post(`/calculate-hash/:amount`, protect,calculateHash)

export default router;