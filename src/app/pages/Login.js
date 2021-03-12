import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import CustomTextInputFormik from "../component/input/CustomInputFormik";
import { login } from "../crud/auth.crud";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import * as auth from "../store/ducks/auth.duck";

const Login = (props) => {
  const [response, setResponse] = useState({
    error: null,
    success: null,
  });
  const resetRes = () => {
    setTimeout(() => {
      setResponse({
        error: null,
        success: null,
      });
    }, 2000);
  };

  return (
    <div className="my-login h-100">
      <div className="login-all-con h-100">
        <div className="container-fluid h-100 d-flex flex-column">
          <div className="row h-100">
            <div className="col-sm-12 col-md-6">
              <div className="my-login-content">
                <div className="login-con">
                  <div className="container">
                    <div className="login-top-spacer"></div>

                    <Link to="/">
                      <img src="media/images/Logo.png" alt="logo" />
                    </Link>
                    <p>Login to your Account</p>
                    <Alert show={Boolean(response.error)} variant="danger">
                      {response.error}
                    </Alert>
                    <Alert show={Boolean(response.success)} variant="success">
                      {response.success}
                    </Alert>
                    <div>
                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
                        }}
                        validate={(values) => {
                          let errors = {};
                          if (!values.email) {
                            errors.email = "Required!";
                          }
                          if (!values.password) {
                            errors.password = "Required!";
                          }
                          return errors;
                        }}
                        onSubmit={(values) => {
                          login(values.email, values.password)
                            .then((res) => {
                              setResponse({
                                error: null,
                                success: "Logged In Successfully!",
                              });
                              localStorage.setItem(
                                "TOKEN",
                                res.data.data.token
                              );
                              //console.log(res);
                              //console.log(res.data.data.token);
                              //console.log(res.data.data.user);
                              //props.login(res.data.authToken, res.data.user);
                              console.log("token is "+localStorage.getItem('TOKEN'));
                              props.history.push("/dashboard");
                            })
                            .catch((err) => {
                              console.log(err);
                              setResponse({
                                error: "Email or password is incorrect!",
                                success: null,
                              });
                              resetRes();
                            });
                        }}
                      >
                        {({ status, handleSubmit, isSubmitting }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="form-group ">
                              <label htmlFor="email">Email address</label>
                              <CustomTextInputFormik
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                              />
                            </div>

                            <div className="form-group ">
                              <label htmlFor="InputPassword1">Password</label>
                              <CustomTextInputFormik
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                              />
                            </div>
                            <div className="form-check my-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember passward"
                              >
                                Remember
                              </label>
                              <a href="forget_pass.html">Forget password?</a>
                            </div>
                            <div className="spacer-20" />

                            <div className="login-btn">
                              <div className="my-button">
                                <button type="submit">Login</button>
                              </div>
                            </div>
                            <div className="social-signup">
                              <p>
                                Don't have an account?{" "}
                                <Link to="/signup">Sign up now</Link>
                              </p>
                            </div>
                          </form>
                        )}
                      </Formik>
                      <div className="polyterm">
                        <p>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="#">Policy Statement</a>
                          <span> | </span>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a href="#">Term &amp; Condition</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6" id="login-right-high">
              <div className="my-login-content right-bg">
                <div className="login-text-spacer" />
                <h1>
                  S.A. Legal Help for Businesses <br /> and Families in KSA
                </h1>
                <p>We've helped over 2 million people get the help they need</p>
                <div className="login-text-strip" />
                <p className="log-back">
                  Fill up personal information and start journey with us!
                </p>
                <div className="sign-up-btn">
                  <div className="my-button">
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, auth.actions)(Login);
