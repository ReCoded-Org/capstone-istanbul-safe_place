import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./Navbar.scss";

const MainNavbar = () => (
  <Navbar className="help-navbar">
    <Nav className="mr-auto">
      <p>Immediate helpline:</p>
      <p>+1-340-5558-235</p>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
);

export default MainNavbar;