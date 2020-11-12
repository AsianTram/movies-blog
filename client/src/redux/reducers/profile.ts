import { loadProfileAction, loadProfileFailedAction, loadProfileSuccessAction, LOAD_PROFILE, LOAD_PROFILE_FAILED, LOAD_PROFILE_SUCCESS, LOGOUT, logoutAction, ProfileState, updateProfileAction, updateProfileFailedAction, updateProfileSuccessAction, UPDATE_PROFILE_FAILED, UPDATE_PROFILE_PENDING, UPDATE_PROFILE_SUCCESS } from "../../types";

const initialState: ProfileState={
  profile: null,
  pending: false,
  error: null
}

export default function profile(state=initialState, action: loadProfileAction | loadProfileSuccessAction| loadProfileFailedAction |
  updateProfileAction | updateProfileSuccessAction | updateProfileFailedAction
  | logoutAction){
  switch(action.type){
    case LOAD_PROFILE:
    case UPDATE_PROFILE_PENDING:
      return {
        ...state,
        pending: true
      }
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        pending: false,
        error: null
      }
    case UPDATE_PROFILE_SUCCESS:
      return{
        ...state,
        profile: action.payload,
        pending: false,
        error: null
      }
    case LOAD_PROFILE_FAILED:
    case UPDATE_PROFILE_FAILED:
      return {
        ...state,
        error: action.payload,
        pending: false
      }
    case LOGOUT:
      return {
        ...state,
         profile: null,
         pending: false,
         error:null
      }
    default:
      return state;
  }
}