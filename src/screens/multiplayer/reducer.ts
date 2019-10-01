import { GameState } from '../../store/ducks/schema';

const defaultState = {
    username: '',
};

// types
export const types = {
  SET_USERNAME: '@KAL/SET_USERNAME',
};

// actions
export const actions = {
  setUsername: (payload: string) => ({ type: types.SET_USERNAME, payload }),
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
    default:
      return state;
  }
};

export default multiplayerReducer;
