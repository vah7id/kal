import React, { Component } from 'react';
import '../../assets/styles/start.css';
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
        this.loadAudio();
        const el = document.getElementById(this.props.id) as HTMLButtonElement;
        el.addEventListener('focus', this.focus.bind(this));
        el.addEventListener('click', this.press.bind(this));
    }
    loadAudio() {
        const audioEl = document.getElementById('sound-btn-press');
        if(!audioEl) {
            document.body.innerHTML += `<audio id="sound-btn-press" src="${this.props.audio || TAP_SOUND_PATH}"></audio>`;
        }
    }
    sound() {
        const audio = document.getElementById("sound-btn-press") as HTMLAudioElement;
        audio.play();
    }
    focus(e: any) {
        e.preventDefault();
        this.blurAllMenuButtons();
        e.currentTarget.classList.add('active');
        this.sound();
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
