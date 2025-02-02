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
  selectedForms: [],
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setVehicleFormFilter: (state, action) => {
      state.selectedForms = action.payload;
    },
    setLocationFilter: (state, action) => {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCampersByLocation.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchCampersByForm.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") &&
          (action.type.startsWith("filters/fetchCampersByLocation") ||
            action.type.startsWith("filters/fetchCampersByForm")),
        (state) => {
          state.loading = true;
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

export const { setVehicleFormFilter, setLocationFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
