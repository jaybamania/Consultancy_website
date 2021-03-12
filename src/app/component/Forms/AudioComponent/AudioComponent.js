import React, { useState } from "react";
import classes from "./AudioComponent.module.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import RecorderComponent from "./RecorderComponent/RecorderComponent";
import { useEffect } from "react";

const AudioComponent = (props) => {
  var [count, setCount] = useState(0);
  const [enableAudioComponent2, setEnableAudioComponent2] = useState(false);
  const [enableAudioComponent3, setEnableAudioComponent3] = useState(false);

  const [recordingState, setRecordingState] = useState({
    recorders: {
      first: false,
      second: false,
      third: false,
    },
  });

  const firstStartFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        first: true,
      },
    });
  };

  const firstStopFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        first: false,
      },
    });
  };

  const secondStartFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        second: true,
      },
    });
  };

  const secondStopFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        second: false,
      },
    });
  };

  const thirdStartFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        third: true,
      },
    });
  };

  const thirdStopFunction = (prop) => {
    setRecordingState({
      ...recordingState,
      recorders: {
        ...recordingState.recorders,
        third: false,
      },
    });
  };


  const onClickRecordMoreButton = () => {
    setCount(count++);
    setEnableAudioComponent2(true);
    if (enableAudioComponent2 && count == 2) {
      setEnableAudioComponent3(true);
    }
  };

 const delcomponent2 = () =>{
  setEnableAudioComponent2(false);
 }

 const delcomponent3 = () =>{
  setEnableAudioComponent3(false);
}


  const getDeleteButtonClicked = (value) => {
    console.log("value:" + value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.fileUploads}>
        <Button onClick={onClickRecordMoreButton}>
          <FontAwesomeIcon icon={faPlus} />
         </Button>
        <RecorderComponent
          setFile={props.setFirstFile}
          record={recordingState.recorders.first}
          start={firstStartFunction}
          stop={firstStopFunction}
          data={props.firstAudio}
          name={"Audio 1"}
          //   addcount={addcount}
        />

        {/* <div></div> */}
        {enableAudioComponent2 ? (
          <RecorderComponent
            setFile={props.setSecondFile}
            record={recordingState.recorders.second}
            start={secondStartFunction}
            stop={secondStopFunction}
            data={props.secondAudio}
            name={"Audio 2"}
            enableAudioComponent = {delcomponent2}
            // addcount={addcount}
          />
        ) : null}
        {enableAudioComponent3 ? (
          <RecorderComponent
            setFile={props.setThirdFile}
            record={recordingState.recorders.third}
            start={thirdStartFunction}
            stop={thirdStopFunction}
            data={props.thirdAudio}
            name={"Audio 3"}
            enableAudioComponent = {delcomponent3}
          />
        ) : null}
      </div>
      <div className={classes.button}>
        <Button
          variant="secondary"
          style={{
            backgroundColor: "#151A44",
            borderRadius: "4px",
          }}
          disabled={props.disabled}
          onClick={props.nextFunction}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AudioComponent;
