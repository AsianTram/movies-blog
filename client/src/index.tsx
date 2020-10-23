import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch} from 'react-redux'
import { store } from './store'
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

axios.defaults.baseURL="http://localhost:5000/"
serviceWorker.unregister();
