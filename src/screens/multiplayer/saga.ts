import { call, put, select, takeLatest } from 'redux-saga/effects';
import {actions, getUserId, getUsername, types} from './reducer';
import {LOCATION_CHANGE, push} from "connected-react-router";
import {client} from "../../index";
import {COMMANDS} from "../../store/ducks/types";
import { sendMessage } from "../../utils/client";

function* handleLobbyConnectios(action: any) {
    try {
        const username = yield select(getUsername);
        const userid = yield select(getUserId);
        const path: string = action.payload.location.pathname;
        if (path.indexOf('/lobby') > -1) {
            const id = path.split('lobby/')[1];
            /*if (username) {
                sendMessage(JSON.stringify({
                    cmd: COMMANDS.PLAYER_JOIN,
                    data: {
                        username,
                        userid,
                        id
                    }
                }));
            } else {
                yield put(push(`/multi-player?lobby=${id}`));
            }*/
        }
    } catch(Err) {
        console.log(Err)
    }
}

export function* multiplayerSaga() {
    yield takeLatest(LOCATION_CHANGE, handleLobbyConnectios);
}

