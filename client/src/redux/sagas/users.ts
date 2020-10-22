import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN, SIGNUP } from "../../types";
import axios from "axios";
import { loginSuccess, loginFailed, signupSuccess, signupFailed } from "../actions/users";
import { setAlert } from "../actions";

function* login(){
  try {
    const response= yield call(()=> axios.post('/api/user/login'))
    if(response){
      yield put(loginSuccess(response.data))
      yield put(setAlert({
        alertType: "success",
        message: 'Successfully login',
        statusCode: 201
      }))
    }
    else{
      yield put(loginFailed({
        message: 'Cannot make the request',
        statusCode: 500
      }))
      yield put(setAlert({
        alertType: 'danger',
        message: 'Cannot make the request',
        statusCode: 500
      }))
    }
  } catch (error) {
    yield put(loginFailed(error))
    yield put(setAlert({
      alertType: 'danger',
      ...error
    }))
  }
}
function* signup(){
  try {
    const response= yield call(()=> axios.post('/api/user/signup'))
    if(response){
      yield put(signupSuccess(response.data))
      yield put(setAlert({
        alertType: "success",
        message: 'Successfully create a new account',
        statusCode: 201
      }))
    }
    else{
      yield put(signupFailed({
        message: 'Cannot make the request',
        statusCode: 500
      }))
      yield put(setAlert({
        alertType: 'danger',
        message: 'Cannot make the request',
        statusCode: 500
      }))
    }
  } catch (error) {
    yield put(signupFailed(error))
    yield put(setAlert({
      alertType: 'danger',
      ...error
    }))
  }
}

export default [
  takeEvery(LOGIN, login),
  takeEvery(SIGNUP, signup)
]