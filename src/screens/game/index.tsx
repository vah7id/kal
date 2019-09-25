import React, { Component } from 'react';
import '../../assets/styles/_start.scss';
import KickOffScreen from './templates/kickoff';
import Resources from './templates/resources';
import '../../assets/styles/_game.scss';
import instanceRunner from './logic';

class SinglePlayerScreen extends Component<any, any> {
    componentDidMount() {
        document.body.classList.add('offline');
        instanceRunner();
    }
    render() {
        return (
            <>
                <KickOffScreen />
                <div id="main-frame-error" className="game-wrapper">
                    <span id={'record-live'}>0</span>
                    <span id={'player-username'}>Anonymous</span>
                    <div id="main-content">
                        <div className={"icon icon-offline"}></div>
                    </div>
                    <Resources />
                </div>
            </>
        );
    }
}

export default SinglePlayerScreen;
