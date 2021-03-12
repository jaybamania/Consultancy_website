import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Application from "./Application/Application";
import classed from "./Dashboard.module.css";
import TempNav from "./TempNav/TempNav";
import { CenterFocusStrong } from "@material-ui/icons";
import { useParams } from "react-router-dom";
const Dashboard = (props) => {
  const [applicationsState, setApplicationState] = useState({
    applications: [
      {
        consultationType: "Verbal",
        entity: "Company",
        sector: "Education",
        date: "10-10-20",
        status: "Pending",
        name: "Rahul Kumar",
        phone: 988754200,
        ID: "ABC1234",
        address: "Delhi, India",
        city: "Delhi",
        domain: "Education",
        startTime: "19 : 30",
        endTime: "20 : 30"
      },
      // {
      //     consultationType: 'Written',
      //     entity: 'Individual',
      //     sector: 'Education',
      //     date: '10-10-20',
      //     status: 'Accepted',
      //     name: 'Ram Kumar',
      //     phone: 988754200,
      //     ID: 'ABC1235',
      //     address: "Mumbai, India",
      //     city: 'Mumbai',
      //     domain: 'Other'
      // }
    ],
  });

  const drawerWidth = 250;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      background: "#30333B",
    },
    drawerPaper: {
      marginTop: "10em",
      background: "#30333B",
      color: "#B29A40",
      marginLeft: "7em",
    },
    drawerContainer: {
      overflow: "auto",
      // marginTop: "10em"//
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    select: {
      borderRight: "10px solid #b8a046",
      color: "#000",
    },
  }));

  const classes = useStyles();
  const { page } = useParams();
  let applicationsCode = null;

  if (applicationsState.applications.length > 0) {
    applicationsCode = applicationsState.applications.map((app, index) => {
      return (
        <Application 
          consultationType={app.consultationType}
          // {...app}
          entity={app.entity}
          sector={app.sector}
          date={app.date}
          status={app.status}
          key={index}
          domain={app.domain} 
          name = {app.name}
          phone = {app.phone}
          id = {app.ID}
          address = {app.address}
          city = {app.city}
          startTime = {app.startTime}
          endTime = {app.endTime}
        />
      );
    });
  }

  const dashboardSender = (prop) => {
    props.history.push("/account/dashboard");
  };

  const profileSender = (prop) => {
    props.history.push("/account/profile");
  };

  const logoutHandler = (prop) => {
    localStorage.removeItem("TOKEN");
    props.history.push("/");
  };
  return (
    <div>
      <div className="navbar" style={{ paddingLeft: "0px" }}>
        <TempNav />
      </div>
      <div className="main">
        <div className="container" style={{ paddingTop: "18vh" }}>
          <div className="body row">
            <div className="sidenav col-md-3">
              <div>
                <List
                  style={{
                    color: "#b8a046",
                    backgroundColor: "#333",
                    fontWeight: "bold",
                  }}
                >
                  <ListItem style={{ fontSize: "1.5rem" }}>
                    <ListItemText
                      primary="Dashboard"
                    />
                  </ListItem>
                  <ListItem
                    button
                    selected={page === "dashboard"}
                    className={classes.select}
                    onClick={dashboardSender}
                  >
                    <ListItemText
                      primary="Services"
                      style={{ color: "#b8a046" }}
                    />
                  </ListItem>
                  <ListItem button selected={page === "profile"}>
                    <ListItemText primary="Profile" onClick={profileSender} />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Sign Out" onClick={logoutHandler} />
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="main1 col-md-9">
              {/* <div>
                <h2>
                  <b>Services</b>
                </h2>
              </div>
              <div className="nav2">
                <ul>
                  <li>
                    <a href="" style={{ color: "red" }}>
                      <b>Pending</b>
                    </a>
                  </li>
                  <li>
                    <a href="" style={{ color: "blue" }}>
                      <b>Ongoing</b>
                    </a>
                  </li>
                  <li>
                    <a href="" style={{ color: "green" }}>
                      <b>Completed</b>
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="main2">
                <div className="container1">
                  <div className={classed.workspace}>{applicationsCode}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
