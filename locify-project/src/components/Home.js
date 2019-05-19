import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPosts, increasePostsDisplayed } from '../_redux/actions';
import PostPreview from './PostPreview';

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
    const {posts, increasePostsDisplayed, numPosts, addNumPosts } = this.props;

    return (
      <Fragment>
        <div className='row'>
          <h1>BLOG!</h1>      
        </div>
        <div className='row'>
          {posts && posts.map(({title, body, id}) => (
            <PostPreview
              key={id}
              title={title}
              body={body}
              id={id}
            />
          ))}
        </div>
        {numPosts < 100 && 
          <button onClick={() => increasePostsDisplayed(numPosts, addNumPosts)}>Load more articles...</button>
        }
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);