import { configureStore } from "@reduxjs/toolkit";
import jobOrderListReducer from "./joborderlist/jobOrderListSlice";
import jobOrderReducer from "./joborder/jobOrderSlice";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
import { usersApiSlice } from "../slices/userApiSlice";
export const store = configureStore({
  reducer: {
    joborderlist: jobOrderListReducer,
    joborder: jobOrderReducer,
    auth: authReducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
