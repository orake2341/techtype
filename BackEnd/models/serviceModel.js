import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  id: String,
  typeofservice: String,
  typeofkeyboardmods: String,
  keyboarddeepclean: Boolean,
  keycapcleaning: Boolean,
  switchlubing: Boolean,
  cleaningMethod: String,
  processor: String,
  graphicsCard: String,
  description: String,
});

export const serviceMod = mongoose.model("service", serviceSchema);
