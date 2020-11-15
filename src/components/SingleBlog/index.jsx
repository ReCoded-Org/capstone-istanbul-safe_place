import React from "react";
import "./index.scss";
import { Container, Col } from "react-bootstrap";
import facebookIcon from "../../images/icons/facebookIcon.svg"
import twitterIcon from "../../images/icons/twitterIcon.svg"
import linkedInIcon from "../../images/icons/linkedInIcon.svg"
import instagramIcon from "../../images/icons/instagramIcon.svg"
import Link from "react-router-dom"

export default function SingleBlog(props) {
  // let params = useParams();
  // const [blogPosts, setBlogPosts] = useState([])
  // const allBlogPosts = () => {
  //   const data = await fetch(
  //     `https://public-api.wordpress.com/wp/v2/sites/safeplace102505649.wordpress.com/posts`
  //   )
  //   const posts = await data.json();
  //   setBlogPosts(posts);
  // }

  // useEffect(() => {
  //   allBlogPosts();
  // }, [])
  return (
    <Container>
      <Col>
        <button>Back to blog</button>
        <button>Related articles</button>
      </Col>
      <Col xs={12} md={8}>
        <button className="backToBlogBtn">Back to blog</button>
        <Link to={`/blog/${props.id}`}>
        <img className="blogImg" alt="blog img" src={props.jetpack_featured_media_url}/>
        </Link>

        <title className="singleBlogTitle">Women and health</title>
        <h3 className="author">By SafePlace October 10, 2020</h3>
        <p className="article">
          Here’s a question: Are your customers really happy? As a business, you
          spend time, money, and headaches trying to develop best-in-class
          products and services. You put on armor to go to battle with your
          competitors, and you sweat blood and tears to grow your brand. But how
          do you know that your most valuable asset (i.e., your website) is
          really meeting customer expectations? The customer experience has
          overtaken price and product as the #1 brand differentiator.
          Unfortunately, customers aren’t jumping through hoops to tell you
          about their experiences. It’s estimated that 1 out of every 26 unhappy
          customers actually complains. The rest, they just leave… forever. If
          you want to roll out a best-in-class website that convinces and
          converts, you need to understand what your customers want. So how do
          you do it? How do you get customers to tell you their pros and their
          woes? Let’s talk about hunting Ishmael’s white whale. Here’s how you
          discover what your customers really think about your website. Why
          Should You Source Feedback From Your Users? Why should you worry about
          soliciting feedback? After all, can’t you just wait for customers to
          tell you? Or, can’t you just use analytics and testing software to
          determine issues? Here’s the problem: software can’t tell you what
          customers are actually thinking. Sure! There are obvious problems like
          speed, broken links, and laggy interfaces. But beyond the tangible
          lies the very real intangibles, and they’re the driving force behind
          customer satisfaction. 62% of companies are specifically investing in
          feedback generation solutions to help them meet the ever-changing
          needs of the modern customer. Over two-thirds of companies compete on
          customer experience alone. And the number of businesses investing in
          game-changing omnichannel experiences has jumped from 20% to 80% over
          the last five years. 62% of companies are specifically investing in
          feedback generation solutions to help them meet the ever-changing
          needs of the modern customer. Over two-thirds of companies compete on
          customer experience alone.
        </p>
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
