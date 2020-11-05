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
UPDATE_POST_FAILED,
PostUpdateForm,
DELETE_POST_BY_ID_PENDING,
DELETE_POST_BY_ID_SUCCESS,
DELETE_POST_BY_ID_FAILED,
LIKE_POST_BY_ID_PENDING,
LIKE_POST_BY_ID_SUCCESS,
LIKE_POST_BY_ID_FAILED,
UNLIKE_POST_BY_ID_PENDING,
UNLIKE_POST_BY_ID_SUCCESS,
UNLIKE_POST_BY_ID_FAILED,
LikeObject,
COMMENT_POST_PENDING,
COMMENT_POST_SUCCESS,
COMMENT_POST_FAILED,
CommentObject,
UPDATE_COMMENT_BY_ID_PENDING,
UPDATE_COMMENT_BY_ID_SUCCESS,
UPDATE_COMMENT_BY_ID_FAILED,
DELETE_COMMENT_BY_ID_PENDING,
DELETE_COMMENT_BY_ID_SUCCESS,
DELETE_COMMENT_BY_ID_FAILED
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

export function updatePost(data: PostUpdateForm){
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
export function deletePostByIdPending(id:string){
  return {
    type: DELETE_POST_BY_ID_PENDING,
    payload: id
  }
}
export function deletePostByIdSuccess(data:string){
  return {
    type: DELETE_POST_BY_ID_SUCCESS,
    payload: data
  }
}
export function deletePostByIdError(e:Error){
  return {
    type: DELETE_POST_BY_ID_FAILED,
    payload: e
  }
}

export function likePostByIdPending(id:string){
  return {
    type: LIKE_POST_BY_ID_PENDING,
    payload: id
  }
}
export function likePostByIdSuccess(data:LikeObject){
  return {
    type: LIKE_POST_BY_ID_SUCCESS,
    payload: data
  }
}
export function likePostByIdError(e:Error){
  return {
    type: LIKE_POST_BY_ID_FAILED,
    payload: e
  }
}

export function unlikePostByIdPending(id:string){
  return {
    type: UNLIKE_POST_BY_ID_PENDING,
    payload: id
  }
}
export function unlikePostByIdSuccess(data:Post){
  return {
    type: UNLIKE_POST_BY_ID_SUCCESS,
    payload: data
  }
}
export function unlikePostByIdError(e:Error){
  return {
    type: UNLIKE_POST_BY_ID_FAILED,
    payload: e
  }
}

export function commentPost(data:{id:string, value:string}){
  return {
    type: COMMENT_POST_PENDING,
    payload: data
  }
}
export function commentPostSuccess(data: CommentObject[]){
  return {
    type: COMMENT_POST_SUCCESS,
    payload:data
  }
}
export function commentPostFailed(e: Error){
  return {
    type: COMMENT_POST_FAILED,
    payload: e
  }
}

export function deleteCommentByIdPending(data: {postId:string, commentId: string}){
  return {
    type: DELETE_COMMENT_BY_ID_PENDING,
    payload: data
  }
}
export function deleteCommentByIdSuccess(data:CommentObject[]){
  return {
    type: DELETE_COMMENT_BY_ID_SUCCESS,
    payload: data
  }
}
export function deleteCommentByIdError(e:Error){
  return {
    type: DELETE_COMMENT_BY_ID_FAILED,
    payload: e
  }
}

export function updateCommentByIdPending(data: {postId:string, commentId: string, value: string}){
  return {
    type: UPDATE_COMMENT_BY_ID_PENDING,
    payload: data
  }
}
export function updateCommentByIdSuccess(data:CommentObject[]){
  return {
    type: UPDATE_COMMENT_BY_ID_SUCCESS,
    payload: data
  }
}
export function updateCommentByIdError(e:Error){
  return {
    type: UPDATE_COMMENT_BY_ID_FAILED,
    payload: e
  }
}
