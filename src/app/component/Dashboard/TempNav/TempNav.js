import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect, shallowEqual, useSelector } from "react-redux";
import * as auth from "../../../store/ducks/auth.duck";
import { useScrollSection } from "react-scroll-section";
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = props => {
    const logout = props.logout;
    const { isAuthenticated, user } = useSelector(
        ({ auth }) => ({
            isAuthenticated: auth.user != null,
            user: auth.user,
        }),
        shallowEqual
    );

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();
    const homeSection = useScrollSection("home");
    const aboutSection = useScrollSection("about");
    const servicesSection = useScrollSection("services");
    const adviceSection = useScrollSection("advice");
    const portfolioSection = useScrollSection("portfolio");
    const [scrolled, setScrolled] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState(false);
    const handleScroll = () => {
        if (window) {
            const offset = window.scrollY;
            if (offset > 200) {
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
                <div className="top-nav-info container-fluid" style={{ backgroundColor: "#161922e0", height: "6.75em" }}>
                    <div className="top-nav-info-left">
                        <p>
                            King Abdullah Road, Riyadh <span>|</span>{" "}
                            <a href="mailto:info@almuehi.com">info@almuehi.com</a>
                        </p>
                    </div>
                    <div className="top-nav-info-left right">
                        <p>
                            {!isAuthenticated ? (
                                <Link to="/login">My Account</Link>
                            ) : (
                                    <span
                                        onClick={() => logout()}
                                        className="font-weight-bold"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Logout
                                    </span>
                                )}
                            <span> | </span>
                            {!isAuthenticated ? (
                                <Link to="/">Help</Link>
                            ) : (
                                    <span>{user.email}</span>
                                )}
                        </p>
                    </div>
                </div>

                <Navbar
                    collapseOnSelect
                    expand="lg"
                    className={`navbar-light bg-light my-almuehi-logo ${scrolled ? "affix my-shring" : ""
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
                                    onClick={homeSection.onClick}
                                    className={`nav-item ${homeSection.selected ? "active" : ""}`}
                                >
                                    <Link className="nav-link" to="/">
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item ${aboutSection.selected ? "active" : ""
                                        }`}
                                    onClick={aboutSection.onClick}
                                >
                                    <Link className="nav-link" to="/">
                                        Help
                  </Link>
                                </li>
                                <li
                                    className={`nav-item ${servicesSection.selected ? "active" : ""
                                        }`}
                                    onClick={servicesSection.onClick}
                                >
                                    <Link className="nav-link" to="/">
                                        Our Services
                  </Link>
                                </li>
                                <li
                                    className={`nav-item ${adviceSection.selected ? "active" : ""
                                        }`}
                                    onClick={adviceSection.onClick}
                                >
                                    <Link className="nav-link" to="/">
                                        Attorney Advice
                  </Link>
                                </li>
                                <li
                                    className={`nav-item ${portfolioSection.selected ? "active" : ""
                                        }`}
                                    onClick={portfolioSection.onClick}
                                >
                                    <Link className="nav-link" to="/">
                                        Why Us?
                  </Link>
                                </li>
                                <li
                                    className={`nav-item ${portfolioSection.selected ? "active" : ""
                                        }`}
                                    onClick={portfolioSection.onClick}
                                >
                                    <Link className="nav-link" to="/">
                                        Contact Us
                  </Link>
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
