import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware } from 'react-redux-api-tools';

import App from './App';
import rootReducer from './store/reducers';
import * as serviceWorker from './serviceWorker';

import './style/index.scss';


const store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
