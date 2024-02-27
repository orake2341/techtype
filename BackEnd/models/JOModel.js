import mongoose from "mongoose";
import { userMod } from "./userModel.js";
import { serviceMod } from "./serviceModel.js";
import { paymentDetailsModel } from "./paymentHistoryModel.js";

const PriceSchema = mongoose.Schema({
  typeofkeyboardmodsPrice: { type: Number, default: 0 },
  keyboarddeepcleanPrice: { type: Number, default: 0 },
  keycapcleaningPrice: { type: Number, default: 0 },
  switchlubingPrice: { type: Number, default: 0 },
  cleaningMethodPrice: { type: Number, default: 0 },
});

const JOrderSchema = mongoose.Schema({
  JOStatus: {
    type: String,
    default: "Pending",
  },
  PaymentStatus: {
    type: String,
    default: "Pending",
  },
  PaymentDetails: [paymentDetailsModel.schema],
  jobSite: {
    type: String,
    default: "On-site",
  },
  selectedDate: {
    type: String,
    default: "Pending",
  },
  message: {
    type: String,
    default: "",
  },
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
