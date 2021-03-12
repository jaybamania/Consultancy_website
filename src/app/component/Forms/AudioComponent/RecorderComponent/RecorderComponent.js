import React, { useState } from "react";
import { ReactMic } from "react-mic";
import classes from "./Recorder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStopCircle,
  faTrashAlt,
  faPlus,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import recordpng from "../../../../../Zytcode Assets/Assets/Audio asset/record.png";
import pausepng from "../../../../../Zytcode Assets/Assets/Audio asset/pause.png";
import stoppng from "../../../../../Zytcode Assets/Assets/Audio asset/stop.png";
import stoplightpng from "../../../../../Zytcode Assets/Assets/Audio asset/stoplight.png";
import pauselightpng from "../../../../../Zytcode Assets/Assets/Audio asset/pauselight.png";
import recordlightpng from "../../../../../Zytcode Assets/Assets/Audio asset/recordlight.png";
import playbutton from "../../../../../Zytcode Assets/Assets/Audio asset/pauselight.png";
import ReactPlayer from 'react-player/lazy'
import Sound from 'react-sound'


const Example = (props) => {
  const [duration, setDuration] = useState();

  const [recorded, setRecorded] = useState();

  const [playState,setPlayState] = useState(false);

  const [recordedBlobstate,setRecordedBlobState] = useState('');

  const startRecording = () => {
    props.start();
    setStartBtn(<img src={recordlightpng} />);
  };

    const startPlaying = () =>{
        console.log(playState)
        console.log(recordedBlobstate)
        setPlayState(true)
    }


    const stopPlaying = () =>{
        setPlayState(false)
    }

    const stopRecording = () => {
    props.stop();
    // setStartBtn(<img src={playbutton} width="60px" height="60px" />);


    setStartBtn(
      <Button onClick={startPlaying}>
        <FontAwesomeIcon icon={faPlay} />
      </Button>
    );

    setStopBtn(<img src={stoplightpng} width="40px" height="40px" />);
    setRecorded("Recorded");
    setDelBtn(
      <Button onClick={props.enableAudioComponent}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    );
    // if(props.stop())
    // {
    //     setStartBtn<img src={}/>
    // }
  };

  const [startbtn, setStartBtn] = useState(
    <img src={recordpng} onClick={startRecording} />
  );
  const [stopbtn, setStopBtn] = useState(
    <img src={stoppng} onClick={stopRecording} width="40px" height="40px" />
  );
  const [delbtn, setDelBtn] = useState();

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    console.log(recordedBlob.blobURL)
    setRecordedBlobState(recordedBlob.blobURL)
    var ms = recordedBlob.stopTime - recordedBlob.startTime;
    ms = 1000 * Math.round(ms / 1000); // round to nearest second
    var d = new Date(ms);
    setDuration(d.getUTCMinutes() + ":" + d.getUTCSeconds());
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    props.data(recordedBlob);
  };

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
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
        backgroundColor="#151A44"
      />
      <Sound
        playStatus={playState}
        url={recordedBlobstate}
        style={{height:'0px'}}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          {startbtn}
          {stopbtn}
        </div>
        <div>{delbtn}</div>
      </div>
    </div>
  );
};

export default Example;