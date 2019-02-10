const defaultUsers = [
  {
    id: 1,
    name: {
      first: 'Iván',
      last: 'Moreno'
    },
    avatar: '',
    answeredPolls: []
  }
];

const users = (state = [], action) => {
  switch (action.type) {
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
      return defaultUsers;
  }
};

export default users;
