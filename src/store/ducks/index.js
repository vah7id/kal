import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { gameReducer } from '../../screens/game/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    game: gameReducer,
  });
