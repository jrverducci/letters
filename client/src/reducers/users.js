const users = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
          ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        id: action.id,
        email: action.email
      }
    default:
      return state;
  }
}

export default users;