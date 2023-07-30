import React from 'react';
import './Book.css';
import noBookImage from '../../assets/nobookimage.jpeg';

const Book = ({ title, author, thumbnail }) => {

    return (
        <div className="book-tile">
            <h3 className='title'>{title.split(' ').slice(0,10).join(' ')}</h3>
            <img className={thumbnail ? 'book-image' : 'nobook-image'} src={thumbnail ? thumbnail : noBookImage} alt={title}/>
            <p>{author}</p>
        </div>
    );
};

export default Book;
