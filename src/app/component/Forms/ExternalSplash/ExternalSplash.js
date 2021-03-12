import React from 'react';
import classes from './ExternalSplash.module.css';
import consultationImage from '../../../../Zytcode Assets/PNG files/External location tab.png';

const MeetSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={consultationImage} alt="consultationMode" />
            </div>
            <h1>Please enter the address of the location</h1>
        </div>
    )
}

export default MeetSplash;