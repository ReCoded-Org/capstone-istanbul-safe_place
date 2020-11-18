import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";
import phoneIcon from "../../images/icons/phone.svg";
import "./index.scss";

const HelpNavbar = () => (
  <Navbar className="helpNavbar">
    <Container>
      <Col>
        <p>Immediate helpline:</p>
        <img src={phoneIcon} alt="Phone icon" />
        <p>+1-340-5558-235</p>
      </Col>
    </Container>
  </Navbar>
);

export default HelpNavbar;
