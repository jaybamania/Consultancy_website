import React from 'react';
import Stepper from 'react-stepper-horizontal';

const myStepper = props => {
    const array=[];
    let i=1;
    while(i<=props.count){
        array.push({});
        i++;
    }
    return(
        <Stepper steps={array}
            activeStep={props.active}
            defaultColor='#E4E4E4'
            defaultBorderStyle='none'
            activeColor='#151A44'
            activeBorderColor='#FFD645'
            activeBorderStyle='solid'
            completeColor='#151A44'
            completeBorderColor='#FFD645'
            completeBorderStyle='solid'
            defaultBorderWidth={3}
            defaultBarColor='#151A44'
            />
    )
}

export default myStepper;