import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading:true,
    books:[],
    newsList:[],
    employees:[],
    bookProp:{
        title:'',
        description:'',
        url:'',
        author:'',
        thumbnail:'',
    },
    inputTitle:'pokemons',

}

export const librarySlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        changeLoadingStatus: (state,action) => {
            state.isLoading = action.payload;
        },
        addBooks:(state, action )=>{
            state.books = action.payload;
        },
        addNews: (state,action)=>{
            state.newsList = action.payload;
        },
        addEmployees:(state,action)=>{
            state.employees = action.payload;
        },
        getFullBookDetails:(state,action)=>{
            state.bookProp = action.payload;
        },
        changeInputTitle:(state,action )=>{
            state.inputTitle = action.payload;
        }
    },
})


export const { changeLoadingStatus, addBooks, addNews,addEmployees,getFullBookDetails,changeInputTitle} = librarySlice.actions;

export default librarySlice.reducer