import { all, takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { API } from 'utils';
import * as types from '../Constants/actionTypes';

export function* loadCourses() {
  try {
    const course = yield call(API, { uri: 'http://localhost:3004/courses' });
    yield put({ type: `${types.LOAD_COURSES}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    yield put({ type: `${types.LOAD_COURSES}_${types.FAILURE}`, payload: error });
  }
}

export function* addCourse({ payload, actions }) {
  try {
    const course = yield call(API, {
      uri: 'http://localhost:3004/courses',
      method: 'POST',
      body: payload
    });
    actions.resetForm();
    yield put({ type: `${types.ADD_COURSE}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    actions.setErrors({ general: error.message });
    yield put({ type: `${types.ADD_COURSE}_${types.FAILURE}`, payload: error });
  } finally {
    actions.setSubmitting(false);
  }
}

export function* editCourse({ payload, actions }) {
  try {
    const course = yield call(API, {
      uri: `http://localhost:3004/courses/${payload.id}`,
      method: 'PUT',
      body: payload
    });
    actions.resetForm();
    yield put({ type: `${types.EDIT_COURSE}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    actions.setErrors({ general: error.message });
    yield put({ type: `${types.EDIT_COURSE}_${types.FAILURE}`, payload: error });
  } finally {
    actions.setSubmitting(false);
  }
}

export function* deleteCourse({ payload }) {
  try {
    yield call(API, {
      uri: `http://localhost:3004/courses/${payload}`,
      method: 'DELETE'
    });
    yield put({ type: `${types.DELETE_COURSE}_${types.SUCCESS}`, payload });
  } catch (error) {
    yield put({ type: `${types.DELETE_COURSE}_${types.FAILURE}`, payload: error });
  }
}

export function* loadCoursesRequest() {
  yield takeEvery(`${types.LOAD_COURSES}_${types.REQUEST}`, loadCourses);
}

export function* addCourseRequest() {
  yield takeLatest(`${types.ADD_COURSE}_${types.REQUEST}`, addCourse);
}

export function* editCourseRequest() {
  yield takeLatest(`${types.EDIT_COURSE}_${types.REQUEST}`, editCourse);
}

export function* deleteCourseRequest() {
  yield takeLatest(`${types.DELETE_COURSE}_${types.REQUEST}`, deleteCourse);
}

export default function* init() {
  yield all([loadCoursesRequest(), addCourseRequest(), editCourseRequest(), deleteCourseRequest()]);
}
