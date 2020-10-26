import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.scss";
import logo from "../../images/Logo.svg"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="footerCol" md="5">
            <img src={logo} alt="logo"/>
          </Col>

          <Col className="footerCol" md="3">
            
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
