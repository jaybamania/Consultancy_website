import React, { useState } from 'react';
import Stepper from '../Stepper/Stepper';
import classes from './WrittenFlow.module.css';
import Welcome from '../WelcomeComponent/WelcomeComponent';
import EntityForm from '../EntityForm/EntityForm';
import TimeDateSplash from '../TimeDateSplash/TimeDateSplash';
import DateTimePick from '../DateTimePick/DateTimePick';
import WrittenDescription from '../WrittenDescription/WrittenDescription';
import TellUsMore from '../TellUsMoreComponent/TellUsMore';
import WrittenReport from '../WrittenReport/WrittenReport';
import {useHistory} from 'react-router-dom'

import {registerLegalAdvice, updateLegalService} from "../../../services/api"


const Form = props => {

    let containerClass= classes.container;
    let history=useHistory();

    const [stepperState, setStepperState] = useState({
        step: 0
    });

    const [formState, setFormState] = useState({
        isEntitySet: false,
        isSectorSet: false,
        isDateSet: false,
        entity: null,
        entityData: {
            name: '',
            phone: '',
            id: '',
            address: '',
            city: '',
            entityDisabled: true,
            type:''
        },
        sectorData: {
            sector: '',
            subject: '',
            details: '',
            type:''
        },
        slotData: {
            date: '',
            fromTime: '',
            toTime: '',
            slotDisabled:true
        },
        consultationType: ''
    })
        const [responseState,setResponseState] = useState({})

    const incrementStepper = props => {
        setStepperState({
            step: stepperState.step + 1
        })
    }

    const formatDate = date=>{
        const day=date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return day+'/'+month+'/'+year;
    }

    const formatTime = time =>{
        const hours = time.getHours();
        const minutes=time.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        return hours+':'+minutes+' '+ampm;
    }

    const setEntity=(name,id)=>{
        //console.log(prop)
        //console.log(name);
        //console.log(id)
        setFormState({
            ...formState,
            isEntitySet: true,
            entity:name,
            entityData:{
                ...formState.entityData,
                type:id,
                entityDisabled:true
            }
        })
    }

    const setSector=(name,id)=>{
        //console.log(name)
        //console.log(id)
        setFormState({
            ...formState,
            isSectorSet:true,
            sectorData:{
                ...formState.sectorData,
                sector: name,
                type:id
            }
        })
    }

    const nameChangedHandler = event => {
        setFormState({
            ...formState,
            entityData: {
                ...formState.entityData,
                name: event.target.value
            }
        })
    }

    const phoneChangedHandler = event => {
        setFormState({
            ...formState,
            entityData: {
                ...formState.entityData,
                phone: event.target.value
            }
        })
    }

    const idChangedHandler = event => {
        setFormState({
            ...formState,
            entityData: {
                ...formState.entityData,
                id: event.target.value
            }
        })
    }

    const addressChangedHandler = event => {
        setFormState({
            ...formState,
            entityData: {
                ...formState.entityData,
                address: event.target.value
            }
        })
    }

    const subjectChangedHandler = event => {
        setFormState({
            ...formState,
            sectorData: {
                ...formState.sectorData,
                subject: event.target.value
            }
        })
    }

    const detailsChangedHandler = event => {
        setFormState({
            ...formState,
            sectorData: {
                ...formState.sectorData,
                details: event.target.value
            }
        })
    }

    const cityChangedHandler = event => {
        setFormState({
            ...formState,
            entityData: {
                ...formState.entityData,
                city: event.target.value
            }
        })
    }

    const fromTimeChangedHandler = time => {
        setFormState({
            ...formState,
            slotData: {
                ...formState.slotData,
                fromTime: time
            }
        })
    }

    const toTimeChangedHandler = time => {
        setFormState({
            ...formState,
            slotData: {
                ...formState.slotData,
                toTime: time
            }
        })
    }

    const dateChangedHandler = date => {
        setFormState({
            ...formState,
            slotData: {
                ...formState.slotData,
                date: date
            }
        })
    }

    const entityValidate = props => {
        console.log('here')
        console.log(formState.entityData)
        if (formState.entityData.name !== '') {
            if (formState.entityData.phone !== '') {
                if (formState.entityData.id !== '') {
                    if (formState.entityData.address !== '') {
                        if (formState.entityData.city !== '') {
                            return true
                        }
                    }
                }
            }
        }
        return false;
    }

    const dateValidate = props => {
        if (formState.slotData.date !== '') {
            if (formState.slotData.fromTime !== '') {
                if (formState.slotData.toTime !== '') {
                    return true;
                }
            }
        }
        return false;
    }

    const sectorSubmitHandler = prop =>{
        const requestBodyForRegisterLegalService ={
            name: "Legal Advice",
            type: "legal_advice" ,
            mode: "written",
            sub_type: "Keep this as is",
            specialty: "5f5d75a43a19874cd76cb558",
            lawyer_detail: "5f7306ada234e100173f29b4",
            customer: {
                customer_name: formState.entityData.name,
                customer_id: formState.entityData.id,
                customer_address: formState.entityData.address,
                customer_other_info: "customer other addition info here",
                customer_phone: formState.entityData.phone,
                customer_city: formState.entityData.city,
                customer_type: formState.entityData.type,
                customer_sector: formState.sectorData.type

            },
            initial_info: {
                subject:formState.sectorData.subject,
                description: formState.sectorData.details,
                files:[]
            }
        }
        console.log(requestBodyForRegisterLegalService)

        const responseForRegisterLegalAdvice = registerLegalAdvice(requestBodyForRegisterLegalService,setResponseState,responseState)
        console.log(responseForRegisterLegalAdvice)
        incrementStepper()
    }

    const confirmHandler=prop=>{
         const requestBodyForUpdateLegalService = {
            mode: "written", 
            customer: {
                customer_name: formState.entityData.name,
                customer_id: formState.entityData.id,
                customer_address: formState.entityData.address,
                customer_other_info: "customer other addition info here",
                customer_phone: formState.entityData.phone,
                customer_city: formState.entityData.city,
                customer_type: formState.entityData.type,
                customer_sector: formState.sectorData.type
            },
            completion_status: 0,
            status: "pending",
            meeting_date: formState.slotData.date,
            remote: formState.consultationType === "online",
            remote_tool: formState.consultationType === "online" ? formState.platform : "",
            in_person: formState.consultationType === "offline",
            company_office: formState.consultationType === "offline" ? formState.offline.branchOffice : "",
            external_place_address: formState.consultationType === "offline" ? formState.offline.location : "",
            chatId:responseState.data.chatId,
            sub_serviceId:{
                ...responseState.data.sub_serviceId
            },
            lawyer_detail:{
                ...responseState.data.lawyer_detail
            },
            completed_date: null,
            service_accepted: false,
            service_payment_amount: "",
            service_payment_created: null,
            service_payment_done_date: null,
            service_payment_done_mode: "",
            service_payment_link: "",
            service_payment_done: false,
            service_payment_not_paid_reason: "",
            service_feedback_given: false,
            service_feedback_satisfied: false,
            service_feedback_description: "",
            name: "Legal Advice",
            type: "legal_advice",
            sub_type: "this is optional",
            customer_profile:{
                ...responseState.data.customer_profile
            },
            initial_info:{
                description:"",
                files:[]
            }
        }
        console.log(responseState)
        const responseForUpdateLegalService = updateLegalService(requestBodyForUpdateLegalService,responseState.data._id)
        console.log(responseForUpdateLegalService)
        console.log(props)
        responseForUpdateLegalService.then(res=>{
            console.log(res);
            history.push('/dashboard')
        })
        //history.push('/dashboard')
    }

    let leftPaneCode = null;
    let rightPaneCode = null;

    let panes=(<React.Fragment>
        <div className={classes.leftPane}>
            {leftPaneCode}
        </div>
        <div className={classes.rightPane}>
            {rightPaneCode}
        </div>
    </React.Fragment>)

    if (entityValidate()) {
        console.log(formState.entityData.entityDisabled)
        if (formState.entityData.entityDisabled) {
            setFormState({
                ...formState,
                entityData: {
                    ...formState.entityData,
                    entityDisabled: false
                }
            })
        }
    }
    else {
        if (!formState.entityData.entityDisabled) {
            setFormState({
                ...formState,
                entityData: {
                    ...formState.entityData,
                    entityDisabled: true
                }
            })
        }
    }

    if (dateValidate()) {
        if (formState.slotData.slotDisabled) {
            setFormState({
                ...formState,
                slotData: {
                    ...formState.slotData,
                    slotDisabled: false
                }
            })
        }
    }
    else {
        if (!formState.slotData.slotDisabled) {
            setFormState({
                ...formState,
                slotData: {
                    ...formState.slotData,
                    slotDisabled: true
                }
            })
        }
    }


    if (stepperState.step === 0) {
        leftPaneCode = (
            <Welcome />
        )

        console.log(formState.entityData)

        rightPaneCode = (
            <EntityForm
                type={formState.entity}
                selectFunction={setEntity}
                disabled={formState.entityData.entityDisabled}
                nameHandler={nameChangedHandler}
                phoneHandler={phoneChangedHandler}
                idHandler={idChangedHandler}
                addressHandler={addressChangedHandler}
                cityHandler={cityChangedHandler}
                nextFunction={incrementStepper}
                entity={formState.entity}
            />
        )
    }
    else if (stepperState.step === 1) {
        leftPaneCode = (
            <TimeDateSplash />
        )

        rightPaneCode = (
            <DateTimePick
                nextFunction={incrementStepper}
                setFromTime={fromTimeChangedHandler}
                setToTime={toTimeChangedHandler}
                setSelectedDate={dateChangedHandler}
                selectedDate={formState.slotData.date}
                fromTime={formState.slotData.fromTime}
                toTime={formState.slotData.toTime}
            />
        )
    }
    else if (stepperState.step === 2) {
        leftPaneCode = (
            <TellUsMore />
        )

        rightPaneCode = (
            <WrittenDescription
                selectFunction={setSector}
                sector={formState.sectorData.sector}
                nextHandler={sectorSubmitHandler}
                descriptionHandler={detailsChangedHandler}
                subjectHandler={subjectChangedHandler}
            />
        )
    }

    else if(stepperState.step===3){
        console.log('reporting')
        containerClass=classes.paneContainer;
        panes=(
            <div className={classes.pane}>
                <WrittenReport
                    entity={formState.entity.split()[1]}
                    name={formState.entityData.name}
                    phone={formState.entityData.phone}
                    ID={formState.entityData.id}
                    address={formState.entityData.address}
                    city={formState.entityData.city}
                    domain={formState.sectorData.sector}
                    date={formatDate(formState.slotData.date)}
                    fromTime={formatTime(formState.slotData.fromTime)}
                    toTime={formatTime(formState.slotData.toTime)}
                    confirmHandler={confirmHandler}
                />
            </div>
        )
    }

    const count = 4;

    if (stepperState.step !==(count-1)){
        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    return (
        <div className={containerClass}>
            <div className={classes.stepper}>
                <Stepper
                    active={stepperState.step}
                    count={count}
                />
            </div>
            {panes}
        </div>
    )
}

export default Form;


/*
            <div className={classes.stepper}>
                <Stepper
                    active={stepperState.step}
                    count={count}
                />
            </div>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
*/