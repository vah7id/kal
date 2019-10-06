import { call, put, select, takeLatest } from 'redux-saga/effects';
import {actions, getUsername, types} from './reducer';
import {LOCATION_CHANGE, push} from "connected-react-router";


function* handleLobbyConnectios(action: any) {
    const path = action.payload.location.pathname;
    if(path.indexOf('/lobby') > -1) {
        const id = path.split('lobby/')[1];
        const loggedInUser = yield select(getUsername);
    }
}

export function* multiplayerSaga() {
    yield takeLatest(LOCATION_CHANGE, handleLobbyConnectios);
}

