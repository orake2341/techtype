import { configureStore } from "@reduxjs/toolkit";
import jobOrderListReducer from "./joborderlist/jobOrderListSlice";
import jobOrderReducer from "./joborder/jobOrderSlice";

export const store = configureStore({
  reducer: {
    joborderlist: jobOrderListReducer,
    joborder: jobOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
