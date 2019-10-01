import StartScreen from "./screens/start";
import SinglePlayerScreen from "./screens/game";
import MultiPlayerScreen from "./screens/multiplayer";

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
];

export default routes;
