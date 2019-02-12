const users = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;
    case 'SUBMIT_VOTE':
      return state.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            answeredPolls: [
              ...user.answeredPolls.filter(poll => !(poll.pollId === action.payload.pollId)),
              {
                pollId: action.payload.pollId,
                userAnswer: action.payload.answer
              }
            ]
          };
        }
      });
    default:
      return state;
  }
};

export default users;
