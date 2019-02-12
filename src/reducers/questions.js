const questions = (state = [], action) => {
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
    case 'GET_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
};

export default questions;
