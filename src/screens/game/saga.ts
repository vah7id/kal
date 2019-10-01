import { put, takeLatest } from 'redux-saga/effects';
import { actions, types } from './reducer';
import {LOCATION_CHANGE} from "connected-react-router";

function* kickoff() {
    yield put(actions.playing());
}

function* reset(action: any) {
    if(action.payload.action === 'POP' && action.payload.location.pathname === '/' && !action.payload.isFirstRendering) {
        window.location.reload();
    }
}

export function* gameSaga() {
    yield takeLatest(LOCATION_CHANGE, reset);
    yield takeLatest(types.KICK_OFF, kickoff);
}

