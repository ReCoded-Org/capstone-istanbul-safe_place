import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar";
import "./index.scss";

const POSTS_PER_PAGE = 9;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    setBlogPosts(fetchedBlogPosts);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  // Search function
  const handleSearch = (e, keyword) => {
    e.preventDefault();
    const filterPost = blogPosts.filter((blog) => {
      const blogTitle = blog.title.rendered;
      const results = blogTitle.toLowerCase().includes(keyword.toLowerCase());
      return results;
    });
    setBlogPosts(filterPost);
  };

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      {blogPosts.map((blogPost) => {
        return (
          <div className="blogsSection" key={blogPost.id}>
            <div className="shadowEffect"></div>
            <h3
              className="blogPostTitle"
              dangerouslySetInnerHTML={{
                __html: blogPost.title.rendered,
              }}
            ></h3>
            <img
              className="blogPostImg"
              alt="Blog post cover"
              src={blogPost.jetpack_featured_media_url}
            />
          </div>
        );
      })}
    </Container>
  );
}
