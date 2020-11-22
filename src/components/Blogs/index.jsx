import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar";
import BlogCard from "../BlogCard";
import "./index.scss";
import i18next from "i18next";

const POSTS_PER_PAGE = 18;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;
const EN_REFERENCE_NUMBER = "10221";
const AR_REFERENCE_NUMBER = "38299";

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogsForSearch, setBlogsForSearch] = useState([]);
  const [languageRef, setLanguageRef] = useState("10221");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const data = await fetch(BLOG_API_URL);
      const fetchedBlogPosts = await data.json();
      const filteredPosts = await fetchedBlogPosts.filter((post) => {
        return post.tags.join() === languageRef;
      });

      setBlogsForSearch(fetchedBlogPosts);
      setBlogPosts(fetchedBlogPosts);
      setBlogPosts(filteredPosts);
    };

    fetchBlogPosts();
  }, [languageRef]);

  // "10221" is the tage refernce to English language
  // "38299" is the tage refernce to Arabic Language

  i18next.on("languageChanged", (lng) => {
    let ref = i18next.translator.language;
    if (ref === "en") {
      setLanguageRef(EN_REFERENCE_NUMBER);
    } else if (ref === "ar") {
      setLanguageRef(AR_REFERENCE_NUMBER);
    }
  });

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
