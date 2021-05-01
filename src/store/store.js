import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = localStorage.getItem('userCart') 
  ? {
    cart: {
      data: JSON.parse(localStorage.getItem('userCart')),
    }
  }
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(logger)),
);

store.subscribe(() => {
  localStorage.setItem('userCart', JSON.stringify(store.getState().cart.data));
});

export default store;