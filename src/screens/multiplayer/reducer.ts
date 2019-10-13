import { GameState } from '../../store/ducks/schema';
import { MULTI_PLAYER_SET_STATUS } from './types';
import { Player } from './interfaces';

const defaultState = {
    username: '',
    loggedInUserId: '',
    status: MULTI_PLAYER_SET_STATUS.lobby,
    id: null,
    players: [],
    created_at: null,
};

// types
export const types = {
  CREATE_GAME: '@KAL/CREATE_GAME',
  CREATE_PEER: '@KAL/CREATE_PEER',
  SET_STATUS: '@KAL/MULTI_PLAYER_SET_STATUS',
  SET_USERNAME: '@KAL/SET_USERNAME',
  SET_GAME_ID: '@KAL/SET_GAME_ID',
  UPDATE_PLAYERS: '@KAL/UPDATE_PLAYERS',
};

// actions
export const actions = {
  updateGameStatus: (status: string) => ({ type: types.SET_STATUS, payload: status }),
  updatePlayers: (players: Array<Player>) => ({ type: types.UPDATE_PLAYERS, payload: players }),
  setGameId: (payload: any) => ({ type: types.SET_GAME_ID, payload }),
  setUsername: (payload: string) => ({ type: types.SET_USERNAME, payload }),
  createGame: (gameid: string, userid: string) => ({ type: types.CREATE_GAME, payload: {gameid, userid}}),
  setStatus: (payload: string) => ({ type: types.SET_STATUS, payload }),
};

// selectors

export const getUsername = (state: GameState) => {
  return state.multiplayer.username;
}

export const getUserId = (state: GameState) => {
  return state.multiplayer.loggedInUserId;
}

export const getGameId = (state: GameState) => {
  return state.multiplayer.id;
}

// reducers
export const multiplayerReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.CREATE_GAME:
      return {
        ...state,
        id: action.payload.gameid,
        loggedInUserId: action.payload.userid
      };
    case types.UPDATE_PLAYERS:
      return {
        ...state,
        players: action.payload,
      };
    case types.SET_GAME_ID:
      return {
        ...state,
        roomId: action.payload.name,
        sessionId: action.payload.sessionId,
      };
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case types.SET_STATUS:
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};

export default multiplayerReducer;
