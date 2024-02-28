import express from "express";
import { userMod } from "../models/userModel.js";
import { JO } from "../models/JOModel.js";
import { serviceMod } from "../models/serviceModel.js";
import { paymentDetailsModel } from "../models/paymentHistoryModel.js";

const JobOrderRouter = express.Router();

// POST JO TO DATABASE
//=========================================
JobOrderRouter.post("/create", async (req, res) => {
  try {
    const serviceDataArray = req.body.services;
    const createdServices = [];

    // Create and save service documents
    for (const serviceData of serviceDataArray) {
      const newService = new serviceMod(serviceData);
      await newService.save();
      createdServices.push(newService);
    }

    const parentDoc = await userMod.findById("65de029e344af5519b2e120c");

    if (!parentDoc) {
      console.log("Parent not found");
      return res.status(404).json({ message: "Parent not found" });
    }

    // Create payment details
    const paymentDetails = new paymentDetailsModel({
      services: createdServices.map((service) => ({
        servicetype: service.typeofservice,
        subtype: service,
        servicetotal: service.servicetotal,
      })),
      isset: false,
      Balance: 0,
      TotalPayment: 0,
    });
    await paymentDetails.save();

    // Create new job order and link payment details
    const newJobOrder = new JO({
      status: "Pending",
      jobSite: req.body.jobSite,
      services: createdServices,
      message: req.body.message,
      PaymentDetails: paymentDetails, // Link payment details with job order
    });

    parentDoc.JobOrder.push(newJobOrder);
    await parentDoc.save();

    console.log("Added JobOrder to subcollection");
    res.status(200).json({ message: "JobOrder added successfully" });
  } catch (error) {
    console.error("Error creating JobOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// UPDATE JO TO DATABASE
//=========================================

JobOrderRouter.put("/update", async (req, res) => {
  const userId = "65de029e344af5519b2e120c";

  try {
    // Find the user by ID
    const user = await userMod.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Find the job order by ID within the user's job orders
    const jobOrder = user.JobOrder.id(req.body.joid);
    if (!jobOrder) {
      throw new Error("Job order not found");
    }

    jobOrder.jobSite = req.body.jobSite;
    jobOrder.message = req.body.message;
    jobOrder.services = req.body.services;
    await user.save();

    res.status(200).send("Job order updated successfully");
  } catch (error) {
    console.error(`Error updating job order: ${error.message}`);
    res
      .status(500)
      .send({ error: `Error updating job order: ${error.message}` });
  }
});

export default JobOrderRouter;
