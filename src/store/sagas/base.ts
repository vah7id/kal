import { fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../ducks/game';
import SimplePeer from 'simple-peer';

export function* basicSideEffects() {
  yield put(actions.kickoff())
}

export function test() {
    let peer1 = new SimplePeer({ initiator: true })
    let peer2 = new SimplePeer()

    peer1.on('signal', data => {
      // when peer1 has signaling data, give it to peer2 somehow
      peer2.signal(data)
    })

    peer2.on('signal', data => {
      // when peer2 has signaling data, give it to peer1 somehow
      peer1.signal(data)
    })

    peer1.on('connect', () => {
      // wait for 'connect' event before using the data channel
      peer1.send('hey peer2, how is it going?')
    })

    peer2.on('data', data => {
      // got a data channel message
      console.log('got a message from peer1: ' + data)
    })
}

export function* base() {
  yield fork(basicSideEffects);
  yield takeLatest('KICK_OFF', test);
}
