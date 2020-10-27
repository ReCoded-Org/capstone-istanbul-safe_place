import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation, I18nextProvider } from "react-i18next";

export default function JobsTrainingHome() {

    return (
        <I18nextProvider>

    <Container>
      <Row>
        <Col className="left"></Col>
        <Col className="middle"></Col>
        <Col className="right"></Col>
      </Row>
    </Container>
    </I18nextProvider>
  );
}
