import { configureStore } from "@reduxjs/toolkit"
import { authAPI } from "./services/auth"
import { userApi } from "./services/user"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authAPI.middleware, userApi.middleware]),
})
