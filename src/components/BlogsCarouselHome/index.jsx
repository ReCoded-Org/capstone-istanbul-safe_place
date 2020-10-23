import React from "react";
import carousel1 from "./images/carousel1.jpg";
import carousel2 from "./images/carousel2.jpg";
import carousel3 from "./images/carousel3.jpg";
import carousel4 from "./images/carousel4.jpg";
import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogsCarouselHome() {
  const renderSlides = () =>
    [carousel1, carousel2, carousel3, carousel4].map((num) => (
      <div className="photoSize">
        <img src={num} className="photosCarousel"></img>
      </div>
    ));

  return (
    <div className="homeCarousel">
      <h1 className="title">Our Blogs</h1>
      <p className="title">Infomration about violence, women and health.</p>
      <p>
        Read different topics that contribute positivley to the mental health of
        women.
      </p>
      <Slider
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
