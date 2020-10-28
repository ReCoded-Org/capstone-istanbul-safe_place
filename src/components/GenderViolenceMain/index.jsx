import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stopGenderViolenceImg from "../../images/home/stop-gender-violence.svg";
import "./index.scss";

export default function GenderViolenceMain() {
  return (
    <Container fluid="md" className="main-container">
      <Row>
        <Col
          className="main-text"
          md={{ span: 6, order: "first" }}
          xs={{ span: 12, order: "last" }}
        >
          <h1>
            You are not alone
            <br />
            Safe Place is
            <span> HERE</span>
          </h1>
          <p>
            Safe Place provides access to immediate help and support for victims
            of violence. We offer a shelter, psychological help, lawyers and
            doctors.
          </p>
          <button type="button">Find Help</button>
        </Col>
        <Col md={{ span: 6, order: "last" }} xs={{ span: 12, order: "first" }}>
          <img src={stopGenderViolenceImg} alt="Stop Gender Violence" />
        </Col>
      </Row>
    </Container>
  );
}
