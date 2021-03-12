import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';  
import { Typography } from '@material-ui/core';
import classes from './CrumbSequence.module.css';
const CrumbSequence = props =>{
    const crumbCode = props.crumbs.map(crumb=>{
        return(
            <Typography key={crumb}>{crumb}</Typography>
        )
    })

    return(
        <div className={classes.crumbs}>
            <Breadcrumbs>
                {crumbCode}
            </Breadcrumbs>
        </div>
    )
}

export default CrumbSequence;