import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./logic-slice";

export const store = configureStore({
  reducer: {
    logic: reducers
  }
});
