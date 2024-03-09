import express from "express";
import { userMod } from "../models/userModel.js";
const paymentRouter = express.Router();

// UPLOAD PAYMENT
//=========================================
paymentRouter.put("/pay", async (req, res) => {
  try {
    const { joid, picture, userid } = req.body;
    const user = await userMod.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }
    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }
    const paymentObject = {
      isConfirm: false,
      picture: picture,
    };

    jobOrder.PaymentDetails.paymentScreenshots.push(paymentObject);
    await user.save();
    res.status(200).send("payment details sey successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading payment", error: error.message });
  }
});

paymentRouter.put("/confirmpayment", async (req, res) => {
  try {
    const { joid, userid, dueDate, amount, paymentid } = req.body;

    const user = await userMod.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }
    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }
    jobOrder.PaymentDetails.Balance -= amount;
    if (jobOrder.JOStatus == "Pending" && jobOrder.PaymentStatus == "Pending") {
      jobOrder.JOStatus = "Active";
      jobOrder.StartedAt = new Date().toISOString().substring(0, 10);
      jobOrder.DueDateAt = dueDate;
    }

    if (jobOrder.PaymentDetails.Balance <= 0) {
      jobOrder.PaymentStatus = "Full Paid";
    } else {
      jobOrder.PaymentStatus = "Initial";
    }

    const screenshot = jobOrder.PaymentDetails.paymentScreenshots.id(paymentid);
    screenshot.isConfirm = true;
    await user.save();
    res.status(200).send("JO status set successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading payment", error: error.message });
  }
});

paymentRouter.put("/conpays", async (req, res) => {
  try {
    const { joid, userid, amount, paymentid } = req.body;
    const user = await userMod.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }
    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }

    jobOrder.PaymentDetails.Balance -= amount;
    console.log(jobOrder.PaymentDetails.Balance);
    if (jobOrder.PaymentDetails.Balance <= 0) {
      jobOrder.PaymentStatus = "Full Paid";
    } else {
      jobOrder.PaymentStatus = "Initial";
    }
    const screenshot = jobOrder.PaymentDetails.paymentScreenshots.id(paymentid);
    screenshot.isConfirm = true;
    console.log(jobOrder.PaymentDetails.paymentScreenshots);

    await user.save();
    res.status(200).send("JO status set successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading payment", error: error.message });
  }
});

paymentRouter.put("/set", async (req, res) => {
  try {
    const { userid, joid, paymentdetails, totalPayment } = req.body;
    const user = await userMod.findById(userid);
    if (!user) {
      throw new Error("User not found");
    }

    const jobOrder = user.JobOrder.id(joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }

    jobOrder.PaymentDetails = paymentdetails;
    jobOrder.PaymentDetails.isSet = true;
    jobOrder.PaymentDetails.Balance = totalPayment;
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
