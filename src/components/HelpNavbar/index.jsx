import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Container,
  Col,
  Nav,
} from "react-bootstrap";
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
      <Form inline>
        <FormControl
          type="text"
          placeholder="Find a shelter"
          className="mr-sm-2"
        />
        <Nav.Link href="/seekhelp">
          <button type="button">Search</button>
        </Nav.Link>
      </Form>
    </Container>
  </Navbar>
);

export default HelpNavbar;
