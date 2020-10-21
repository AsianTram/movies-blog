export const GET_POSTS_PENDING='GET_POSTS_PENDING'
export const GET_POSTS_SUCCESS='GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED='GET_POSTS_FAILED'

export const GET_POST_BY_ID_PENDING='GET_POST_BY_ID_PENDING'
export const GET_POST_BY_ID_SUCCESS='GET_POST_BY_ID_SUCCESS'
export const GET_POST_BY_ID_FAILED='GET_POST_BY_ID_FAILED'

export const SET_ALERT='SET_ALERT'
export const SET_ALERT_SUCCESS='SET_ALERT_SUCCESS'
export const REMOVE_ALERT='REMOVE_ALERT'

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

export interface AppState{
  alert: AlertState,
  post: PostsState
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