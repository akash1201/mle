import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import env from "dotenv";
import userRoutes from "./Routers/user.js";
import incomeRoutes from "./Routers/income.js";
import morgan from "morgan";
// import razorpayRoutes from './Routers/razorpay.js'
// import cashfree from './Routers/cashfree.js'
import path from "path";
import paytmRoutes from "./Routers/paytm.js";
import payuRoutes from "./Routers/payu.js";
import GenerateRpin from "./Routers/GenerateRpin.js";

env.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_HOST).then(() => {
  console.log("DB Connected");
});

app.use(`/api/users`, userRoutes);
app.use(`/api/income`, incomeRoutes);
app.use(`/api/paytm`, paytmRoutes);
app.use(`/api/payu`, payuRoutes);
app.use(`/generate-rpin`, GenerateRpin);
// app.use(`/api/razorpay`, razorpayRoutes);
// app.use(`/api/cashfree`, cashfree);

const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === "production") {
  console.log("production");
  app.use(express.static(path.join(__dirname, "/mlefrontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "mlefrontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(3000, console.log("Server started"));
