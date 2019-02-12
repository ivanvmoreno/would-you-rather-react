import { _getUsers, _getQuestions } from '../_DATA';

const getUsers = () => {
  return {
    type: 'GET_USERS',
    payload: _getUsers()
  }
};

const getQuestions = () => {
  return {
    type: 'GET_QUESTIONS',
    payload: _getQuestions()
  };
};

const newPoll = (answers, creator) => {
  return {
    type: 'NEW_POLL',
    payload: {
      answers,
      creator
    }
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

export { getUsers, getQuestions, newPoll, submitVote, login };
