import React from 'react';
import classes from './TellUsMore.module.css';
import moreImage from '../../../../Zytcode Assets/PNG files/Tell us More Tab.png';

const TellUsMore  = props =>{

    return(
        <div className={classes.container}>
            <div className={classes.ring}>
                <img src={moreImage} alt="TellUsMoreImage" />
            </div>
            <h1>Tell us more</h1>
            <h1>What kind of consultation are you looking for</h1>
            <h1>You can write us and let us know what you are looking for in particular</h1>
        </div>
    )
}

export default TellUsMore;