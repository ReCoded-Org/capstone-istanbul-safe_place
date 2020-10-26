import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbar.scss";

const MainNavbar = () => (
  <Navbar className="main-navbar">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="navbar-right">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>
      <Nav.Link href="#opportunities">Opportunities</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
      <Button variant="outline-primary">Search</Button>
      </Nav>
  </Navbar>
);

export default MainNavbar;
