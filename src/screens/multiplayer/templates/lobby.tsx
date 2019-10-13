import React, { Component } from 'react';
import Players from "./players";
import Actions from './actions';
import {LobbyProps} from "../interfaces";

class LobbyScreen extends Component<LobbyProps, any> {
    render() {
        return (
            <div className="screen--lobby">
                <Players/>
                <Actions/>
            </div>
        );
    }
}

export default LobbyScreen;