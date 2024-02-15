import mongoose from "mongoose";
import { userMod } from "./userModel.js";

const JOrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  services: [],
});

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
});

//create a new class for this one

export const addSubCollection = async (parentID, childData) => {
  try {
    // Find the parent document by ID
    const parentDoc = await userMod.findById(parentID);

    // Check if the parent document exists
    if (!parentDoc) {
      console.log("Parent not found");
      return;
    }

    const newJo = new JO(childData);
    parentDoc.JobOrder.push(newJo);

    await parentDoc.save();

    console.log("Added JO to subcollection");
  } catch (error) {
    console.error("Error adding JO to subcollection:", error);
  }
};

export const JO = mongoose.model("JobOrder", JOrderSchema);
export const serviceMod = mongoose.model("service", serviceSchema);
