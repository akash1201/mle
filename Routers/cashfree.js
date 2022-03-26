import express from 'express';
import {createOrder} from '../Controllers/cashfree.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.get(`/create-order/:amount`, protect, createOrder)

export default router;