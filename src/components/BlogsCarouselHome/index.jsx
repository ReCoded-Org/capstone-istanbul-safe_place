import React from "react";
import carouselFirstImg from "./images/carouselFirstImg.jpg";
import carouselSecondImg from "./images/carouselSecondImg.jpg";
import carouselThirdImg from "./images/carouselThirdImg.jpg";
import carouselForthImg from "./images/carouselForthImg.jpg";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation, I18nextProvider } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import SliderArrow from "../SliderArrow";

export default function BlogsCarouselHome() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    // nextArrow: <SliderArrow leftOrRight={"right"} />,
    // prevArrow: <SliderArrow leftOrRight={"left"} />,
  };
  //   const blogsImgs = [
  //     carouselFirstImg,
  //     carouselSecondImg,
  //     carouselThirdImg,
  //     carouselForthImg,
  //   ];
  const slidesData = [
    {
      id: 1,
      title: "Dolorem officiis temporibus.",
      label: "Healthy Me, Healthy We: Preventing Dating Violence.",
      img: `${carouselFirstImg}`,
    },
    {
      id: 2,
      title: ",Officia non provident dolor esse et neque.",
      label: "Don’t Confuse Abuse With Love.",
      img: `${carouselSecondImg}`,
    },
    {
      id: 3,
      title: "Ut recusandae vel vitae molestiae id soluta.",
      label: "Talking to Your Kids About Sexual Assault.",
      img: `${carouselThirdImg}`,
    },
    {
      id: 4,
      title: "Qui vel consequatur recusandae illo repellendus.",
      label: "International Womens Day",
      img: `${carouselForthImg}`,
    },
  ];

  //   const renderSlides = () =>
  //     blogsImgs.map((blogImg) => (
  //       <div className="photoSize">
  //         <img src={blogImg} className="photosCarousel"></img>
  //       </div>
  //     ));

  return (
    <I18nextProvider>
      <Container className="homeCarousel">
        <Row>
          <Col>
            <h1 className="title">Our Blogs</h1>
            <h6>Infomration about violence, women and health.</h6>
            <h6>
              Read different topics that contribute positivley to the mental
              health ofwomen.
            </h6>
            <Slider className="slider" {...settings}>
              {slidesData.map((slide) => (
                <div className="slide" key={slide.id}>
                  {/* <h2 className="slide-title">{slide.title}</h2> */}
                  <label className="blogLabel">{slide.label}</label>
                  <img className="blogImage" src={slide.img} />
                </div>
              ))}
            </Slider>
            <h6 className="allBlogsBtn">
              All blog posts <span>&#8594;</span>
            </h6>
          </Col>
        </Row>
      </Container>
    </I18nextProvider>
  );
}
