import { configureStore } from "@reduxjs/toolkit";
import jobOrderListReducer from "./joborderlist/jobOrderListSlice";
import jobOrderReducer from "./joborder/jobOrderSlice";
<<<<<<< HEAD
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
import { usersApiSlice } from "../slices/userApiSlice";
=======
import paymentDetailReducer from "./paymentdetails/paymentDetailsSilce";

>>>>>>> ca5b418ed2b5ba90fe697f263f1ab4fe0a74227b
export const store = configureStore({
  reducer: {
    joborderlist: jobOrderListReducer,
    joborder: jobOrderReducer,
<<<<<<< HEAD
    auth: authReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
=======
    paymentdetails: paymentDetailReducer,
>>>>>>> ca5b418ed2b5ba90fe697f263f1ab4fe0a74227b
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
