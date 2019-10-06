import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './ducks';
import { rootSaga } from './sagas';
import { sagaMiddleware } from './middlewares';
import { routerMiddleware } from 'connected-react-router';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const configureStore = (history: any) => {
  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(
    {
      key: 'root',
      version: 3,
      blacklist: ['router', 'game'],
      storage,
    },
    rootReducer
  );
  const composeEnhancers = (window as { [key: string]: any })["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] &&
      (window as { [key: string]: any })["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({ trace: true, traceLimit: 100 }) ||
      compose;
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
