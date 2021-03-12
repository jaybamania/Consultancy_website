import React, { useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect, shallowEqual, useSelector } from "react-redux";
import * as auth from "../store/ducks/auth.duck";
import { useScrollSection } from "react-scroll-section";
const Nav = ({ logout }) => {
  const { isAuthenticated, user } = useSelector(
    ({ auth }) => ({
      isAuthenticated: auth.user != null,
      user: auth.user,
    }),
    shallowEqual
  );
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const servicesSection = useScrollSection("services");
  const adviceSection = useScrollSection("advice");
  const portfolioSection = useScrollSection("portfolio");
  const contactSection = useScrollSection("contact");
  const [scrolled, setScrolled] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const handleScroll = () => {
    if (window) {
      const offset = window.scrollY;

      // window.scrollTo(0, 0);
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div className="my-nav-section">
      <div className="my-nav-elements">
        <div className="top-nav-info container-fluid" 
        style={{marginTop:"0.09%",height:"6em"}}
        >
          <div className="top-nav-info-left">
            <p>
              King Abdullah Road, Riyadh <span>|</span>{" "}
              <a href="mailto:info@almuehi.com">info@almuehi.com</a>
            </p>
          </div>
          <div className="top-nav-info-left right" style={{position:'relative',zIndex:'100',marginRight:"1em"}}>
            <p>
              {!localStorage.getItem("TOKEN") ? (
                <Link to="/login">Login</Link>
              ) : (
                <Link to="/dashboard">My Account</Link>
              )}
              <span> | </span>
              {!isAuthenticated ? (
                <Link to="/about">Help</Link>
              ) : (
                <span>{user.email}</span>
              )}
            </p>
          </div>
        </div>

        <Navbar
          collapseOnSelect
          expand="lg"
          className={`navbar-light bg-light my-almuehi-logo ${
            scrolled ? "affix my-shring" : ""
          }`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="header-logo">
                <img src="/media/images/almuehi-logo.png" alt="Al-Muehi" />
              </div>
              <div className="header-logo-text">
                <h2>Dr. Abdullah Bin Sudan Almuehi Group</h2>
                <h3>Law firm, consulting &amp; Legal Legitimacy</h3>
              </div>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="my-menu-items" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li
                className="nav-item"
                  onClick={homeSection.onClick}
                  className={`nav-item ${homeSection.selected ? "active" : ""}`}
                >
                  <NavLink className="nav-link" exact to="/" activeClassName="inactive">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    aboutSection.selected ? "active" : ""
                  }`}
                  onClick={()=> {
                    aboutSection.onClick();
                  }}
                >
                  <NavLink className="nav-link" exact to="/" activeClassName="inactive">
                    About Us
                  </NavLink>
                </li>
                <li
                  // className={`nav-item ${
                  //   servicesSection.selected ? "active" : ""
                  // }`}
                  className="nav-item"
                  // onClick={servicesSection.onClick}
                >
                  <NavLink className="nav-link" exact to="/services" activeClassName="active">
                    Our Services
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    adviceSection.selected ? "active" : ""
                  }`}
                  // onClick={adviceSection.onClick}
                >
                  <NavLink className="nav-link" exact to="/advice" activeClassName="active">
                    Attorney Advice
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    portfolioSection.selected ? "active" : ""
                  }`}
                  onClick={portfolioSection.onClick}
                >
                  <NavLink className="nav-link" exact to="/" activeClassName="inactive">
                    Why Us?
                  </NavLink>
                </li>
                <li
                className="nav-item"
                  // className={`nav-item ${
                  //   contactSection.selected ? "active" : ""
                  // }`}
                  // onClick={contactSection.onClick}
                >
                  <NavLink className="nav-link" exact to="/contact" activeClassName="active">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item position-relative active">
                  <i
                    className="material-icons my-search-func"
                    aria-hidden="true"
                    onClick={() => setShowSearch(!showSearch)}
                  >
                    search
                  </i>
                  <div
                    className="search-box"
                    style={{ display: showSearch ? "block" : "none" }}
                  >
                    <input type="text" placeholder="" />
                    <input type="button" value="Search" />
                  </div>
                </li>

                <li className="nav-item my-tel">
                  <a className="nav-link" href="tel:920008434">
                    920008434
                  </a>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default connect(null, auth.actions)(Nav);
