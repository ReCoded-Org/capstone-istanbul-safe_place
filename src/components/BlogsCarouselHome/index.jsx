import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import smilingWomanImg from "./images/smilingWomanImg.jpg";
import womanAndManHoldingHandsImg from "./images/womanAndManHoldingHandsImg.jpg";
import womanTalkingToTherapistImg from "./images/womanTalkingToTherapistImg.jpg";
import multinationalWomenImg from "./images/multinationalWomenImg.jpg";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow";

const SLIDE_DATA = [
  {
    id: 1,
    title: "Dolorem officiis temporibus.",
    label: "Healthy Me, Healthy We: Preventing Dating Violence.",
    img: `${smilingWomanImg}`,
  },
  {
    id: 2,
    title: "Officia non provident dolor esse et neque.",
    label: "Don’t Confuse Abuse With Love.",
    img: `${womanAndManHoldingHandsImg}`,
  },
  {
    id: 3,
    title: "Ut recusandae vel vitae molestiae id soluta.",
    label: "Talking to Your Kids About Sexual Assault.",
    img: `${womanTalkingToTherapistImg}`,
  },
  {
    id: 4,
    title: "Qui vel consequatur recusandae illo repellendus.",
    label: "International Womens Day",
    img: `${multinationalWomenImg}`,
  },
];

export default function BlogsCarouselHome() {
  const { t } = useTranslation();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SliderArrow leftOrRight={"right"} />,
    prevArrow: <SliderArrow leftOrRight={"left"} />,
  };

  return (
    <Container className="homeCarousel">
      <Row>
        <Col>
          <h2 className="title">{t("blogPage.title")}</h2>
          <h6>{t("blogPage.subtitle")}</h6>
          <Slider className="slider" {...settings}>
            {SLIDE_DATA.map((slide) => (
              <div className="slide" key={slide.id}>
                <label className="blogLabel">{slide.label}</label>
                <div className="shadowEffect"></div>
                <img className="blogImage" src={slide.img} alt="blogsImgs" />
              </div>
            ))}
          </Slider>
          <h6 className="allBlogsBtn">
            {t("home.buttons.blogBtn")} <span>&#8594;</span>
          </h6>
        </Col>
      </Row>
    </Container>
  );
}
