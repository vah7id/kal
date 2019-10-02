import { GameState } from '../../store/ducks/schema';
import { MULTI_PLAYER_SET_STATUS } from './types';

const defaultState = {
    username: '',
    status: MULTI_PLAYER_SET_STATUS.lobby
};

// types
export const types = {
  SET_STATUS: '@KAL/MULTI_PLAYER_SET_STATUS',
  SET_USERNAME: '@KAL/SET_USERNAME',
};

// actions
export const actions = {
  setUsername: (payload: string) => ({ type: types.SET_USERNAME, payload }),
  setStatus: (payload: string) => ({ type: types.SET_STATUS, payload }),
};

// selectors

export const getUsername = (state: GameState) => {
  return state.multiplayer.username;
}

// reducers
export const multiplayerReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        username: action.payload
      };
    case types.SET_STATUS:
      return {
        status: action.payload
      };
    default:
      return state;
  }
};

export default multiplayerReducer;
