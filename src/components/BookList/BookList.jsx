import React, {useEffect, useState} from 'react';
import Book from '../Book/Book.jsx';
import axios from "axios";
import Loader from "../Loader/Loader.jsx";
import LibraryPagination from "../LibraryPagination/LibraryPagination.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addBooks, changeLoadingStatus} from "../../reducers/libraryReducer.js";
import SearchInput from "../SearchInput/SearchInput.jsx";
import {fetchBooks} from "../../bookThunks.js";


const BookList = () => {
    const { isLoading, books, inputTitle } = useSelector(state=>state.libraryReducer);
    const dispatch = useDispatch();

    const [currentBooksPage, setCurrentBooksPage] = useState(1);
    const pageSize = 9;

    const currentBooks = books ? books.slice((currentBooksPage - 1) * pageSize, currentBooksPage * pageSize) : [];




const changeBookListPage =(e)=>{
    setCurrentBooksPage(e)
}

    useEffect(() => {
        dispatch(fetchBooks(inputTitle));
    }, [inputTitle]);



    return (
        <div>
            <SearchInput />
            {isLoading ? (
                <Loader margin="50px 0" borderRadius="4px" size="large" width="100%" />
            ) : (
                <>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {currentBooks.length ?
                            currentBooks.map((book) => (
                                <Book
                                    key={crypto.randomUUID()}
                                    id={crypto.randomUUID()}
                                    title={book?.volumeInfo?.title}
                                    author={book?.volumeInfo?.authors?.join(', ')}
                                    thumbnail={book?.volumeInfo?.imageLinks?.thumbnail}
                                    description={book?.volumeInfo?.description}
                                />
                            )):''}
                    </div>
                    <LibraryPagination top={50} bottom={50} total={Math.ceil(books.length / pageSize) * 10} onChangePage={changeBookListPage} />
                </>
            )}
        </div>
    );
};
export default BookList;