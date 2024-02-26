import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: JobOrderList = {
  list: [],
  error: "",
};

const jobOrderListSlice = createSlice({
  name: "joborderlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobOrders.pending, (state) => {})
      .addCase(fetchJobOrders.fulfilled, (state, action) => {
        state.list = action.payload;
        state.error = "";
      })
      .addCase(fetchJobOrders.rejected, (state, action) => {
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

export const fetchJobOrders = createAsyncThunk(
  "joborderlist/fetchJobOrders",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000/");
      return response.data.message;
    } catch (error) {
      throw error;
    }
  }
);

export default jobOrderListSlice.reducer;
