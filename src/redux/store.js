import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./trucks/slice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
