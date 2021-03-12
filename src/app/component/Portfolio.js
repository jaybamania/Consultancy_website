import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Section } from "react-scroll-section";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="my-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="my-portfolio-con">
              <div className="psh-line" />
              <OwlCarousel
                loop
                items={1}
                autoplay
                animateOut="fadeOut"
                margin={10}
              >
                <div>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>What People Say</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        src="media/images/writter-2.jpg"
                        alt="Tarik Hasan, UI/UX Designer"
                      />{" "}
                      <span className="pw-name">
                        Tarik Hasan, UI/UX Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>Think This site</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        src="media/images/writter-1.jfif"
                        alt="Julia Samway, UI/UX Designer"
                      />{" "}
                      <span className="pw-name">
                        Julia Samway, UI/UX Designer
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="portfolio-slider">
                    <div className="portfolio-slider-head">
                      <h1>Best Law Firm</h1>
                    </div>
                    <i className="fa fa-quote-left" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tellus risus augue ipsum tortor vitae velit justo.
                      Leo lacinia.
                    </p>
                    <div className="port-writter">
                      <img
                        src="media/images/writter-3.jpg"
                        alt="Jon Deo, Department Head"
                      />{" "}
                      <span className="pw-name">Jon Deo, Department Head</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
