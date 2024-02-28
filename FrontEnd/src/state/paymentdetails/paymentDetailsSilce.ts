import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: PaymentDetails = {
  _id: "",
  services: [],
  Balance: 0,
  TotalPayment: 0,
  paymentScreenshots: [],
  ServiceFee: 0,
};

const paymentDetailsSilce = createSlice({
  name: "paymentdetails",
  initialState,
  reducers: {
    setPaymentDetails: (state, action) => {
      return action.payload;
    },
    updateServiceProperty: (state, action) => {
      const { serviceId, property, value } = action.payload;
      const service = state.services.find(
        (service) => service._id === serviceId
      );
      if (service) {
        service.subtype[property] = value;
      } else {
        state.ServiceFee = value;
      }
      state.TotalPayment =
        state.services.reduce((total, service) => {
          return (
            total +
            (service.subtype?.typeofkeyboardmodsprice || 0) +
            (service.subtype?.keyboarddeepcleanprice || 0) +
            (service.subtype?.keycapcleaningprice || 0) +
            (service.subtype?.switchlubingprice || 0) +
            (service.subtype?.pccleaningprice || 0) +
            (service.subtype?.pcbuildingprice || 0) +
            (service.subtype?.pcbuildingprice || 0)
          );
        }, 0) + state.ServiceFee;
    },
  },
});

export const { setPaymentDetails, updateServiceProperty } =
  paymentDetailsSilce.actions;

export default paymentDetailsSilce.reducer;
