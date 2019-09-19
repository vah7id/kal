import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './store/store';
import { createBrowserHistory } from 'history';

import App from './App';
import * as serviceWorker from './serviceWorker';

const history: any = createBrowserHistory({ basename: 'http://localhost:3000' });
export const { store, persistor } = configureStore(history);

export const RootDOM = () => (
    <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App history={history} />
        </PersistGate>
    </ReduxProvider>
);

render(<RootDOM />, document.getElementById('kal-root'));

serviceWorker.register();
