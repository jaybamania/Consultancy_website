import React from 'react';
import classes from './OnlineOfflinePicker.module.css';
import offlineIcon from '../../../../Zytcode Assets/PNG files/Offline icon.png';
import onlineIcon from '../../../../Zytcode Assets/PNG files/Online icon.png'

const OnlineOfflinePicker = props =>{
    
    return(
        <div className={classes.container}>
            <div className={classes.list}>
                <ul style={{listStyleType:'circle'}}>
                    <li>
                        <div className={classes.item} onClick={()=>props.selectFunction('Online')}>
                            <img src={onlineIcon} alt="onlineIcon" />
                            <h1>Online</h1>
                        </div>
                    </li>
                    <li>
                        <div className={classes.item} onClick={()=>props.selectFunction('Offline')}>
                            <img src={offlineIcon} alt="offlineIcon" />
                            <h1>Offline</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OnlineOfflinePicker;