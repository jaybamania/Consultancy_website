import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { changeUserPassword } from "../../../crud/auth.crud";
const UpdatePassword = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    cPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    changeUserPassword({
      new: passwords.cPassword,
      current: passwords.password,
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
                    <Typography variant="subtitle1">
                      Enter Current Password
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      type="password"
                      variant="outlined"
                      placeholder="Enter"
                      id="password"
                      name="password"
                      required
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
                    <Typography variant="subtitle1">
                      Enter New Password
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      type="password"
                      variant="outlined"
                      placeholder="Enter"
                      id="newPassword"
                      name="newPassword"
                      required
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
                    <Typography variant="subtitle1">
                      Confirm New Password
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      size="small"
                      type="password"
                      variant="outlined"
                      placeholder="Confirm"
                      id="cPassword"
                      name="cPassword"
                      required
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
export default UpdatePassword;
