import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar";
import BlogCard from "../BlogCard";
import "./index.scss";

const POSTS_PER_PAGE = 9;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;
// numbers "10221" and "38299" are the refernce numbers from word press that we get after taging each post to its language in order to make the change between the languages
// "38299" for Arabic language.
// "10221" for English language

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogsForSearch, setBlogsForSearch] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    setBlogsForSearch(fetchedBlogPosts);
    setBlogPosts(fetchedBlogPosts);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  // Search function
  const handleSearch = (e, keyword) => {
    e.preventDefault();
    const filterPost = blogsForSearch.filter((blog) => {
      const blogTitle = blog.title.rendered;
      const results = blogTitle.toLowerCase().includes(keyword.toLowerCase());
      return results;
    });
    setBlogPosts(filterPost);
  };

  return (
    <Container className="blogsPage">
      <Row className="searchBar">
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row className="justify-content-center">
        {blogPosts.map((blogPost) => {
          return <BlogCard blogPost={blogPost} key={blogPost.id} />;
        })}
      </Row>
    </Container>
  );
}
