import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedVendor: null,
    selectedModalVendor: null
}

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setSelectedVendor: (state, action) => {
            return {
                selectedVendor: action.payload
            }
        },
        setSelectedModalVendor: (state, action) => {
            return {
                selectedModalVendor: action.payload
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedVendor, setSelectedModalVendor } = vendorSlice.actions

export default vendorSlice.reducer