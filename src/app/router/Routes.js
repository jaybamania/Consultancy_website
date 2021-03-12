import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SplashLoading from "../component/SplashLoading";
import { shallowEqual, useSelector } from "react-redux";
import Form from "../component/Forms/WrittenReport/WrittenReport";
import Test from "../component/Forms/WrittenFlow/WrittenFlow";
import Dashboard from "./../component/Dashboard/Dashboard";

const HomePage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const SignUpPage = lazy(() => import("../pages/SignUp"));
const AboutUs = lazy(() => import("../pages/aboutus"));
const Services = lazy(() => import("../pages/services"));
const ContactUs = lazy(() => import("../pages/contactus"));
const AttorneyAdvice = lazy(() => import("../pages/attorneyAdvice"));
// const WrittenAdvice = lazy(() =>
//   import("../component/Forms/WrittenFlow/WrittenFlow")
// );
// const VerbalAdvice = lazy(() => import("../component/Forms/Form"));

const Routes = () => {
  const { isAuthenticated } = useSelector(
    ({ auth }) => ({
      isAuthenticated: auth.user != null,
    }),
    shallowEqual
  );
  return (
    <Suspense fallback={<SplashLoading />}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        {!isAuthenticated && (
          <>
            <Route path="/login" component={LoginPage} exact />
            <Route path="/signup" component={SignUpPage} exact />
            <Route path="/account/:page" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/about" component={AboutUs} exact />
            <Route path="/services" component={Services} exact />
            <Route path="/contact" component={ContactUs} exact />
            <Route path="/advice" component={AttorneyAdvice} exact />
            {/* <Route path="/written" component={WrittenAdvice} exact />
            <Route path="/verbal" component={VerbalAdvice} exact /> */}

            <Route
              path="/tester"
              render={() => (
                <Form
                  entity="Individual"
                  name="name"
                  phone="9876543210"
                  ID="0123456789"
                  address="PO Box 9966, Al Quoz"
                  city="Dubai"
                  domain="Business Setup"
                  date="12/10/2020"
                  fromTime="12:30 P.M."
                  toTime="1:30 P.M."
                ></Form>
              )}
              exact
            />
            {/* <Route path="/about" component={About} exact /> */}
            {/* <Route path="/contact" component={Contact} exact /> */}
            <Route path="/test" component={Test} exact />
            <Route
              path="/tester"
              render={() => (
                <Form
                  entity="Individual"
                  name="name"
                  phone="9876543210"
                  ID="0123456789"
                  address="PO Box 9966, Al Quoz"
                  city="Dubai"
                  domain="Business Setup"
                  date="12/10/2020"
                  fromTime="12:30 P.M."
                  toTime="1:30 P.M."
                ></Form>
              )}
              exact
            />
          </>
        )}

        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
