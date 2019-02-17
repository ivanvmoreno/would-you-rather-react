import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA';

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

const newPoll = (optionOneText, optionTwoText, author) => {
  return {
    type: 'NEW_QUESTION',
    payload: _saveQuestion({ optionOneText, optionTwoText, author })
  };
};

const submitVote = (dispatch, question) => {
  _saveQuestionAnswer(question)
    .then(res => dispatch({
      type: 'SUBMIT_VOTE',
      payload: question
    }));
};

const login = user => {
  return {
    type: 'USER_LOGIN',
    payload: user
  };
};

const logout = () => {
  return {
    type: 'USER_LOGOUT'
  }
};

export { getUsers, getQuestions, newPoll, submitVote, login, logout };
