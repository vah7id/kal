import React, { Component } from 'react';
import '../styles/_start.scss';
import { TAP_SOUND_PATH } from '../../utils/global';
import Audio from './Audio';

interface Props {
    id: string;
    type: string;
    title: string;
    classList?: string;
    audio?: string;
    onPress?: any;
}

interface State {
    audioContext: any;
    soundFx: any;
}

declare var webkitAudioContext: any;

class Button extends Component<Props, State> {
    private btn: React.RefObject<HTMLButtonElement>;
    constructor(props: Props) {
        super(props);
        this.state = {
            audioContext: new (window.AudioContext || webkitAudioContext)(),
            soundFx: [],
        }
        this.btn = React.createRef();
    }
    componentDidMount() {
        const el = document.getElementById(this.props.id) as HTMLButtonElement;
        el.addEventListener('focus', this.focus.bind(this));
    }
    focus(e: any) {
        e.preventDefault();
        this.blurAllMenuButtons();
        e.currentTarget.classList.add('active');
    }
    press(e: any) {
        this.focus(e);
        if(this.props.onPress) {
            this.props.onPress(e);
        }
    }
    blurAllMenuButtons() {
        const buttons: any = document.querySelectorAll('.screen--start ul li button');
        buttons.forEach((btn: HTMLElement) => {
            btn.classList.remove('active');
        });
    }
    render() {
        const {title, id, classList} = this.props;
        return (
            <>
                <Audio>
                    <button ref={this.btn} onClick={this.props.onPress} className={classList} id={id}>{title}</button>
                </Audio>
            </>
        )
    }
}

export default Button;
