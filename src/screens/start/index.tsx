import React, { Component } from 'react';
import '../../assets/start.css';

class Start extends Component<any, any> {
    componentDidMount() {
        const menu = document.querySelector('.screen--start ul') as HTMLElement;
        menu.style.maxWidth = window.screen.width + 'px';
    }
    render() {
        return (
            <div className="screen--start">
                <ul>
                    <li><button>single player</button></li>
                    <li><button>multi player</button></li>
                </ul>
            </div>
        );
    }
}

export default Start;
