import { combineReducers } from 'redux';

import alert from './alert'
import post from './posts'
import user from './users'
import profile from './profile'


const rootReducer = combineReducers({
  alert,
  post,
  user,
  profile
});

export default rootReducer;