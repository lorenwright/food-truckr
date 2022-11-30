import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './store/filterSlice'
import vendorReducer from './store/vendorSlice'

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        vendors: vendorReducer
    },
})