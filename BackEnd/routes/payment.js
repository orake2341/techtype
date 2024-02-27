import express from "express";
import { paymentDetailsModel } from "../models/paymentDetails.js";
import { paymentHistoryModel } from "../models/paymentHistoryModel.js";

const paymentRouter = express.Router();

// UPLOAD PAYMENT
//=========================================
paymentRouter.post("/pay", async (req, res) => {
  try {
    const { picture, details } = req.body;
    const newPaymentDetails = new paymentDetailsModel({ picture, details });
    const confirmation = await newPaymentDetails.save();
    res
      .status(200)
      .json({ message: "Payment uploaded successfully", data: confirmation });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading payment", error: error.message });
  }
});

// CREATE JO WITH PAYMENT DETAILS
paymentRouter.post("/post", (req, res) => {
  try {
  } catch (error) {}
});

export default paymentRouter;
