import express from 'express';
import { generateOrderToken } from '../Controllers/cashfree.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.get(`/genarate-order`, protect, generateOrderToken)