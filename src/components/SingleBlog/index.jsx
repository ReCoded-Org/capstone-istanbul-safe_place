import React, { useState, useEffect } from "react";
import "./index.scss";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../images/icons/twitterIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/linkedInIcon.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagramIcon.svg";

export default function SingleBlog(props) {
  const params = useParams();
  // console.log(props);
  const [blogPost, setBlogPosts] = useState();
  const allBlogPosts = async () => {
    const data = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts/${params.id}`
    );
    const posts = await data.json();
    setBlogPosts(posts);
  };
  // console.log(blogPost);
  useEffect(() => {
    allBlogPosts();
  }, []);

  if (!blogPost) {
    return <h1>loading</h1>;
  } else {
    // console.log(blogPost.title.rendered);
    return (
      <Container>
        <Row className="blogContent">
          <Col xs={12} md={8}>
            <a href="./">
              <h5 className="backToBlogBtn">
                <span>&#8592;</span>Back to blog
              </h5>
            </a>

            <NavLink to={`/blog/${props.id}`}>
              {/* <img className="blogImg" alt="blog img" src={blogPost.jetpack_featured_media_url} /> */}
            </NavLink>

            {/* <title className="singleBlogTitle">Women and health</title>
          <h3 className="author">By SafePlace October 10, 2020</h3> */}
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
          <Col md={4} className="relatedPosts">
            {/* <h3>Related articles:</h3>
            <div>{blogPost._jetpack_related_posts.map((relatedPosts) => {
            return (
            <h6>{relatedPosts.title}</h5>
            )
          })}</div> */}
            <h5>Related articles:</h5>
            <div className="firstRelatedPost">
              <h6 className="relatedPosttitle">post 1</h6>
              <img className="relatedPostImg" alt="blog img" />
            </div>
            <div className="secondRelatedPost">
              <h6 className="relatedPosttitle">post 2</h6>
              <img className="relatedPostImg" alt="blog img" />
            </div>
            <div className="thirdRelatedPost">
              <h6 className="relatedPosttitle">post 3</h6>
              <img className="relatedPostImg" alt="blog img" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
