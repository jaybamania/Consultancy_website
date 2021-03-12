import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../crud/auth.crud";
import { Formik } from "formik";
import CustomTextInputFormik from "../component/input/CustomInputFormik";
import { Alert } from "react-bootstrap";

const SignUp = () => {
  const history = useHistory();
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
            <div className="col-sm-12 col-md-6" id="login-right-high">
              <div className="my-login-content right-bg">
                <div className="login-text-spacer" />
                <h1>
                  S.A. Legal Help for Businesses <br /> and Families in KSA
                </h1>
                <p>We've helped over 2 million people get the help they need</p>
                <div className="login-text-strip" />
                <p className="log-back">Already you have an account?</p>
                <div className="sign-up-btn">
                  <div className="my-button">
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="my-login-content">
                <div className="login-con">
                  <div className="container">
                    <div className="login-top-spacer" />

                    <Link to="/">
                      <img src="media/images/Logo.png" alt="logo" />
                    </Link>
                    <p>Sign Up</p>
                    <Alert show={Boolean(response.error)} variant="danger">
                      {response.error}
                    </Alert>
                    <Alert show={Boolean(response.success)} variant="success">
                      {response.success}
                    </Alert>
                    <div className="my-form-content">
                      <Formik
                        initialValues={{
                          email: "",
                          password: "",
                          confirmPassword: "",
                        }}
                        validate={(values) => {
                          let errors = {};
                          if (!values.email) {
                            errors.email = "Required!";
                          }
                          if (!values.password) {
                            errors.password = "Required!";
                          }
                          if (!values.confirmPassword) {
                            errors.confirmPassword = "Required!";
                          } else if (
                            values.password !== values.confirmPassword
                          ) {
                            errors.confirmPassword = "Password Does not match";
                          }
                          return errors;
                        }}
                        onSubmit={(values) => {
                          console.log('signing')
                          register({
                            email: values.email,
                            password: values.password,
                          })
                            .then((res) => {
                              setResponse({
                                error: null,
                                success: "Signed Up Successfully!",
                              });

                              setTimeout(() => {
                                history.push("/login");
                              }, 3000);
                            })
                            .catch((err) => {
                              console.log('here')
                              console.log(err)
                              setResponse({
                                error: "Could not sign up!",
                                success: null,
                              });
                              resetRes();
                            });
                        }}
                      >
                        {({ status, handleSubmit, isSubmitting }) => (
                          <form onSubmit={handleSubmit}>
                            <div className="form-group my-email">
                              <label htmlFor="email">Email address</label>
                              <CustomTextInputFormik
                                type="email"
                                name="email"
                                placeholder="example@email.com"
                              />
                            </div>

                            <div className="form-group my-pass">
                              <label>Password</label>
                              <CustomTextInputFormik
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div className="form-group my-pass">
                              <label>Confirm Password</label>
                              <CustomTextInputFormik
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                              />
                            </div>
                            <div className="spacer-20" />

                            <div className="login-btn">
                              <div className="my-button">
                                <button type="submit">Sign Up</button>
                              </div>
                            </div>
                            <div className="social-signup">
                              <h4>OR</h4>
                              <p>Sign up with</p>
                              <div className="ss-link">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="fb-icon">
                                  <i className="fa fa-facebook" />
                                </a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="twitter-icon">
                                  <i className="fa fa-twitter" />
                                </a>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href="#" className="gp-icon">
                                  <i className="fa fa-google-plus" />
                                </a>
                              </div>
                              <p>
                                Already have an account?{" "}
                                <Link to="/login">Login now</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
