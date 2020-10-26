import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import SliderArrow from "../SliderArrow";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
import doctorImg from "./images/doctorImage.svg";
import "./index.scss";
import specialistData from "./specialistInfo.json";

const SeekHelpCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrow leftOrRight={"right"} />,
    prevArrow: <SliderArrow leftOrRight={"left"} />,
  };

  const imagesObj = {
    specialist: doctorImg,
  };

  return (
    <Container className="carousel">
      <Row>
        <Col md={{ span: 7, offset: 5 }}>
          <Slider {...settings}>
            {specialistData.map((el) => {
              return (
                <div className="carouselItem" key={el.name}>
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
                        <img src={phoneSvg} alt="Phone Icon" />
                      </div>
                      <div>
                        <p>{el.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="contactDetails">
                      <div>
                        <img src={locationSvg} alt="Location Icon" />
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
