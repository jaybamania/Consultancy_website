import React, { useState } from "react";
import Nav from "../component/Nav";
import WrittenForm from "../component/Forms/WrittenFlow/WrittenFlow";
import VerbalForm from "../component/Forms/Form";
// import {Scroll} from 'react-scroll-section';
import Modal from 'react-bootstrap/Modal';
import Footer from "../component/Footer";
import WrittenImage from "../../Zytcode Assets/PNG files/Business-Services.png";
import VerbalImage from "../../Zytcode Assets/PNG files/Business-Services2.png";
import SingleService from "../../Zytcode Assets/PNG files/Single_service_img.jpg";
import ContactSidebar from "../../Zytcode Assets/Assets/contact-sidebar.jpg";
import Clippng from "../../Zytcode Assets/PNG files/pexels-august-de-richelieu-4427618 (1).jpg";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import MyVerticallyCenteredModal from '../component/Popup/Popup'

// import "react-bootstrap";

const AttorneyAdvice = () => {

  const [modalShow, setModalShow] = useState(false);

  const [writtenFlow, setWritten] = useState(false);
  const [verbalFlow, setVerbal] = useState(false);

  const onClickWrittenHandler = () => {
    if (localStorage.getItem('TOKEN')) {
      setWritten(true);
    }
    else {
      setModalShow(true)
    }
  };

  const onClickVerbalHandler = () => {
    if (localStorage.getItem('TOKEN')) {
      setVerbal(true);
    }
    else {
      setModalShow(true)
    }
  };

  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="clip-image-container w-100">
        <img className="clip-image" src={Clippng} style={{
          height: "55vh",
          objectFit: "cover"
        }} />
       
        <div className="clip-image-content2" style={{ top: "33%" }}>
          
          <div
            className="sub-heading d-flex align-items-center"
            style={{ fontSize: "40px", color: "white" ,marginLeft:"0px"}}>
            <span className="line"></span>
            <span><b>&nbsp;&nbsp;Attorney Advice </b></span>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="field-section">
              <div className="field-img">
                <img src={ContactSidebar} />
              </div>
              <div className="field-content">
                <h3 style={{ fontSize: "23px" , marginTop: "15px"}}>
                  <span>25</span>Years of Experience In This Field
                </h3>
                <div className="btns">
                  <div className="btn-style">
                    <a href="#">Contact Us now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ot-s">
              <h4 className="mt-3">OTHER SERVICES</h4>
              <ul>
                <li>
                  <a href="#">Business Law</a>
                </li>
                <li>
                  <a href="#">Business Law</a>
                </li>
                <li>
                  <a href="#">Business Law</a>
                </li>
                <li>
                  <a href="#">Business Law</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <img src={SingleService} />
            <h4 className="mt-3">Legal Advice</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div>
          {writtenFlow ? (
            <div>
              <WrittenForm />
            </div>
          ) : verbalFlow ? (
            <div>
              <VerbalForm />
            </div>
          ) : (
                <div className="row" style={{ marginLeft: "27vw" }}>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-col-circle">
                      <div className="scc-relative circle-1" style={{ width: "42vh" }}>
                        <img src={WrittenImage} onClick={onClickWrittenHandler} />
                        <h4>Written</h4>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="service-col-circle">
                      <div className="scc-relative circle-1" style={{ width: "42vh" }}>
                        <img src={VerbalImage} onClick={onClickVerbalHandler} />
                        <h4>Verbal</h4>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AttorneyAdvice;
