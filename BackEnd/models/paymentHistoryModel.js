import mongoose from "mongoose";

const PaymentDetailsSchema = mongoose.Schema({
  services: [
    {
      serviceId: String,
      servicetype: String,
      isset: Boolean,
      subtype: {
        typeofkeyboardmods: String,
        keyboarddeepclean: Boolean,
        keycapcleaning: Boolean,
        switchlubing: Boolean,
        cleaningMethod: String,
        processor: String,
        graphicsCard: String,
        typeofkeyboardmodsprice: { type: Number, default: 0 },
        keyboarddeepcleanprice: { type: Number, default: 0 },
        keycapcleaningprice: { type: Number, default: 0 },
        switchlubingprice: { type: Number, default: 0 },
        pccleaningprice: { type: Number, default: 0 },
        pcbuildingprice: { type: Number, default: 0 },
      },
      servicetotal: { type: Number, default: 0 },
    },
  ],
  Balance: { type: Number, default: 0 },
  TotalPayment: { type: Number, default: 0 },

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
