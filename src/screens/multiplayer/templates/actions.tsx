import React, { Component } from 'react';
import {connect} from "react-redux";
import { LobbyProps } from '../interfaces';
import { push } from 'connected-react-router';
import Button from "../../../assets/elements/Button";
import {MULTI_PLAYER_SET_STATUS} from "../types";

class Actions extends Component<LobbyProps, any> {
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.status === MULTI_PLAYER_SET_STATUS.lobby &&
                            <>
                                <li><Button classList={'eightbit-btn eightbit-btn--reset'} id={'username-clear'} type={'error'} title={'out'}/></li>
                                <li><Button classList={'eightbit-btn'} id={'username-submit'} type={'success'} title={'START'}/></li>
                            </>
                    }
                    {
                        this.props.status === MULTI_PLAYER_SET_STATUS.gameover &&
                        <li><Button onPress={this.props.navigate.bind(this, '/')} classList={'eightbit-btn eightbit-btn--reset'} id={'username-submit'} type={'error'} title={'ABANDON GAME'}/></li>
                    }
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    username: state.multiplayer.username,
    status: state.multiplayer.status,
    id: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch: any) => ({
    navigate: (route: string) => dispatch(push(route)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Actions);