import React from 'react';
import { Link } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const PostList = ({posts}) => {

    const darkMode = useDarkMode(false);

    return (
        <div 
            style={darkMode.value === true 
                ? {borderTop: '1px solid #dfdfdf', paddingTop: '50px'} 
                : {borderTop: '1px solid #333', paddingTop: '50px'}
            } 
            className='col-12'
        >
            {posts && posts.map(({title, body, id}) => (
                <div style={{marginBottom:'50px'}} key={id}>
                    <Link to={`/${id}`}><h5 style={darkMode.value === true ? {color: '#dfdfdf'} : {color: '#333'}}>{title}</h5></Link>
                    <p>
                        {body.slice(0,60)+' '}
                        {<Link style={darkMode.value === true ? {color: '#dfdfdf'} : {color: '#333'}} to={`/${id}`} >... </Link>}
                    </p>
                </div>
            ))}
        </div>
    )
} 

export default PostList;