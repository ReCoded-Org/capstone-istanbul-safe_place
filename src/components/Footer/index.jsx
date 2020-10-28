import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logoFooter.png";
import twitterIcon from "../../images/icons/twitterIcon.svg";
import linkedinIcon from "../../images/icons/linkedinIcon.svg";
import instagramIcon from "../../images/icons/instagramIcon.svg";
import facebookIcon from "../../images/icons/facebookIcon.svg";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col className="footerInfo">
            <p>Privacy and Cookies</p>
            <p>Terms and Conditions</p>
            <h6>Follow us on social media:</h6>
            <div>
              <a href="https://www.twitter.com/">
                <img src={twitterIcon} alt="Twitter icon" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={linkedinIcon} alt="Linkedin icon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
