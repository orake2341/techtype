import express from "express";
import { userMod } from "../models/userModel.js";
import { JO } from "../models/JOModel.js";
import { serviceMod } from "../models/serviceModel.js";

const JobOrderRouter = express.Router();

// POST JO TO DATABASE
//=========================================
JobOrderRouter.post("/create", async (req, res) => {
  try {
    const serviceDataArray = req.body.services;
    const createdServices = [];
    for (const serviceData of serviceDataArray) {
      const newService = new serviceMod(serviceData);
      await newService.save();
      createdServices.push(newService);
    }

    const parentDoc = await userMod.findById("65d88b1e685871a9997cb32a");

    if (!parentDoc) {
      console.log("Parent not found");
      return res.status(404).json({ message: "Parent not found" });
    }

    const newJobOrder = new JO({
      status: "Pending",
      jobSite: req.body.jobSite,
      services: createdServices,
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

export default JobOrderRouter;
