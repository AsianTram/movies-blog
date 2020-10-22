import { combineReducers } from 'redux';

import alert from './alert'
import post from './posts'
import user from './users'

const rootReducer = combineReducers({
  alert,
  post,
  user
});

export default rootReducer;