import { createSelector } from 'reselect'

const users = state => state.user.users
const token = state => state.user.token

export const user = createSelector(
  users,
  token,
  (users, token ) => {
    const user = users.find(user => user.email === token)
    if (user)
      return user
    else 
      return []
  }
)