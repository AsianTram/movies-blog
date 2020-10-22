import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'


import rootSaga from './redux/sagas/sagas'
import rootReducer from './redux/reducers/reducer-root'
import { AppState } from './types'

const initialState:AppState = {
  post: {
    posts:[],
    storedPosts:[],
    currentPost:null,
    pending:false,
    error: null
  },
  alert:{
    alerts:[]
  },
  user: {
    user:null,
    isAuthenticated:false,
    token: localStorage.getItem('token'),
    pending: false,
    error: null
  }
}

const sagaMiddleware = createSagaMiddleware()

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }
}

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store;
