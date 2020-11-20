import React, { useState, useEffect } from "react";
import "./index.scss";
import { Container, Col, Row } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../images/icons/twitterIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/linkedInIcon.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagramIcon.svg";

const RELATED_POSTS_TO_SHOW = 4;

export default function SingleBlog(props) {
  const params = useParams();
  const [blogPost, setBlogPosts] = useState();
  
  const allBlogPosts = async () => {
    const data = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts/${params.id}`
    );
    const posts = await data.json();
    setBlogPosts(posts);
  };
  
  useEffect(() => {
    allBlogPosts();
  });

  if (!blogPost) {
    return <h1>loading</h1>;
  } else {
    return (
      <Container>
        <Row className="blogContent">
          <Col xs={12} md={8}>
            <a href="./">
              <h5 className="backToBlogBtn">
                <span>&#8592;</span>Back to blog
              </h5>
            </a>
            <div
              className="article"
              dangerouslySetInnerHTML={{
                __html: blogPost.content.rendered,
              }}
            ></div>
            <h4>Share on social media:</h4>
            <div className="socialMediaIcons">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </div>
          </Col>
          <Col md={4} className="relatedPostsContainer">
            <h5>Related articles:</h5>
            <div className="relatedPosts">
              {blogPost["jetpack-related-posts"]
                .map((relatedPost) => {
                  return (
                    <div>
                      <Link to={`/blog/${relatedPost.id}`}>
                        <img
                          className="relatedPostImg"
                          alt="blog img"
                          src={relatedPost.img.src}
                        />
                      </Link>
                      <h6 className="relatedPostTitle">{relatedPost.title}</h6>
                    </div>
                  );
                })
                .slice(0, RELATED_POSTS_TO_SHOW)}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
