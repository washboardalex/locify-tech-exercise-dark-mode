import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = ({title, body, id}) => (
    <div className='col-12'>
        <Link 
            to={`/${id}`}
        >
        <h5>{title}</h5>
        </Link>
        <p>{body.slice(0,20)+'...'}</p>
    </div>
)

export default PostPreview;