import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './components/app';
import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxPromise)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
