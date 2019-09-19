import { fork } from 'redux-saga/effects';
import { base } from './base';

export function* rootSaga() {
  yield fork(base);
}
