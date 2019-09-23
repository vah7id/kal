import React, { Component } from 'react';
import {push} from "connected-react-router";
import {connect} from "react-redux";
import { GAME_STATUS } from '../types';
import { KickOffProps } from '../interfaces';
import {actions} from "../reducer";

class KickOffScreen extends Component<KickOffProps, any> {
    componentDidMount() {
        const executeKickoff = () => this.props.kickoff();
        if(this.props.status === GAME_STATUS.kickoff) {
            document.onkeydown = function (e) {
                e = e || window.event;
                if (e.keyCode === 32) {
                    const box = document.getElementById("kick-off-start-msg") as HTMLElement;
                    box.style.display = "none";
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
    render() {
        return (
            <>
                <div id={'kick-off-start-msg'}>
                    <h1>Press Space to start</h1>
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
