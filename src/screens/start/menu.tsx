import React, { Component } from 'react';
import Button from '../../assets/elements/Button';
import '../../assets/styles/_start.scss';
import { push } from 'connected-react-router';

class StartMenu extends Component<any, any> {
    componentDidMount() {
        this.adjustMenuSize();
        this.initialMenu();
    }
    adjustMenuSize() {
        const menu = document.querySelector('.screen--start ul') as HTMLElement;
        menu.style.maxWidth = window.screen.width + 'px';
    }
    initialMenu() {
        const StartBtn = document.getElementById('sm-single-player') as HTMLButtonElement;
        StartBtn.focus();
    }
    onClickMenu(e: any) {
        push(e.currentTarget.getAttribute('id'));
    }
    render() {
        return (
            <>
                <ul>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'sm-single-player'} type={'link'} title={'single player'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'sm-multi-player'} type={'link'} title={'multi player'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'sm-settings'} type={'link'} title={'settings'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'sm-guidance'} type={'link'} title={'how to play'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'sm-credits'} type={'link'} title={'credits'} /></li>
                </ul>
            </>
        )
    }
}

export default StartMenu;
