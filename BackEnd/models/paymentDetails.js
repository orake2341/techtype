import mongoose from "mongoose";

const PaymentDetailsSchema = mongoose.Schema({
  services: [
    {
      serviceId: String,
      servicetype: String,
      subtype: [
        {
          subservicename: String,
          price: Number,
        },
      ],
      servicetotal: Number,
    },
  ],
  Balance: Number,
  TotalPayment: Number,

  paymentScreenshots: [],
});

const paymentHistorySchema = mongoose.Schema({
  joid: String,
  PaymentDetails: [PaymentDetailsSchema],
});

export const paymentDetailsModel = mongoose.model(
  "Payment Details",
  PaymentDetailsSchema
);
