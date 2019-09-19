import React, { Component } from 'react';
import '../../assets/start.css';

const clickSoundPath = 'https://opengameart.org/sites/default/files/audio_preview/mouseclick.wav.mp3';

class Start extends Component<any, any> {
    componentDidMount() {
        const menu = document.querySelector('.screen--start ul') as HTMLElement;
        menu.style.maxWidth = window.screen.width + 'px';
        this.buttonEventListeners();
    }
    buttonEventListeners() {
        const buttons: any = document.querySelectorAll('.screen--start ul li button');
        buttons.forEach((btn: HTMLElement) => {
            btn.addEventListener('focus', (e: any) => {
                this.blurAllMenuButtons();
                e.currentTarget.classList.add('active');
                const audio = document.getElementById("sound-select-btn") as HTMLAudioElement;
                audio.play();
            }, true);
            buttons[0].focus();
        });
    }
    blurAllMenuButtons() {
        const buttons: any = document.querySelectorAll('.screen--start ul li button');
        buttons.forEach((btn: HTMLElement) => {
            btn.classList.remove('active');
        });
    }
    render() {
        return (
            <div className="screen--start">
                <ul>
                    <li><button>single player</button></li>
                    <li><button>multi player</button></li>
                    <li><button>settings</button></li>
                    <li><button>how to play</button></li>
                    <li><button>credits</button></li>
                </ul>
                <p className={'copyright'}>&nbsp;&copy;2019 kal open art game</p>
                <audio id={"sound-select-btn"} src={clickSoundPath} ></audio>
            </div>
        );
    }
}

export default Start;
