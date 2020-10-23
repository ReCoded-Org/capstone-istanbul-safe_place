import React, { Component } from "react";
import Slider from "react-slick";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
// import rightArrow from './images/Chevron-right.svg'
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

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
    <Container>
      <Slider {...SETTINGS} className="carouselSize">
        <div className="carouselItem">
          <div style={{ color: "#4F4F4F" }}>
            <h2>Doctor</h2>
            <h3>Jenny Wilson</h3>
          </div>
          <div style={{ color: "#FFFEFC" }}>
            <img src={phoneSvg} alt="Phone icon" />
            <p>+1-340-5558-235 </p>
            <img src={locationSvg} alt="Location icon" />
            <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
            <p>
              In oculis quidem faciunt, ut dolore magnam aliquam causam ista,
              quae sine causa? quae fuerit causa, nollem me ab eo delectu rerum,
              quem modo ista sis.
            </p>
          </div>
        </div>

        <div className="carouselItem">
          <div style={{ color: "#4F4F4F" }}>
            <h2>Doctor</h2>
            <h3>Jenny Wilson</h3>
          </div>
          <div style={{ color: "#FFFEFC" }}>
            <img src={phoneSvg} alt="phone icon" />
            <p>+1-340-5558-235 </p>
            <img src={locationSvg} alt="location icon" />
            <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
            <p>
              In oculis quidem faciunt, ut dolore magnam aliquam causam ista,
              quae sine causa? quae fuerit causa, nollem me ab eo delectu rerum,
              quem modo ista sis.
            </p>
          </div>
        </div>

        <div className="carouselItem">
          <div style={{ color: "#4F4F4F" }}>
            <h2>Doctor</h2>
            <h3>Jenny Wilson</h3>
          </div>
          <div style={{ color: "#FFFEFC" }}>
            <img src={phoneSvg} alt="phone icon" />
            <p>+1-340-5558-235 </p>
            <img src={locationSvg} alt="location icon" />
            <p>9094 Bay Meadows Street, Conyers, GA 30012</p>
            <p>
              In oculis quidem faciunt, ut dolore magnam aliquam causam ista,
              quae sine causa? quae fuerit causa, nollem me ab eo delectu rerum,
              quem modo ista sis.
            </p>
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default SeekHelpCarousel;
