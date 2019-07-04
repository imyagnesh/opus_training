import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../Constants/actionTypes';
import { API } from '../utils';

export function* loadCourses() {
  try {
    const course = yield call(API, { uri: 'http://localhost:3004/courses' });
    yield put({ type: `${types.LOAD_COURSES}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    yield put({ type: `${types.LOAD_COURSES}_${types.FAILURE}`, payload: error });
  }
}

export function* loadCoursesRequest() {
  yield takeEvery(`${types.LOAD_COURSES}_${types.REQUEST}`, loadCourses);
}

export default function* init() {
  yield all([loadCoursesRequest()]);
}
