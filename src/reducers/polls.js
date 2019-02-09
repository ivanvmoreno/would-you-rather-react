const polls = (state = [], action) => {
  switch(action.type) {
    case 'NEW_POLL':
      return [
        ...state,
        {
          pollId: state.length+1,
          answers: [...action.payload.answers]
        }
      ];
    default:
      return state;
  }
};

export default polls;
