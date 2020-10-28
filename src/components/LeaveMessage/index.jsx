import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LeaveMessageInfo from "../LeaveMessageInfo";
import LeaveMessageForm from "../LeaveMessageForm";
import "./index.scss";

export default function LeaveMessage() {
  return (
    <Container fluid id="contactSection">
      <Container fluid="md" className="contactContainer">
        <Row>
          <LeaveMessageInfo />
          <LeaveMessageForm />
        </Row>
      </Container>
    </Container>
  );
}
