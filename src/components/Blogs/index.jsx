import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import SearchBar from "../SearchBar";
import BlogCard from "../BlogCard";
import "./index.scss";
import i18next from "i18next";

//  "10221" and "38299" are reference numbers from wordpress that we get after tagging each post to its language in order to make the change between the languages
const EN_REFERENCE_NUMBER = "10221";
const AR_REFERENCE_NUMBER = "38299";

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
    const blogsApiUrl = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?tags=${languageRef}`;

    const fetchBlogPosts = async () => {
      const data = await fetch(blogsApiUrl);
      const fetchedBlogPosts = await data.json();
      console.log(fetchedBlogPosts);
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
