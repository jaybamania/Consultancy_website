import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory, Link } from "react-router-dom";
import { Section } from "react-scroll-section";
import Form from "./Forms/Form";
import WrittenFlow from "./Forms/WrittenFlow/WrittenFlow";

import Modal from 'react-bootstrap/Modal';
import WrittenImage from '../../Zytcode Assets/PNG files/Business-Services2.png';
import VerbalImage from '../../Zytcode Assets/PNG files/Business-Services.png';

const CallUs = (props) => {
  const [modalShow, setModalShow] = useState(false);

  let history = useHistory();
  const [showAppointmentOption, setShowAppointmentOption] = useState(false);

  const [showVerbal, setShowVerbal] = useState(false);
  const [showWritten, setShowWritten] = useState(false);

  const handleAppointment = (event) => {
    event.preventDefault();
    if (localStorage.getItem("TOKEN")) {
      setShowAppointmentOption(true);
      history.push("/advice");
    } else {
      setModalShow(false);
      history.push("/advice")
    }
    // event.preventDefault();

    // setShowAppointmentOption(true);
  };

  const handleWritten = (event) => {
    history.push("/advice");
    // event.preventDefault();

    // setShowWritten(true);
  };

  const handleVerbal = (event) => {
    // event.preventDefault();
    // setShowVerbal(true);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You are not logged in.</h4>
          <p>
            Please log in first. If you don't have account then please sign up.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              return history.push("/signup");
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => {
              return history.push("/login");
            }}
          >
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Section id="advice" className="callus-section">
      <div className="container">
        <div className="callus-content">
          <img src="media/images/almuehi-logo.png" alt="Al-Muehi" />
          <h3>CALL US 24/7</h3>
          <a className="callus-tel" href="tel:+966 920008434">
            +966 920008434
          </a>
          <h3>OR</h3>
          <h2>Schedule a Free Consultation</h2>
          {!showAppointmentOption && (
            <div className="callus-btn">
              <div className="my-button">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Link onClick={handleAppointment}>Make An Appointment</Link>
              </div>
            </div>
          )}
        </div>

        {showAppointmentOption && !showVerbal && !showWritten && (
          <div
            className="row justify-content-around align-items-center"
            style={{ minHeight: "8em" }}
          >
            <div className="col-4 callus-btn">
              <div className="my-button">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="" onClick={handleWritten}>
                  {/* Written */}
                  <div>
                    <img src={WrittenImage} width="200px" height="200px" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-1 callus-btn">OR</div>
            <div className="col-4 callus-btn">
              <div className="my-button">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="" onClick={handleVerbal}>
                  <img src={VerbalImage} width="200px" height="200px" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {showVerbal && <Form history={{ ...history }} />}
        {showWritten && <WrittenFlow history={{ ...history }} />}
      </div>
    </Section>
  );
};

export default CallUs;
