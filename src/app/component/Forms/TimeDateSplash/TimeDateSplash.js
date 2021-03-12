import React from 'react';
import classes from './TimeDateSplash.module.css';
import timeImage from '../../../../Zytcode Assets/PNG files/Time Schedule.png';

const TimeDateSplash = props =>{
    return (
            <div className={classes.container}>
                <div className={classes.ring}>
                    <div className={classes.outer_circle}>
                        <div className={classes.inner_circle}>

                        </div>
                        <img src={timeImage} alt="welcome" />
                    </div>
                </div>
                <h1>Please choose the time and date to continue</h1>
                <h4>Thank you</h4>
            </div>
    )
}

export default TimeDateSplash;