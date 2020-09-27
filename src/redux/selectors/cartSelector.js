import { createSelector } from 'reselect'

const carts = state => state.cart.carts
const token = state => state.user.token

export const userProducts = createSelector(
  carts,
  token,
  (carts, token) => {
    const cart = carts.filter(cart => (cart.email === token))    
    if (cart.length !== 0)
      return cart[0].products
    else
      return []
  }
)

export const totalItems = createSelector(
  carts,
  carts => {
    let total = 0
    for (let cart of carts)
      for (let product of cart.products)
        total += product.number
    return total
  }
)