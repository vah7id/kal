import { fork } from 'redux-saga/effects';
import { base } from './base';
import { gameSaga } from '../../screens/game/saga';
import { multiplayerSaga } from '../../screens/multiplayer/saga';

export function* rootSaga() {
  yield fork(base);
  yield fork(gameSaga);
  yield fork(multiplayerSaga);
}
