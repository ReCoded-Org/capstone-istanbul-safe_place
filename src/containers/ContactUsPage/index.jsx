import React from "react";
import ContactInfo from "../../components/ContactInfo";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm";
import "./index.scss";

const ContactUsPage = () => {
  return (
    <Container className="contactUsPage">
      <h2>Contact Us</h2>
      <h6>If you have any question, please don't hesitate to talk to us</h6>
      <Row md={12}>
        <Col md={6}>
          <ContactInfo />
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
