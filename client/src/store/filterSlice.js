import { createSlice } from '@reduxjs/toolkit'

const today = () => {
    let date = new Date()
    let offset = date.getTimezoneOffset()
    return new Date(date.getTime() - (offset*60*1000)).toISOString().split('T')[0]
}

const initialState = {
    statusType: null,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatusType: (state, action) => {
            state.statusType = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setStatusType
} = filterSlice.actions

export default filterSlice.reducer