import { configureStore } from "@reduxjs/toolkit";
import jobOrderListReducer from "./joborderlist/jobOrderListSlice";
import jobOrderReducer from "./joborder/jobOrderSlice";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
import { usersApiSlice } from "../slices/userApiSlice";
import paymentDetailReducer from "./paymentdetails/paymentDetailsSilce";

export const store = configureStore({
  reducer: {
    joborderlist: jobOrderListReducer,
    joborder: jobOrderReducer,
    auth: authReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    paymentdetails: paymentDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
