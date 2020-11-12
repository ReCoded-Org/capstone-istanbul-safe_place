import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const BLOG_API_URL =
  "https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts?per_page=9";

export default function Blogs() {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    const data = await fetch(BLOG_API_URL);
    const fetchedBlogPosts = await data.json();
    setBlogPosts(fetchedBlogPosts);
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <Container>
      {blogPosts.map((blogPost) => {
        return (
          <div className="blogsSection">
            <div className="shadowEffect"></div>
            <h3
              className="blogPostTitle"
              dangerouslySetInnerHTML={{
                __html: t(blogPost.title.rendered),
              }}
            ></h3>
            <img
              className="blogPostImg"
              alt="Blog post cover"
              src={t(blogPost.jetpack_featured_media_url)}
            />
          </div>
        );
      })}
    </Container>
  );
}
