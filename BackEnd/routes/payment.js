import express from "express";
import { userMod } from "../models/userModel.js";
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

paymentRouter.put("/set", async (req, res) => {
  try {
    const { userid, joid, paymentdetails } = req.body;
    const user = await userMod.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }

    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }

    jobOrder.PaymentDetails = paymentdetails;
    await user.save();

    res.status(200).send("payment details sey successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error setting payment details", error: error.message });
  }
});

// CREATE JO WITH PAYMENT DETAILS
paymentRouter.post("/post", (req, res) => {
  try {
  } catch (error) {}
});

export default paymentRouter;
