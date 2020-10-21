import { takeLatest, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import { GET_POSTS_PENDING, getPostByIdAction, GET_POST_BY_ID_PENDING } from '../../types'
import { getAllPostsSuccess, getAllPostsError, getPostByIdSuccess, getPostByIdError} from '../actions/posts'
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
      getAllPostsError(error)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error
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
      getPostByIdError(error)
    )
    yield put(
      setAlert({
        alertType: 'danger',
        ...error
      })
    )
  }
}
export default [
  takeLatest(GET_POSTS_PENDING, getAllPosts),
  takeEvery(GET_POST_BY_ID_PENDING, getPostById)
]