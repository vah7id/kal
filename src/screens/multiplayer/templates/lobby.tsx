import React, { Component } from 'react';
import ConnectedUser from "./connectedUser";
import Connections from './connections';

class LobbyScreen extends Component<any, any> {
    render() {
        return (
            <div className="screen--lobby">
                <ConnectedUser/>
                <Connections/>
            </div>
        );
    }
}

export default LobbyScreen;