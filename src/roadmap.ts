import StartScreen from "./screens/start";
import SinglePlayerScreen from "./screens/game";
import MultiPlayerScreen from "./screens/multiplayer";
import LobbyScreen from './screens/multiplayer/templates/lobby';

const routes = [
  {
    path: '/',
    component: StartScreen,
    exact: true,
  },
  {
    path: '/single-player',
    component: SinglePlayerScreen,
    exact: true,
  },
  {
    path: '/multi-player',
    component: MultiPlayerScreen,
    exact: true,
  },
  {
    path: '/lobby/:id',
    component: LobbyScreen,
    exact: true,
  },
];

export default routes;
