import express from 'express'
import { testChecksum } from '../Controllers/paytm.js';
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.get(`/checksum/:amount`,protect,testChecksum)

export default router;