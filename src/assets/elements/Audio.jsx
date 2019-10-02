import React, {Component} from 'react';
import {TAP_SOUND_PATH} from "../../utils/global";

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state={ soundCode: "default"}
        this.playAudio = () => {
            switch(this.state.soundCode){
                case "default":
                    this.defaultTapSound.play();
            }
        }
    }
    onClick() {
        this.playAudio();
        setTimeout(() => {
            this.props.children.ref.current.click();
        }, 500);
    }
    render() {
        return (
                <div className="audio-asset-wrapper" >
                <audio ref={(defaultTapSound) => { this.defaultTapSound = defaultTapSound; }}>
                    <source src={TAP_SOUND_PATH} type="audio/mpeg" >
                    </source>
                </audio>
                    {this.props.children}
                <button className="btn-audio" onClick={(e) => this.onClick(e)}>*</button>
            </div>
        );
    }
}

export default Audio;