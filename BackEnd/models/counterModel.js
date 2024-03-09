import mongoose from "mongoose";

const counterSchema = mongoose.Schema({
  id: String,
  seq: { type: Number, default: 0 },
});

export const counterModel = mongoose.model("JOCounter", counterSchema);
