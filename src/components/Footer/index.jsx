import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/Logo-footer.png";
import twitter from "../../images/icons/twitter.svg";
import linkedin from "../../images/icons/linkedin.svg";
import instagram from "../../images/icons/instagram.svg";
import facebook from "../../images/icons/facebook.svg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="logo" width="200" />
          </Col>
          <Col className="footer-info">
            <p>Privacy and Cookies</p>
            <p>Terms and Conditions</p>
            <p>Follow us on social media:</p>
            <div className="social-media">
              <a href="https://www.twitter.com/">
                <img src={twitter} alt="twitter" width="25" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedin} alt="twitter" width="25" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram" width="25" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" width="25" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
