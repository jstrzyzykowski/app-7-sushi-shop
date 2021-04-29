import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartActions';

const initialState = {
  data: [],
}

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      if(action.payload.isAlreadyInCart) return {
        ...state,
        data: state.data.map((itemInCart) => {
          if(itemInCart.id === action.payload.id) return {
            ...itemInCart,
            quantity: itemInCart.quantity + 1,
          }
          return itemInCart;
        })
      }
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
      const item = state.data.filter((itemInCart) => {
        if(itemInCart.id === action.payload.id) return itemInCart;
      })
      if((item[0].quantity - action.payload.quantity) === 0) return {
        ...state,
        data: state.data.filter((itemInCart) => {
          if(itemInCart.id !== action.payload.id) return itemInCart;
        }),
      }
      return {
        ...state,
        data: state.data.map((itemInCart) => {
          if(itemInCart.id === action.payload.id) {
            itemInCart.quantity = itemInCart.quantity - action.payload.quantity;
          }
          return itemInCart;
        }),
      };
    default:
      return state;
  }
}

export default cartReducer;