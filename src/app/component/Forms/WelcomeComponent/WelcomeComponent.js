import React from 'react';
import classes from './WelcomeComponent.module.css';
import welcomeImage from '../../../../Zytcode Assets/PNG files/Welcome.png';

const Welcome = props =>{

    return(
        <div className={classes.container}>
            <div className={classes.ring}>
                <div className={classes.outer_circle}>
                    <div className={classes.inner_circle}>
                         
                    </div>
                    <img src={welcomeImage} alt="welcome" />
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>Welcome</h1>
            <h4 style={{textAlign:"center"}}>Please enter your details to continue</h4>
        </div>
    )
}

export default Welcome;