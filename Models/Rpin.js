import mongoose from 'mongoose'


const RpinSchema = mongoose.Schema({

        rpin : {
                  type : String,
                  required : true
        },
        generatedBy : {
                  type : String,
                  required : true
        },
        paymentStatus : {
                   type : String,
                   default : 'unpaid'
        },
        iAssigned : {
                type : Boolean,
                default : false
        },
        assignedTo : {
                  type : String
        },
        type : {
                type : Number,
                default : 1
        },
        orderId : {
                type : String,
                required : true
        }
},
          {
          timestamps: true,
        }
)


const Rpin = mongoose.model('Rpin',RpinSchema)

export default Rpin