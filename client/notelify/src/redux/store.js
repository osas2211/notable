import { configureStore } from "@reduxjs/toolkit"
import { authAPI } from "./services/auth"

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware]),
})
