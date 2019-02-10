const loggedUser = (state = '', action) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return action.payload;
    default:
      return state;
  }
};

export default loggedUser;
