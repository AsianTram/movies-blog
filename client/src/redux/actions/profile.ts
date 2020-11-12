import { Error, LOAD_PROFILE, LOAD_PROFILE_FAILED, LOAD_PROFILE_SUCCESS, Profile, ProfileForm, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_PENDING, UPDATE_PROFILE_SUCCESS } from "../../types";

export function loadProfilePending(){
  return {
    type: LOAD_PROFILE
  }
}
export function loadProfileSuccess(data: Profile){
  return {
    type: LOAD_PROFILE_SUCCESS,
    payload: data
  }
}
export function loadProfileFailed(error:Error){
  return {
    type: LOAD_PROFILE_FAILED,
    payload: error
  }
}

export function updateProfilePending(data: ProfileForm){
  return {
    type: UPDATE_PROFILE_PENDING,
    payload: data
  }
}
export function updateProfileSuccess(data: Profile){
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: data
  }
}
export function updateProfileFailed(error:Error){
  return {
    type: UPDATE_PROFILE_FAILED,
    payload: error
  }
}