import React from "react";
import Nav from "../component/Nav";
import { ScrollingProvider, Section } from "react-scroll-section";

import Clippng from "../../Zytcode Assets/Assets/Clip.png";
import SliderImage from "../../Zytcode Assets/Assets/slider-2.jpg";
import icon from "../../Zytcode Assets/Assets/Layer 10.png";
import asset2 from "../../Zytcode Assets/Assets/2111 1.png";

import Footer from "../component/Footer";

import ourservices from '../../Zytcode Assets/PNG files/businessman-shaking-hands-judge-gavel-with-justice-lawyers-trust-promise-win-case.jpg';


const Services = () => {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>
      <Section id="services">
        <div className="clip-image-container w-100">
          <img className="clip-image" src={ourservices} style={{
              height: "55vh",
              objectFit: "cover"}}/>
          
           <div className="clip-image-content2" style={{top:"33%"}}>
          
          <div
            className="sub-heading d-flex align-items-center"
            style={{ fontSize: "40px", color: "white" ,marginLeft:"0px"}}>
            <span className="line"></span>
            <span><b>&nbsp;&nbsp;Our Services</b></span>
          </div>
        </div>
        </div>
        <div className="container2 w-100">
          <div className="col-sm-3">
            <ul>
              <li className="listItem">
                <div className="container list-child-cotainer">
                  We specialized in problem solving
                </div>
              </li>
              <li className="listItem">
                <h1 style={{ fontSize: "4vh", fontWeight: "bolder" }}>
                  Our Popular Services
                </h1>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Trade Mark
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Get help from an attorney
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Business Services
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Wills and Trusts
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Intellectual Properties
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Contracts and Agreements
                </h2>
              </li>
              <li
                className="listItem"
                style={{ borderBottom: "1px solid black" }}
              >
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Work Place Benefits
                </h2>
              </li>
              <li className="listItem">
                <h2 className="underline" style={{ fontSize: "3vh" }}>
                  Legal Advice
                </h2>
              </li>
            </ul>
          </div>
          <div className="col-sm-8">
            
            <div
              className="container d-flex justify-content-start"
              >
              <h1 style={{ fontSize: "2vw", fontStyle: "bolder" }}>Heading</h1>
            </div>
            <div className="container" style={{ marginTop: "1vh" }}>
              <p style={{ fontSize: "3vh" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
