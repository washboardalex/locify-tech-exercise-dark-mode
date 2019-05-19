import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import useDarkMode from 'use-dark-mode';

import { newCommentChange, publishNewComment } from '../_redux/actions';
import comment from '../static/comment.svg';
import commentWhite from '../static/comment-white.svg';

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

const NewComment = ({  newCommentName, newCommentEmail, newCommentText, newCommentChange, publishNewComment }) => {
    const darkMode = useDarkMode(false);

    return (
        <Fragment>
                <div className='col-12'>
                    <input 
                        style={darkMode.value === true ? {backgroundColor:'#10171d', border:'1px solid white'} : {} }
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
                        style={darkMode.value === true ? {backgroundColor:'#10171d', border:'1px solid white'} : {} }
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
                        style={darkMode.value === true ? {backgroundColor:'#10171d', border:'1px solid white'} : {} }
                        className='commt-inpt' 
                        name='newCommentText' 
                        value={newCommentText}
                        onChange={newCommentChange} 
                        type='text' 
                        placeholder='Add your comment...'
                    ></textarea>
                </div>
                <div className='col-12 center'>
                    <img 
                        style={{marginBottom:'25px', marginTop:'10px'}} 
                        alt='post a comment'  
                        onClick={publishNewComment} 
                        className='bubble' 
                        src={darkMode.value === true ? commentWhite : comment} 
                    />
                </div>
        </Fragment>    
    );
} 

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);