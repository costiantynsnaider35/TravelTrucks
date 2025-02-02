import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperById } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedCamper: null,
};

const camperSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchAllCampers.pending, fetchCamperById.pending),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCampers.fulfilled, fetchCamperById.fulfilled),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchAllCampers.rejected, fetchCamperById.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const campersReducer = camperSlice.reducer;
