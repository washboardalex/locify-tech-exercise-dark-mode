import { GET_POSTS_PENDING, GET_POSTS_SUCCESS, GET_POSTS_FAILED, API_URL } from './constants';
import { apiCall } from '../_api/api';

export const getPosts = () => (dispatch) => {
    dispatch({ type: GET_POSTS_PENDING });
    apiCall(`${API_URL}/posts`)
        .then(data => {
            dispatch({ type: GET_POSTS_SUCCESS, payload: data });
        })
        .catch(error => dispatch({ type: GET_POSTS_FAILED, payload: error }));
}
