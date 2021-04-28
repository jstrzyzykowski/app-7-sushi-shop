import { v4 as uuidv4 } from 'uuid';

import {ADD_ITEM, EDIT_ITEM, REMOVE_ITEM} from '../actions/itemActions';
import images from '../assets/images/items/index';


const initialState = {
  data: [
    { id: 1, name: 'pomegranate', category: 'fruits', price: 12.49, src: images.img_1 },
    { id: 2, name: 'raspberry', category: 'fruits', price: 20.10, src: images.img_2 },
    { id: 3, name: 'box-apple', category: 'boxes', price: 10.00, src: images.img_3 },
    { id: 4, name: 'box-blueberries', category: 'boxes', price: 21.55, src: images.img_4 },
    { id: 5, name: 'potatoes', category: 'vegetables', price: 13.20, src: images.img_5 },
    { id: 6, name: 'coffee-beans', category: 'seeds', price: 2.20, src: images.img_6 },
    { id: 7, name: 'walnuts-beans', category: 'seeds', price: 1.34, src: images.img_7 },
    { id: 8, name: 'pumpkin-beans', category: 'seeds', price: 0.95, src: images.img_8 },
    { id: 9, name: 'box-vegetables', category: 'boxes', price: 50.40, src: images.img_9 },
  ],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        data: [...state.data, createItem(action.payload)],
      };
    case EDIT_ITEM:
      return {
        ...state,
        data: state.data.map((item) => {
          if(item.id === action.payload.id) return {
            id: item.id,
            name: action.payload.name,
            price: action.payload.price,
            inStock: action.payload.inStock,
          }
          return item;
        }),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => {
          if(item.id !== action.payload.id) return item;
        }),
      };
    default:
      return state;
  }
}

const createItem = ({name, price, inStock}) => ({
  id: uuidv4(),
  name,
  price,
  inStock,
});

export default itemReducer;

