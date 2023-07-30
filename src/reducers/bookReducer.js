import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isLoadingBooks:true,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeLoadingStatus: (state,action) => {
            state.isLoadingBooks = action.payload;
        },

    },
})


export const { changeLoadingStatus} = bookSlice.actions;

export default bookSlice.reducer