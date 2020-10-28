import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import phone from "../../images/icons/phone.svg";
import "./index.scss";

const HelpNavbar = () => (
  <Navbar className="helpNavbar">
    <Container>
      <Nav>
        <p>Immediate helpline:</p>
        <img src={phone} alt="Phone icon" />
        <p>+1-340-5558-235</p>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Container>
  </Navbar>
);

export default HelpNavbar;
