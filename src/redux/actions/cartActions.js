import types from '../types/cartTypes'

export const createCart = cart => {  
  return {
    type: types.CREATE_CART,
    cart
  }
}

export const addItem = cart => {  
  return {
    type: types.ADD_ITEM,
    cart
  }
}

export const incrementItem = (email, id) => {  
  return {
    type: types.INCREMENT_ITEM,
    email,
    id
  }
}

export const decrementItem = (email, id) => {  
  return {
    type: types.DECREMENT_ITEM,
    email,
    id
  }
}

export const removeItem = (email, id) => {  
  return {
    type: types.REMOVE_ITEM,
    email,
    id
  }
}

export const emptyCart = email => {  
  return {
    type: types.EMPTY_CART,
    email
  }
}