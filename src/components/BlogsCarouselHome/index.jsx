import React from "react";
import carouselFirstImg from "./images/carouselFirstImg.jpg";
import carouselSecondImg from "./images/carouselSecondImg.jpg";
import carouselThirdImg from "./images/carouselThirdImg.jpg";
import carouselForthImg from "./images/carouselForthImg.jpg";
import "./index.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BlogsCarouselHome() {
    const blogsImgs = [carouselFirstImg, carouselSecondImg, carouselThirdImg, carouselForthImg]
    const renderSlides = () =>
        blogsImgs.map((num) => (
            <div className="photoSize">
                <img src={num} className="photosCarousel"></img>
            </div>
        ));

    return (
        <div className="homeCarousel">
            <h1 className="title">Our Blogs</h1>
            <h6>Infomration about violence, women and health.</h6>
            <h6>Read different topics that contribute positivley to the mental health ofwomen.</h6>
            <Slider className="slider"
                dots={true}
                slidesToShow={3}
                slidesToScroll={3}
                autoplay={true}
                autoplaySpeed={3000}
                arrow={true}
            >
                {renderSlides()}
            </Slider>
            <h6 className="allBlogsBtn">All blog posts <span>&#8594;</span></h6>
        </div>
    );
}
