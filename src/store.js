import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './reducers/bookReducer.js'

export const store = configureStore({
    reducer: {
        bookReducer: bookReducer,
    },
})