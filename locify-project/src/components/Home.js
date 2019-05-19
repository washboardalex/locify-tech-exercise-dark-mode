import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPosts, increasePostsDisplayed } from '../_redux/actions';
import PostList from './PostList';
import Loading from './Loading';
import img  from '../static/face_opt.jpg'
import books from '../static/books.svg';

const mapStateToProps = (state) => {
  const { posts, loading, numPosts, addNumPosts } = state.getPosts;
  return {
    posts, loading, numPosts, addNumPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (startIndex, addNumPosts) => dispatch(getPosts(startIndex, addNumPosts)),
    increasePostsDisplayed: (numPosts, addNumPosts) => dispatch(increasePostsDisplayed(numPosts, addNumPosts))
  }
}

class Home extends Component {

  componentDidMount() {
    const { posts, getPosts, numPosts, addNumPosts } = this.props;

    posts.length < numPosts && getPosts(posts.length, addNumPosts);
  }

  componentWillReceiveProps(nextProps) {
    const { posts, getPosts, numPosts, addNumPosts } = this.props;
    if (nextProps.numPosts > numPosts) {
      getPosts(posts.length, addNumPosts)
    }
  }

  render() {
    const {posts, increasePostsDisplayed, loading, numPosts, addNumPosts } = this.props;

    return (
      <Fragment>
        <div className='stdrd-margin row'>
          <div className='center col-lg-6 col-sm-12'>
            <img className='auth-img' src={img} alt='author face' />
          </div>
          <div className='center col-lg-6 col-sm-12'>
            <h1 className='mn-hdng'  >Cicero's Blog</h1>
          </div>
        </div>
        <div className='center row'>
          <div style={{ width:'70%', backgroundColor:'rgba(255,255,255,0.9)' }} >
            <div style={{marginTop:'50px', marginBottom:'10px'}} className='center col-12'><h1>Posts</h1></div>
            <PostList posts={posts} />          
          </div>
          { loading === true && <div className='stdrd-margin center col-12'><Loading text={'Loading'} /></div> }
        </div>
        <div className='center stdrd-margin row'>
          {!loading && (numPosts < 100 
            ? 
            <div className="col-12 drctn-col">
              <img 
                src={books} 
                alt='load more posts' 
                className='load-button' 
                onClick={() => increasePostsDisplayed(numPosts, addNumPosts)} 
              />
              <span>Load more</span>
            </div>
            : <span>All articles loaded.</span>
          )}
        </div>  
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);