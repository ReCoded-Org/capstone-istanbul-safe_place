import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "../SliderArrow";

const BlogsCarouselHome = () => {
  const { t } = useTranslation();

  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    setBlogPosts(fetchedBlogPosts);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SliderArrow leftOrRight={"right"} />,
    prevArrow: <SliderArrow leftOrRight={"left"} />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="homeCarousel">
      <Row>
        <Col md={12}>
          <h2 className="title">{t("blogPage.title")}</h2>
          <h6>{t("blogPage.subtitle")}</h6>
        </Col>
      </Row>
      <Slider {...settings}>
        {blogPosts.map((blogPost) => {
          return (
            <BlogCard
              blogPost={blogPost}
              key={blogPost.id}
              className="blogCard"
            />
          );
        })}
      </Slider>
      <Row className="allBlogsBtn">
        <Link to="/blog">
          <h6>
            {t("home.buttons.blogBtn")}
            {document.body.dir === "rtl" ? (
              <span> &#8592; </span>
            ) : (
              <span> &#8594; </span>
            )}
          </h6>
        </Link>
      </Row>
    </Container>
  );
};

export default BlogsCarouselHome;
