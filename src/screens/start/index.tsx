import React, { Component } from 'react';
import StartMenu from './menu';
import '../../assets/styles/_start.scss';

class Start extends Component<any, any> {
    render() {
        return (
            <div className="screen--start">
                <StartMenu />
                <p className={'copyright'}>&nbsp;&copy;2019 kal open art game</p>
            </div>
        );
    }
}

export default Start;
