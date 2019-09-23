import { put, takeLatest } from 'redux-saga/effects';
import { actions, types } from './reducer';

function* kickoff() {
    yield put(actions.playing());
}

export function* gameSaga() {
    yield takeLatest(types.KICK_OFF, kickoff);
}

