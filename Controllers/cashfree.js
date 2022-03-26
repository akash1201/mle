import asyncHandler from 'express-async-handler';
import fetch, {Headers} from 'node-fetch';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
import { v4 as uuidv4 } from 'uuid'


dotenv.config();

const createOrder = asyncHandler(async (req, res)=>{


          let amount = req.params.amount;
          let token = req.headers.authorization.split(' ')[1]
          let userid = jwt.verify(token, process.env.JWT_SECRET)

          let user = await User.findById(userid.id);

          var myHeaders = new Headers();
          myHeaders.append("x-api-version", "2022-01-01");
          myHeaders.append("x-client-id", process.env.CASH_FREE_ID);
          myHeaders.append("x-client-secret", process.env.CASH_FREE_SECRET);
          myHeaders.append("Content-Type", "application/json");
          
          var raw = JSON.stringify({
            "order_id": uuidv4(),
            "order_amount": amount,
            "order_currency": "INR",
            "order_note": "R Pin generation",
            "customer_details": {
              "customer_id": user._id,
              "customer_email": "jlemegamart@gmail.com",
              "customer_phone": user.phone
            }
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://sandbox.cashfree.com/pg/orders", requestOptions)
            .then(response => response.json())
            .then(result => res.json(result))
            .catch(error => res.json(error));


});

export { createOrder }