import React from 'react';
import classes from './ConsultationSplash.module.css';
import consultationImage from '../../../../Zytcode Assets/PNG files/Mode on consultation tab.png';

const MeetSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={consultationImage} alt="consultationMode" />
            </div>
            <h1>Where would you like to meet us?</h1>
        </div>
    )
}

export default MeetSplash;