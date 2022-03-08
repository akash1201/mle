import asyncHandler from 'express-async-handler';
import Bill from '../Models/Bill.js';
import User from '../Models/User.js';
import jwt from 'jsonwebtoken';

const incomeChartStatic = [
          {         id : 1,
                    name : 'Grocery',
                    data : [
                              {level : 1, cashback : 4},
                              {level : 2, cashback : 4},
                              {level : 3, cashback : 4},
                              {level : 4, cashback : 1},
                              {level : 5, cashback : 1},
                              {level : 6, cashback : 1},
                              {level : 7, cashback : 1}
                    ]
          },
          {
                    id : 2,
                    name : 'Other Products',
                    data : [
                              {level : 1, cashback : 4},
                              {level : 2, cashback : 4},
                              {level : 3, cashback : 4},
                              {level : 4, cashback : 1},
                              {level : 5, cashback : 1},
                              {level : 6, cashback : 1},
                              {level : 7, cashback : 1}
                    ]
          }
]

const membershipBenefits = [
          {name : 'Decoration', cashback : 25},
          {name : 'Vehicle Rent', cashback : 20},
          {name : 'Doctor Visit', cashback : 25},
          {name : 'Medecine', cashback : 25}
]

const getIncomeChart = asyncHandler(async (req, res)=>{
     
          res.json({data : incomeChartStatic});

});

const getMembershipBenefits = asyncHandler(async(req, res)=>{
      
          res.json({data : membershipBenefits})

})

const generateBill = asyncHandler(async (req, res)=>{

          let {userId} = req.body;
          let token = req.headers.authorization.split(' ')[1]
          let userid = jwt.verify(token, process.env.JWT_SECRET)
          console.log(userid.id)
          let billPerson = await User.findOne({_id : userid.id})
          let user = await User.findOne({userId : userId})
          if(!user){
                res.status(400).json({msg : 'User do not exists'})
          }else if(billPerson.userType != 'vendor'){
                    res.status(401).json({msg : 'User not authorized to generate bill'})
          }else{

                    let obj = {
                              issuedTo : userId,
                              issuedBy : userid.id,
                              amount : req.body.amount,
                              category : req.body.category,
                              details : req.body.details
                    }

                    let bill = await Bill.create(obj);
                    res.json({msg : 'Bill Created', data : bill});
          }
})

export { getIncomeChart, getMembershipBenefits, generateBill }