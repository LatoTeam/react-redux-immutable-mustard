/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant')(), thunk] :
  [thunk];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
