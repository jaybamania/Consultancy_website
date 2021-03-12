// <<<<<<< HEAD
import React, { useEffect } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Clippng from "../../Zytcode Assets/Assets/Clip.png";
import SliderImage from "../../Zytcode Assets/Assets/slider-2.jpg";
import aboutusbanner from '../../Zytcode Assets/PNG files/colton-jones-W-25hHS6cp4-unsplash.jpg'
// =======
// import React from "react";
// import Nav from "../component/Nav";
// import Footer from "../component/Footer";
// import Clippng from "../../Zytcode Assets/Assets/Clip.png";
// import SliderImage from "../../Zytcode Assets/Assets/slider-2.jpg";
// >>>>>>> 342ab876ff9c7a832f7f9bd5b6d2d53baad7dabe

const Aboutus = () => {
    return (
        <div>
            <div className="navbar">
                <Nav />
            </div>
            <div className="main" style={{
                backgroundImage: `url(${aboutusbanner})`,
                minHeight: "100px",
                minWidth: "100%",
                backgroundSize: "cover"
            }}>

                <div className="container heading" style={{ paddingTop: "5em" }}>
                    <div style={{ fontSize: "40px", color: "white" }} ><p style={{ fontSize: "xxx-large", fontWeight: "600" }}>Looking for help? </p></div>
                    <div>
                        <p style={{ fontSize: "25px", color: "white", marginTop: "-10px" }}>
                            Watch the video to find out how you can use our services online
                      </p>
                    </div>
                </div>

                <div className="container">
                    {/* <div className="container" >
                        <h1 style={{ fontSize: "1em", color: "white" }}>Services Provided</h1>
                    </div> */}

                    <h1 style={{ fontSize: "1em", color: "white",paddingTop: "2em" }}>Services Provided</h1>
                    <div className="row container" style={{ display: "flex", justifyContent: "space-between" ,padding:"0px"}}>

                        <div className="col-md-6 col-sm-12" style={{ marginLeft: "-1em", paddingBottom:"2em" }}>

                            <div className="card-shadow" style={{ boxShadow: "none", marginTop: "-1em" }}>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%" }}>Legal Advice</div></div>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%" }}>Contracts</div></div>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%" }}>Courts</div>
                                </div>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%"}}>Templates</div></div>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%" }}>Letters</div></div>
                                <div className="card-shadow-container-row" style={{ padding: "7.1px", marginBottom: "-20px" }}>
                                    <div className="card btnGold" style={{ color: "white", borderRadius: "5px", backgroundImage: "linear-gradient(to left, #b8a046, #876f18)", padding: "5px", width:"40%" }}>Special Services</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12" style={{ textAlign: "center" }}>

                            <iframe style={{ width: "80%", height: "18.1em", border: "none" }} src="https://www.youtube.com/embed/qP4v-GrMBzY">
                            </iframe>

                        </div>

                    </div>
                </div>

                <div className="container d-flex justify-content-center" style={{
                    marginTop: "15vh", backgroundColor: "white",
                    width: "35%", borderRadius: "4px"
                }} >
                    <div className="flex-column align-items-center">
                        <h1 style={{ fontSize: "2em" }}>Still Looking for help ?</h1>
                        <div className="flex-column align-items-center" style={{ marginBottom: "18px" }}>
                            <button style={{
                                width: "80%", marginBottom: "10px",marginLeft:"1.5em", backgroundColor: "#d9d44d",
                                backgroundImage: "linear-gradient(to top, #b8a046, #876f18)",
                                borderRadius: "4px",
                                color: "white",
                                border: "none"
                            }}>CONTACT US</button>
                        </div>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Aboutus;