import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as types from '../Constants/actionTypes';
import { API } from '../utils';

export function* loadAuthors() {
  try {
    const course = yield call(API, { uri: 'http://localhost:3004/authors' });
    yield put({ type: `${types.LOAD_AUTHORS}_${types.SUCCESS}`, payload: course });
  } catch (error) {
    yield put({ type: `${types.LOAD_AUTHORS}_${types.FAILURE}`, payload: error });
  }
}

export function* loadAuthorsRequest() {
  yield takeEvery(`${types.LOAD_AUTHORS}_${types.REQUEST}`, loadAuthors);
}

export default function* init() {
  yield all([loadAuthorsRequest()]);
}
