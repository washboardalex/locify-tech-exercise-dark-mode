import React from 'react';
import useDarkMode from 'use-dark-mode';

import books from '../static/books.svg';
import booksWhite from '../static/books-white.svg';

const BooksSVG = ({ increasePostsDisplayed, numPosts, addNumPosts }) => {
    const darkMode = useDarkMode(false);

    return(
        <img 
            style={{}}
            src={darkMode.value === true ? booksWhite : books} 
            alt='load more posts' 
            className='load-button' 
            onClick={() => increasePostsDisplayed(numPosts, addNumPosts)} 
        />
    );
}

export default BooksSVG;