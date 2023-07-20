import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./../Reducer/Reducer"

export const store = configureStore({
  reducer: {
    books: reducer
  }
})