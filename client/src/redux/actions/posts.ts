import {
GET_POSTS_PENDING,
GET_POSTS_SUCCESS,
GET_POSTS_FAILED,
Post, 
Error,
GET_POST_BY_ID_PENDING,
GET_POST_BY_ID_SUCCESS,
GET_POST_BY_ID_FAILED,
PostForm,
CREATE_POST_PENDING,
CREATE_POST_SUCCESS,
CREATE_POST_FAILED,
UPDATE_POST_PENDING,
UPDATE_POST_SUCCESS,
UPDATE_POST_FAILED
} from '../../types'

export function getAllPostsPending(){
  return {
    type: GET_POSTS_PENDING
  }
}
export function getAllPostsSuccess(data:Post[]){
  return {
    type: GET_POSTS_SUCCESS,
    payload: data
  }
}
export function getAllPostsError(e:Error){
  return {
    type: GET_POSTS_FAILED,
    payload: e
  }
}

export function getPostByIdPending(id:string){
  return {
    type: GET_POST_BY_ID_PENDING,
    payload: id
  }
}
export function getPostByIdSuccess(data:Post){
  return {
    type: GET_POST_BY_ID_SUCCESS,
    payload: data
  }
}
export function getPostByIdError(e:Error){
  return {
    type: GET_POST_BY_ID_FAILED,
    payload: e
  }
}
export function createPost(data: PostForm){
  return {
    type: CREATE_POST_PENDING,
    payload: data
  }
}
export function createPostSuccess(data: Post){
  return {
    type: CREATE_POST_SUCCESS,
    payload:data
  }
}
export function createPostFailed(e: Error){
  return {
    type: CREATE_POST_FAILED,
    payload: e
  }
}

export function updatePost(data: PostForm){
  return {
    type: UPDATE_POST_PENDING,
    payload: data
  }
}
export function updatePostSuccess(data: Post){
  return {
    type: UPDATE_POST_SUCCESS,
    payload:data
  }
}
export function updatePostFailed(e: Error){
  return {
    type: UPDATE_POST_FAILED,
    payload: e
  }
}