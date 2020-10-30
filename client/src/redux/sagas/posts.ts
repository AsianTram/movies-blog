import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { GET_POSTS_PENDING, getPostByIdAction, GET_POST_BY_ID_PENDING, createPostAction, CREATE_POST_PENDING, Post, updatePostAction, UPDATE_POST_PENDING } from '../../types'
import { getAllPostsSuccess, getAllPostsError, getPostByIdSuccess, getPostByIdError, createPostFailed, createPostSuccess, updatePostSuccess, updatePostFailed} from '../actions/posts'
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
export default [
  takeLatest(GET_POSTS_PENDING, getAllPosts),
  takeEvery(GET_POST_BY_ID_PENDING, getPostById),
  takeEvery(CREATE_POST_PENDING, createAPost),
  takeEvery(UPDATE_POST_PENDING, updateAPost)
]