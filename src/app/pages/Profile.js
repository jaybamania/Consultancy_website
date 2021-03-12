import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdatePassword from "../component/UpdatePassword";
import UpdateProfile from "../component/UpdateProfile";
import TabbedButton from "../component/TabbedButton";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import classed from '../component/Dashboard/Dashboard.module.css';
import TempNav from "../component/Dashboard/TempNav/TempNav";

const Dashboard = props => {

  const [isProfileActive, updateActiveProfile] = useState(true);
  const [tab, setTab] = useState(0);

  const drawerWidth = 150;

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
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop: "10em"
    },
    drawerContainer: {
      overflow: "auto",
      // marginTop: "10em"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  let applicationsCode = (
    <>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row col-10">
          <div className=" col-10">
            <nav aria-label="breadcrumb bg-white">
              <ol className="breadcrumb  bg-white">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-10">
            {tab === 0 && (
              <div className="card card-body">
                <TabbedButton
                  isActive={isProfileActive}
                  toggleActive={() => updateActiveProfile(!isProfileActive)}
                  text1="Update Profile"
                  text2="Change Password"
                />
                {!isProfileActive ? (
                  <UpdatePassword isVisible={!isProfileActive} />
                ) : (
                    <UpdateProfile isVisible={isProfileActive} />
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const dashboardSender = prop => {
    props.history.push('/dashboard')
  }

  const profileSender = prop => {
    props.history.push('/profile')
  }

  const logoutHandler = prop => {
    localStorage.removeItem("TOKEN");
    props.history.push('/')
  }

  const list = (
    <List>
      <Divider />
      <ListItem>
        <ListItemText primary='Dashboard' onClick={dashboardSender} />
      </ListItem>
      <ListItem>
        <ListItemText primary='Search Jobs' />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary='Profile' onClick={profileSender} />
      </ListItem>
      <ListItem>
        <ListItemText primary='Sign Out' onClick={logoutHandler} />
      </ListItem>
    </List>
  )

  return (
    <div className={classes.root}>
      <TempNav />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          {list}
        </div>
      </Drawer>
      <main className={classes.content} style={{ paddingTop: "10em" }}>
        <div className={classed.workspace}>{applicationsCode}</div>
      </main>
    </div>
  );
}

export default Dashboard;