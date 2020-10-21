import {
GET_POSTS_PENDING,
GET_POSTS_SUCCESS,
GET_POSTS_FAILED,
Post, 
Error,
GET_POST_BY_ID_PENDING,
GET_POST_BY_ID_SUCCESS,
GET_POST_BY_ID_FAILED
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