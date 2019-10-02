import React, { Component } from 'react';
import {connect} from "react-redux";
import { LobbyProps } from '../interfaces';
import { push } from 'connected-react-router';

class ConnectedUser extends Component<LobbyProps, any> {
    componentDidMount(): void {
        if(this.props.username === '') {
            this.props.navigate('/multi-player');
        }
    }
    render() {
        return (
            <>
                <h2>00:00</h2>
                <p>{this.props.username} created the game!</p>
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
)(ConnectedUser);