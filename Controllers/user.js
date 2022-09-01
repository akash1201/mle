import asyncHandler from "express-async-handler";
import User from "../Models/User.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import Rpin from "../Models/Rpin.js";
import { ObjectId } from "mongodb";
import Bill from "../Models/Bill.js";
import base64 from "base-64";
import axios from "axios";
import env from "dotenv";
import fetch from "node-fetch";

const registerUser = asyncHandler(async (req, res) => {
  let max = await User.aggregate([
    {
      $group: {
        _id: null,
        maxSlNo: { $max: "$slNo" },
      },
    },
  ]);

  let slno = max[0].maxSlNo ? max[0].maxSlNo + 1 : 1;

  let accNo = base64.encode(req.body.account);
  let ifsc = base64.encode(req.body.ifsc);

  let obj = {
    parentId: req.body.parentId,
    name: req.body.name,
    address: req.body.address,
    slNo: slno,
    userId: "JLE00" + slno,
    rPin: req.body.rpin,
    phone: req.body.phone,
    password: req.body.password,
    bankAccountNo: accNo,
    bankIfsc: ifsc,
  };

  try {
    let user = await User.create(obj);
    await Rpin.updateOne(
      { rpin: req.body.rpin },
      { $set: { iAssigned: true, assignedTo: user._id } }
    );
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
        phone: obj.phone,
        name: obj.name,
        id: obj._id,
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
    res.json(obj);
  } catch (err) {
    console.log(err);
  }
});

const authUser = asyncHandler(async (req, res) => {
  let userName = req.body.userName;

  let user = await User.findOne({ userId: userName });

  if (user && (await user.matchPassword(req.body.password))) {
    res.json({
      id: user._id,
      userName: user.userId,
      name: user.name,
      token: generateToken(user._id),
      userType: user.userType,
      role: user.role,
    });
  } else {
    res.status(500).json({ msg: "Invalid email or password" });
  }
});

const generateRpin = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);
  console.log(userid.id);

  let rpinObj = await Rpin.findOne({
    orderId: req.params.type,
    generatedBy: userid.id,
  });
  console.log(rpinObj);

  rpinObj.paymentStatus = "paid";

  await rpinObj.save();

  res.json({ rpin: rpinObj.rpin });
});

const getAllRpin = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);

  let pins = await Rpin.find({
    generatedBy: userid.id,
    paymentStatus: "paid",
    iAssigned: false,
  });

  res.json({ rpins: pins });
});

let users = [];
const getMyDownlines = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);

  users = await User.find({});
  let user = [...users];

  let data = [];

  for (let i = 0; i < user.length; ++i) {
    if (user[i].parentId == userid.id) {
      data.push({
        id: user[i]._id,
        name: user[i].name,
        userId: user[i].userId,
        designation: user[i].designation,
        address:
          user[i].address.line1 +
          ", " +
          user[i].address.city +
          ", " +
          user[i].address.district,
        phone: user[i].phone,
        children: await getClildren(ObjectId(user[i]._id).toString()),
      });
    }
  }

  res.json({ users: data });
});

const getClildren = async (id) => {
  let data = [];
  let user = [...users];

  for (let i = 0; i < user.length; ++i) {
    if (user[i].parentId == id) {
      data.push({
        id: user[i]._id,
        name: user[i].name,
        userId: user[i].userId,
        designation: user[i].designation,
        address:
          user[i].address.line1 +
          ", " +
          user[i].address.city +
          ", " +
          user[i].address.district,
        phone: user[i].phone,
        children: await getClildren(ObjectId(user[i]._id).toString()),
      });
    }
  }

  return data;
};

const getUserInfo = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);

  let user = await User.findOne({ _id: userid.id }, { _id: 0, password: 0 });

  console.log(user);
  user.bankAccountNo = base64.decode(user.bankAccountNo);
  user.bankIfsc = base64.decode(user.bankIfsc);
  res.json({ user: user });
});

// Update User Details
const updateUserInfo = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);
  // { _id: 0, password: 0 })
  let user = await User.findOne({ _id: userid.id });
  user.aadharNo = req.body.aadharNo || user.name;
  user.panNo = req.body.panNo || user.panNo;
  user.bankIfsc = req.body.bankIfsc || user.bankIfsc;
  user.bankAccountNo = req.body.bankAccountNo || user.bankAccountNo;
  user.phone = req.body.phone || user.phone;
  await user.save();

  res.json("User Details Updated");
});

const registerVendor = asyncHandler(async (req, res) => {
  try {
    let max = await User.aggregate([
      {
        $group: {
          _id: null,
          maxSlNo: { $max: "$slNo" },
        },
      },
    ]);

    let token = req.headers.authorization.split(" ")[1];
    let userid = jwt.verify(token, process.env.JWT_SECRET);

    let pin = uuidv4();

    let slno = max[0].maxSlNo ? max[0].maxSlNo + 1 : 1;
    let obj = {
      parentId: userid.id,
      name: req.body.name,
      address: req.body.address,
      slNo: slno,
      userId: "JLE00" + slno,
      rPin: pin,
      userType: "vendor",
      role: "vendor",
      phone: req.body.phone,
      password: req.body.password,
    };
    let vendor = await User.create(obj);
    res.json({ vendor: vendor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const generateBill = asyncHandler(async (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let userid = jwt.verify(token, process.env.JWT_SECRET);

    let vendor = await User.findById(userid.id);

    let obj = {
      issuedTo: req.body.issuedTo,
      issuedBy: vendor.userId,
      amount: req.body.amount,
      category: req.body.category,
    };
    let bill = await Bill.create(obj);

    res.json({ bill: bill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const addUser = asyncHandler(async (req, res) => {
  let user = await User.findOne({ userId: req.body.userId });
  if (user) {
    res.status(400).json({ message: "User Id in use" });
  } else {
    let rpin = uuidv4();

    let max = await User.aggregate([
      {
        $group: {
          _id: null,
          maxSlNo: { $max: "$slNo" },
        },
      },
    ]);

    let slno = max[0].maxSlNo ? max[0].maxSlNo + 1 : 1;

    let accNo = base64.encode(req.body.account);
    let ifsc = base64.encode(req.body.ifsc);

    let obj = {
      parentId: req.body.parentId,
      name: req.body.name,
      address: req.body.address,
      slNo: slno,
      rPin: rpin,
      userId: req.body.userId,
      phone: req.body.phone,
      password: req.body.password,
      contactId: contactId,
      bankAccountNo: accNo,
      bankIfsc: ifsc,
    };

    let user = await User.create(obj);

    //cashfree
    let data = {
      email: "jlemegamart@gmail.com",
      status: "ACTIVE",
      bank: {
        accountNumber: base64.decode(user.bankAccountNo),
        accountHolder: user.name,
        ifsc: base64.decode(user.bankIfsc),
      },
      phone: user.phone ? user.phone : "7431979503",
      name: user.name,
      id: user.userId,
      settlementCycleId: 2,
    };

    let response = await fetch(`${process.env.URL}/api/v2/easy-split/vendors`, {
      method: "POST",
      headers: config,
      body: JSON.stringify(data),
    });
    //cashfree

    res.json(user);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  let user = await User.find({}, { password: 0 });
  res.json(user);
});

const getVendors = asyncHandler(async (req, res) => {
  let vendors = await User.find({ userType: "vendor" }, { password: 0 });
  res.json(vendors);
});

const countDL = async (user, count) => {
  let users = await User.find({ parentId: user._id });
  if (users.length != 0) {
    for (let i = 0; i < users.length; ++i) {
      ++count;
      count = await countDL(users[i], count);
    }
  }
  return count;
};

const getUserCount = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let userid = jwt.verify(token, process.env.JWT_SECRET);

  let users = await User.find({ parentId: userid.id });
  let directDL = users.length;

  let allDL = 0;
  if (users.length != 0) {
    for (let i = 0; i < users.length; ++i) {
      ++allDL;
      allDL = await countDL(users[i], allDL);
    }
  }
  res.json({ directDL: directDL, allDL: allDL, totalEarning: 0, thisMonth: 0 });
});

const rpinGenerate = asyncHandler(async (req, res) => {
  try {
    let orderId = req.body.orderId;
    let type = req.body.type;
    let token = req.headers.authorization.split(" ")[1];
    let userid = jwt.verify(token, process.env.JWT_SECRET);
    let rpin = uuidv4();

    let obj = {
      rpin: rpin,
      generatedBy: userid.id,
      paymentStatus: "paid",
      isAssigned: false,
      type: type,
      orderId: orderId,
    };

    let pin = await Rpin.create(obj);

    let arr = [];
    let user = await User.findById(userid.id);
    let parentId = user.parentId;
    for (let i = 0; i < 7; ++i) {
      let obj = {};
      if (parentId != "parent") {
        let parent = await User.findById(parentId);
        parentId = parent.parentId;
        if (parent.userType != "admin") {
          let amount = 45;
          if (i == 0) {
            amount = 225;
          } else if (i == 1 || i == 2) {
            amount = 180;
          } else if ((i = 3)) {
            amount = 90;
          }

          obj = {
            vendorId: parent._id,
            amount: amount,
            percentage: null,
          };
          console.log(obj);
          arr = [...arr, obj];
        }
      }
    }
    if (arr.length != 0) {
      let config = {
        "Content-Type": "application/json",
        "x-api-version": "2022-01-01",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET,
      };
      let body = {
        split: arr,
        splitType: "ORDER_AMOUNT",
      };
      let response = await fetch(
        `${process.env.URL}/api/v2/easy-split/orders/${orderId}/split`,
        {
          method: "POST",
          headers: config,
          body: JSON.stringify(body),
        }
      );
      res.json(pin);
    } else {
      res.json(pin);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const registerVendors = asyncHandler(async (req, res) => {
  let page = req.params.pageNo ? req.params.pageNo : 1;
  let skip = (page - 1) * 10;
  let users = await User.find({}).skip(skip).limit(10);
  let config = {
    "Content-Type": "application/json",
    "x-api-version": "2022-01-01",
    "x-client-id": process.env.CASHFREE_APP_ID,
    "x-client-secret": process.env.CASHFREE_SECRET,
  };
  let arr = [];
  for (let i = 0; i < users.length; ++i) {
    let user = users[i];

    if (user.bankAccountNo && user.bankIfsc) {
      let data = {
        email: "jlemegamart@gmail.com",
        status: "ACTIVE",
        bank: {
          accountNumber: base64.decode(user.bankAccountNo),
          accountHolder: user.name,
          ifsc: base64.decode(user.bankIfsc),
        },
        phone: user.phone ? user.phone : "7431979503",
        name: user.name,
        id: user._id,
        settlementCycleId: 2,
      };

      let response = await fetch(
        `${process.env.URL}/api/v2/easy-split/vendors`,
        {
          method: "POST",
          headers: config,
          body: JSON.stringify(data),
        }
      );
      let data1 = await response.json();
      arr = [...arr, data1];
    }
  }
  res.json(arr);
});
export {
  registerVendors,
  rpinGenerate,
  getUserCount,
  updateUserInfo,
  getVendors,
  getUsers,
  addUser,
  registerUser,
  authUser,
  generateRpin,
  getAllRpin,
  getMyDownlines,
  getUserInfo,
  registerVendor,
  generateBill,
};
