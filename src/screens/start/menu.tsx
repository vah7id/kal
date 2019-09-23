import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../assets/elements/Button';
import '../../assets/styles/_start.scss';
import { push } from 'connected-react-router';

interface State {
    status: string;
}

interface Props {
    navigate: any;
}

class StartMenu extends Component<Props, State> {
    componentDidMount() {
        this.adjustMenuSize();
        this.initialMenu();
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
                <ul>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'single-player'} type={'link'} title={'single player'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'multi-player'} type={'link'} title={'multi player'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'settings'} type={'link'} title={'settings'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'guidance'} type={'link'} title={'how to play'} /></li>
                    <li><Button onPress={this.onClickMenu.bind(this)} id={'credits'} type={'link'} title={'credits'} /></li>
                </ul>
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
