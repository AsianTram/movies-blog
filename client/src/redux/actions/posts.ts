import {
GET_POSTS_PENDING,
GET_POSTS_SUCCESS,
GET_POSTS_FAILED,
Post, 
Error
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