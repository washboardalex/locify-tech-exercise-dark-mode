import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPostAndComment, likePost } from '../_redux/actions';
import NewComment from './NewComment';
import CommentsList from './CommentsList';
import Loading from './Loading';
import DarkModeHeading from './DarkModeHeading';
import DarkModeComments from './DarkModeComments';
import LikeSVG from './LikeSVG';

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
        window.scrollTo(0,0);

        const { title, getPostAndComment, id } = this.props;
        const { postId } = this.props.match.params;
        ( title.length < 1 || postId !== id ) && getPostAndComment(postId);
    }

    titleCase = (str) => {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }
       

    render() { 
        const { body, comments, likes, likePost, hasLiked, loading } = this.props;
        let title = this.titleCase(this.props.title);

        return (
            <div style={{margin:'25px'}}>
                {loading
                    ? 
                    <div className='fll-pg-ld'>
                        <Loading text={'Loading'} />
                    </div>
                    :
                    <Fragment>
                        <div className='row mgn-crct center'>
                            <DarkModeHeading title={title} body={body} />
                        </div>
                        <div style={{marginLeft:'10px', marginBottom:'10px'}} className='row mgn-crct'>
                            <LikeSVG likePost={likePost} likes={likes} />
                            <div className='col-12'>
                                <span style={{marginLeft:'-10px'}}> {hasLiked && 'Thanks!' } </span>
                            </div>
                        </div>
                        <DarkModeComments />
                        <div className='drctn-col' >
                            <div style={{width:'70%'}}>
                                <div className='row mgn-crct'>
                                    <NewComment />
                                    <CommentsList comments={comments} />
                                </div>
                            </div>
                        </div>
                    </Fragment>
                }  
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);