import mongoose from "mongoose";
import { userMod } from "./userModel.js";
import { serviceMod } from "./serviceModel.js";

const JOrderSchema = mongoose.Schema({
  JOStatus: {
    type: String,
    default: "Pending",
  },
  PaymentStatus: {
    type: String,
    default: "Pending",
  },
  PaymentHistory: [],
  TotalPrice: {
    type: Number,
  },
  jobSite: {
    type: String,
    default: "On-site",
  },
  selectedDate: {
    type: String,
    default: "Pending",
  },
<<<<<<< HEAD
  message: String,
=======
  message: {
    type: String,
    default: "",
  },
>>>>>>> 82d43c19349e52926f3022f2593a88d51beee011
  services: [serviceMod.schema],
});

export const JO = mongoose.model("JobOrder", JOrderSchema);

//SUB COLLECTIONS
//=========================================
//TODO: FIX ERROR HANDLING
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
