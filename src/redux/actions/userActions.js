import types from '../types/userTypes'

export const signUpUser = user => {
  const users = JSON.parse(localStorage.getItem("users"))
  localStorage.setItem("users", JSON.stringify([...users, user]))
  localStorage.setItem("token", user.email)

  return {
    type: types.SIGNUP_USER,
    user
  }
}

export const editUserProfile = user => {
  const users = JSON.parse(localStorage.getItem("users"))
  const newUsers = users.map(u => (
    u.email === user.email ? user : u
  ))  
  localStorage.setItem("users", JSON.stringify(newUsers))

  return {
    type: types.EDIT_USER_PROFILE,
    user    
  }
}

export const userSignIn = email => {  
  localStorage.setItem("token", email)  
  return {
    type: types.SIGNIN_USER,
    email
  }
}

export const userSignOut = () => {  
  localStorage.setItem("token", "")

  return {
    type: types.SIGNOUT_USER,    
  }
}

export const addToFavorites = (email, id) => {
  const users = JSON.parse(localStorage.getItem("users"))
  const newUsers = users.map(user => {
    return user.email === email ? 
      {
        ...user,
        favorites: [...user.favorites, id]
      }
    : user
  })
  localStorage.setItem("users",JSON.stringify(newUsers))

  return {
    type: types.ADD_TO_FAVORITES,
    email,
    id
  }
}

export const removeFromFavorites = (email, id) => {
  const users = JSON.parse(localStorage.getItem("users"))
  const newUsers = users.map(user => {
    return user.email === email ? 
      {
        ...user,
        favorites: user.favorites.filter(f => f !== id)
      }
    : user
  })
  localStorage.setItem("users",JSON.stringify(newUsers))

  return {
    type: types.REMOVE_FROM_FAVORITES,
    email,
    id
  }
}

export const submitOrder = (email, order, price) => {
  const users = JSON.parse(localStorage.getItem("users"))
  const newUsers = users.map(user => {
    return user.email === email ? 
    {
      ...user,
      orders: [...user.orders, order],
      credit: user.credit - price
    } : user
  })
  localStorage.setItem("users", JSON.stringify(newUsers))

  return {
    type: types.SUBMIT_ORDER,
    email,
    price,
    order
  }
}