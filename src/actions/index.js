const newPoll = poll => {
  return {
    type: 'NEW_POLL',
    payload: poll
  };
};

const submitVote = vote => {
  return {
    type: 'SUBMIT_VOTE',
    payload: vote
  };
};

const login = user => {
  return {
    type: 'USER_LOGIN',
    payload: user
  };
};

export { newPoll, submitVote, login };
