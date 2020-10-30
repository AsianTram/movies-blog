import { getAllPostsSuccessAction, getAllPostsFailedAction, PostsState, GET_POSTS_SUCCESS, getAllPostsAction, GET_POST_BY_ID_PENDING, GET_POSTS_PENDING, GET_POSTS_FAILED, getPostByIdAction, GET_POST_BY_ID_FAILED, GET_POST_BY_ID_SUCCESS, getPostByIdFailedAction, getPostByIdSuccessAction, createPostAction, createPostSuccessAction, createPostFailedAction, CREATE_POST_FAILED, CREATE_POST_PENDING, CREATE_POST_SUCCESS, Post, UPDATE_POST_PENDING, updatePostAction, updatePostSuccessAction, updatePostFailedAction, UPDATE_POST_FAILED } from "../../types";

const initialState:PostsState = {
  posts: [],
  currentPost: null,
  storedPosts: [],
  error: null,
  pending: false
}
export default function post(state = initialState, action: getAllPostsAction | getAllPostsSuccessAction | getAllPostsFailedAction
  | getPostByIdAction | getPostByIdSuccessAction | getPostByIdFailedAction
  | createPostAction | createPostSuccessAction | createPostFailedAction
  | updatePostAction | updatePostSuccessAction | updatePostFailedAction
) {
  switch (action.type) {
    case GET_POSTS_PENDING:
    case GET_POST_BY_ID_PENDING:
    case CREATE_POST_PENDING:
    case UPDATE_POST_PENDING:
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
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        currentPost: action.payload,
        error: null
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload,...state.posts],
        pending: false,
        currentPost: action.payload,
        error: null
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts.filter(p =>p._id!==action.payload._id)],
        pending: false,
        currentPost: action.payload,
        error: null
      }
    case GET_POSTS_FAILED:
    case GET_POST_BY_ID_FAILED:
    case CREATE_POST_FAILED:
    case UPDATE_POST_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    default:
      return state;
  }
}