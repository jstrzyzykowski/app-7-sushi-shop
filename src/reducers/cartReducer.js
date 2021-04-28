import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartActions';

const initialState = {
  data: [],
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, { 
          id: action.payload.id,
          name: action.payload.name,
          category: action.payload.category,
          price: action.payload.price,
          src: action.payload.src,
          quantity: action.payload.quantity
        }],
      }
    case REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
}

export default cartReducer;

// Question: Is product searching in database of all products when I am scanning it?
// Problem: Performance while going through whole database becouse of one product.
// const createCartItem = ({itemId, ItemQuantity}) => {
//   const item = items.filter((item) => {
//     if(item.id === itemId) return item;
//   })

//   return {
//     id: item.id,
//     name: item.name,
//     price: item.price,
//     quantity: ItemQuantity
//   }
// }