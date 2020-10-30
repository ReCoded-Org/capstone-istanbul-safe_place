import React from "react";
import { Navbar, Nav, Form, FormControl, Container } from "react-bootstrap";
import phoneIcon from "../../images/icons/phone.svg";
import "./index.scss";

const HelpNavbar = () => (
  <Navbar className="helpNavbar">
    <Container>
      <Nav>
        <p>Immediate helpline:</p>
        <img src={phoneIcon} alt="Phone icon" />
        <p>+1-340-5558-235</p>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Find a shelter"
          className="mr-sm-2"
        />
        <button type="button">Search</button>
      </Form>
    </Container>
  </Navbar>
);

export default HelpNavbar;
