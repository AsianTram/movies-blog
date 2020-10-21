import { all } from 'redux-saga/effects';

import alertSaga from './alert'
import postsSaga from './posts'

export default function* rootSaga() {
  yield all([
    ...alertSaga,
    ...postsSaga
  ])
}