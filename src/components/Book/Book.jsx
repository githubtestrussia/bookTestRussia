import React from 'react';
import './Book.css';
import noBookImage from '../../assets/nobookimage.jpeg';

import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getFullBookDetails} from "../../reducers/libraryReducer.js";

const Book = ({ title, author, thumbnail,description,url,id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getFullArticle =()=>{
        dispatch(getFullBookDetails({title,url,description,author,thumbnail }))
        navigate(`/book/${id}`)
    };

    return (
            <div className="book-tile" onClick={getFullArticle}>
                <h3 className='title'>{title ? title.split(' ').slice(0,10).join(' ') : ''}</h3>
                <img className={thumbnail ? 'book-image' : 'nobook-image'} src={thumbnail ? thumbnail : noBookImage} alt={title}/>
                <p>{author ? author.split(' ').slice(0,10).join(' ') : ''}</p>
            </div>
    );
};


export default Book;
