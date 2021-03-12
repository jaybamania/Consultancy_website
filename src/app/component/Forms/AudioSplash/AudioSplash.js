import React from 'react';
import classes from './AudioSplash.module.css';
import consultationImage from '../../../../Zytcode Assets/PNG files/Record Audio tab.png';

const ConsultationSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={consultationImage} alt="consultationMode" />
            </div>
            <h1>Record an audio describing the scenario</h1>
        </div>
    )
}

export default ConsultationSplash;