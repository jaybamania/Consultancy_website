import React, { useState } from "react";
//import Card from '@material-ui/core/Card';
//import Paper from '@material-ui/core/Paper';
import Collapse from "@material-ui/core/Collapse";
//import Card from '@material-ui/core/Card';
import CrumbSequence from "./CrumbSequence/CrumbSequence";
import classes from "./Application.module.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WrittenReport from "../../Forms/WrittenReport/WrittenReport";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

//Tab Components
import PendingTab from "./PendingTab/PendingTab";
import UpdatePassword from "../Profile/updatepassword";
import UpdateProfile from "../Profile/updateprofile";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "95%",
    padding: "2%",
  },
}));

const Application = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [expandedState, setExpandedState] = useState(false);
  const toggleFunction = (props) => {
    setExpandedState(!expandedState);
  };

  const { page } = useParams();
  // let statusCode=null;
  // let buttonCode=null
  // if(props.status==='Pending'){
  //     statusCode=(
  //         <Button style={{ backgroundColor: 'orange' }}>
  //             {props.status}
  //         </Button>
  //     )
  // }
  // else if(props.status==='Accepted'){
  //     statusCode = (<Button style={{ backgroundColor: 'green',color:'white' }}>
  //         {props.status}
  //     </Button>)

  //     buttonCode = <IconButton onClick={toggleFunction}>
  //         <ExpandMoreIcon />
  //     </IconButton>
  // }
  return (
    <div
      className={classes.root}
      // style={{marginTop: "2rem", gridTemplateColumns: "90% 10%"}}
    >
      {/* <div className={classes.crumbs}>
                <CrumbSequence crumbs={[props.consultationType, props.entity, props.sector]} />
            </div>
            <div className={classes.date}>
                <Typography>{props.date}</Typography>
            </div>
            <div className={classes.status}>
                {statusCode}
            </div>
            <div className={classes.more}>
                {buttonCode}
            </div>
            <Collapse in={expandedState} timeout='auto' unmountOnExit>
                <Typography>Report component goes here</Typography>
                <WrittenReport {...props} fixed={true}/>
            </Collapse> */}
      <Typography
        variant="h4"
        style={{ marginBottom: "2%", fontWeight: "bold" }}
      >
        {page === "dashboard" ? "Services" : "Profile"}
      </Typography>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          variant="fullWidth"
          style={{ background: "white", boxShadow: "none" }}
          aria-label="full width tabs example"
        >
          {page === "dashboard" ? (
            <>
              <Tab
                label="Pending"
                {...a11yProps(0)}
                style={{ color: "#DF3600" }}
              />
              <Tab
                label="Ongoing"
                {...a11yProps(1)}
                style={{ color: "#00B7DF" }}
              />
              <Tab
                label="Complete"
                {...a11yProps(2)}
                style={{ color: "#009D3F" }}
              />
            </>
          ) : (
            <>
              <Tab
                label="Update Profile"
                {...a11yProps(0)}
              />
              <Tab
                label="Update Password"
                {...a11yProps(1)}
              />
            </>
          )}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          style={{ background: "white" }}
        >
          <Container
            maxWidth="xl"
            style={{
              backgroundColor: "#F3F3F3",
              height: "auto",
              padding: "2%",
              margin: "0%",
            }}
          >
            {page === "dashboard" ? <PendingTab {...props} /> : <UpdateProfile />}
          </Container>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          style={{ background: "white" }}
        >
          <Container
            maxWidth="xl"
            style={{
              backgroundColor: "#F3F3F3",
              height: "auto",
              padding: "2%",
            }}
          >
            {page === "dashboard" ? <PendingTab {...props} /> : <UpdatePassword />}
          </Container>
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          dir={theme.direction}
          style={{ background: "white" }}
        >
          <Container
            maxWidth="xl"
            style={{
              backgroundColor: "#F3F3F3",
              height: "auto",
              padding: "2%",
            }}
          >
            <PendingTab {...props} />
          </Container>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Application;
