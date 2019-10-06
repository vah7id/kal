import { GameState } from '../../store/ducks/schema';
import { MULTI_PLAYER_SET_STATUS } from './types';

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
};

// actions
export const actions = {
  setGameId: (payload: any) => ({ type: types.SET_GAME_ID, payload }),
  setUsername: (payload: string) => ({ type: types.SET_USERNAME, payload }),
  createGame: (payload: string) => ({ type: types.CREATE_GAME, payload }),
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
        id: action.payload
      };
    case types.SET_GAME_ID:
      return {
        ...state,
        roomId: action.payload.name,
        sessionId: action.payload.sessionId,
      }
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
