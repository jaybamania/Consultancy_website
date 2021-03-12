import React,{useState} from 'react';
import { ReactMic } from 'react-mic';
import classes from './Recorder.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/esm/Button';
import recordpng from '../../../../../Zytcode Assets/Assets/Audio asset/record.png';
import pausepng from '../../../../../Zytcode Assets/Assets/Audio asset/pause.png';
import stoppng from '../../../../../Zytcode Assets/Assets/Audio asset/stop.png';
import stoplightpng from '../../../../../Zytcode Assets/Assets/Audio asset/stoplight.png';
import pauselightpng from '../../../../../Zytcode Assets/Assets/Audio asset/pauselight.png';
import recordlightpng from '../../../../../Zytcode Assets/Assets/Audio asset/recordlight.png';
import ReactPlayer from 'react-player/lazy';

const Example = (props) => {

    const [duration,setDuration] = useState();

    const [recorded,setRecorded] = useState();

    const [playerState,setPlayerState] = useState(false);

    const startPlaying = () =>{
        setPlayerState(true)
    }

    const stopPlaying = () =>{
        setPlayerState(false)
    }

    const startRecording = () => {
        props.start();
        setStartBtn(<img src={recordlightpng} />);
    }

    const stopRecording = () => {
        props.stop();
        setStopBtn(<img src={stoplightpng} />);
        setRecorded('Recorded');
        setStartBtn(<img src={recordpng} onClick={startPlaying}/>)
        setStopBtn(<img src={pausepng} onClick={stopPlaying}/>)
        setDelBtn(<Button onClick={props.enableAudioComponent}><FontAwesomeIcon icon={faTrashAlt} /></Button>);
    }


    const [startbtn,setStartBtn] = useState(<img src={recordpng} onClick={startRecording}/>);
    const [stopbtn,setStopBtn] = useState(<img src={stoppng} onClick={stopRecording}/>);
    const [delbtn,setDelBtn] = useState();
    
    const onStop=(recordedBlob) =>{
        console.log('recordedBlob is: ', recordedBlob);
        var ms = recordedBlob.stopTime - recordedBlob.startTime;
        ms = 1000 * Math.round(ms / 1000); // round to nearest second
        var d = new Date(ms);
        setDuration(d.getUTCMinutes() + ':' + d.getUTCSeconds());

        setStartBtn(<img src={recordpng} onClick={startPlaying}/>)
        setStopBtn(<img src={pausepng} onClick={stopPlaying}/>)
    }
    
    const onData=(recordedBlob) =>{
      console.log('chunk of real-time data is: ', recordedBlob);
      props.data(recordedBlob)
  }

        return (
            <div className={classes.container}>
                <div style={{display:"flex",width:'100%',justifyContent:"space-between"}}>
                    <span>{props.name}</span>
                    <span>{recorded}</span>
                    <span>{duration} </span>
                </div>                                
                <ReactMic
                    record={props.record}
                    className="sound-wave"
                    onStop={onStop}
                    onData={onData}
                    strokeColor="#FFD645"
                    backgroundColor="#151A44" />
                <ReactPlayer
                    playing={playerState}
                />
                <div style={{display:"flex",flexDirection:"row",width:'100%',justifyContent:"space-between"}}>
                    <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',width:'20%'}}>
                        {startbtn}
                        {stopbtn}
                    </div>
                    <div>
                        {delbtn}                        
                    </div>
                </div>
                
            </div>
        );
}

export default Example;
