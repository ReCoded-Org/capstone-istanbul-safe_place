import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";

export default function JobsTrainingHome() {
  const { t } = useTranslation();
  const [type, setType] = useState("jobOpportunities");
  const cardsArr = [...t(`home.${type}`, { returnObjects: true })];
  const showTwoOpportunitiesCards = cardsArr.slice(0,2)
  const cards = showTwoOpportunitiesCards.map((opportunity) => (
      <OpportunitiesCard {...opportunity} key={opportunity.id} />
    ));
  return (
    <div className="jobsTrainingSection">
      <h2 className="title">Jobs / Trainings Opportunities</h2>
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
                onClick={() => setType("jobOpportunities")}
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
            <Row>{cards}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
