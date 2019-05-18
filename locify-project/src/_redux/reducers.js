import { GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAILED } from './constants';

const initStateHome = {
    posts: null,
    loading: true,
    numPosts: 20
}

export const getPosts = (state=initStateHome, action={}) => {
    switch (action.type) {
        case GET_POSTS_PENDING:
          return { ...state, loading: true };
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload  };
        case GET_POSTS_FAILED:
          return { ...state, loading: false, error: action.payload };
        default:
          return state
      }
}