import express from "express";
import {
  registerUser,
  authUser,
  generateRpin,
  getAllRpin,
  getMyDownlines,
  getUserInfo,
  registerVendor,
  generateBill,
  addUser,
  getUsers,
  getVendors,
  getUserCount,
  updateUserInfo,
  rpinGenerate,
  registerVendors,
  getFinances,
  postData,
} from "../Controllers/user.js";
import { protect, admin, vendor } from "../middleware/authMiddleware.js";

let router = express.Router();

router.post(`/register-user`, registerUser);
router.post(`/update-user-info`, updateUserInfo);
router.post(`/login`, authUser);
router.get(`/generate-rpin/:type`, protect, generateRpin);
router.get(`/get-all-rpin`, protect, getAllRpin);
router.get(`/get-my-downlines`, protect, getMyDownlines);
router.get(`/get-user-info`, protect, getUserInfo);
router.post(`/register-vendor`, protect, admin, registerVendor);
router.post(`/generate-bill`, protect, vendor, generateBill);
router.post(`/add-user`, protect, admin, addUser);
router.get(`/get-users`, protect, admin, getUsers);
router.get(`/get-vendors`, protect, admin, getVendors);

router.get(`/get-users-count`, protect, getUserCount);

router.post(`/rpin`, protect, rpinGenerate);
router.post(`/link-cashfree/:pageNo?`, registerVendors);

router.get(`/finances`, protect, getFinances);
// router.post(`/post-data`, postData);

export default router;
