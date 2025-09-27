import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import { apiSlice } from './slices/apiSlice'


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;