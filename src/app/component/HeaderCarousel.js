import React from "react";
import OwlCarousel from "react-owl-carousel";

const HeaderCarousel = () => {
  return (
    <div className="my-header-section">
      <div className="my-header-content">
        <OwlCarousel
          className="owl-theme"
          loop
          items={1}
          dots={false}
          autoplay
          animateOut="fadeOut"
          margin={10}
        >
          <div className="item">
            <div className="header-carousel hc-1">
              <div className="haader-car-content container">
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" />
                  <div className="hcc-subcon-text">
                    Leading Criminal Defense Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    We Are The Voice <br /> Of Justice
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="#">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="header-carousel hc-2">
              <div className="haader-car-content container">
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" />
                  <div className="hcc-subcon-text">
                    Professional Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    We Appear <br /> Whe You Can't
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="#">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="header-carousel hc-3">
              <div className="haader-car-content container">
                <div className="hcc-subcon">
                  <div className="hcc-subcon-line" />
                  <div className="hcc-subcon-text">
                    International Leading Lawyer Team
                  </div>
                </div>

                <div className="hcc-maincon">
                  <h1>
                    You Deserve <br /> Free Trail
                  </h1>
                </div>

                <div className="my-head-btn">
                  <div className="my-button">
                    <a href="#">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="header-bottom-con">
        <div className="row">
          <div className="col-sm-4 col-xs-12 hbc-col hbc-col-l">
            <div className="hbc-content">
              <div className="hbc-content-ele">
                <div className="hbc-icon-img hbc-ico-1">
                  <img src="media/images/img1.png" alt="" />
                </div>
                <div className="chbc-icon-text">
                  <h4>Get</h4>
                  <h2>Legal Advice</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hbc-col">
            <div className="hbc-content">
              <div className="hbc-content-ele">
                <div className="hbc-icon-img">
                  <img src="media/images/img2.png" alt="" />
                </div>
                <div className="chbc-icon-text">
                  <h4>Get 30 Minutes</h4>
                  <h2>Free Consultation</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 hbc-col hbc-col-r">
            <div className="hbc-content">
              <div className="hbc-content-ele">
                <div className="hbc-icon-img">
                  <img src="media/images/img3.png" alt="" />
                </div>
                <div className="chbc-icon-text">
                  <h4>Instant</h4>
                  <h2>Contracts By Al</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
