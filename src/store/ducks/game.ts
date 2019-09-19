// init state

const defaultState = {
    status: 'kick-off'
};

// types
export const types = {
  KICK_OFF: 'KICK_OFF',
};

// actions
export const actions = {
  kickoff: () => ({ type: types.KICK_OFF }),
};

// reducers
export const gameReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.KICK_OFF:
      return {
        status: 'kick-off'
      };
    default:
      return state;
  }
};

export default gameReducer;
