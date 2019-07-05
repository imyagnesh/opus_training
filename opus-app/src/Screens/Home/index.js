import { connect } from 'react-redux';
import * as types from '../../Constants/actionTypes';
import home from './home';

function mapStateToProps(state) {
  return {
    loading:
      !!state.loading[types.LOAD_COURSES] ||
      !!state.loading[types.LOAD_AUTHORS] ||
      !!state.loading[types.DELETE_COURSE] ||
      !!state.loading[types.ADD_COURSE] ||
      !!state.loading[types.EDIT_COURSE],
    error:
      state.error[types.LOAD_COURSES] ||
      state.error[types.LOAD_AUTHORS] ||
      state.error[types.DELETE_COURSE] ||
      state.error[types.ADD_COURSE] ||
      state.error[types.EDIT_COURSE],
    courses: state.courses,
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCourses: () => dispatch({ type: `${types.LOAD_COURSES}_${types.REQUEST}` }),
    deleteCourses: id => dispatch({ type: `${types.DELETE_COURSE}_${types.REQUEST}`, payload: id }),
    addCourse: (payload, actions) =>
      dispatch({ type: `${types.ADD_COURSE}_${types.REQUEST}`, payload, actions }),
    editCourse: (payload, actions) =>
      dispatch({ type: `${types.EDIT_COURSE}_${types.REQUEST}`, payload, actions }),
    loadAuthors: () => dispatch({ type: `${types.LOAD_AUTHORS}_${types.REQUEST}` })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(home);
