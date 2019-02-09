const users = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_VOTE':
      return users.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            answeredPolls: state.filter(poll => {
              if (poll.pollId === action.pollId) {
                return false;
              }
              return true;
            }).push({
              pollId: state.payload.pollId,
              answer: state.payload.answer
            })
          };
        }
      });
    default:
      return [
        {
          id: 1,
          name: {
            firstName: 'Iván',
            lastName: 'Moreno'
          },
          answeredPolls: []
        }
      ];
  }
};

export default users;
