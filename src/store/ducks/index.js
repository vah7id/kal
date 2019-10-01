import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { gameReducer } from '../../screens/game/reducer';
import { multiplayerReducer } from '../../screens/multiplayer/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    game: gameReducer,
    multiplayer: multiplayerReducer,
  });
