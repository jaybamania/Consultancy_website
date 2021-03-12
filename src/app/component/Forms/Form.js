import React,{useState} from 'react';
import Stepper from './Stepper/Stepper';
import classes from './Form.module.css';
import Welcome from './WelcomeComponent/WelcomeComponent';
import EntityForm from './EntityForm/EntityForm';
import TimeDateSplash from './TimeDateSplash/TimeDateSplash';
import DateTimePick from './DateTimePick/DateTimePick';
import WrittenDescription from './WrittenDescription/WrittenDescription';
import TellUsMore from './TellUsMoreComponent/TellUsMore';
import ConsultationSplash from './ConsultationSplash/ConsultationSplash';
import OnlineOfflinePicker from './OnlineOfflinePicker/OnlineOfflinePicker';
import OnlineSplash from './OnlineSplash/OnlineSplash';
import PlatformPicker from './PlatformPicker/PlatformPicker';
import OfflinePicker from './OfflinePicker/OfflinePicker';
import OfflineSplash from './OfflineSplash/OfflineSplash';
import OfficeSplash from './OfficeSplash/OfficeSplash';
import OfficePicker from './OfficePicker/OfficePicker';
import LocationPicker from './LocationPicker/LocationPicker';
import ExternalSplash from './ExternalSplash/ExternalSplash';
import VerbalReport from './VerbalReport/VerbalReport';
import DocumentSplash from './DocumentSplash/DocumentSplash';
import DocumentPicker from './DocumentPicker/DocumentPicker';
import AudioComponent from './AudioComponent/AudioComponent';
import AudioSplash from './AudioSplash/AudioSplash';
import { useHistory } from "react-router-dom";

import {registerLegalAdvice, updateLegalService} from "../../services/api";


const Form = props =>{
let history=useHistory();
    //console.log('propper');
    //console.log(props.history)

    let containerClass = classes.container;


    const [stepperState, setStepperState] = useState({
        step: 0
    });

    const [formState, setFormState] = useState({
        isEntitySet: false,
        isSectorSet: false,
        isDateSet: false,
        report: false,
        entity: null,
        entityData: {
            name: '',
            phone: '',
            id: '',
            address: '',
            city: '',
            type: '',
            entityDisabled:true
        },
        sectorData:{
            sector:'',
            subject:'',
            details:'',
            type:'',
            sectorDisabled:true
        },
        slotData:{
            date:'',
            fromTime:'',
            toTime:'',
            slotDisabled:true
        },
        consultationType:'',
        platform:'',
        offline:{
            type:'',
            branchOffice:'',
            location:''
        },
        files:{
            first:'',
            second:'',
            third:'',
            firstAudio:'',
            secondAudio:'',
            thirdAudio:''
        }
    })

    const [responseState,setResponseState] = useState({})

    const incrementStepper = props => {
        setStepperState({
            step: stepperState.step + 1
        })
    }

    const addReport = prop => {
        setFormState({
            ...formState,
            report: true
        })
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
            entityData:{
                ...formState.entityData,
                name:event.target.value
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

    const fromTimeChangedHandler = time =>{
        setFormState({
            ...formState,
            slotData:{
                ...formState.slotData,
                fromTime:time
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

    const dateChangedHandler = date=>{
        setFormState({
            ...formState,
            slotData: {
                ...formState.slotData,
                date: date
            }
        })
    }

    const setFirstFile = prop =>{
        setFormState({
            ...formState,
            files:{
                ...formState.files,
                first:prop
            }
        })
    }

    const setSecondFile = prop => {
        setFormState({
            ...formState,
            files: {
                ...formState.files,
                second: prop
            }
        })
    }

    const setThirdFile = prop => {
        setFormState({
            ...formState,
            files: {
                ...formState.files,
                third: prop
            }
        })
    }

    const entityValidate = props =>{
        //console.log('here')
        //console.log(formState.entityData)
        if(formState.entityData.name!==''){
            if(formState.entityData.phone!==''){
                if (formState.entityData.id !=='') {
                    if (formState.entityData.address !=='') {
                        if (formState.entityData.city !=='') {
                            return true
                        }
                    }
                }
            }
        }
        return false;
    }

    const dateValidate = props =>{
        if(formState.slotData.date!==''){
            if (formState.slotData.fromTime !== ''){
                if (formState.slotData.toTime !== ''){
                    return true;
                }
            }
        }
        return false;
    }

    const onlineOfflinePickFunction = param=>{
        setFormState({
            ...formState,
            consultationType: param
        })
    }

    const officeSetter=prop=>{
        setFormState({
            ...formState,
            offline:{
                ...formState.offline,
                branchOffice:prop
            }
        })
    }


    const platformSetter = prop=>{
        //console.log(prop);
        setFormState({
            ...formState,
            platform:prop
        })
        addReport();
    }

    const locationSetter = prop => {
        setFormState({
            ...formState,
            offline:{
                ...formState.offline,
                location:prop
            }
        })
        addReport();
    }

    const typeSetter = prop => {
        setFormState({
            ...formState,
            offline: {
                ...formState.offline,
                type: prop
            }
        })
    }

    let leftPaneCode = null;
    let rightPaneCode = null;

    let panes = (<React.Fragment>
        <div className={classes.leftPane}>
            {leftPaneCode}
        </div>
        <div className={classes.rightPane}>
            {rightPaneCode}
        </div>
    </React.Fragment>)

    const formatDate = date => {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return day + '/' + month + '/' + year;
    }

    const formatTime = time => {
        const hours = time.getHours();
        const minutes = time.getMinutes();

        const ampm = hours >= 12 ? 'PM' : 'AM';
        return hours + ':' + minutes + ' ' + ampm;
    }

    const sectorSubmitHandler = prop =>{
        const requestBodyForRegisterLegalService ={
            name: "Legal Advice",
            type: "legal_advice" ,
            mode: "verbal",
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

    const confirmHandler = prop => {
        

        const requestBodyForUpdateLegalService = {
            mode: "verbal", 
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
                files:[
                    {
                        url:formState.files.first,
                        type:'Document'
                    },
                    {
                        url:formState.files.second,
                        type:'Document'
                    },
                    {
                        url:formState.files.third,
                        type:'Document'
                    },
                    {
                        url:formState.files.firstAudio,
                        type:'Audio'
                    },
                    {
                        url:formState.files.secondAudio,
                        type:'Audio'
                    },
                    {
                        url:formState.files.thirdAudio,
                        type:'Audio'
                    }      
                ]
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

    const setFirstAudio = prop =>{
        setFormState({
            ...formState,
            files:{
                ...formState.files,
                firstAudio:prop
            }
        })
    }

    const setSecondAudio = prop => {
        setFormState({
            ...formState,
            files: {
                ...formState.files,
                secondAudio: prop
            }
        })
    }

    const setThirdAudio = prop => {
        setFormState({
            ...formState,
            files: {
                ...formState.files,
                thirdAudio: prop
            }
        })
    }

    if (entityValidate()) {
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

    if(dateValidate()){
        if(formState.slotData.slotDisabled){
            setFormState({
                ...formState,
                slotData: {
                    ...formState.slotData,
                    slotDisabled: false
                }
            })
        }
    }
    else{
        if(!formState.slotData.slotDisabled){
            setFormState({
                ...formState,
                slotData: {
                    ...formState.slotData,
                    slotDisabled: true
                }
            })
        }
    }

    //console.log('stepper state is '+stepperState.step)
    
    if (stepperState.step === 0) {
        leftPaneCode = (
            <Welcome />
        )

        console.log(formState.entityData)

        rightPaneCode = (
            <EntityForm
                type={formState.entity}
                selectFunction = {setEntity}
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

        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    else if(stepperState.step===1){
        leftPaneCode=(
            <TimeDateSplash/>
        )

        rightPaneCode=(
            <DateTimePick 
                nextFunction={incrementStepper}
                setFromTime={fromTimeChangedHandler}
                setToTime={toTimeChangedHandler}
                setSelectedDate={dateChangedHandler}
                selectedDate={formState.slotData.date}
                fromTime={formState.slotData.fromTime}
                toTime={formState.slotData.toTime}
                disabled={formState.slotData.slotDisabled}
            />
        )

        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    else if(stepperState.step===2){
        leftPaneCode=(
            <TellUsMore/>
        )

        rightPaneCode=(
            <WrittenDescription
                selectFunction={setSector}
                sector={formState.sectorData.sector}
                nextHandler={sectorSubmitHandler}
                descriptionHandler={detailsChangedHandler}
                subjectHandler={subjectChangedHandler}
            />
        )

        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    else if(stepperState.step===4){
        leftPaneCode = (
            <DocumentSplash />
        )

        rightPaneCode = (
            <DocumentPicker
                setFirstFile={setFirstFile}
                setSecondFile={setSecondFile}
                setThirdFile={setThirdFile}
                nextFunction={incrementStepper}
            />
        )

        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    else if(stepperState.step===3){
        leftPaneCode = (
            <AudioSplash />
        )

        rightPaneCode = (
            <AudioComponent
            firstAudio={setFirstAudio}
            secondAudio={setSecondAudio}
            thirdAudio={setThirdAudio}
            nextFunction={incrementStepper}
            />
        )

        panes = (<React.Fragment>
            <div className={classes.leftPane}>
                {leftPaneCode}
            </div>
            <div className={classes.rightPane}>
                {rightPaneCode}
            </div>
        </React.Fragment>)
    }
    else if(stepperState.step===5){
        console.log(formState.report)
        if(!formState.report){
            leftPaneCode = <ConsultationSplash />

            rightPaneCode = <OnlineOfflinePicker
                selectFunction={onlineOfflinePickFunction}
            />

            if (formState.consultationType === 'Online') {
                leftPaneCode = <OnlineSplash />
                rightPaneCode = <PlatformPicker
                    selectFunction={platformSetter}
                />
            }
            else if (formState.consultationType === 'Offline') {
                leftPaneCode = <OfflineSplash />
                rightPaneCode = <OfflinePicker
                    selectFunction={typeSetter}
                />

                if (formState.offline.type === 'Branch Office') {
                    leftPaneCode = <OfficeSplash />
                    rightPaneCode = <OfficePicker
                        selectFunction={officeSetter}
                        office={formState.offline.branchOffice}
                        nextFunction={addReport}
                    />
                }
                else if (formState.offline.type === 'External Location') {
                    leftPaneCode = <ExternalSplash />
                    rightPaneCode = <LocationPicker
                        confirmHandler={locationSetter}
                    />
                }
                console.log(leftPaneCode)
        }
            panes = (<React.Fragment>
                <div className={classes.leftPane}>
                    {leftPaneCode}
                </div>
                <div className={classes.rightPane}>
                    {rightPaneCode}
                </div>
            </React.Fragment>)
        }
        else{
            console.log('reporting')
            containerClass = classes.paneContainer;
            console.log('platform is '+formState.platform)
            panes = (
                <div className={classes.pane}>
                    <VerbalReport
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
                        medium={formState.consultationType}
                        platform={formState.platform}
                        history={history}
                    />
                </div>
            )
        }
    }

    const count=6;
    return(
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