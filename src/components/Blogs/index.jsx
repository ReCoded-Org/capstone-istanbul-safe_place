import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SearchBar from "../SearchBar";
import "./index.scss";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 9;
const BLOG_API_URL = `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=${POSTS_PER_PAGE}`;

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
    <Container>
      <Row className="searchBar">
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row className="justify-content-center">
        {blogPosts.map((blogPost) => {
          return (
            <Col key={blogPost.id} md={4}>
              <Link to={`/blog/${blogPost.id}`}>
                <Card className="blogPost">
                  <Card.Img
                    variant="top"
                    src={blogPost.jetpack_featured_media_url}
                  />
                  <Card.Body>
                    <Card.Title
                      className="blogPostTitle"
                      dangerouslySetInnerHTML={{
                        __html: blogPost.title.rendered,
                      }}
                    />
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
