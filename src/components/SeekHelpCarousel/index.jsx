import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SliderArrow from "../SliderArrow";
import SeekHelpSingleCard from "../SeekHelpSingleCard";
import "./index.scss";

const SeekHelpCarousel = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrow leftOrRight={"right"} />,
    prevArrow: <SliderArrow leftOrRight={"left"} />,
  };

  return (
    <Container className="carousel">
      <Row>
        <Col md={{ span: 7, offset: 5 }}>
          <Slider {...settings}>
            {t("home.seekHelpSection", { returnObjects: true }).map(
              (details) => {
                return <SeekHelpSingleCard {...details} />;
              }
            )}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default SeekHelpCarousel;
