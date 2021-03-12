import React from 'react';
import classes from './DocumentSplash.module.css';
import consultationImage from '../../../../Zytcode Assets/PNG files/Upload files tab.png';

const MeetSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={consultationImage} alt="Upload files" />
            </div>
            <h1>Please enter the additional documents related to the scenario for us to refer to</h1>
        </div>
    )
}

export default MeetSplash;