import React, { Component } from 'react';
import {push} from "connected-react-router";
import {connect} from "react-redux";
import { GAME_STATUS } from '../types';
import { KickOffProps } from '../interfaces';
import {actions} from "../reducer";
import Button from '../../../assets/elements/Button';

class KickOffScreen extends Component<KickOffProps, any> {
    componentDidMount() {
        if(this.props.status === GAME_STATUS.kickoff) {
            const executeKickoff = () => this.kickoff();
            document.onkeydown = function (e) {
                e = e || window.event;
                if (e.keyCode === 32 || e.keyCode === 13) {
                    executeKickoff();
                }
            }
        }
    }
    componentDidUpdate(prevProps: Readonly<KickOffProps>) {
        if(this.props.status === GAME_STATUS.playing && this.props.status !== prevProps.status) {
            const gameDisplay = document.querySelector('.game-wrapper') as HTMLElement;
            gameDisplay.style.visibility = "visible";
            gameDisplay.style.position = 'relative';
        }
    }
    kickoff() {
        const box = document.getElementById("kick-off-start-msg") as HTMLElement;
        const btn = box.querySelector('button') as HTMLButtonElement;
        btn.focus();
        box.style.display = "none";
        this.props.kickoff();
    }
    render() {
        return (
            <>
                <div id={'kick-off-start-msg'}>
                    <Button classList={'btn-dark active'} type={'link'} title={'Press Space to start'} id={'sp-start-btn'} />
                </div>
            </>
        );
    }
}


const mapStateToProps = (state: any) => ({
    status: state.game.status
});

const mapDispatchToProps = (dispatch: any) => ({
    kickoff: () => dispatch(actions.kickoff()),
    navigate: (route: string) => dispatch(push(route))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KickOffScreen);
