import { all } from 'redux-saga/effects';
import courses from './coursesSaga';
import authors from './authorsSaga';

export default function* init() {
  yield all([courses(), authors()]);
}
