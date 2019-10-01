import React, { Component } from 'react';
import '../../assets/styles/_multiplayer.scss';
import UsernameScreen from "./templates/username";

class MultiPlayerScreen extends Component<any, any> {
    render() {
        return (
            <div className="screen--multiplayer">
                <UsernameScreen />
            </div>
        );
    }
}

export default MultiPlayerScreen;
