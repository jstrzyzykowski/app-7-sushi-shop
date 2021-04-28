import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
});

export default rootReducer;