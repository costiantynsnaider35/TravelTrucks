import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./trucks/slice";
import filtersReducer from "./filters/slice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
