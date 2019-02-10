const newPoll = poll => {
  return {
    type: 'NEW_POLL',
    payload: poll
  };
};

const submitVote = (userId, pollId, answer) => {
  return {
    type: 'SUBMIT_VOTE',
    payload: {
      userId,
      pollId,
      answer
    }
  };
};

const login = user => {
  return {
    type: 'USER_LOGIN',
    payload: user
  };
};

export { newPoll, submitVote, login };
