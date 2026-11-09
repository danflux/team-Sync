import { createSlice } from "@reduxjs/toolkit";
import {
  currentLoggedEmployee,
  loginEmployee,
  registerEmployee,
} from "./authActions";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Current Logged Employee (/auth/me)
      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentLoggedEmployee.rejected, (state) => {
        state.employee = null;
        state.isLoading = false;
      })

      // Register
      .addCase(registerEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload; // Keep this if registration auto-logs in
        state.error = null;
      })
      .addCase(registerEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addEmployee, removeEmployee, clearError } = authSlice.actions;
export default authSlice.reducer;