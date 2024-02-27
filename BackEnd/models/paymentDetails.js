import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
  typeofkeyboardmodsPrice: { type: Number, default: 250 },
  keyboarddeepcleanPrice: { type: Number, default: 250 },
  keycapcleaningPrice: { type: Number, default: 250 },
  switchlubingPrice: { type: Number, default: 250 },
  cleaningMethodPrice: { type: Number, default: 250 },
});

const PaymentDetailsSchema = mongoose.Schema({
  services: [ServiceSchema], // Use the ServiceSchema here
  serviceFee: Number,
  TotalPayment: Number,
});

export const paymentDetailsModel = mongoose.model(
  "PaymentDetails",
  PaymentDetailsSchema
);
