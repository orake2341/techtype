import mongoose from "mongoose";
import { JO } from "./JOModel.js";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  address: {
    type: String,
  },
  JobOrder: [JO.schema],
});

export const userMod = mongoose.model("user", userSchema);
