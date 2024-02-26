import mongoose from "mongoose";

const PaymentDetailsSchema = mongoose.Schema({
  services: [
    {
      keyboarddeepcleanPrice: { type: Number, default: 250 },
      keycapcleaningPrice: { type: Number, default: 250 },
      switchlubingPrice: { type: Number, default: 250 },
      cleaningMethodPrice: { type: Number, default: 250 },
    },
  ],
  serviceFee: Number,
  TotalPayment: Number,
});

export const paymentDetailsModel = mongoose.model(
  "Payment Details",
  PaymentDetailsSchema
);
