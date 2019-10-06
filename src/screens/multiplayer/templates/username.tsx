import React, { Component } from 'react';
import {connect} from "react-redux";
import { UsernameProps } from '../interfaces';
import {actions, getUsername} from '../reducer';
import Button from "../../../assets/elements/Button";
import { MAX_USERNAME_LENGTH } from '../../../utils/global';
import { push } from 'connected-react-router';
import {client} from "../../../index";
import {COMMANDS} from "../../../store/ducks/types";

class UsernameScreen extends Component<UsernameProps, any> {
    typeChar(char: string) {
        if(!this.props.username) {
            this.props.setUsername('');
        }
        if(this.props.username.length < MAX_USERNAME_LENGTH) {
            const usernameEl = document.getElementById('username-type') as HTMLElement;
            this.props.setUsername(this.props.username + char);
            if(this.props.username.length < 4) {
                usernameEl.style.fontSize = '3em';
            } else if(this.props.username.length < 8) {
                usernameEl.style.fontSize = '2em';
            } else {
                if(window.screen.width < 768) {
                    usernameEl.style.fontSize = '1em';
                }
            }
        }
    }
    createGame() {
        const gameId = Math.random().toString(36).substr(2, 4);
        const userId = Math.random().toString(36).substr(2, 16);
        client.send(JSON.stringify({
            cmd: COMMANDS.GAME_CREATE,
            data: {
                username: this.props.username,
                userId: this.props.username+userId,
                _id: gameId
            }
        }));
        this.props.navigate(`lobby/${gameId}`);
    }
    render() {
        return (
            <>
                <h2 id={'username-type'}>{this.props.username || 'TYPE YOUR USERNAME'}</h2>
                <ul>
                    {['A','B','C','D','E','F'].map((char) => <li onClick={() => this.typeChar(char)}><span>{char}</span></li>)}
                </ul>
                <ul>
                    {['G','H','I', 'J', 'K', 'L'].map((char) => <li onClick={() => this.typeChar(char)}><span>{char}</span></li>)}
                </ul>
                <ul>
                    {['M', 'N', 'O', 'P', 'Q', 'R'].map((char) => <li onClick={() => this.typeChar(char)}><span>{char}</span></li>)}
                </ul>
                <ul>
                    {['S', 'T', 'U', 'V', 'W', 'X'].map((char) => <li onClick={() => this.typeChar(char)}><span>{char}</span></li>)}
                </ul>
                <ul>
                    {['Y', 'Z', '$', '!', '(', ')'].map((char) => <li onClick={() => this.typeChar(char)}><span>{char}</span></li>)}
                </ul>
                <ul>
                    <li><Button onPress={() => this.props.setUsername('')} classList={'eightbit-btn eightbit-btn--reset'} id={'username-clear'} type={'error'} title={'CLEAR'}/></li>
                    <li><Button onPress={() => this.props.username.length > 0 && this.createGame() } classList={'eightbit-btn'} id={'username-submit'} type={'success'} title={'START'}/></li>
                </ul>
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    username: state.multiplayer.username,
});

const mapDispatchToProps = (dispatch: any) => ({
    createGame: (id: string) => dispatch(actions.createGame(id)),
    setUsername: (name: string) => dispatch(actions.setUsername(name)),
    navigate: (route: string) => dispatch(push(route)),
    updateGame: (room: any) => dispatch(actions.setGameId(room))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsernameScreen);