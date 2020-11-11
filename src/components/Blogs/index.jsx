import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { Container } from "react-bootstrap";
import "./index.scss";
const NUM_BLOGS_TO_SHOW = 9;
const BLOGS_URL =
  "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const data = await fetch(BLOGS_URL);
    const fetchedBlogs = await data.json();
    setBlogs(fetchedBlogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchedBlogsArr = blogs.slice(0, NUM_BLOGS_TO_SHOW);
  console.log(fetchedBlogsArr);
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
        {fetchedBlogsArr.map((blog) => {
          return (
            <div className="blogsContainer">
              <div className="shadowEffect"></div>
              <h3 className="blogTitle">{blog.title.rendered}</h3>
              <img
                className="blogImg"
                alt="blog Img"
                src={blog.jetpack_featured_media_url}
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
}
