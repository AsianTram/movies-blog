import { Error, Profile, ProfileForm, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_PENDING, UPDATE_PROFILE_SUCCESS } from "../../types";

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