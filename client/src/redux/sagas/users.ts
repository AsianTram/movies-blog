import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN, SIGNUP, signupAction, loginAction, LOAD_USER } from "../../types";
import axios from "axios";
import { loginSuccess, loginFailed, signupSuccess, signupFailed, loadUserFailed, loadUserSuccess, loadUser as loadUserAction} from "../actions/users";
import { setAlert } from "../actions";
import { loadProfilePending } from "../actions/profile";

function* login(action:loginAction){
  try {
    const response= yield call(()=> axios.post('/api/user/login', action.payload))
    if(response){
      yield put(loginSuccess(response.data))
      yield put(setAlert({
        alertType: "success",
        message: 'Successfully login',
        statusCode: 201
      }))
      yield put(loadUserAction())
      yield put(loadProfilePending())

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
    yield put(loginFailed(error.response.data))
    yield put(setAlert({
      alertType: 'danger',
      ...error.response.data
    }))
  }
}
function* signup(action:signupAction){
  try {
    const response= yield call(()=> axios.post('/api/user/signup', action.payload))
    if(response){
      yield put(signupSuccess(response.data))
      yield put(setAlert({
        alertType: "success",
        message: 'Successfully create a new account',
        statusCode: 201
      }))
      yield put(loadUserAction())

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
    yield put(signupFailed(error.response.data))
    yield put(setAlert({
      alertType: 'danger',
      ...error.response.data
    }))
  }
}

function* loadUser(){
  try {
    const response= yield call(()=>axios.get('/api/user/'))
    if(response){
      yield put(loadUserSuccess(response.data))
    }
    else{
      yield put(loadUserFailed({
        message: 'Cannot load user',
        statusCode: 500
      }))
    }
  } catch (error) {
    yield put(loadUserFailed(error.response.data))
  }
}

export default [
  takeEvery(LOGIN, login),
  takeEvery(SIGNUP, signup),
  takeEvery(LOAD_USER, loadUser)
]