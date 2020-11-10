export const GET_POSTS_PENDING='GET_POSTS_PENDING'
export const GET_POSTS_SUCCESS='GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED='GET_POSTS_FAILED'

export const GET_POST_BY_ID_PENDING='GET_POST_BY_ID_PENDING'
export const GET_POST_BY_ID_SUCCESS='GET_POST_BY_ID_SUCCESS'
export const GET_POST_BY_ID_FAILED='GET_POST_BY_ID_FAILED'

export const CREATE_POST_PENDING='CREATE_POST_PENDING'
export const CREATE_POST_SUCCESS='CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED='CREATE_POST_FAILED'

export const UPDATE_POST_PENDING='UPDATE_POST_PENDING'
export const UPDATE_POST_SUCCESS='UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILED='UPDATE_POST_FAILED'

export const DELETE_POST_BY_ID_PENDING='DELETE_POST_BY_ID_PENDING'
export const DELETE_POST_BY_ID_SUCCESS='DELETE_POST_BY_ID_SUCCESS'
export const DELETE_POST_BY_ID_FAILED='DELETE_POST_BY_ID_FAILED'

export const LIKE_POST_BY_ID_PENDING='LIKE_POST_BY_ID_PENDING'
export const LIKE_POST_BY_ID_SUCCESS='LIKE_POST_BY_ID_SUCCESS'
export const LIKE_POST_BY_ID_FAILED='LIKE_POST_BY_ID_FAILED'

export const UNLIKE_POST_BY_ID_PENDING='UNLIKE_POST_BY_ID_PENDING'
export const UNLIKE_POST_BY_ID_SUCCESS='UNLIKE_POST_BY_ID_SUCCESS'
export const UNLIKE_POST_BY_ID_FAILED='UNLIKE_POST_BY_ID_FAILED'

export const COMMENT_POST_PENDING='COMMENT_POST_PENDING'
export const COMMENT_POST_SUCCESS='COMMENT_POST_SUCCESS'
export const COMMENT_POST_FAILED='COMMENT_POST_FAILED'

export const DELETE_COMMENT_BY_ID_PENDING='DELETE_COMMENT_BY_ID_PENDING'
export const DELETE_COMMENT_BY_ID_SUCCESS='DELETE_COMMENT_BY_ID_SUCCESS'
export const DELETE_COMMENT_BY_ID_FAILED='DELETE_COMMENT_BY_ID_FAILED'

export const UPDATE_COMMENT_BY_ID_PENDING='UPDATE_COMMENT_BY_ID_PENDING'
export const UPDATE_COMMENT_BY_ID_SUCCESS='UPDATE_COMMENT_BY_ID_SUCCESS'
export const UPDATE_COMMENT_BY_ID_FAILED='UPDATE_COMMENT_BY_ID_FAILED'

export const FOLLOW_POST_BY_ID_PENDING='FOLLOW_POST_BY_ID_PENDING'
export const FOLLOW_POST_BY_ID_SUCCESS='FOLLOW_POST_BY_ID_SUCCESS'
export const FOLLOW_POST_BY_ID_FAILED='FOLLOW_POST_BY_ID_FAILED'

export const UNFOLLOW_POST_BY_ID_PENDING='UNFOLLOW_POST_BY_ID_PENDING'
export const UNFOLLOW_POST_BY_ID_SUCCESS='UNFOLLOW_POST_BY_ID_SUCCESS'
export const UNFOLLOW_POST_BY_ID_FAILED='UNFOLLOW_POST_BY_ID_FAILED'

export const SET_ALERT='SET_ALERT'
export const SET_ALERT_SUCCESS='SET_ALERT_SUCCESS'
export const REMOVE_ALERT='REMOVE_ALERT'

export const LOGIN='LOGIN'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAILED='LOGIN_FAILED'

export const SIGNUP='SIGNUP'
export const SIGNUP_SUCCESS='SIGNUP_SUCCESS'
export const SIGNUP_FAILED='SIGNUP_FAILED'

export const LOAD_USER='LOAD_USER'
export const LOAD_USER_SUCCESS='LOAD_USER_SUCCESS'
export const LOAD_USER_FAILED='LOAD_USER_FAILED'

export const LOGOUT='LOGOUT'


export type setAlertAction={
  type: typeof SET_ALERT,
  payload: AlertForm
}

export type setAlertSuccessAction={
  type: typeof SET_ALERT_SUCCESS,
  payload: Alert
}
export type removeAlertAction={
  type: typeof REMOVE_ALERT,
  payload: string
}
export type getAllPostsAction={
  type: typeof GET_POSTS_PENDING
}
export type getAllPostsSuccessAction={
  type: typeof GET_POSTS_SUCCESS,
  payload: Post[]
}
export type getAllPostsFailedAction={
  type: typeof GET_POSTS_FAILED,
  payload: Error
}

export type getPostByIdAction={
  type: typeof GET_POST_BY_ID_PENDING,
  payload: string
}
export type getPostByIdSuccessAction={
  type: typeof GET_POST_BY_ID_SUCCESS,
  payload: Post
}
export type getPostByIdFailedAction={
  type: typeof GET_POST_BY_ID_FAILED,
  payload: Error
}

export type deletePostByIdAction={
  type: typeof DELETE_POST_BY_ID_PENDING,
  payload: string
}
export type deletePostByIdSuccessAction={
  type: typeof DELETE_POST_BY_ID_SUCCESS,
  payload: string
}
export type deletePostByIdFailedAction={
  type: typeof DELETE_POST_BY_ID_FAILED,
  payload: Error
}

export type likePostByIdAction={
  type: typeof LIKE_POST_BY_ID_PENDING,
  payload: string
}
export type likePostByIdSuccessAction={
  type: typeof LIKE_POST_BY_ID_SUCCESS,
  payload: LikeObject
}
export type likePostByIdFailedAction={
  type: typeof LIKE_POST_BY_ID_FAILED,
  payload: Error
}

export type unlikePostByIdAction={
  type: typeof UNLIKE_POST_BY_ID_PENDING,
  payload: string
}
export type unlikePostByIdSuccessAction={
  type: typeof UNLIKE_POST_BY_ID_SUCCESS,
  payload: Post
}
export type unlikePostByIdFailedAction={
  type: typeof UNLIKE_POST_BY_ID_FAILED,
  payload: Error
}

export type commentAction={
  type: typeof COMMENT_POST_PENDING,
  payload: {
    id:string,
    value: string
  }
}
export type commentSuccessAction={
  type: typeof COMMENT_POST_SUCCESS,
  payload: CommentObject[]
}
export type commentFailedAction={
  type: typeof COMMENT_POST_FAILED,
  payload: Error
}

export type deleteCommentAction={
  type: typeof DELETE_COMMENT_BY_ID_PENDING,
  payload: {
    postId:string,
    commentId: string
  }
}
export type deleteCommentSuccessAction={
  type: typeof DELETE_COMMENT_BY_ID_SUCCESS,
  payload: CommentObject[]
}
export type deleteCommentFailedAction={
  type: typeof DELETE_COMMENT_BY_ID_FAILED,
  payload: Error
}

export type updateCommentAction={
  type: typeof UPDATE_COMMENT_BY_ID_PENDING,
  payload: {
    postId:string,
    commentId: string,
    value: string
  }
}
export type updateCommentSuccessAction={
  type: typeof UPDATE_COMMENT_BY_ID_SUCCESS,
  payload: CommentObject[]
}
export type updateCommentFailedAction={
  type: typeof UPDATE_COMMENT_BY_ID_FAILED,
  payload: Error
}

export type createPostAction={
  type: typeof CREATE_POST_PENDING,
  payload: PostForm
}
export type createPostSuccessAction={
  type: typeof CREATE_POST_SUCCESS,
  payload: Post
}
export type createPostFailedAction={
  type: typeof CREATE_POST_FAILED,
  payload: Error
}

export type updatePostAction={
  type: typeof UPDATE_POST_PENDING,
  payload: PostUpdateForm
}
export type updatePostSuccessAction={
  type: typeof UPDATE_POST_SUCCESS,
  payload: Post
}
export type updatePostFailedAction={
  type: typeof UPDATE_POST_FAILED,
  payload: Error
}

export type followPostAction={
  type: typeof FOLLOW_POST_BY_ID_PENDING,
  payload: string
}
export type followPostSuccessAction={
  type: typeof FOLLOW_POST_BY_ID_SUCCESS
  payload: {
    user: string,
    followedpost: {
        postid: string,
        type: PostType
    }
}
}
export type followPostFailedAction={
  type: typeof FOLLOW_POST_BY_ID_FAILED,
  payload: Error
}

export type unfollowPostAction={
  type: typeof UNFOLLOW_POST_BY_ID_PENDING,
  payload: string
}
export type unfollowPostSuccessAction={
  type: typeof UNFOLLOW_POST_BY_ID_SUCCESS
  payload: {
    profilefollow: string,
    postUnfollow:string
  }
}
export type unfollowPostFailedAction={
  type: typeof UNFOLLOW_POST_BY_ID_FAILED,
  payload: Error
}

export type loginAction={
  type: typeof LOGIN,
  payload: LoginForm
}
export type loginSuccessAction={
  type: typeof LOGIN_SUCCESS,
  payload: string
}
export type loginFailedAction={
  type: typeof LOGIN_FAILED,
  payload: Error
}

export type signupAction={
  type: typeof SIGNUP,
  payload: SignUpForm
}
export type signupSuccessAction={
  type: typeof SIGNUP_SUCCESS,
  payload: string
}
export type signupFailedAction={
  type: typeof SIGNUP_FAILED,
  payload: Error
}

export type loadUserAction={
  type: typeof LOAD_USER
}
export type loadUserSuccessAction={
  type: typeof LOAD_USER_SUCCESS,
  payload: User
}
export type loadUserFailedAction={
  type: typeof LOAD_USER_FAILED,
  payload: Error
}


export type logoutAction={
  type: typeof LOGOUT
}

export interface AlertState{
  alerts: Alert[]
}
export interface PostsState{
  posts:Post[],
  storedPosts: Post[],
  currentPost: Post | null,
  pending: boolean,
  error: Error| null;
}
export interface UsersState{
  user: User| null,
  token: string | null,
  isAuthenticated: boolean,
  error: Error | null,
  pending: boolean
}

export interface AppState{
  alert: AlertState,
  post: PostsState,
  user: UsersState
}

export interface Post{
  _id: string,
  user: string, 
  username: string,
  avatar?:string,
  picture:string,
  name:string,
  type: PostType,
  content: string,
  comments: CommentObject[],
  likes: LikeObject[],
  followed: {
    user: string []
  },
  date: Date
}
export enum PostType {
  movie= 'movie',
  celebrity= 'celebrity',
  all= 'all'
}
export interface CommentObject {
  _id:string
  user: string, 
  name: string,
  avatar?: string,
  value: string
}
export interface LikeObject {
  user: string, 
  name: string,
  avatar?: string
}
export interface PostForm{
  picture:string,
  name:string,
  type: PostType,
  content: string,
}
export interface PostUpdateForm{
  id:string,
  picture:string,
  name:string,
  type: PostType,
  content: string,
}
export interface User {
  _id:string,
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
  isBanned: boolean,
  avatar?: string
}

export interface Profile {
  _id: string,
  user: string,
  name: string,
  bio?: string,
  socialmedia?: {
    facebook?: string,
    instagram?: string,
    linkedin?: string,
    website?: string,
    youtube?: string
  },
  post: Post[],
  followedposts: [{
    type: PostType,
    postid: string
  }]
}
export interface Error{
  statusCode: number,
  message: string,
  source?: string
}
export interface Alert{
  id: string, 
  alertType: 'success' | 'danger',
  statusCode: number,
  message: string
}
export interface AlertForm{
  alertType: 'success' | 'danger',
  statusCode: number,
  message: string
}
export interface LoginForm{
  email: string,
  password: string
}
export interface SignUpForm{
  name: string,
  email: string,
  password: string
}