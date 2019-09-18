import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Peer from 'peerjs';

const peer = new Peer('kal-peer');
const connection = peer.connect('another-peers-id');

connection.on('open', () => {
    connection.send('hi!');
});

peer.on('connection', (connection) => {
    connection.on('data', (data) => {
        console.log(data);
    });
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
