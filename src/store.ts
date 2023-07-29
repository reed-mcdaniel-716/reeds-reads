import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./components/Search/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
