import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar";
import BlogCard from "../BlogCard";
import "./index.scss";
import {
  BLOGS_API_URL,
  EN_REFERENCE_NUMBER,
  AR_REFERENCE_NUMBER,
} from "../../blogApiConsts";
import i18next from "i18next";

export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogsForSearch, setBlogsForSearch] = useState([]);
  const [languageRef, setLanguageRef] = useState(EN_REFERENCE_NUMBER);

  i18next.on("languageChanged", (lng) => {
    let ref = i18next.translator.language;
    if (ref === "en") {
      setLanguageRef(EN_REFERENCE_NUMBER);
    } else if (ref === "ar") {
      setLanguageRef(AR_REFERENCE_NUMBER);
    }
  });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogsApiWithLangParam = `${BLOGS_API_URL}?tags=${languageRef}`;

      const data = await fetch(blogsApiWithLangParam);
      const fetchedBlogPosts = await data.json();
      setBlogsForSearch(fetchedBlogPosts);
      setBlogPosts(fetchedBlogPosts);
    };

    fetchBlogPosts();
  }, [languageRef]);

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
