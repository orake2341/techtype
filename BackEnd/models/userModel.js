import mongoose from "mongoose";

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
  JobOrder: [],
});

export const userMod = mongoose.model("user", userSchema);
