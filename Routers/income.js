import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { generateBill, getIncomeChart, getMembershipBenefits } from '../Controllers/income.js';

let router = express.Router();

router.get(`/get-income-chart`, protect, getIncomeChart);
router.get(`/get-membership-benefits`, protect, getMembershipBenefits);
router.post(`/generate-bill`, protect, generateBill);

export default router;