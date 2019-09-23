import React, { Component } from 'react';
import '../styles/_start.scss';
import { TAP_SOUND_PATH } from '../../utils/global';

interface Props {
    id: string;
    type: string;
    title: string;
    classList?: string;
    audio?: string;
    onPress?: any;
}

class Button extends Component<Props, any> {
    componentDidMount() {
        this.loadSound();
        const el = document.getElementById(this.props.id) as HTMLButtonElement;
        el.addEventListener('focus', this.focus.bind(this));
        el.addEventListener('click', this.press.bind(this));
    }
    loadSound() {
        if(!document.getElementById('sound-btn-press')) {
            const sound = document.createElement('audio');
            sound.id = 'sound-btn-press';
            sound.src = this.props.audio || TAP_SOUND_PATH;
            document.body.appendChild(sound);
        }
    }
    playSound() {
        const audio = document.getElementById("sound-btn-press") as HTMLAudioElement;
        audio.play();
    }
    focus(e: any) {
        e.preventDefault();
        this.blurAllMenuButtons();
        e.currentTarget.classList.add('active');
        this.playSound();
    }
    press(e: any) {
        this.focus(e);
        this.props.onPress(e);
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
            <button className={classList} id={id}>{title}</button>
        )
    }
}

export default Button;
