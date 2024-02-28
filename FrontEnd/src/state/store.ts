import { configureStore } from "@reduxjs/toolkit";
import jobOrderListReducer from "./joborderlist/jobOrderListSlice";
import jobOrderReducer from "./joborder/jobOrderSlice";
import paymentDetailReducer from "./paymentdetails/paymentDetailsSilce";

export const store = configureStore({
  reducer: {
    joborderlist: jobOrderListReducer,
    joborder: jobOrderReducer,
    paymentdetails: paymentDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
