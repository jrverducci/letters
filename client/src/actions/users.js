export const setUser = user => ({
    type: 'SET_USER',
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id,
    email: user.email
  })