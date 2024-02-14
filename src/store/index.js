import { configureStore } from "@reduxjs/toolkit";
import dataUsersSlice from "./dataUsers";
export const store = configureStore({
  reducer: {
    dataUsersSlice,
  },
});
