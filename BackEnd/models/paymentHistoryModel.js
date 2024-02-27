import mongoose from "mongoose";

const PaymentDetailsSchema = mongoose.Schema({
  services: [
    {
      servicetype: String,
      isset: Boolean,
      subtype: [
        {
          typeofkeyboardmods: String,
          keyboarddeepclean: Boolean,
          keycapcleaning: Boolean,
          switchlubing: Boolean,
          cleaningMethod: String,
          processor: String,
          graphicsCard: String,
        },
      ],
      servicetotal: { type: Number, default: 0 },
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

export const paymentHistoryModel = mongoose.model(
  "Payment History",
  paymentHistorySchema
);

export const paymentDetailsModel = mongoose.model(
  "Payment Details",
  PaymentDetailsSchema
);
