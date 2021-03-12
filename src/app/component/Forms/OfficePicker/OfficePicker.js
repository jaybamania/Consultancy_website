import React,{useEffect,useState} from 'react';
import classes from './OfficePicker.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import offlineImage from '../../../../Zytcode Assets/PNG files/Branch office icon.png'
import {getAllBranches} from '../../../services/api';

const OfficePicker = props =>{

    const dropDownItems = ['Branch Office 1', 'Branch Office 2', 'Branch Office 3', 'Branch Office 4','Branch Office 5'];

    const [dropDownState,setDropDownState] = useState([]);

    useEffect(()=>{
        const branches = getAllBranches();
        branches.then(res=>{
            const offices = []
            console.log(res);
            for(let el of res.data){
                offices.push(el.name)
            }
            setDropDownState(offices)
        })
    },[])

    let text = 'Choose from the options'

    if(props.office){
        text=props.office;
    }

    let dropDownItemsCode = dropDownState.map(el => {
        return (
            <Dropdown.Item onSelect={() => props.selectFunction(el)} key={el}>{el}</Dropdown.Item>
        )
    })

    return(
        <div className={classes.container}>
            <img src={offlineImage} alt='offline'/>
            <div className={classes.entity}>
                <Dropdown onSelect={props.selectFunction} className={classes.dropdown}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {text}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dropDownItemsCode}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className={classes.button}>
                <Button variant="secondary" style={{
                    backgroundColor: '#151A44',
                    borderRadius: '4px'
                }}
                    disabled={props.disabled}
                    onClick={props.nextFunction}
                >
                    Confirm
                        </Button>
            </div>
        </div>
    )
}

export default OfficePicker;