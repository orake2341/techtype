import { createSlice } from "@reduxjs/toolkit";

const storedUserInfo = localStorage.getItem("userInfo");
const initialState = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
