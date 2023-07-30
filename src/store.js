import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from "./reducers/libraryReducer.js";

export const store = configureStore({
    reducer: {
        libraryReducer: libraryReducer,
    },
})