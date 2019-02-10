const defaultPolls = [
  {
    id: 1,
    creator: 1,
    answers: ['Test answer one','Test answer two']
  }
];

const polls = (state = [], action) => {
  switch(action.type) {
    case 'NEW_POLL':
      return [
        ...state,
        {
          id: state.length+1,
          creator: action.payload.creator,
          answers: [...action.payload.answers]
        }
      ];
    default:
      return defaultPolls;
  }
};

export default polls;
