import { connect } from 'react-redux';
import * as types from '../../Constants/actionTypes';
import home from './home';

function mapStateToProps(state) {
  return {
    loading: state.courses.loading || state.authors.loading,
    error: !!state.courses.error || !!state.authors.error,
    courses: state.courses.data,
    authors: state.authors.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: () => dispatch({ type: `${types.LOAD_COURSES}_${types.REQUEST}` }),
    loadAuthors: () => dispatch({ type: `${types.LOAD_AUTHORS}_${types.REQUEST}` })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
