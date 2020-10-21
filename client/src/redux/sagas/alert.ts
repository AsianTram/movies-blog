import {v4 as uuid} from 'uuid';
import { put, takeEvery, call } from 'redux-saga/effects';
import { SET_ALERT, setAlertAction } from '../../types';
import { setAlertSuccess, removeAlert } from '../actions/alert';

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

function* handleAlert(action:setAlertAction){
  const id= uuid();
  yield put(setAlertSuccess({...action.payload, id}))
  yield call(delay, 2000)
  yield put(removeAlert(id))
}
export default [
  takeEvery(SET_ALERT, handleAlert)
]