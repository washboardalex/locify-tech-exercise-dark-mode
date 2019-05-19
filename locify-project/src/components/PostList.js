import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({posts}) => (
    <div style={{borderTop:'1px solid rgba(0,0,0,0.5)', paddingTop:'50px'}} className='col-12'>
        {posts && posts.map(({title, body, id}) => (
            <div style={{marginBottom:'50px'}} key={id}>
                <Link to={`/${id}`}><h5>{title}</h5></Link>
                <p>
                    {body.slice(0,60)+' '}{<Link to={`/${id}`} >... </Link>}
                </p>
            </div>
        ))}
    </div>
)

export default PostList;