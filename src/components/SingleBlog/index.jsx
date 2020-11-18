import React, { useState, useEffect } from "react";
import "./index.scss";
import { Container, Col } from "react-bootstrap";
import facebookIcon from "../../images/icons/facebookIcon.svg";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import linkedInIcon from "../../images/icons/linkedInIcon.svg";
import instagramIcon from "../../images/icons/instagramIcon.svg";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function SingleBlog(props) {
  let params = useParams();
  console.log(props);
  const [blogPost, setBlogPosts] = useState();
  const allBlogPosts = async () => {
    const data = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts/${params.id}`
    );
    const posts = await data.json();
    setBlogPosts(posts);
  };
  console.log(blogPost);
  useEffect(() => {
    allBlogPosts();
  }, []);

  if (!blogPost) {
    return <h1>loading</h1>;
  } else {
    console.log(blogPost.title.rendered);
    return (
      <Container>
        <Col>
          <Link to="./blog">
            <h6 className="backToBlogBtn">
              <span>&#8594;</span>Back to blog
            </h6>
          </Link>
          <h6>Related articles</h6>
        </Col>
        <Col xs={12} md={8}>
          <NavLink to={`/blog/${props.id}`}>
            <img className="blogImg" alt="blog img" src={blogPost.jetpack_featured_media_url}/>
          </NavLink>

          {/* <title className="singleBlogTitle">Women and health</title>
          <h3 className="author">By SafePlace October 10, 2020</h3> */}
          <h4
            className="article"
            dangerouslySetInnerHTML={{
              __html: blogPost.content.rendered,
            }}
          ></h4>
          {/* <p>Share on social media</p>
        <div className="socialMediaIcons">
          <img className="facebookIcon" src={facebookIcon} alt="facebook"/>
          <img className="instagramIdon" src={twitterIcon} alt="instagram"/>
          <img className="linkedinIcon" src={linkedInIcon} alt="linkedin"/>
          <img className="twitterIcon" src={instagramIcon} alt="twitter"/>
        </div> */}
        </Col>
        <Col className="relatedPosts">
          {/* <h3>Related Posts</h3>
        <div className="firstRelatedPost">
          <h4 className="relatedPosttitle">post 1</h4>
          <img className="relatedPostImg" alt="blog img"/>
        </div>
        <div className="secondRelatedPost">
          <h4 className="relatedPosttitle">post 2</h4>
          <img className="relatedPostImg" alt="blog img"/>
        </div>
        <div className="thirdRelatedPost">
          <h4 className="relatedPosttitle">post 3</h4>
          <img className="relatedPostImg" alt="blog img"/>
        </div> */}
        </Col>
      </Container>
    );
  }
}
