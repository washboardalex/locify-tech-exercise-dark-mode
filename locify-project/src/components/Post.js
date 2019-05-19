import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPostAndComment, likePost } from '../_redux/actions';
import NewComment from './NewComment';

const mapStateToProps = (state) => {
    const { title, body, comments, likes, id, loading, hasLiked } = state.getPostAndComment
    return {
        title, body, comments, likes, id, loading, hasLiked
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return ({
        getPostAndComment: (postId) => dispatch(getPostAndComment(postId)),
        likePost: () => dispatch(likePost())
    });
  }
  

class Post extends Component {

    componentDidMount() {
        const { title, getPostAndComment, id } = this.props;
        const { postId } = this.props.match.params;
        ( title.length < 1 || postId !== id ) && getPostAndComment(postId);
    }

    render() { 
        const {title, body, comments, likes, likePost, hasLiked } = this.props;

        return (
            <Fragment>
                <div className='row'>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <div className='row'>
                    <span>Number of Likes: {likes}</span>
                    <button onClick={likePost}> {hasLiked ? 'Thanks!' : 'Like'} </button>
                </div>
                <div className="row">
                    <h1>Leave a comment...</h1>
                    <NewComment />
                </div>
                <div className='row'>
                    {comments.map(({name, email, body}, index) => (
                        comments[index] !== null &&
                        <div key={index} style={{border:'1px solid grey'}} className='col-12'>
                            <h5>{name}</h5>
                            <h5>{email}</h5>
                            <p>{body}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);