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
  return {
    type: types.ADD_TO_FAVORITES,
    email,
    id
  }
}

export const removeFromFavorites = (email, id) => {  
  return {
    type: types.REMOVE_FROM_FAVORITES,
    email,
    id
  }
}

export const submitOrder = (email, order, price) => {  
  return {
    type: types.SUBMIT_ORDER,
    email,
    price,
    order
  }
}