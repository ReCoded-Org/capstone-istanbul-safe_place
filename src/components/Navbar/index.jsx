import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./index.scss";
import logo from "../../images/Logo.svg";

const MainNavbar = () => (
  <Navbar expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#opportunities">Opportunities</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#sign-in">
            <Button variant="outline-primary">Sign In</Button>
          </Nav.Link>
          <Nav.Link href="#sign-up">
            <Button variant="outline-primary" className="signUpBtn">
              Sign Up
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
