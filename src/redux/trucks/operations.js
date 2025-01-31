import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const myApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await myApi.get("/campers");
      return data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (camperId, thunkApi) => {
    try {
      const { data } = await myApi.get(`/campers/${camperId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFeatures = createAsyncThunk(
  "features/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await myApi.get("/features");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchReviewsByCamperId = createAsyncThunk(
  "reviews/fetchByTruckId",
  async (camperId, thunkApi) => {
    try {
      const { data } = await myApi.get(`/campers/${camperId}/reviews`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
