import React, { useState, useEffect } from "react";
import "./index.scss";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ReactComponent as FacebookIcon } from "../../images/icons/facebookIcon.svg";
import { ReactComponent as TwitterIcon } from "../../images/icons/twitterIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/icons/linkedInIcon.svg";
import { ReactComponent as InstagramIcon } from "../../images/icons/instagramIcon.svg";

const RELATED_POSTS_TO_SHOW = 4;

const spinnerStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fe8f7c",
};

export default function SingleBlog(props) {
  const { t } = useTranslation();
  const params = useParams();
  const [blogPost, setBlogPost] = useState();

  useEffect(() => {
    const fetchSingleBlogPost = async () => {
      const data = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts/${params.id}`
      );
      const post = await data.json();
      setBlogPost(post);
    };
    fetchSingleBlogPost();
  }, [params]);

  if (!blogPost) {
    return (
      <Container fluid style={spinnerStyle}>
        <Spinner animation="border" role="status" size="md">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }
  const relatedPosts = blogPost["jetpack-related-posts"]
    .map((relatedPost) => {
      return (
        <div>
          <Link to={`/blog/${relatedPost.id}`}>
            <img
              className="relatedPostImg"
              alt="Blog related post"
              src={relatedPost.img.src}
            />
          </Link>
          <h6 className="relatedPostTitle">{relatedPost.title}</h6>
        </div>
      );
    })
    .slice(0, RELATED_POSTS_TO_SHOW);

  return (
    <Container>
      <Row className="blogContent">
        <Col xs={12} md={8}>
          <a href="./">
            <h5 className="backToBlogBtn">
              <span>&#8592;</span>
              {t("singleBlog.backToBlogBtn")}
            </h5>
          </a>
          <div
            className="article"
            dangerouslySetInnerHTML={{
              __html: blogPost.content.rendered,
            }}
          ></div>
          <h4>{t("singleBlog.socialMediaIconsTitle")}</h4>
          <div className="socialMediaIcons">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </Col>
        <Col md={4} className="relatedPostsContainer">
          <h5>{t("singleBlog.relatedPostsContainerTitle")}</h5>
          <div className="relatedPosts">{relatedPosts}</div>
        </Col>
      </Row>
    </Container>
  );
}
