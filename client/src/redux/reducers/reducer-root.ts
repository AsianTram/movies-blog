import { combineReducers } from 'redux';

import alert from './alert'
import post from './posts'

const rootReducer = combineReducers({
  alert,
  post
});

export default rootReducer;