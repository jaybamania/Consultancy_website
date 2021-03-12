import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const SignUpComp = () => {
  return (
    <div>
      <Form>
            <p>Sign Up</p>

        <Form.Group>
          <label 
            htmlFor="email">
            Email address
          </label>
          <Form.Control 
            type="email" 
            id="email" 
            name="email" 
            placeholder="example@email.com" 
            />
        </Form.Group>
        <Form.Group>
          <label 
            htmlFor="InputPassword1">
            Password
          </label>
          <Form.Control 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
          />
        </Form.Group>
        <Form.Group>
          <label 
            htmlFor="InputPassword2">
            Confirm Password
          </label>
          <Form.Control 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Confirm your password" 
          />
        </Form.Group>
        <div className="login-btn">
          <div className="my-button">
            <button type="button">Sign Up</button>
          </div>
        </div>
      </Form>
    </div>
    )
}




function Popup(props) {
  const [loginShow, setLoginShow] = useState(true);
  const [backArrow, setBackArrow] = useState(false);
    let history = useHistory();
    const forLogin = () => {
      return (setLoginShow(true),
          setBackArrow(false));
    }
    const forSignUp = () => {
      return (setLoginShow(false),
          setBackArrow(true));
    }
    const BackButton = () => {
      return (
        <div className="login-btn">
          <div className="my-button">
            <button onClick={() => forLogin()} ><ArrowBackIcon /></button>
          </div>
        </div>
      )
    }
    const LoginComp = () => {
      return (
        <div>
          <Form>
          <p>Login to your Account</p>
            <Form.Group>
              <label htmlFor="email">Email address</label>
              <Form.Control 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@email.com" 
              />
            </Form.Group>
            <Form.Group>
              <label 
                htmlFor="InputPassword1">
                Password
              </label>
              <Form.Control 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" 
              />
            </Form.Group>
            <div className="login-btn">
              <div className="my-button">
                <button type="button">Login</button>
              </div>
            </div>
            <div className="social-signup">
              <p>
                Don't have an account?{" "}
                <Link onClick={() => forSignUp()}>Sign up now</Link>
              </p>
            </div>
          </Form>
        </div>
        )
    }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {backArrow ? <BackButton /> : <div></div> }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {loginShow ? <LoginComp /> : <SignUpComp />}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

export default Popup;