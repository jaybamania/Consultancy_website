import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import contactusbanner from '../../Zytcode Assets/PNG files/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon (1).jpg';
import ourservices from '../../Zytcode Assets/PNG files/ourservices.png';

// <<<<<<< HEAD
import headOfficeIcon from "../../Zytcode Assets/Assets/COntact Us Page/Head office.png";
import contactIcon from "../../Zytcode Assets/Assets/COntact Us Page/phone.png";
import branchesIcon from "../../Zytcode Assets/Assets/COntact Us Page/Our Branches.png";
import emailIcon from "../../Zytcode Assets/Assets/COntact Us Page/email.png";
import image5 from "../../Zytcode Assets/Assets/2111 1.png";
import Clippng from "../../Zytcode Assets/Assets/Clip.png";
// =======
// import headOfficeIcon from "../../Zytcode Assets/Assets/COntact Us Page/Head office.png";
// import contactIcon from "../../Zytcode Assets/Assets/COntact Us Page/phone.png";
// import branchesIcon from "../../Zytcode Assets/Assets/COntact Us Page/Our Branches.png";
// import emailIcon from "../../Zytcode Assets/Assets/COntact Us Page/email.png";
// import image5 from "../../Zytcode Assets/Assets/2111 1.png";
// import Clippng from "../../Zytcode Assets/Assets/Clip.png";
// >>>>>>> 342ab876ff9c7a832f7f9bd5b6d2d53baad7dabe

const Contactus = () => {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>

      <div className="clip-image-container w-100 test-overlay">
        <img className="clip-image" src={contactusbanner} style={{
               height: "60vh",
               objectFit: "fill"}} />
         <div className="clip-image-content2" style={{top:"33%"}}>
          
          <div
            className="sub-heading d-flex align-items-center"
            style={{ fontSize: "40px", color: "white" ,marginLeft:"0px"}}>
            <span className="line"></span>
            <span><b>&nbsp;&nbsp;Contact Us</b></span>
          </div>
        </div>
      </div>

      <div className="about-container" style={{ padding: "0 6vw" }}>
        <div className="column">
          <div className="map" style={{ padding: "0 1vw" }}>
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameborder="0"
              fkdnvkdnv
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0jeddah+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "greyscale(100%)" }}
            ></iframe>
          </div>
          <div className="contact-us-law" style={{ padding: "4vw 2vw" }}>
            <h3>CONTACT US</h3>
            <h2 style={{ fontSize: "5vh" }}>Law Office</h2>
            <div
              className="about-container"
              style={{ justifyContent: "flex-start", marginTop: "10px" }}
            >
              <section className="row" style={{ margin: "4vh 8vh 0 0 " }}>
                <img
                  src={headOfficeIcon}
                  style={{ width: "10vh", marginRight: "20px" }}
                />
                <h3 style={{ fontSize: "3vh", marginTop: "1vh" }}>
                  HEAD OFFICE
                </h3>
              </section>
              <section
                className="row"
                style={{ margin: "4vh 9vh 0 0 ", marginLeft: "1vh" }}
              >
                <img
                  src={contactIcon}
                  style={{ width: "10vh", marginRight: "20px" }}
                />
                <h3 style={{ fontSize: "3vh", marginTop: "1vh" }}>PHONE</h3>
              </section>
            </div>
            <div
              className="about-container"
              style={{ justifyContent: "flex-start", marginTop: "4vh" }}
            >
              <section
                className="row"
                style={{ margin: "2vh 8vh 0 0 ", padding: 0 }}
              >
                <img
                  src={branchesIcon}
                  style={{ width: "10vh", marginRight: "20px" }}
                />
                <h3 style={{ fontSize: "3vh", marginTop: "2vh" }}>
                  OUR BRANCHES
                </h3>
              </section>
              <section className="row" style={{ marginTop: "2vh" }}>
                <img
                  src={emailIcon}
                  style={{ width: "10vh", marginRight: "20px" }}
                />
                <h3 style={{ fontSize: "3vh", marginTop: "2vh" }}>EMAIL</h3>
              </section>
            </div>
          </div>
        </div>
        <div className="contact-us-form col-sm-6" style={{ padding: "0 5vw" }}>
          <h2>E-Mail Form</h2>
          <h1>Contact Us</h1>
          <h3 style={{ color: "grey" }}>
            With extensive experience we advise top national and international
            companies
          </h3>
          <div className="form-group">
            <label>Your Name (Required)</label>
            <input type="text" className="form-control input-field" />
          </div>
          <div className="form-group">
            <label>Your Email (Required)</label>
            <input type="text" className="form-control input-field" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" className="form-control input-field" />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea rows="5" className="form-control input-field"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" style={{
              width: "35%",
              backgroundImage: "linear-gradient(to top, #b8a046, #876f18)",
              borderRadius: "4px",
              color: "white",
              border: "none"
            }}>Send</button>
          </div>
        </div>
      </div>

     
        <div className="row" style={{padding: "0px 6vw",marginTop:"3em"}}>
          <div className="col-sm-6">
            <h1 style={{ fontSize: "2em" }}>For a faster response, you can use our Legal Advice service</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-sm-6" style={{ textAlign: "center" }}>
            <img className="clip-image" src={ourservices} style={{ width: "80%", height: "auto" }} />
          </div>
        </div>
      

      {/* <div className="imagecontainer">
        <div
          className="clip-image-container w-100"
          style={{ padding: "0px 6vw" }}
        >
          <img className="clip-image" src={image5} />
          <div className="child-content">
            For a faster response, you can use our Legal Advice service
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Contactus;
