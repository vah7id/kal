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
      version: 1,
      blacklist: [],
      storage,
    },
    rootReducer
  );
  const composeEnhancers = compose;
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
