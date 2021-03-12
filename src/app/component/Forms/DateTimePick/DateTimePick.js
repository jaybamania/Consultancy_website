import React from 'react';
import classes from './DateTimePick.module.css';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from 'react-bootstrap/Button';

const DateTimePick = props =>{
    //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const selectedDate=props.selectedDate;
    const setSelectedDate = props.setSelectedDate;

    const {fromTime,setFromTime,toTime,setToTime}=props

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleFromTimeChange = (date) =>{
        setFromTime(date)
    }
    
    const handleToTimeChange = (date) => {
        setToTime(date)
    }

    let selectedDateProp=null;
    let toTimeProp=null;
    let fromTimeProp=null;

    if(fromTime){
        fromTimeProp=fromTime
    }

    if(toTime){
        toTimeProp=toTime
    }

    if(selectedDate){
        selectedDateProp = selectedDate
    }

    return (
        <div className={classes.container}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" style={{width:'100%',height:'100%'}}>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date of consultation"
                            value={selectedDateProp}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.timeDiv}>
                            <KeyboardTimePicker
                                margin="normal"
                                label="Pick the time slot"
                                value={fromTimeProp}
                                onChange={handleFromTimeChange}
                                style={{width:'40%'}}
                            />
                            <div>
                                <h4>to</h4>
                            </div>
                            <KeyboardTimePicker
                                margin="normal"
                                value={toTimeProp}
                                label=" "
                                onChange={handleToTimeChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                style={{ width: '40%' }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <div className={classes.button}>
                    <Button variant="secondary" style={{
                        backgroundColor: '#151A44',
                        borderRadius: '4px'
                    }}
                        disabled={props.disabled}
                        onClick={props.nextFunction}
                    >
                        Next
                        </Button>
                </div>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default DateTimePick;