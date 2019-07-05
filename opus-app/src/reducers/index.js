import { combineReducers } from 'redux';
import courses from './coursesReducer';
import authors from './authorsReducer';
import loading from './loadingReducer';
import error from './errorReducer';

export default combineReducers({
  courses,
  authors,
  loading,
  error
});
