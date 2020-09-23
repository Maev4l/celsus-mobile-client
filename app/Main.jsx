import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
