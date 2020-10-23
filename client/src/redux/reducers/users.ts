import { UsersState, signupAction, signupSuccessAction, signupFailedAction, loginAction, loginSuccessAction, loginFailedAction, LOGIN, SIGNUP, LOGIN_SUCCESS, SIGNUP_SUCCESS, LOGIN_FAILED, SIGNUP_FAILED, logoutAction, LOGOUT, loadUserAction, loadUserSuccessAction, loadUserFailedAction, LOAD_USER, LOAD_USER_SUCCESS } from "../../types";
import setTokenToHeader from '../../utils/setTokenToHeader';

const initialState:UsersState={
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  pending: false,
  error: null
}
export default function user(state:UsersState=initialState, action: signupAction| signupSuccessAction|signupFailedAction
                                                                    | loginAction | loginSuccessAction|loginFailedAction
                                                                    | loadUserAction | loadUserSuccessAction| loadUserFailedAction
                                                                    | logoutAction
){
  switch(action.type){
    case LOGIN:
    case SIGNUP:
    case LOAD_USER:
      return{
        ...state,
        pending: true,
        error: null
      }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload as string)
      setTokenToHeader(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        pending: false,
        error: null
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        pending:false,
        error: null
      }
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
    case LOGIN_FAILED:
      localStorage.removeItem('token');
      return{
        user: null,
        isAuthenticated: false,
        token: null,
        pending: false,
        error: action.payload
      }
    case LOGOUT:
      localStorage.removeItem('token');
      return{
        user: null,
        isAuthenticated: false,
        token: null,
        pending: false,
        error: null
      }
    default:
      return state
  }
}