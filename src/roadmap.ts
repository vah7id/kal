import StartScreen from "./screens/start";
import SinglePlayerScreen from "./screens/game";

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
];

export default routes;
