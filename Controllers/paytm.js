import asyncHandler from "express-async-handler";
import PaytmChecksum from "./PaytmChecksum.js";
import dotenv from 'dotenv';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import https from 'https'
import Rpin from "../Models/Rpin.js";

dotenv.config()

const generateSignature = async(body) => {
    
    var paytmChecksum =await PaytmChecksum.generateSignature(JSON.stringify(body), process.env.PAYTM_MERCHANT_KEY);
    return paytmChecksum;
   
}

const testChecksum = asyncHandler( async (req, res)=>{

let id = uuidv4()
let token = req.headers.authorization.split(' ')[1]
let userid = jwt.verify(token, process.env.JWT_SECRET)

var paytmParams = {};

paytmParams.body = {
    "requestType"   : "Payment",
    "mid"           : process.env.PAYTM_MERCHANT_ID,
    "websiteName"   : process.env.PAYTM_WEBSITE,
    "orderId"       : id,
    "callbackUrl"   : `/generate-rpin/success/${id}`,
    "txnAmount"     : {
        "value"     : parseFloat(req.params.amount).toFixed(2),
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : userid.id,
    },
};

PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MERCHANT_KEY).then(async function(checksum){

    paytmParams.head = {
        "signature"    : checksum
    };

    var post_data = JSON.stringify(paytmParams);
    console.log(post_data);
    // console.log

    var options = {

        /* for Staging */
        hostname: 'securegw-stage.paytm.in',

        /* for Production */
         // hostname: 'securegw.paytm.in',

        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MERCHANT_ID}&orderId=${id}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': post_data.length
        }
    };

    var response = "";
    var post_req = https.request(options, function(post_res) {
        post_res.on('data', function (chunk) {
            response += chunk;
        });

        post_res.on('end', async function(){
            let resp = JSON.parse(response)
            console.log('Response: 1234', resp.head);
            let rpin = uuidv4()
            let type = 1, amount = req.params.amount;
            if(amount == 1650){
                 type = 2;
            }else if (amount == 2100){
                 type = 3;
            }
            let obj = {
                rpin : rpin,
                generatedBy : userid.id,
                type : type,
                orderId : id
            }
            await Rpin.create(obj)
          res.json({data : resp.body.txnToken, orderid : id})
        });
    });

    post_req.write(post_data);
    post_req.end();
   
});
  
    // res.json({data : checksum, orderid : id})
  
})

export {testChecksum}