import React from 'react';
import useDarkMode from 'use-dark-mode';

const CommentsList = ({comments}) => {

    const darkMode = useDarkMode();

    return (
        <div style={{marginBottom:''}} className='row'>
            {comments.map(({name, email, body}, index) => (
                <div key={index} style={darkMode.value === true ? {borderTop: '1px solid #dfdfdf', paddingBottom:'25px', paddingTop:'25px',} : {borderTop: '1px solid #333', paddingBottom:'25px', paddingTop:'25px',}} className='col-12'>
                    <h5>{name}</h5>
                    <h5>{email}</h5>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsList;