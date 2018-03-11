import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';

// TODO: resolve webpack 4 import
//noinspection TypeScriptUnresolvedFunction
const thunkMiddleware = require('redux-thunk').default;

import {combineReducers} from 'redux';
import {goods} from './goods/goods-reducer';
import {user} from './user/user-reducer';

export const reducers = combineReducers({
  goods,
  user
});

const configureStore = () => {
  return createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  ));
};

export const store = configureStore();