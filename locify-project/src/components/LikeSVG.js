import React from 'react';
import useDarkMode from 'use-dark-mode';

import likeBtn from '../static/like.svg';
import likeBtnWhite from '../static/like-white.svg';

const LikeSVG = ({ likePost, likes }) => {

    const darkMode = useDarkMode(false);

    return (
        <div className='col-12'>
            <span>
                <img 
                    className='thmb' 
                    onClick={likePost} 
                    src={darkMode.value === true ? likeBtnWhite : likeBtn} 
                    alt='thumbs up!' 
                /> 
                {likes} likes
            </span>
        </div>
    );
}

export default LikeSVG;