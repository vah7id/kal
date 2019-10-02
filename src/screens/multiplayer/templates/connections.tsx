import React, { Component } from 'react';
import {connect} from "react-redux";
import { LobbyProps } from '../interfaces';
import { push } from 'connected-react-router';
import Button from "../../../assets/elements/Button";

class Connections extends Component<LobbyProps, any> {
    render() {
        return (
            <>
                <ul>
                    <li><Button classList={'eightbit-btn eightbit-btn--reset'} id={'username-clear'} type={'error'} title={'out'}/></li>
                    <li><Button classList={'eightbit-btn'} id={'username-submit'} type={'success'} title={'START'}/></li>
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
)(Connections);