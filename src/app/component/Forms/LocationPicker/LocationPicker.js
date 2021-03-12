import React,{useState} from 'react';
import classes from './LocationPicker.module.css';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';

const LocationPicker = props => {

    const [addressState,setAddressState]=useState({
        first:'',
        second:'',
        third:''
    })

    const firstHandler = prop=>{
        if(prop===1){
            setAddressState({
                ...addressState,
                first:prop
            })
        }
        else if (prop === 2) {
            setAddressState({
                ...addressState,
                second: prop
            })
        }
        else if (prop === 3) {
            setAddressState({
                ...addressState,
                third: prop
            })
        }
    }

    const confirmHandler = prop =>{
        let text = addressState.first+','+addressState.second+','+addressState.third;
        props.confirmHandler(text);
    }

    return (
        <div className={classes.container}>
            <h1>External Location</h1>
            <div className={classes.form}>
                <TextField label="Address Line 1" onChange={()=>firstHandler(1)}/>
                <TextField label="Address Line 2" onChange={() => firstHandler(2)}/>
                <TextField label="Address Line 3" onChange={() => firstHandler(3)}/>
            </div>
            <div className={classes.button}>
                <Button onClick={confirmHandler}>
                    CONFIRM
            </Button>
            </div>
        </div>
    )
}

export default LocationPicker;