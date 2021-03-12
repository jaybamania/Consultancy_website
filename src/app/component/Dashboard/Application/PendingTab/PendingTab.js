import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WrittenReport from '../../../Forms/WrittenReport/WrittenReport';
import CrumbSequence from './../CrumbSequence/CrumbSequence';
import { Button, Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: "3%",
      width: "100%",
      height: "auto",
  },
  mainGrid:{
      margin:"2%",
      padding:"2% 0%",
  },
  breadCrumbs:{
  },
  date:{
      float:"right",
      color:"black",
      marginRight:"4%",
      marginBottom:"3%",
  },
  time:{
    float:"right",
    color:"black",
    marginRight:"-13%",
    marginBottom:"2%",
},
  buttons:{
    float:"right",
    marginTop:"1%",
    color:"#007AAE",
    marginRight:"-11%",
    marginBottom:"3%",
}
}));


const PendingTab = (props) => {
    
    const classes = useStyles();

    const [expandedState,setExpandedState] = useState(false); 
    const toggleFunction= props=>{
        setExpandedState(!expandedState)
    }
    
  return (
    <div className={classes.root}>
      
      <Paper elevation={5} style={{width:"95%"}} >
        <Grid container xl={12} xs={12} className={classes.mainGrid}>
            <Grid xs={2} xl={1} >
                <Avatar alt="Jay Bamania" src="" />
            </Grid>
            <Grid xs={5} xl={4}  className={classes.breadCrumbs}>
                <CrumbSequence crumbs={["Verbal", "Online", "Zoom-App"]} style={{color:"black"}}   />
                <br/>
                <CrumbSequence crumbs={["Individual", "Transport"]} style={{color:"black"}}   />
            </Grid>
           
            <Grid alignContent="flex-end"  xs={5} xl={7}>
              <Typography variant="h6" className={classes.date} >{props.date}</Typography>
               <br />
               <Grid justify="flex-end">
                  <Typography variant="body2" className={classes.time} >{props.startTime} to {props.endTime}</Typography>
               </Grid>
               
               <br/>
               <Button color="primary" className={classes.buttons} >Pay Now</Button>
            </Grid>
            
        </Grid>
        <Grid container justify="center">
            <IconButton onClick={toggleFunction}>
             <ExpandMoreIcon />
         </IconButton>
         <Container maxWidth="xl"  style={{ backgroundColor: 'white' }}>
         <Collapse in={expandedState} timeout='auto' unmountOnExitb xl={12}>
                <Typography>Report component goes here</Typography>
                <WrittenReport {...props} fixed={true}/>
            </Collapse> 
            </Container>
                
            </Grid>
      </Paper>
    </div>
  );
};

export default PendingTab;
