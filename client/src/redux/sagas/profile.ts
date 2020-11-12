import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { LOAD_PROFILE, updateProfileAction, UPDATE_PROFILE_PENDING } from "../../types";
import { setAlert } from "../actions";
import { loadProfileFailed, loadProfileSuccess, updateProfileFailed, updateProfileSuccess } from "../actions/profile";

function* loadProfile(){
  try {
    const profileResponse=yield call(()=>axios.get('/api/profile/'))
  if(profileResponse){
    yield put(loadProfileSuccess(profileResponse.data))
  }
  else{
    yield put(loadProfileFailed({
      message: 'Cannot load profile',
      statusCode: 500
    }))
  }
} catch (error) {
  yield put(loadProfileFailed(error.response.data))
}
}

function* updateProfile(action:updateProfileAction){
  try {
    const response= yield call(()=>axios.put('/api/profile/update', action.payload))
    if(response){
      yield  put (setAlert({
        statusCode: 201,
        alertType: 'success',
        message: 'Successfully update your profile'
        
      }))
      yield put(updateProfileSuccess(response.data))
    }
    else{
      yield put(setAlert({
        alertType: 'danger',
        statusCode: 500,
        message:'Internal Server Error'
      }))
      yield put(updateProfileFailed({
        statusCode: 500,
        message:'Internal Server Error'
      }))
    }
  } catch (error) {
    yield put(setAlert({
      alertType: 'danger',
      ...error.response.data
    }))
    yield put(updateProfileFailed(error))
  }
}
export default[
  takeLatest(LOAD_PROFILE, loadProfile),
  takeLatest(UPDATE_PROFILE_PENDING, updateProfile)
]