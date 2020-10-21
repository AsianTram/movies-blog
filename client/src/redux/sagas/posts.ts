import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { GET_POSTS_PENDING } from '../../types'
import { getAllPostsSuccess, getAllPostsError } from '../actions/posts'
import { setAlert } from '../actions/alert'

function* getAllPosts() {
  try {
    console.log("Moi")

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

export default [
  takeLatest(GET_POSTS_PENDING, getAllPosts)
]