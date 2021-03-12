import React,{useEffect,useState} from 'react';
import classes from './EntityForm.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EntityForm = props =>{

    let dropDownItems=[];
    
    const [dropDownState,setDropDownState]=useState([]);

    useEffect(()=>{
        axios.get('https://service-portal-api.herokuapp.com/api/type/all').then(res=>{
            console.log(res.data.data);
            dropDownItems=[];
            for(let el of res.data.data){
                dropDownItems.push([el.name,el._id])
            }
            console.log(dropDownItems);
            setDropDownState(dropDownItems)
        })
    },[])

    console.log(dropDownItems)
    
    let dropDownItemsCode = dropDownState.map(el=>{
        //console.log(el)
        return(
            <Dropdown.Item onSelect={()=>props.selectFunction(el[0],el[1])} key={el[1]}>{el[0]}</Dropdown.Item>
        )
    })

    let text = 'Choose from the options'

    if(props.entity){
        text=props.entity
    }

    let individualCode=null;
    if(props.type!==null){
        individualCode=(
            <div className={classes.individualForm}>
                <Form style={{display:'flex',flexDirection:'column',alignContent:'center'}}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter your name" onChange = {props.nameHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control type="text" placeholder="Enter your Mobile Number" onChange={props.phoneHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicID">
                        <Form.Control type="text" placeholder="Enter your ID Number" onChange={props.idHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Control as="textarea" rows='3' placeholder="Address" onChange={props.addressHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCity">
                        <Form.Control type="text" placeholder="City" onChange={props.cityHandler}/>
                    </Form.Group>
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
                </Form>
            </div>
        )
    }

    return(
        <div className={classes.container}>
            <div className={classes.entity}>
                    <p>I am </p>
                    <Dropdown onSelect={props.selectFunction} className={classes.dropdown}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {text}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {dropDownItemsCode}
                        </Dropdown.Menu>
                    </Dropdown>
            </div>
            {individualCode}
        </div>
    )
}

export default EntityForm;