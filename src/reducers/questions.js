const questions = (state = [], action) => {
  switch(action.type) {
    case 'NEW_QUESTION':
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case 'SUBMIT_VOTE':
      return {
        ...state,
        [action.payload.qid]: {
          ...state[action.payload.qid],
          [action.payload.answer]: {
            ...state[action.payload.qid][action.payload.answer],
            votes: [...state[action.payload.qid][action.payload.answer].votes, action.payload.authedUser]
          }
        }
      };
    case 'GET_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
};

export default questions;
