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
    LIKE_POST
} from './constants';

const initStateHome = {
    posts: [],
    loading: true,
    numPosts: 20,
    addNumPosts: 20
}

export const getPosts = (state=initStateHome, action={}) => {
    switch (action.type) {
        case GET_POSTS_PENDING:
            return { ...state, loading: true };
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: state.posts.concat(action.payload) };
        case GET_POSTS_FAILED:
            return { ...state, loading: false, error: action.payload };
        case INCREASE_NUM_POSTS:
            return { ...state, numPosts: action.payload}
        default:
          return state
      }
}

const initStatePost = {
    title: '',
    hasLiked: false,
    id: null,
    body: '',
    loading: true,
    comments:[],
    likes: 10, //Math.floor(Math.random()*20)
    newCommentName: '',
    newCommentEmail: '',
    newCommentText: ''
}

export const getPostAndComment = (state=initStatePost, action={}) => {
    switch(action.type) {
        case GET_POST_PENDING:
            return { ...state, loading: true };
        case GET_POST_SUCCESS:
            const {title, body, comments, postId} = action.payload;
            return { ...state, loading: false, title, body, comments, id: postId }
        case GET_POST_FAILED:
            return { ...state, loading: false, error: action.payload };
        case NEW_COMMENT_CHANGE:
            return { ...state, [action.payload.field]: action.payload.value}
        case PUBLISH_NEW_COMMENT:
            const { newCommentName, newCommentEmail, newCommentText } = state;
            if ( newCommentName !== '' && newCommentEmail !== '' && newCommentText !== '' ) {
                const comment =[{
                    postId: parseInt(state.id,10),
                    id: state.comments.length + 1,
                    name: newCommentName,
                    email: newCommentEmail,
                    body: newCommentText
                }]
                const comments = state.comments.concat(comment)
                return { ...state, comments } 
            } else {
                return state;
            }
        case LIKE_POST:
            if (state.hasLiked === true) {
                return state
            } 
            return { ...state, likes: state.likes + 1, hasLiked: true }
        default:
          return state;
    }
}