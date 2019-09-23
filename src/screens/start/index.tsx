import React, { Component } from 'react';
import StartMenu from './menu';
import '../../assets/styles/_start.scss';

class StartScreen extends Component<any, any> {
    render() {
        return (
            <div className="screen--start">
                <StartMenu />
                <p className={'copyright'}>&nbsp;&copy;2019 kal open game art</p>
            </div>
        );
    }
}

export default StartScreen;
