import mongoose from "mongoose";

const serviceModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
