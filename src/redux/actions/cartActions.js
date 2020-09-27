import types from '../types/cartTypes'

export const createCart = cart => {
  const carts = JSON.parse(localStorage.getItem("carts"))
  localStorage.setItem("carts", JSON.stringify([...carts, cart]))
  return {
    type: types.CREATE_CART,
    cart
  }
}

export const addItem = cart => {
  const carts = JSON.parse(localStorage.getItem("carts"))
  const newCarts = carts.map(c => (
    c.email === cart.email ?
      {
        email: cart.email,
        products: [...c.products, cart.products[0]]
      } : c
  ))
  localStorage.setItem("carts", JSON.stringify(newCarts))

  return {
    type: types.ADD_ITEM,
    cart
  }
}

export const incrementItem = (email, id) => {
  const updateProduct = p => {
    return p.productId === id ?
      {
        productId: p.productId,
        productName: p.productName,
        productPrice: p.productPrice,
        number: p.number + 1
      } : p
  }

  const carts = JSON.parse(localStorage.getItem("carts"))
  const newCarts = carts.map(c => {
    return c.email === email ?
      {
        email: email,
        products: c.products.map(updateProduct)
      } : c
  })
  localStorage.setItem("carts", JSON.stringify(newCarts))

  return {
    type: types.INCREMENT_ITEM,
    email,
    id
  }
}

export const decrementItem = (email, id) => {
  const updateProduct = p => {
    return p.productId === id ?
      {
        productId: p.productId,
        productName: p.productName,
        productPrice: p.productPrice,
        number: p.number - 1
      } : p
  }

  const carts = JSON.parse(localStorage.getItem("carts"))
  const newCarts = carts.map(c => {
    return c.email === email ?
      {
        email: email,
        products: c.products.map(updateProduct)
      } : c
  })
  localStorage.setItem("carts", JSON.stringify(newCarts))

  return {
    type: types.DECREMENT_ITEM,
    email,
    id
  }
}

export const removeItem = (email, id) => {
  const carts = JSON.parse(localStorage.getItem("carts"))
  const newCarts = carts.map(c => {
    return c.email === email ?
      {
        email: email,
        products: c.products.filter(p => p.productId !== id)
      }
      :
      c
  })
  localStorage.setItem("carts", JSON.stringify(newCarts))

  return {
    type: types.REMOVE_ITEM,
    email,
    id
  }
}

export const emptyCart = email => {
  const carts = JSON.parse(localStorage.getItem("carts"))
  const newCarts = carts.map(c => {
    return c.email === email ?
      {
        ...c,
        products: []
      } : c
  })
  localStorage.setItem("carts", JSON.stringify(newCarts))

  return {
    type: types.EMPTY_CART,
    email
  }
}