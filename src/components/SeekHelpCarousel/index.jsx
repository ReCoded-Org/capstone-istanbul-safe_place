import React from "react";
import Slider from "react-slick";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
import leftArrowSvg from "./images/Chevron.svg";
import rightArrowSvg from "./images/Chevron-right.svg";
import doctorImg from "./images/doctorImage.svg";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import specialistData from "./specialistInfo.json";

const customeSlider = React.createRef();

const NextArrow = () => {
  const goToNext = () => {
    customeSlider.current.slickNext();
  };

  return (
    <div>
      <img
        src={leftArrowSvg}
        onClick={() => goToNext()}
        style={{ marginLeft: "1rem" }}
        alt="Left arrow"
      />
    </div>
  );
};

const PrevArrow = () => {
  const goToPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <div>
      <img
        src={rightArrowSvg}
        onClick={() => goToPrev()}
        style={{ marginRight: "1rem" }}
        alt="Right arrow"
      />
    </div>
  );
};

const imagesObj = {
  specialist: doctorImg,
};

const SeekHelpCarousel = () => {
  const SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container className="carousel">
      <Row>
        <Col md={{ span: 7, offset: 5 }}>
          <Slider {...SETTINGS} ref={customeSlider}>
            {specialistData.map((el) => {
              return (
                <div className="carouselItem">
                  <div className="carouselHeaderAndImage">
                    <div>
                      <h3>{el.title}</h3>
                      <h4>{el.name}</h4>
                    </div>
                    <div>
                      <img src={imagesObj[el.img]} alt="Specialist" />
                    </div>
                  </div>
                  <div>
                    <div className="contactDetails">
                      <div>
                        <img src={phoneSvg} alt="Phone icon" />
                      </div>
                      <div>
                        <p>{el.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="contactDetails">
                      <div>
                        <img src={locationSvg} alt="Location icon" />
                      </div>
                      <div>
                        <p>{el.address}</p>
                      </div>
                    </div>
                    <p>{el.moreInfo}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default SeekHelpCarousel;
