import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './store/store';
import { createHashHistory } from 'history'

import App from './App';
import * as serviceWorker from './serviceWorker';

const WS = require('websocket').w3cwebsocket;
const host = window.document.location.host.replace(/:.*/, '');
const location = window.location;
export const client = new WS('ws://localhost:8080/', 'echo-protocol', null, null, {});

const history: any = createHashHistory({ hashType: 'slash', getUserConfirmation: (message, callback) => callback(window.confirm(message)) });
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
