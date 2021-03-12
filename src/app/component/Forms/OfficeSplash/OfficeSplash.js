import React from 'react';
import classes from './OfficeSplash.module.css';
import branchImage from '../../../../Zytcode Assets/PNG files/Branch office tab.png';

const ConsultationSplash = props => {

    return (
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={branchImage} alt="branchImage" />
            </div>
            <h1>Select one of the Branch Offices</h1>
        </div>
    )
}

export default ConsultationSplash;