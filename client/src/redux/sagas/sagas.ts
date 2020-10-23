import { all } from 'redux-saga/effects';

import alertSaga from './alert'
import postsSaga from './posts'
import usersSaga from './users'


export default function* rootSaga() {
  yield all([
    ...alertSaga,
    ...postsSaga,
    ...usersSaga
  ])
}