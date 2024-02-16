import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
  },
  details: {
    type: String,
  },
});

export const serviceMod = mongoose.model("service", serviceSchema);
