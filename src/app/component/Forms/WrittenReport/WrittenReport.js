import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './WrittenReport.module.css';

const WrittenReport = props =>{

    let buttonCode = <Button
        onClick={props.confirmHandler}
    >
        CONFIRM
    </Button>

    if(props.fixed){
        buttonCode=null;
    }

    return(
        <div className={classes.bigContainer}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h3>Consultation Confirmed</h3>
                    <hr />
                </div>
                <div className={classes.profile}>
                    <div className={classes.headerFlex}>
                        <p><b>Profile</b></p>
                        <p>{props.entity}</p>
                    </div>
                    <div className={classes.subheader}>
                        <div className={classes.subElements}>
                            <div className={classes.subElement}>
                                <p>Name</p>
                                <p>{props.name}</p>
                            </div>
                            <div className={classes.subElement}>
                                <p>Mobile Number</p>
                                <p>{props.phone}</p>
                            </div>
                            <div className={classes.subElement}>
                                <p>ID Number</p>
                                <p>{props.id}</p>
                            </div>
                            <div className={classes.subElement}>
                                <p>Address</p>
                                <p>{props.address}</p>
                            </div>
                            <div className={classes.subElement}>
                                <p>City</p>
                                <p>{props.city}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className={classes.domain}>
                    <div className={classes.flexElement}>
                        <p><b>Legal Advice Domain</b></p>
                        <p>{props.domain}</p>
                    </div>
                    <hr />
                </div>
                <div className={classes.slot}>
                    <div className={classes.flexElement}>
                        <p><b>Scheduled slot</b></p>
                        <p>{props.date}, {props.startTime} to {props.endTime}</p>
                    </div>
                    <hr />
                </div>
                <div className={classes.consulatationMode}>
                    <div className={classes.flexElement}>
                        <p><b>Consultation Mode</b></p>
                        <p>{props.consultationType}</p>
                    </div>
                </div>
                <div className={classes.button}>
                    {buttonCode}
                </div>
            </div>
        </div>
    )

}

export default WrittenReport;