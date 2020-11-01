import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./index.scss";
import logo from "../../images/Logo.svg";

const MainNavbar = () => (
  <Navbar expand="lg" collapseOnSelect className="mainNavbar">
    <Container>
      <Navbar.Brand href="/home">
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/opportunities">Opportunities</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <button type="button" className="signInBtn" to="/signin">
            Sign In
          </button>
          <button type="button" className="signUpBtn" to="/signup">
            Sign Up
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;
