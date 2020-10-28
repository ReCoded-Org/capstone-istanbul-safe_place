import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
// import { useTranslation } from "react-i18next";

export default function JobsTrainingHome() {
  return (
    <Container>
      <h1>job/training opportunities</h1>
      <Row>
        <Col className="sliderBetweenJobTrainings">
          <div>
            <h1>Job Opportunities</h1>
          </div>
          <div>
            <h1>Trainings/Workshops</h1>
          </div>
        </Col>
        <Col className="jobOpportunities">
          <div className="jobTitle"></div>
          <div className="jobDescription"></div>
          <div className="jobAddress"></div>
          <div className="jobContactsDetails"></div>
          <div className="jobPostDate"></div>
        </Col>
        <Col className="trainings">
          <div className="trainingTitle"></div>
          <div className="trainingDescription"></div>
          <div className="trainingAddress"></div>
          <div className="trainingContactsDetails"></div>
          <div className="trainingPostDate"></div>
        </Col>
      </Row>
    </Container>
  );
}
