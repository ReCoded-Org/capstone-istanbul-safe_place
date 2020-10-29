import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCart from "../OpportunitiesCart";

export default function JobsTrainingHome() {
  const { t } = useTranslation();
  const [type, setType] = useState("JobOpportunities");
  const cardsArr = [...t(`home.${type}`, { returnObjects: true })];
  const cards = () =>
    cardsArr
      .slice(0, 2)
      .map((opportunity) => (
        <OpportunitiesCart {...opportunity} key={opportunity.id} />
      ));
  return (
    <div className="jobsTrainingSection">
      <h1 className="title">Jobs/ trainings Opportunities</h1>
      <p className="description">
        Browse our list of job opportunities, trainings or workshops.{" "}
      </p>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <button
                type="button"
                className="jobsBtn"
                onClick={() => setType("JobOpportunities")}
              >
                Job Opportunities
              </button>
            </div>
            <div>
              <button
                type="button"
                className="trainingsBtn"
                onClick={() => setType("trainings")}
              >
                Trainings
              </button>
            </div>
          </Col>
          <Col md={9}>
            <Row>{cards()}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
