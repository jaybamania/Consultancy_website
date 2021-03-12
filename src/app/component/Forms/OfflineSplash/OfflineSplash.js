import React from 'react';
import classes from './OfflineSplash.module.css';
import offlineImage from '../../../../Zytcode Assets/PNG files/Offline consultation tab.png';

const ConsultationSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={offlineImage} alt="offlineImage" />
            </div>
            <h1>Where would you like to meet us?</h1>
        </div>
    )
}

export default ConsultationSplash;