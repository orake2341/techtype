import express from "express";
import { userMod } from "../models/userModel.js";
import { JO } from "../models/JOModel.js";
import { serviceMod } from "../models/serviceModel.js";
import { paymentDetailsModel } from "../models/paymentHistoryModel.js";
import { counterModel } from "../models/counterModel.js";

const JobOrderRouter = express.Router();

// POST JO TO DATABASE
//=========================================
JobOrderRouter.post("/create", async (req, res) => {
  try {
    // GET AUTO INCREMENT
    // ===================
    let sqid;
    let jobid;
    counterModel
      .findOneAndUpdate({ id: "autoval" }, { $inc: { seq: 1 } }, { new: true })
      .then((cd) => {
        if (cd == null) {
          const newval = new counterModel({ id: "autoval", seq: 1 });
          sqid = 1;
          return newval.save();
        } else {
          sqid = cd.seq;
          return cd;
        }
      })
      .then(() => {
        jobid = "JO00" + sqid;
        // Do something with jobid
      })
      .catch((err) => {
        console.error(err);
      });
    //===============

    const serviceDataArray = req.body.services;
    const createdServices = [];

    // Create and save service documents // ARRAY
    for (const serviceData of serviceDataArray) {
      const newService = new serviceMod(serviceData);
      await newService.save();
      createdServices.push(newService);
    }

    const parentDoc = await userMod.findById(req.body._id);

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

    const newJobOrder = new JO({
      joid: jobid,
      status: "Pending",
      jobSite: req.body.jobSite,
      services: createdServices,
      message: req.body.message,
      PaymentDetails: paymentDetails,
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
  const userId = req.body._id;

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

    // UPDATE PAYMENT DETAILS
    const serviceDataArray = req.body.services;
    const createdServices = [];

    // Create and save service documents // ARRAY
    for (const serviceData of serviceDataArray) {
      const newService = new serviceMod(serviceData);
      await newService.save();
      createdServices.push(newService);
    }

    const parentDoc = await userMod.findById(req.body._id);

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
    });
    jobOrder.jobSite = req.body.jobSite;
    jobOrder.message = req.body.message;
    jobOrder.services = req.body.services;
    jobOrder.paymentDetails = paymentDetails;
    await user.save();

    res.status(200).send("Job order updated successfully");
  } catch (error) {
    console.error(`Error updating job order: ${error.message}`);
    res
      .status(500)
      .send({ error: `Error updating job order: ${error.message}` });
  }
});

JobOrderRouter.put("/completestatus", async (req, res) => {
  const userId = req.body.uid;

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

    jobOrder.JOStatus = "Complete";
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
