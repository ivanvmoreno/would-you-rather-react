const users = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.payload;
    case 'NEW_QUESTION':
      return {
        ...state,
        [action.payload.author]: {
          ...state[action.payload.author],
          questions: [...state[action.payload.author].questions, action.payload.id]
        }
      };
    case 'SUBMIT_VOTE':
      return {
        ...state,
        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer
          }
        }
      };
    default:
      return state;
  }
};

export default users;
