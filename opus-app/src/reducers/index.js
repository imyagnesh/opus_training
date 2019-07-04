import { combineReducers } from 'redux';
import courses from './coursesReducer';
import authors from './authorsReducer';

export default combineReducers({
  courses,
  authors
});
