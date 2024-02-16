import mongoose from "mongoose";
import { userMod } from "./userModel.js";
import { serviceMod } from "./serviceModel.js";

const JOrderSchema = mongoose.Schema({
  JOStatus: {
    type: String,
  },
  PaymentStatus: [
    {
      Status: {type: String,},
      TotalPayment: {type: Number},
      Balance: {type: Number},
      paymentHistory: []//INSERT PAYMENT SCHEMA

    }
  ],
  TotalPrice: {
    type: Number,
  },
  selectedDate: {
    type: String,
  },
  services: [serviceMod.schema],
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

