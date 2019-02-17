const loggedUser = (state = '', action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return action.payload;
    case 'USER_LOGOUT':
      return '';
    default:
      return state;
  }
};

export default loggedUser;
