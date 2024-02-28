import express from "express";
import { userMod } from "../models/userModel.js";
const paymentRouter = express.Router();

// UPLOAD PAYMENT
//=========================================
paymentRouter.put("/pay", async (req, res) => {
  try {
    const { joid, picture } = req.body;
    const user = await userMod.findById("65de029e344af5519b2e120c");
    if (!user) {
      throw new Error("User not found");
    }
    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }

    jobOrder.PaymentDetails.paymentScreenshots.push(picture);
    await user.save();
    res.status(200).send("payment details sey successfully");
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
