import React from 'react';
import {Link} from 'react-router';

const Navbar = props =>{

    return(
        <div className="my-nav-section">
            <div className="my-nav-elements">
                <div className="top-nav-info container-fluid">
                    <div className="top-nav-info-left">
                    <p>King Abdullah Road, Riyadh <span>|</span> <a href="mailto:info@almuehi.com">info@almuehi.com</a></p>
                    </div>
                <div className="top-nav-info-left right">
                    <p><a href="login.html">My Account</a> <span>|</span> <a href="#">Help</a></p>
                </div>
            </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light my-almuehi-logo">
            <a className="navbar-brand" href="index.html"><div className="header-logo"><img src="images/almuehi-logo.png" alt="Al-Muehi"/></div>
                <div className="header-logo-text"><h2>Dr. Abdullah Bin Sudan Almuehi Group</h2><h3>Law firm, consulting &amp; Legal Legitimacy</h3></div></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse my-menu-items" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Our Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Attorney Advice</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Why Us?</a>
                    </li>
                    <li className="nav-item active">
                        <i className="material-icons my-search-func" aria-hidden="true">search</i>
                        <div className="search-box">
                            <input type="text" placeholder="" />
                            <input type="button" value="Search" />
                        </div>
                    </li>
                    <li className="nav-item my-tel">
                        <a className="nav-link" href="tel:920008434">920008434</a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    </div>    
    )
}

export default Navbar;