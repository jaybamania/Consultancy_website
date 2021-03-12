import React from 'react';
import classes from './ConsultationSplash.module.css';
import consultationImage from '../../../../Zytcode Assets/PNG files/Mode on consultation tab.png';

const ConsultationSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={consultationImage} alt="consultationMode"/>
            </div>
            <h1>Which mode of consultation would you prefer ?</h1>
        </div>
    )
}

export default ConsultationSplash;