import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";
const NUM_BLOGS_TO_SHOW = 9;
const BLOGS_URL =
  "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts";

export default function Blogs() {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogPosts = async () => {
    const data = await fetch(BLOGS_URL);
    const fetchedBlogPosts = await data.json();
    setBlogPosts(fetchedBlogPosts);
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  const fetchedBlogPostsArr = blogPosts.slice(0, NUM_BLOGS_TO_SHOW);
  return (
    <div className="blogsMainContainer">
      <h2 className="ourBlogTitle">Our Blog</h2>
      <p>
        Information about violence, women and health. Read different topics
        <br />
        that contribute positively to the mental health of women.
      </p>
      <SearchBar />
      <Container>
        {fetchedBlogPostsArr.map((blogPost) => {
          return (
            <div className="blogsSection">
              <div className="shadowEffect"></div>
              <h3 className="blogPostTitle">{t(blogPost.title.rendered)}</h3>
              <img
                className="blogPostImg"
                alt="blog Img"
                src={blogPost.jetpack_featured_media_url}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
