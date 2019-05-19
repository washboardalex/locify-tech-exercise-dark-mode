import { 
    GET_POSTS_PENDING, 
    GET_POSTS_SUCCESS, 
    GET_POSTS_FAILED, 
    INCREASE_NUM_POSTS, 
    GET_POST_FAILED,
    GET_POST_PENDING,
    GET_POST_SUCCESS,
    NEW_COMMENT_CHANGE,
    PUBLISH_NEW_COMMENT,
    LIKE_POST,
    API_URL 
} from './constants';
import { apiCall } from '../_api/api';

export const getPosts = (startIndex, addNumPosts) => (dispatch) => {
    dispatch({ type: GET_POSTS_PENDING });
    apiCall(`${API_URL}/posts?_start=${startIndex}&_limit=${addNumPosts}`)
        .then(data => {
            dispatch({ type: GET_POSTS_SUCCESS, payload: data });
        })
        .catch(error => dispatch({ type: GET_POSTS_FAILED, payload: error }));
}

export const increasePostsDisplayed = (numPosts, addNumPosts) => ({
    type: INCREASE_NUM_POSTS,
	payload: numPosts + addNumPosts
})

export const getPostAndComment = (postId) => (dispatch) => {
    dispatch({ type: GET_POST_PENDING });
    apiCall(`${API_URL}/posts/${postId}`)
        .then(data => {
            const { title, body } = data;
            apiCall(`${API_URL}/comments?postId=${postId}`)
                .then(data => {
                    const comments = data;
                    dispatch({ type: GET_POST_SUCCESS, payload: {title, body, comments, postId}  });
                })
                .catch(error => dispatch({ type: GET_POST_FAILED, payload: error }));
        })
        .catch(error => dispatch({ type: GET_POST_FAILED, payload: error }));
}

export const newCommentChange = (field, value) => ({ type: NEW_COMMENT_CHANGE, payload: { field, value } })

export const publishNewComment = () => ({type: PUBLISH_NEW_COMMENT })

export const likePost = () => ({type: LIKE_POST})