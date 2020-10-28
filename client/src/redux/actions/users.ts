import { LoginForm, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, SignUpForm, SIGNUP_SUCCESS, SIGNUP_FAILED,Error, LOGOUT, LOAD_USER, User, LOAD_USER_SUCCESS, LOAD_USER_FAILED, SIGNUP } from "../../types";

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
    type: SIGNUP,
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

export function loadUser(){
  return {
    type: LOAD_USER
  }
}

export function loadUserSuccess(data: User){
  return {
    type: LOAD_USER_SUCCESS,
    payload: data
  }
}
export function loadUserFailed(e: Error){
  return {
    type: LOAD_USER_FAILED,
    payload: e
  }
}
export function logout(){
  return {
    type: LOGOUT
  }
}