import React, { Component } from "react";
import Slider from "react-slick";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
// import rightArrow from './images/Chevron-right.svg'
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const SeekHelpCarousel = () => {
  const SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    // pauseOnHover: true,
    // nextArrow: {}
    // prevArrow: "2",
    // arrows: true,
  };

  return (
    <Container className="carousel">
      <Row>
        <Col md={{ span: 7, offset: 5 }}>
          <Slider {...SETTINGS}>
            <div className="carouselItem">
              <div>
                <h3>Doctor</h3>
                <h4>Jenny Wilson</h4>
              </div>
              <div>
                <div className="contactDetails">
                  <div>
                    <img src={phoneSvg} alt="Phone icon" />
                  </div>
                  <div>
                    <p>+1-340-5558-235 </p>
                  </div>
                </div>
                <div className="contactDetails">
                  <div>
                    <img src={locationSvg} alt="Location icon" />
                  </div>
                  <div>
                    <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
                  </div>
                </div>
                <p>
                  In oculis quidem faciunt, ut dolore magnam aliquam causam
                  ista, quae sine causa? quae fuerit causa, nollem me ab eo
                  delectu rerum, quem modo ista sis.
                </p>
              </div>
            </div>

            <div className="carouselItem">
              <div>
                <h3>Doctor</h3>
                <h4>Jenny Wilson</h4>
              </div>
              <div>
                <div className="contactDetails">
                  <div>
                    <img src={phoneSvg} alt="Phone icon" />
                  </div>
                  <div>
                    <p>+1-340-5558-235 </p>
                  </div>
                </div>
                <div className="contactDetails">
                  <div>
                    <img src={locationSvg} alt="Location icon" />
                  </div>
                  <div>
                    <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
                  </div>
                </div>
                <p>
                  In oculis quidem faciunt, ut dolore magnam aliquam causam
                  ista, quae sine causa? quae fuerit causa, nollem me ab eo
                  delectu rerum, quem modo ista sis.
                </p>
              </div>
            </div>

            <div className="carouselItem">
              <div>
                <h3>Doctor</h3>
                <h4>Jenny Wilson</h4>
              </div>
              <div>
                <div className="contactDetails">
                  <div>
                    <img src={phoneSvg} alt="Phone icon" />
                  </div>
                  <div>
                    <p>+1-340-5558-235 </p>
                  </div>
                </div>
                <div className="contactDetails">
                  <div>
                    <img src={locationSvg} alt="Location icon" />
                  </div>
                  <div>
                    <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
                  </div>
                </div>
                <p>
                  In oculis quidem faciunt, ut dolore magnam aliquam causam
                  ista, quae sine causa? quae fuerit causa, nollem me ab eo
                  delectu rerum, quem modo ista sis.
                </p>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default SeekHelpCarousel;
