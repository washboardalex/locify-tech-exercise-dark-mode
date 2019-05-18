import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPosts } from '../_redux/actions';

const mapStateToProps = (state) => {
  const { posts, loading } = state;
  return {
    posts, loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

class Home extends Component {

  componentDidMount() {
    const { posts, getPosts } = this.props;
    !posts && getPosts();
  }

  render() {
    const {posts} = this.props;

    return (
      <Fragment>
        <div className='row'>
          <h1>BLOG!</h1>      
        </div>
        <div className='row'>
          {posts && posts.map(({title, body, id}) => (
            <div key={id} className='col-12'>
              <Link 
                to={`${id}`}
              >
                <h5>{title}</h5>
              </Link>
              <p>{body.slice(0,20)+'...'}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);