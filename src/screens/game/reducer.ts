import { GAME_STATUS } from './types';

const defaultState = {
    status: GAME_STATUS.kickoff
};

// types
export const types = {
  KICK_OFF: '@KAL_KICK_OFF',
  PLAYING: '@KAL_PLAYING',
};

// actions
export const actions = {
  playing: () => ({ type: types.PLAYING }),
  kickoff: () => ({ type: types.KICK_OFF }),
};

// reducers
export const gameReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.KICK_OFF:
      return {
        status: GAME_STATUS.kickoff
      };
    case types.PLAYING:
      return {
        status: GAME_STATUS.playing
      };
    default:
      return state;
  }
};

export default gameReducer;
