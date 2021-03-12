import React from 'react';
import classes from './OnlineSplash.module.css';
import onlineImage from '../../../../Zytcode Assets/PNG files/Online consultation tab.png';

const ConsultationSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={onlineImage} alt="onlineImage" />
            </div>
            <h1>Please choose a platform of your preference for the consultation</h1>
        </div>
    )
}

export default ConsultationSplash;