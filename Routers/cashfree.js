import express from "express";
import {
  generateOrderToken,
  createOrder,
  fetchDetail,
} from "../Controllers/cashfree.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(`/create-order`, createOrder);
router.post(`/fetchDetail`, fetchDetail);
export default router;
