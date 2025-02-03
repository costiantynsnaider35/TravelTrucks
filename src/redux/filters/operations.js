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

export const fetchCampersByLocation = createAsyncThunk(
  "filters/fetchCampersByLocation",
  async (location, thunkApi) => {
    try {
      const { data } = await myApi.get(`/campers?location=${location}`);
      return data.items;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return thunkApi.rejectWithValue("Location not found");
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCampersByForm = createAsyncThunk(
  "filters/fetchCampersByForm",
  async (selectedForms, { rejectWithValue }) => {
    try {
      const response = await myApi.get("/campers");
      const filteredItems = response.data.items.filter((item) =>
        selectedForms.includes(item.form)
      );
      return filteredItems;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return rejectWithValue("Items not found");
      }
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
