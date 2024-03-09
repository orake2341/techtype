import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialPayment: PaymentDetails = {
  isSet: false,
  _id: "",
  services: [],
  Balance: 0,
  TotalPayment: 0,
  paymentScreenshots: [],
  ServiceFee: 0,
};

const initialState: JobOrder = {
  _userid: "",
  _id: "",
  joid: "",
  JOStatus: "",
  PaymentStatus: "",
  selectedDate: "",
  DueDateAt: "",
  jobSite: "",
  paymentHistory: [],
  PaymentDetails: initialPayment,
  services: [],
  message: "",
};

const JobOrderSlice = createSlice({
  name: "joborder",
  initialState,
  reducers: {
    setSelectedJobOrder: (state, action) => {
      return action.payload;
    },
    setSiteOfService: (state, action: PayloadAction<string>) => {
      state.jobSite = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    addServiceRow: (state, action: PayloadAction<any>) => {
      const newId =
        state.services.length > 0
          ? state.services[state.services.length - 1].id + 1
          : 1;
      action.payload.id = newId;
      state.services.push(action.payload);
      console.log(state.services);
    },
    editServiceRow: (
      state,
      action: PayloadAction<{ id: string; newData: any }>
    ) => {
      const { id, newData } = action.payload;
      const index = state.services.findIndex((row) => row.id === id);
      if (index !== -1) {
        state.services[index] = newData;
      }
    },
    deleteServiceRow: (state, action: PayloadAction<number>) => {
      state.services = state.services.filter(
        (row) => row.id !== action.payload
      );
    },
  },
});

export const {
  setSelectedJobOrder,
  addServiceRow,
  editServiceRow,
  deleteServiceRow,
  setSiteOfService,
  setMessage,
} = JobOrderSlice.actions;

export default JobOrderSlice.reducer;
