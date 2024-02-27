import mongoose from "mongoose";

const PaymentDetailsSchema = mongoose.Schema({
  services: [
    {
      typeofservice: String,
      typeofkeyboardmods: String,
      keyboarddeepclean: Boolean,
      keycapcleaning: Boolean,
      switchlubing: Boolean,
      cleaningMethod: String,
      processor: String,
      graphicsCard: String,
      description: String,
      keyboarddeepcleanPrice: { type: Number, default: 250 },
      keycapcleaningPrice: { type: Number, default: 250 },
      switchlubingPrice: { type: Number, default: 250 },
      cleaningMethodPrice: { type: Number, default: 250 },
    },
  ],
  serviceFee: Number,
  TotalPayment: Number,
  paymentScreenshot: String,
});

const paymentHistorySchema = mongoose.Schema({
  joid: String,
  PaymentDetails: [PaymentDetailsSchema],
});

export const paymentDetailsModel = mongoose.model(
  "PaymentHistory",
  paymentHistorySchema
);
