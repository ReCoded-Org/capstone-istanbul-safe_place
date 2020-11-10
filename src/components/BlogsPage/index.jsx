import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import { Container } from "react-bootstrap";
import "./index.scss";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const URL =
    "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts";
  const fetchBlogs = async () => {
    const data = await fetch(URL);
    const fetchedBlogs = await data.json();
    setBlogs(fetchedBlogs);
    console.log(fetchedBlogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const NUM_BLOGS_TO_SHOW = 9;
  const fetchedBlogsArr = blogs.slice(0, NUM_BLOGS_TO_SHOW);
  console.log(fetchedBlogsArr);
  return (
    <div className="blogsHeader">
      <h2 className="ourBlogTitle">Our Blog</h2>
      <p>
        Infomration about violence, women and health. Read different topics
        <br />
        that contribute positivley to the mental health of women.
      </p>
      <SearchBar />
      <Container>
        {fetchedBlogsArr.map((blog) => {
          return (
            <div className="blogsContainer">
              <div className="blogImagesContainer">
                <div className="shadowEffect"></div>
                <h3 className="blogTitles">{blog.title.rendered}</h3>
                <img
                  className="blogImages"
                  alt="blog image"
                  src={blog.jetpack_featured_media_url}
                ></img>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
