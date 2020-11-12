import { ProfileState, updateProfileAction, updateProfileFailedAction, updateProfileSuccessAction, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_PENDING, UPDATE_PROFILE_SUCCESS } from "../../types";

const initialState: ProfileState={
  profile: null,
  pending: false,
  error: null
}

export default function profile(state=initialState, action: updateProfileAction | updateProfileSuccessAction | updateProfileFailedAction){
  switch(action.type){
    case UPDATE_PROFILE_PENDING:
      return {
        ...state,
        pending: true
      }
    case UPDATE_PROFILE_SUCCESS:
      return{
        ...state,
        profile: action.payload,
        pending: false,
        error: null
      }
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
        pending: false
      }
    dafault:
      return state;
  }
}