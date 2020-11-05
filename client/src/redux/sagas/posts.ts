import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { GET_POSTS_PENDING, getPostByIdAction, GET_POST_BY_ID_PENDING, createPostAction, CREATE_POST_PENDING, updatePostAction, UPDATE_POST_PENDING, deletePostByIdAction, DELETE_POST_BY_ID_PENDING, likePostByIdAction, LIKE_POST_BY_ID_PENDING, UNLIKE_POST_BY_ID_PENDING, unlikePostByIdAction, commentAction, deleteCommentAction, updateCommentAction, COMMENT_POST_PENDING, DELETE_COMMENT_BY_ID_PENDING, UPDATE_COMMENT_BY_ID_PENDING } from '../../types'
import { getAllPostsSuccess, getAllPostsError, getPostByIdSuccess, getPostByIdError, createPostFailed, createPostSuccess, updatePostSuccess, updatePostFailed, deletePostByIdSuccess, deletePostByIdError, likePostByIdError, likePostByIdSuccess, unlikePostByIdSuccess, unlikePostByIdError, commentPostFailed, commentPostSuccess, deleteCommentByIdSuccess, deleteCommentByIdError, updateCommentByIdSuccess, updateCommentByIdError} from '../actions/posts'
import { setAlert } from '../actions/alert'

function* getAllPosts() {
  try {
    const response = yield call(() => axios.get('/api/post/'))
    if (response) {
      yield put(getAllPostsSuccess(response.data))
    }
    else {
      yield put(
        getAllPostsError({
          statusCode: 500,
          message: 'Cannot get posts',
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message: 'Cannot get the posts',
        })
      )
    }
  } catch (error) {
    yield put(
      getAllPostsError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }

}

function* getPostById(action: getPostByIdAction){
  try {
    const response = yield call(() => axios.get(`/api/post/${action.payload}`))
    if (response) {
      yield put(getPostByIdSuccess(response.data))
    }
    else {
      yield put(
        getPostByIdError({
          statusCode: 500,
          message: 'Cannot get the post by ID',
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message: 'Cannot get the post by ID',
        })
      )
    }
  } catch (error) {
    yield put(
      getPostByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}
function* createAPost(action:createPostAction){
  try {
    const response= yield call(()=>axios.post('/api/post/', action.payload))
    if(response){
      yield put(createPostSuccess(response.data))
      yield put(
        setAlert({
          alertType: 'success',
          statusCode: 200,
          message: 'Successfully save the post',
        })
      )
    }
    else {
      yield put(
        createPostFailed({
          statusCode: 500,
          message: 'Cannot save the post',
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message: 'Cannot save the post',
        })
      )
    }
  } catch (error) {
    yield put(
      createPostFailed(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* updateAPost(action:updatePostAction){
  try {
    const response= yield call(()=>axios.put(`/api/post/${action.payload.id}`, action.payload))
    if(response){
      yield put(updatePostSuccess(response.data))
      yield put(
        setAlert({
          alertType: 'success',
          statusCode: 200,
          message: 'Successfully update the post',
        })
      )
    }
    else {
      yield put(
        updatePostFailed({
          statusCode: 500,
          message: 'Cannot save the post',
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message: 'Cannot save the post',
        })
      )
    }
  } catch (error) {
    yield put(
      updatePostFailed(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}
function* deleteAPost(action:deletePostByIdAction){
  try {
    const response= yield call(()=> axios.delete(`/api/post/${action.payload}`))
    if(response){
      yield put(deletePostByIdSuccess(response.data))
      yield put(
        setAlert({
          alertType: 'success',
          statusCode: 200,
          message: response.data,
        })
      )
    }
    else{
      yield put(
        deletePostByIdError({
          statusCode: 500,
          message:'Internal Server Error'
        }))
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message: 'Internal Server Error',
        })
      )
    }
  } catch (error) {
    yield put(
      deletePostByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* likeAPost(action: likePostByIdAction){
  try {
    const response=yield call(()=>axios.put(`/api/post/${action.payload}/like`))
     if(response){
       yield put(likePostByIdSuccess(response.data))
       yield put(
        setAlert({
          alertType: 'success',
          statusCode: 201,
          message: 'Successfully liked a post',
        })
       )
     }
     else{
      yield put(
        likePostByIdError({
          statusCode: 500,
          message:'Internal Server Error'
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message:'Internal Server Error'        
        })
      )
     }
  } catch (error) {
    yield put(
      likePostByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* unlikeAPost(action: unlikePostByIdAction){
  try {
    const response=yield call(()=>axios.put(`/api/post/${action.payload}/unlike`))
     if(response){
       yield put(unlikePostByIdSuccess(response.data))
       yield put(
        setAlert({
          alertType: 'success',
          statusCode: 201,
          message: 'Successfully unliked a post',
        })
       )
     }
     else{
      yield put(
        unlikePostByIdError({
          statusCode: 500,
          message:'Internal Server Error'
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message:'Internal Server Error'        
        })
      )
     }
  } catch (error) {
    yield put(
      unlikePostByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* createComment(action:commentAction){
  try {
    const response=yield call(()=>axios.put(`/api/post/${action.payload.id}/comment`, {value: action.payload.value}))

    if(response){
      yield put(commentPostSuccess(response.data))
      yield put(setAlert({
        alertType: 'success',
        statusCode: 201,
        message: 'Successfully put comment on the post',
      }))
    }
    else{
      yield put(
        commentPostFailed({
          statusCode: 500,
          message:'Internal Server Error'
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message:'Internal Server Error'        
        })
      )
    }
  } catch (error) {
    yield put(
      commentPostFailed(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* deleteComment(action:deleteCommentAction){
  try {
    const response=yield call(()=>axios.delete(`/api/post/${action.payload.postId}/comment/${action.payload.commentId}`))

    if(response){
      yield put(deleteCommentByIdSuccess(response.data))
      yield put(setAlert({
        alertType: 'success',
        statusCode: 201,
        message: 'Successfully delete a comment on the post',
      }))
    }
    else{
      yield put(
        deleteCommentByIdError({
          statusCode: 500,
          message:'Internal Server Error'
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message:'Internal Server Error'        
        })
      )
    }
  } catch (error) {
    yield put(
      deleteCommentByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}

function* updateComment(action:updateCommentAction){
  try {
    const response=yield call(()=>axios.put(`/api/post/${action.payload.postId}/comment/${action.payload.commentId}`, {value: action.payload.value}))

    if(response){
      yield put(updateCommentByIdSuccess(response.data))
      yield put(setAlert({
        alertType: 'success',
        statusCode: 201,
        message: 'Successfully update the comment on the post',
      }))
    }
    else{
      yield put(
        updateCommentByIdError({
          statusCode: 500,
          message:'Internal Server Error'
        })
      )
      yield put(
        setAlert({
          alertType: 'danger',
          statusCode: 500,
          message:'Internal Server Error'        
        })
      )
    }
  } catch (error) {
    yield put(
      updateCommentByIdError(error.response.data)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error.response.data
      })
    )
  }
}
export default [
  takeLatest(GET_POSTS_PENDING, getAllPosts),
  takeEvery(GET_POST_BY_ID_PENDING, getPostById),
  takeEvery(CREATE_POST_PENDING, createAPost),
  takeEvery(UPDATE_POST_PENDING, updateAPost),
  takeLatest(DELETE_POST_BY_ID_PENDING, deleteAPost),
  takeEvery(LIKE_POST_BY_ID_PENDING, likeAPost),
  takeEvery(UNLIKE_POST_BY_ID_PENDING, unlikeAPost),
  takeEvery(COMMENT_POST_PENDING, createComment),
  takeLatest(DELETE_COMMENT_BY_ID_PENDING, deleteComment),
  takeEvery(UPDATE_COMMENT_BY_ID_PENDING, updateComment)
]