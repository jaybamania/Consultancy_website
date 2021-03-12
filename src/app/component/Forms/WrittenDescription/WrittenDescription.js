import React,{useState,useEffect} from 'react';
import classes from './WrittenDescription.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const WrittenDescription = props =>{
    let dropDownItems = ['Education','Transport','Family','Real Estate','Restaurants','Business Setup','Others'];
    
    const [dropDownState,setDropDownState]=useState([]);

    useEffect(()=>{
        axios.get('https://service-portal-api.herokuapp.com/api/expertise/all').then(res=>{
            console.log(res.data.data);
            dropDownItems=[];
            for(let el of res.data.data){
                dropDownItems.push([el.name,el._id])
            }
            console.log(dropDownItems);
            setDropDownState(dropDownItems)
        })
    },[])

    
    let dropDownItemsCode = dropDownState.map(el => {
        return (
            <Dropdown.Item onSelect={() => props.selectFunction(el[0],el[1])} key={el[1]}>{el[0]}</Dropdown.Item>
        )
    })
    
    let formCode=null;

    let text = 'Choose from the options'

    if(props.sector){
        text=props.sector;
        formCode=(
            <div className={classes.form}>
                <div className={classes.subject}>
                    <Form>
                        <Form.Group controlId="formBasicSubject" style={{display:'flex',flexDirection:'column'}}>
                            <Form.Control type="text" placeholder="Enter the Subject" onChange={props.subjectHandler}/>
                        </Form.Group>
                    </Form>
                </div>
                <div className={classes.description}>
                    <Form>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Control as="textarea" placeholder="Type the details here" onChange={props.descriptionHandler} />
                        </Form.Group>
                    </Form>
                </div>
                <div className={classes.button}>
                    <Button onClick={props.nextHandler}>Next</Button>
                </div>
            </div>
        )
    }

    return(
        <div className={classes.container}>
            <div className={classes.selectr}>
                <h3>Need legal advice in </h3>
                <Dropdown onSelect={props.selectFunction} className={classes.dropdown}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {text}
                        </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dropDownItemsCode}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            {formCode}
        </div>
    )
}

export default WrittenDescription;