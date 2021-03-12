import React from 'react';
import classes from './OfflinePicker.module.css';
import offlineIcon from '../../../../Zytcode Assets/PNG files/External location icon.png';
import onlineIcon from '../../../../Zytcode Assets/PNG files/Branch office icon.png'

const OnlineOfflinePicker = props => {

    return (
        <div className={classes.container}>
            <div className={classes.list}>
                <ul style={{ listStyleType: 'circle' }}>
                    <li>
                        <div className={classes.item} onClick={() => props.selectFunction('Branch Office')}>
                            <img src={onlineIcon} alt="onlineIcon" />
                            <h3>Branch Office</h3>
                        </div>
                    </li>
                    <li>
                        <div className={classes.item} onClick={() => props.selectFunction('External Location')}>
                            <img src={offlineIcon} alt="offlineIcon" />
                            <h3>External Location</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OnlineOfflinePicker;