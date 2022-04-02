import asyncHandler from "express-async-handler";
import PaytmChecksum from "./PaytmChecksum.js";
import dotenv from 'dotenv';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import https from 'https'

dotenv.config()

const generateSignature = async(body) => {
    
    var paytmChecksum =await PaytmChecksum.generateSignature(JSON.stringify(body), process.env.PAYTM_MERCHANT_KEY);
    return paytmChecksum;
   
}

const testChecksum = asyncHandler( async (req, res)=>{
  
    let id = uuidv4()
    let token = req.headers.authorization.split(' ')[1]
    let userid = jwt.verify(token, process.env.JWT_SECRET)

//     var body = {
//         requestType:"Payment",
//     mid: process.env.PAYTM_MERCHANT_ID,
//     websiteName:"https://jlemegamart.com",
//     orderId:id,
//     txnAmount:{value:req.params.amount,currency:"INR"},
//     userInfo:{custId:userid.id},
//     callbackUrl:"https://jlemegamart.com"
// }
    
//     console.log(body)

    // let checksum = await generateSignature(body)
    // let response = await fetch(`https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MERCHANT_ID}&orderId=${id}`,
    // {
    //     method : "POST",
    //     body : {"body":JSON.stringify(body),"head":{"signature":checksum}}
    // }
    // )
    // let resData = await response.json()
    // console.log("Response---:---", resData)

    var paytmParams = {};

paytmParams.body = {
    "requestType"   : "Payment",
    "mid"           : process.env.PAYTM_MERCHANT_ID,
    "websiteName"   : "https://jlemegamart.com",
    "orderId"       : id,
    "callbackUrl"   : "https://jlemegamart.com",
    "txnAmount"     : {
        "value"     : req.params.amount,
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : userid.id,
    },
};

PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MERCHANT_KEY).then(function(checksum){
    paytmParams.head = {
        "signature"    : checksum
    };
    console.log('--Data---', paytmParams)
    var post_data = JSON.stringify(paytmParams);
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
        },
        body : post_data
    };
    var response = "";
    var post_req = https.request(options, function(post_res) {
        post_res.on('data', function (chunk) {
            response += chunk;
        });

        post_res.on('end', function(){
            console.log('Response: ', response);
        });
    })

    post_req.write(post_data);
    post_req.end();
})
  
    // res.json({data : checksum, orderid : id})
  
})

export {testChecksum}