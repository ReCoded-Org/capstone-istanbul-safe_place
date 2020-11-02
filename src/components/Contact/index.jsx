import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import "./index.scss";

export default function LeaveMessage() {
  return (
    <section className="contactSection">
      <Container fluid="md" className="contactContainer">
        <Row>
          <ContactInfo />
          <ContactForm />
        </Row>
      </Container>
    </section>
  );
}
