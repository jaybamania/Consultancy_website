import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardContent,
  Paper,
  Button,
} from "@material-ui/core";
import { getUserDetails, updateUserDetails } from "../../../crud/auth.crud";
const Updateprofile = () => {
  const [ProfileDetails, setProfileDetails] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    getUserDetails()
      .then((profile) => {
        setProfileDetails({
          first_name: profile.data.name,
          last_name: "",
          email: profile.data.email,
          phone: profile.data.phone,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileDetails({ ...ProfileDetails, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUserDetails({
      first_name: ProfileDetails.first_name,
      last_name: ProfileDetails.last_name,
      phone: ProfileDetails.phone,
    }).then((profile) => {
      setProfileDetails({
        first_name: profile.data.name,
        last_name: "",
        email: profile.data.email,
        phone: profile.data.phone,
      });
    });
  };
  return (
    <>
      <div style={{ margin: "3%", width: "100%", height: "auto" }}>
        <Paper elevation={5} style={{ width: "95%" }}>
          <Card>
            <CardContent>
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  container
                  item
                  style={{ margin: "5px 0" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Typography variant="subtitle1">Name</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="Abc"
                      id="first_name"
                      name="first_name"
                      value={ProfileDetails.first_name}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  style={{ margin: "5px 0" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Typography variant="subtitle1">Email</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="abc@xyz.com"
                      id="email"
                      name="email"
                      value={ProfileDetails.email}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  style={{ margin: "5px 0" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs>
                    <Typography variant="subtitle1">Phone Number</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="0123456789"
                      id="phone"
                      name="phone"
                      value={ProfileDetails.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid container item>
                  <Button
                    style={{ backgroundColor: "#b8a046", color: "#fff" }}
                    onClick={handleSubmit}
                  >
                    SAVE
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </div>
    </>
  );
};
export default Updateprofile;
