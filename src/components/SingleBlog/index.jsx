import React, { useState, useEffect} from "react";
import "./index.scss";
import { Container, Col } from "react-bootstrap";
import facebookIcon from "../../images/icons/facebookIcon.svg"
import twitterIcon from "../../images/icons/twitterIcon.svg"
import linkedInIcon from "../../images/icons/linkedInIcon.svg"
import instagramIcon from "../../images/icons/instagramIcon.svg"
import { NavLink, useParams } from "react-router-dom"

export default function SingleBlog(props) {
  let params = useParams();
  console.log(params.id)
  const [blogPost, setBlogPosts] = useState()
  const allBlogPosts = async () => {
    const data = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts/${params.id}`
    )
    const posts = await data.json();
    setBlogPosts(posts);
  }
  console.log(blogPost)
  useEffect(() => {
    allBlogPosts();
  }, [])

  if (!blogPost) {
  return <h1>loading</h1>
} else {
  console.log(blogPost.title.rendered)
  return (
    <Container>
      <Col>
        <button>Back to blog</button>
        <button>Related articles</button>
      </Col>
      <Col xs={12} md={8}>
        <button className="backToBlogBtn">Back to blog</button>
        <NavLink to={`/blog/${props.id}`}>
        <img className="blogImg" alt="blog img" src={props.jetpack_featured_media_url}/>
        </NavLink>

        <title className="singleBlogTitle">Women and health</title>
        <h3 className="author">By SafePlace October 10, 2020</h3>
        <h4 className="article" dangerouslySetInnerHTML={{
                __html: blogPost.content.rendered
              }}></h4>
        <p>Share on social media</p>
        <div className="socialMediaIcons">
          <img className="facebookIcon" src={facebookIcon} alt="facebook"/>
          <img className="instagramIdon" src={twitterIcon} alt="instagram"/>
          <img className="linkedinIcon" src={linkedInIcon} alt="linkedin"/>
          <img className="twitterIcon" src={instagramIcon} alt="twitter"/>
        </div>
      </Col>
      <Col className="relatedPosts">
        <h3>Related Posts</h3>
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
        </div>
      </Col>
    </Container>
  );
  }
}
