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

interface State {
    audioContext: any;
    soundFx: any;
}

declare var webkitAudioContext: any;

class Button extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            audioContext: new (window.AudioContext || webkitAudioContext)(),
            soundFx: [],
        }
    }
    componentDidMount() {
        this.loadSound();
        const el = document.getElementById(this.props.id) as HTMLButtonElement;
        el.addEventListener('focus', this.focus.bind(this));
        el.addEventListener('click', this.press.bind(this));
    }
    loadSound() {
        const audioEl = document.getElementById('offline-sound-press') as HTMLAudioElement;
        if(audioEl) {
            let soundSrc: string = audioEl.src;
            soundSrc = soundSrc.substr(soundSrc.indexOf(',') + 1);
            const buffer = this.decodeBase64ToArrayBuffer(soundSrc);
            let soundFx = this.state.soundFx;
            // Async, so no guarantee of order in array.
            if (this.state.audioContext) {
                this.state.audioContext.decodeAudioData(buffer, function (index: string, audioData: any) {
                    soundFx[index] = audioData;
                }.bind(this, 'offline-sound-press'));
            }
        }
    }
    decodeBase64ToArrayBuffer(base64String: string) {
        let len = (base64String.length / 4) * 3;
        const str = atob(base64String);
        let arrayBuffer = new ArrayBuffer(len);
        let bytes = new Uint8Array(arrayBuffer);

        for (let i = 0; i < len; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes.buffer;
    }
    playSound() {
        let sourceNode = this.state.audioContext.createBufferSource();
        sourceNode.buffer = this.state.soundFx['offline-sound-press'];
        sourceNode.connect(this.state.audioContext.destination);
        console.log(this.state.soundFx)
        sourceNode.start(0);

        const audio = document.getElementById("sound-btn-press") as HTMLAudioElement;
        if(audio) {
            // audio.play();
        }
    }
    focus(e: any) {
        e.preventDefault();
        this.blurAllMenuButtons();
        e.currentTarget.classList.add('active');
        this.playSound();
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
            <button className={classList} id={id}>{title}</button>
        )
    }
}

export default Button;
