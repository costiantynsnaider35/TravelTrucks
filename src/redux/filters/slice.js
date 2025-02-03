import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampersByLocation,
  fetchCampersByForm,
  fetchAllCampers,
} from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  location: "",
  selectedForms: [],
  selectedEquipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
    setVehicleFormFilter: (state, action) => {
      state.selectedForms = action.payload;
    },
    setVehicleEquipmentFilter: (state, action) => {
      state.selectedEquipment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCampersByLocation.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCampersByForm.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") &&
          (action.type.startsWith("filters/fetchCampersByLocation") ||
            action.type.startsWith("filters/fetchCampersByForm")),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") &&
          (action.type.startsWith("filters/fetchCampersByLocation") ||
            action.type.startsWith("filters/fetchCampersByForm")),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected") &&
          (action.type.startsWith("filters/fetchCampersByLocation") ||
            action.type.startsWith("filters/fetchCampersByForm")),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  setVehicleFormFilter,
  setLocationFilter,
  setVehicleEquipmentFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
