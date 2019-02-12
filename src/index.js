import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './components/app';
import ReduxPromise from 'redux-promise';

const store = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
