import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import SliderArrow from "../SliderArrow";
import phoneSvg from "./images/phone.svg";
import locationSvg from "./images/map-marker.svg";
import doctorImg from "./images/doctorImage.svg";
import "./index.scss";
import { useTranslation, I18nextProvider } from "react-i18next";

const SeekHelpCarousel = () => {
  const { t } = useTranslation();
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
    <I18nextProvider>
      <Container className="carousel">
        <Row>
          <Col md={{ span: 7, offset: 5 }}>
            <Slider {...settings}>
              {t("home.seekHelpSection", { returnObjects: true }).map((el) => {
                return (
                  <div className="carouselItem" key={el.name}>
                    <div className="carouselHeaderAndImage">
                      <div>
                        <h3>{t(el.title)}</h3>
                        <h4>{t(el.name)}</h4>
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
                          <p>{t(el.phoneNumber)}</p>
                        </div>
                      </div>
                      <div className="contactDetails">
                        <div>
                          <img src={locationSvg} alt="Location Icon" />
                        </div>
                        <div>
                          <p>{t(el.address)}</p>
                        </div>
                      </div>
                      <p>{t(el.moreInfo)}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </I18nextProvider>
  );
};

export default SeekHelpCarousel;
