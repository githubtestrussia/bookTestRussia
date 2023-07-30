import axios from 'axios';
import { addBooks, changeLoadingStatus } from "./reducers/libraryReducer.js";

export const fetchBooks = (inputTitle) => async (dispatch) => {
    dispatch(changeLoadingStatus(true));
    try {
        const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${inputTitle}&maxResults=40`);
        dispatch(addBooks(response.data.items));
    } catch (error) {
        alert(error);
    }
    dispatch(changeLoadingStatus(false));
};
