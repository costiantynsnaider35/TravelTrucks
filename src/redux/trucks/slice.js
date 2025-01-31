import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAllCampers,
  fetchCamperById,
  fetchFeatures,
  fetchReviewsByCamperId,
} from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
  features: [],
  reviews: [],
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
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addCase(fetchFeatures.fulfilled, (state, action) => {
        state.features = action.payload;
      })
      .addCase(fetchReviewsByCamperId.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAllCampers.pending,
          fetchCamperById.pending,
          fetchFeatures.pending,
          fetchReviewsByCamperId.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllCampers.fulfilled,
          fetchCamperById.fulfilled,
          fetchFeatures.fulfilled,
          fetchReviewsByCamperId.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllCampers.rejected,
          fetchCamperById.rejected,
          fetchFeatures.rejected,
          fetchReviewsByCamperId.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const campersReducer = camperSlice.reducer;
