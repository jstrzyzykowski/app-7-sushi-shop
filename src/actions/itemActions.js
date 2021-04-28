export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (name, price, inStock) => ({
  type: ADD_ITEM,
  payload: {
    name,
    price,
    inStock,
  }
})

export const editItem = (id, name, price, inStock) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    name,
    price,
    inStock
  }
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: {
    id
  }
});