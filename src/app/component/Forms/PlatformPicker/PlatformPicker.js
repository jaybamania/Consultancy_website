import React from 'react';
import classes from './PlatformPicker.module.css';
import onlineIcon from '../../../../Zytcode Assets/PNG files/Online icon.png'
import teamsIcon from '../../../../Zytcode Assets/PNG files/microsoft-teams-1.png';
import zoomLogo from '../../../../Zytcode Assets/PNG files/zoom-logo.png';

const OnlineOfflinePicker = props => {

    return (
        <div className={classes.container}>
            <img src={onlineIcon} alt="onlineIcon" />
            <h1>Online</h1>
            <div className={classes.list}>
                <ul style={{ listStyleType: 'circle' }}>
                    <li>
                        <div className={classes.item} onClick={() => props.selectFunction('Teams')}>
                            <img src={teamsIcon} alt="onlineIcon" />
                            <h1>Teams</h1>
                        </div>
                    </li>
                    <li>
                        <div className={classes.item} onClick={() => props.selectFunction('Zoom')}>
                            <img src={zoomLogo} alt="offlineIcon" />
                            <h1>Zoom</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OnlineOfflinePicker;