import { combineReducers } from 'redux';
import users from './users';
import polls from './polls';
import loggedUser from './loggedUser';

export default combineReducers({
  users,
  polls,
  loggedUser
});
