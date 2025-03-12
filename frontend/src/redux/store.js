import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from './features/blogs/blogsApi'
import authApi from './features/auth/authApi'
import authReducer from "./features/auth/authSlice"


export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [blogApi.reducerPath]: blogApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      auth: authReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogApi.middleware, authApi.middleware),
  })