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
import i18next from "i18next"

const POSTS_PER_PAGE = 18;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;

const BlogsCarouselHome = () => {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const [languageRef, setLanguageRef] = useState("10221");
  
  useEffect(() => {
  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    const filteredPosts = await fetchedBlogPosts.filter((post) => {
      console.log(post.tags)
      return post.tags.toString() === languageRef;
    });
    setBlogPosts(fetchedBlogPosts);
    setBlogPosts(filteredPosts);
  };

    fetchBlogPosts();
  }, [languageRef]);

  i18next.on("languageChanged", (lng) => {
    let ref = i18next.translator.language;
    console.log(ref);
    if (ref === "en") {
      setLanguageRef("10221");
    } else if (ref === "ar") {
      setLanguageRef("38299");
    }
  });

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
