import React, { Component } from 'react';
import {connect} from "react-redux";
import Button from "../../../assets/elements/Button";
import { LobbyProps, Player } from '../interfaces';
import { actions } from '../reducer';
import { push } from 'connected-react-router';
import {client} from "../../../index";
import {COMMANDS} from "../../../store/ducks/types";
import {MULTI_PLAYER_SET_STATUS} from "../types";

class Players extends Component<LobbyProps, any> {
    componentDidMount(): void {
        const username = this.props.username;
        if(username === '') {
            this.props.navigate(`/multi-player?lobby=${window.location.hash.split('lobby/')[1]}`);
        }
        client.onmessage = (msg: any) => {
            const data = JSON.parse(msg.data).data;
            const command = JSON.parse(msg.data).cmd;
            if(command === COMMANDS.ROOM_JOINED) {
                this.props.updatePlayers(data.room.players);
            }
            if(command === COMMANDS.PLAYER_DISCONNECT) {
                this.props.updatePlayers(data.room.players);
            }
            if(command === COMMANDS.GAME_OVER) {
                this.props.updateGameStatus(MULTI_PLAYER_SET_STATUS.gameover)
            }
            if(command === COMMANDS.SET_USERNAME) {
                this.props.navigate(`/multi-player${window.location.hash}`);
            }
        }
    }
    render() {
        return (
            <>
                <h2>00:00</h2>
                <span>{this.props.status}</span>
                {
                    this.props.players.map((player: Player) => {
                        let status = player.initiator ? 'created' : 'joined';
                        if(player.status === 'disconnect') {
                            status = 'left'
                        }
                        return (<p>{player.username} {status} the game!</p>)
                    })
                }

            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    userid: state.multiplayer.userid,
    username: state.multiplayer.username,
    status: state.multiplayer.status,
    id: state.router.location.pathname,
    players: state.multiplayer.players,
});

const mapDispatchToProps = (dispatch: any) => ({
    navigate: (route: string) => dispatch(push(route)),
    updatePlayers: (players: Array<Player>) => dispatch(actions.updatePlayers(players)),
    updateGameStatus: (status: string) => dispatch(actions.updateGameStatus(status)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);