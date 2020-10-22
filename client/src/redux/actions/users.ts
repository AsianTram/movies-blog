import { LoginForm, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, SignUpForm, SIGNUP_SUCCESS, SIGNUP_FAILED,Error, LOGOUT } from "../../types";

export function login(data: LoginForm){
  return {
    type: LOGIN,
    payload: data
  }
}
export function loginSuccess(data: {token: string}){
  return {
    type: LOGIN_SUCCESS,
    payload: data.token
  }
}
export function loginFailed(e: Error){
  return {
    type: LOGIN_FAILED,
    payload: e
  }
}
export function signup(data: SignUpForm){
  return {
    type: LOGIN,
    payload: data
  }
}
export function signupSuccess(data: {token: string}){
  return {
    type: SIGNUP_SUCCESS,
    payload: data.token
  }
}
export function signupFailed(e: Error){
  return {
    type: SIGNUP_FAILED,
    payload: e
  }
}

export function logout(){
  return {
    type: LOGOUT
  }
}