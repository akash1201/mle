import mongoose from "mongoose";

const EarningSchema = mongoose.Schema(
  {
    vendorId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Earning = mongoose.model("Earning", EarningSchema);

export default Earning;
