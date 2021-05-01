export const RESET_CART = 'RESET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const resetCart = (storedCart) => ({
  type: RESET_CART,
  payload: {
    storedCart
  }
})

export const addToCart = ({id, name, category, price, src}, isAlreadyInCart, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: {
    id,
    name,
    category,
    price,
    src,
    quantity,
    isAlreadyInCart
  }
});

export const removeFromCart = ({id, name, category, price, src}, quantity = 1) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id,
    name,
    category,
    price,
    src,
    quantity
  }
})