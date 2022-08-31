import asyncHandler from "express-async-handler";
// const sdk = require("api")("@cashfreedocs-new/v2#97f8kl3sscv9e");
import User from "../Models/User.js";
import axios from "axios";
import base64 from "base-64";
import jwt from "jsonwebtoken";
import env from "dotenv";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
env.config();

const fetchDetail = asyncHandler(async (req, res) => {
  try {
    let bankDetail = {
      accountNumber: req.body.account,
      accountHolder: req.body.name,
      ifsc: req.body.ifsc,
    };

    const options = {
      method: "POST",
      url: "https://api.cashfree.com/api/v2/easy-split/vendors",
      headers: {
        Accept: "application/json",
        "x-api-version": "2022-01-01",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET,
        "Content-Type": "application/json",
      },

      data: {
        email: "jlemegamart@gmail.com",
        status: "ACTIVE",
        bank: bankDetail,
        phone: req.body.phone,
        name: req.body.name,
        id: req.body.userId,
        settlementCycleId: 2,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

const createOrder = asyncHandler(async (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let userid = jwt.verify(token, process.env.JWT_SECRET);
    const { amt } = req.body;
    const user = await User.findById(userid.id.toString());
    const num = Math.floor(Math.random() * 100000000);
    const accountNo = base64.decode(user.bankAccountNo);
    const bankifsc = base64.decode(user.bankIfsc);
    const parents = [];
    var ido = userid.id;
    var index = 1;
    var amm = 0;
    while (ido !== "parent") {
      if (index == 1) {
        amm = 250;
      }
      if (index == 2) {
        amm = 200;
      }
      if (index == 3) {
        amm = 200;
      }
      if (index == 4) {
        amm = 100;
      }
      if (index == 5) {
        amm = 100;
      }
      if (index == 6) {
        amm = 50;
      }
      if (index == 7) {
        amm = 50;
      }
      const us = await User.findById(ido);
      parents.push({ vendor_id: us.userId, amount: amm });
      ido = us.parentId;
      index = index + 1;
    }

    const split = parents.slice(0, 7);
    // const dt = new Date();
    // const month = dt.getMonth() + 1;
    // const year = dt.getFullYear();
    // const date = dt.getDate();
    const options = {
      method: "POST",
      url: "https://api.cashfree.com/pg/orders",
      headers: {
        Accept: "application/json",
        "x-api-version": "2022-01-01",
        "x-client-id": "208118e1ccc5ab57289542b19d811802",
        "x-client-secret": "95697f4003e1f962f28d8f04f91616ee62dff54e",
        "Content-Type": "application/json",
      },
      data: {
        order_id: num.toString(),
        order_amount: amt,
        order_currency: "INR",
        customer_details: {
          customer_id: user.userId,
          customer_email: "jlemegamart@gmail.com",
          customer_phone: user.phone,
          customer_name: user.name,
          customer_bank_account_number: accountNo,
          customer_bank_ifsc: bankifsc,
          // customer_bank_code: 3333,
        },
        order_meta: {
          return_url:
            "https://jlemegamart.com/generate-rpin/success/?order_id={order_id}&order_token={order_token}",
          notify_url: "https://b8af79f41056.eu.ngrok.io/webhook.php",
        },
        order_expiry_time: `2022-06-20T00:00:00Z`,
        order_note: "Place order",
        order_tags: { additionalProp: "string" },
        order_splits: [{ vendor_id: "merchantVendorId68543", amount: "10" }],
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const resp = response.data;
        const token = resp.order_token;
        const link = resp.payment_link;
        const cf_order = resp.cf_order_id;
        return res.status(200).json({ token, cf_order, link });
      })
      .catch(function (error) {
        return res.status(500).json({ error });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

const generateOrderToken = asyncHandler(async (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let userid = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findById(userid.id);
    if (user) {
      let config = {
        "Content-Type": "application/json",
        "x-api-version": "2022-01-01",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET,
      };
      let orderId = uuidv4();

      console.log(user.phone);

      let body = {
        order_id: orderId,
        order_amount: parseFloat(req.body.amount).toFixed(2),
        order_currency: "INR",
        order_note: "R-Pin Payment",
        customer_details: {
          customer_id: userid.id,
          customer_email: "jlemegamart@gmail.com",
          customer_phone: "+917431979503",
        },
      };

      let response = await fetch(`${process.env.URL}/pg/orders`, {
        method: "POST",
        headers: config,
        body: JSON.stringify(body),
      });
      let data = await response.json();
      console.log(data);

      res.json({ orderId: orderId, token: data.order_token });
    } else {
      res.status(400).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

export { generateOrderToken, createOrder, fetchDetail };
