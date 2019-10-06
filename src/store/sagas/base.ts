import { select, takeLatest } from 'redux-saga/effects';
import { client } from '../../';
import { LOCATION_CHANGE } from "connected-react-router";
import { COMMANDS } from '../ducks/types';
import { getUsername } from "../../screens/multiplayer/reducer";
import { getUserId } from "../../screens/multiplayer/reducer";

function* init(action: any) {
    const username = yield select(getUsername);
    const _id = yield select(getUserId);
    if(action.payload.isFirstRendering) {
        client.onopen = () => {
            const msg = {
                cmd: COMMANDS.PLAYER_CONNECT,
                data: { username: username,  id: _id }
            };
            client.send(JSON.stringify(msg));
        };
        client.onmessage = (msg: string) => {
            console.log(msg)
        }
        client.onclose = () => {
            console.log('lost connection')
        }
        client.onerror = () => {
            console.log('error in connection')
        }
    }
}

export function* base() {
    yield takeLatest(LOCATION_CHANGE, init);
}
