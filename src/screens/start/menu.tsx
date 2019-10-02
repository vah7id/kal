import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../assets/elements/Button';
import Audio from '../../assets/elements/Audio';
import '../../assets/styles/_start.scss';
import { push } from 'connected-react-router';
import {GAME_STATUS} from "../game/types";

interface Props {
    navigate: any;
    status: string;
}

interface State {
    selected: string;
}

class StartMenu extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selected: 'single-player'
        };
    }
    componentDidMount() {
        if(this.props.status === GAME_STATUS.kickoff) {
            this.adjustMenuSize();
            this.initialMenu();
            this.keyboardListener();
        }
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyboardListener, true);
    }
    keyboardListener() {
        const list = ['single-player', 'multi-player', 'settings', 'guidance', 'credits'];
        document.addEventListener('keydown', (e) => {
            if(e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 9) {
                const idx = list.indexOf(this.state.selected);
                const down = e.keyCode === 40 || e.keyCode === 9;
                let nextIdx = down ? list[idx + 1] : list[idx - 1];
                if (!nextIdx) {
                    nextIdx = list[0];
                }
                const nextBtn = document.getElementById(nextIdx) as HTMLButtonElement;
                if (nextBtn) {
                    nextBtn.focus();
                }
                this.setState({selected: nextIdx});
            }
        });
    }
    adjustMenuSize() {
        const menu = document.querySelector('.screen--start ul') as HTMLElement;
        menu.style.maxWidth = window.screen.width + 'px';
    }
    initialMenu() {
        const StartBtn = document.getElementById('single-player') as HTMLButtonElement;
        StartBtn.focus();
    }
    onClickMenu(e: any) {
        this.props.navigate(e.currentTarget.getAttribute('id'));
    }
    render() {
        return (
            <>
                {
                    this.props.status !== GAME_STATUS.playing ?
                    <ul>
                        <li><Button onPress={this.onClickMenu.bind(this)} id={'single-player'} type={'link'} title={'single player'} /></li>
                        <li><Button onPress={this.onClickMenu.bind(this)} id={'multi-player'} type={'link'} title={'multi player'} /></li>
                        <li><Button onPress={this.onClickMenu.bind(this)} id={'settings'} type={'link'} title={'settings'} /></li>
                        <li><Button onPress={this.onClickMenu.bind(this)} id={'guidance'} type={'link'} title={'how to play'} /></li>
                        <li><Button onPress={this.onClickMenu.bind(this)} id={'credits'} type={'link'} title={'credits'} /></li>
                    </ul> :
                    <h2>RELOADING...</h2>
                }
            </>
        )
    }
}

const mapStateToProps = (state: any) => ({
    status: state.game.status
});

const mapDispatchToProps = (dispatch: any) => ({
    navigate: (route: string) => dispatch(push(route))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartMenu);
