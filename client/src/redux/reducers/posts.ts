import { getAllPostsSuccessAction, getAllPostsFailedAction, PostsState, GET_POSTS_SUCCESS, getAllPostsAction, GET_POSTS_BY_ID_PENDING, GET_POSTS_PENDING, GET_POSTS_FAILED } from "../../types";

const initialState: PostsState= {
  posts: [],
  currentPost: null,
  storedPosts:[],
  error: null,
  pending: false
}
export default function post(state=initialState, action: getAllPostsAction| getAllPostsSuccessAction | getAllPostsFailedAction){
  switch(action.type){
    case GET_POSTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        posts: action.payload
      }
    case GET_POSTS_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    default:
      return state;
  }
}