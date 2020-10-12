import types from "../types/userTypes"

const initialState = {
  users: [],
  token: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_USER:
      return {
        ...state,
        users: [...state.users, action.user],
        token: action.user.email
      }
    case types.SIGNOUT_USER:
      return {
        ...state,
        token: ""
      }
    case types.SIGNIN_USER:
      return {
        ...state,
        token: action.email
      }
    case types.EDIT_USER_PROFILE:
      return {
        ...state,
        users: state.users.map(user => (
          user.email === action.user.email ? action.user : user
        ))
      }    
    case types.SUBMIT_ORDER:
      return {
        ...state,
        users: state.users.map(user => {
          return user.email === action.email ?
            {
              ...user,
              orders: [...user.orders, action.order],
              credit: user.credit - action.price
            } : user
        })
      }
    case types.ADD_TO_FAVORITES:
      return {
        ...state,
        users: state.users.map(user => {
          return user.email === action.email ? 
            {
              ...user,
              favorites: [...user.favorites, action.id]
            }
          : user
        })
      }
    case types.REMOVE_FROM_FAVORITES:
        return {
          ...state,
          users: state.users.map(user => {
            return user.email === action.email ? 
              {
                ...user,
                favorites: user.favorites.filter(f => f !== action.id)
              }
            : user
          })
        }
    default:
      return state
  }
}

export default reducer