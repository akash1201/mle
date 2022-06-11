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
//Akash Code starts here

router.post(`/generate-token`, protect, generateOrderToken);
export default router;
