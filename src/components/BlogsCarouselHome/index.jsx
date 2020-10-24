import React from "react";
import carouselFirstImg from "./images/carouselFirstImg.jpg";
import carouselSecondImg from "./images/carouselSecondImg.jpg";
import carouselthiedImg from "./images/carouselthiedImg.jpg";
import carouselForthImg from "./images/carouselForthImg.jpg";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogsCarouselHome() {
  const renderSlides = () =>
    [carouselFirstImg, carouselSecondImg, carouselthiedImg, carouselForthImg].map((num) => (
      <div className="photoSize">
        <img src={num} className="photosCarousel"></img>
      </div>
    ));

  return (
    <div className="homeCarousel">
      <h1 className="title">Our Blogs</h1>
      <p>Infomration about violence, women and health.</p>
      <p>Read different topics that contribute positivley to the mental health ofwomen.</p>
      <Slider className="slider"
        dots={true}
        slidesToShow={3}
        slidesToScroll={3}
        autoplay={true}
        autoplaySpeed={3000}
        >
        {renderSlides()}
      </Slider>
    </div>
  );
}
