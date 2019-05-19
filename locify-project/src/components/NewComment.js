import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { newCommentChange, publishNewComment } from '../_redux/actions';

const mapStateToProps = (state) => {
    const { newCommentName, newCommentEmail, newCommentText  } = state.getPostAndComment;
    return { newCommentName, newCommentEmail, newCommentText }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        newCommentChange: (e) => dispatch(newCommentChange(e.target.name, e.target.value)),
        publishNewComment: () => dispatch(publishNewComment())
    }
  }

const NewComment = ({  newComment, newCommentChange, publishNewComment }) => (
    <Fragment>
        <div className='col-12'>
            <input name='newCommentName' onChange={newCommentChange} type='text' placeholder='name' />
        </div>
        <div className='col-12'>
            <input name='newCommentEmail' onChange={newCommentChange} type='email' placeholder='email' />
        </div>
        <div className='col-12'>
            <textarea name='newCommentText' value={newComment} onChange={newCommentChange} type='text' placeholder='leave a comment...'></textarea>
        </div>
        <div className='col-12'>
            <button onClick={publishNewComment}>Leave a Comment</button>
        </div>
    </Fragment>    
)

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);