import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv'
import {v4 as uuidv4} from 'uuid'
import crypto from 'crypto'

dotenv.config()

const calculateHash = asyncHandler( async (req, res)=>{

        try{
          let id = uuidv4()
          // let hash = sha512(`${process.env.PAYU_MERCHANT_KEY}|${id}|100|RPIN|akash|jlemegamart@gmail.com|udf1|udf2|udf3|udf4|udf5||||||${process.env.PAYU_SALT_V1}`)
          var hash = crypto.createHash('sha512');
          var data = hash.update(`${process.env.PAYU_MERCHANT_KEY}|${id}|${parseFloat(req.params.amount).toFixed(2)}|RPIN|${req.body.name}|jlemegamart@gmail.com|udf1|udf2|udf3|udf4|udf5||||||${process.env.PAYU_SALT_V1}`);
          let gen_hash= data.digest('hex');
          res.json({hash : gen_hash, orderId : id})
        }catch(err){
                  console.log(err)
        }
})

export {calculateHash}