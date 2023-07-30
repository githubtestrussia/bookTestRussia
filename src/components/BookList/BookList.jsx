import React, {useEffect, useState} from 'react';
import Book from '../Book/Book.jsx';
import axios from "axios";
import Loader from "../Loader/Loader.jsx";
import BookPagination from "../BookPagination/BookPagination.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeLoadingStatus} from "../../reducers/bookReducer.js";

const BookList = () => {
    const [books, setBooks] = useState([]);

    const isLoadingBooks = useSelector(state=>state.bookReducer.isLoadingBooks);
    const dispatch = useDispatch();

        const getBooks = async () => {
            try {
                await axios('https://www.googleapis.com/books/v1/volumes?q=pokemons&maxResults=40')
                    .then(book=>setBooks(book.data.items));

            } catch (error) {
                alert(error);
            }
            dispatch(changeLoadingStatus(false))
        };


    useEffect(() => {
        getBooks()
    }, []);



    return (
        <div style={{maxWidth: '100vw', display:'flex',flexWrap:'wrap', overflowY:'hidden', justifyContent:'center'}}>
            {isLoadingBooks ?  <Loader margin='80px 0' textAlign='center' borderRadius='4px' size='large'/> :''}
                {books&& books.map((book) => (
                    <Book
                        key={crypto.randomUUID()}
                        title={book?.volumeInfo?.title}
                        author={book?.volumeInfo?.authors?.join(', ')}
                        thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                    />
                ))}
           < BookPagination/>
    </div>
    );
};
export default BookList;