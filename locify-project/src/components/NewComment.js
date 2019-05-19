import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { newCommentChange, publishNewComment } from '../_redux/actions';
import comment from '../static/comment.svg';

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

const NewComment = ({  newCommentName, newCommentEmail, newCommentText, newCommentChange, publishNewComment }) => (
    <Fragment>
            <div className='col-12'>
                <input 
                    className='commt-inpt' 
                    name='newCommentName' 
                    onChange={newCommentChange} 
                    value={newCommentName}
                    type='text' 
                    placeholder='Name*' 
                />
            </div>
            <div className='col-12'>
                <input 
                    className='commt-inpt' 
                    value={newCommentEmail} 
                    name='newCommentEmail' 
                    onChange={newCommentChange} 
                    type='email' 
                    placeholder='Email*' 
                />
            </div>
            <div className='col-12'>
                <textarea 
                    className='commt-inpt' 
                    name='newCommentText' 
                    value={newCommentText}
                    onChange={newCommentChange} 
                    type='text' 
                    placeholder='Add your comment...'
                ></textarea>
            </div>
            <div className='col-12 center'>
                <img style={{marginBottom:'25px', marginTop:'10px'}}  onClick={publishNewComment} className='bubble' src={comment} />
            </div>
    </Fragment>    
)

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);