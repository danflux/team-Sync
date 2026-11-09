import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      return res.data?.data || res.data?.user || res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message || "Login failed"
      );
    }
  }
);

export const currentLoggedEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get("/auth/me");
      return res.data?.data || res.data?.user || res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch current logged employee"
      );
    }
  }
);

export const registerEmployee = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInstance.post("/auth/register", credentials);
      return res.data?.data || res.data?.user || res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Registration failed"
      );
    }
  }
);
