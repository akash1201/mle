import express from 'express'

const router = express.Router();

router.post(`/:success/:orderId`,  (req, res)=>{return res.redirect(`${process.env.PAYTM_CALLBACK}/generate-rpin/${req.params.success}/${req.params.orderId}`)})

export default router;