import types from '../types/cartTypes'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_CART:
      return {
        ...state,
        carts: [...state.carts, action.cart]
      }
    case types.ADD_ITEM:
      return {
        ...state,
        carts: state.carts.map(c => (
          c.email === action.cart.email ?
            {
              email: action.cart.email,
              products: [...c.products, action.cart.products[0]]
            } : c
        ))
      }
    case types.INCREMENT_ITEM:
      return {
        ...state,
        carts: state.carts.map(c => {
          return c.email === action.email ?
            {
              email: action.email,
              products: c.products.map(p => {
                return p.productId === action.id ?
                  {
                    productId: p.productId,
                    productName: p.productName,
                    productPrice: p.productPrice,
                    number: p.number + 1
                  } : p
              })
            } : c
        })
      }
    case types.DECREMENT_ITEM:
      return {
        ...state,
        carts: state.carts.map(c => {
          return c.email === action.email ?
            {
              email: action.email,
              products: c.products.map(p => {
                return p.productId === action.id ?
                  {
                    productId: p.productId,
                    productName: p.productName,
                    productPrice: p.productPrice,
                    number: p.number - 1
                  } : p
              })
            } : c
        })
      }
    case types.REMOVE_ITEM:
      return {
        ...state,
        carts: state.carts.map(c => {
          return c.email === action.email ?
            {
              email: action.email,
              products: c.products.filter(p => p.productId !== action.id)
            } : c
        })
      }
    case types.EMPTY_CART:
      return {
        ...state,
        carts: state.carts.map(c => {
          return c.email === action.email ?
            {
              ...c,
              products: []
            } : c
        })
      }
    default:
      return state
  }
}

export default reducer