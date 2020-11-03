import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";

export default function JobsTrainingHome() {
  const { t } = useTranslation();
  const [translationKey, setTranslationKey] = useState("jobOpportunities");
  const cardsArr = [...t(`home.${translationKey}`, { returnObjects: true })];
  const NUM_CARDS_TO_SHOW = 2;
  const showTwoOpportunitiesCards = cardsArr.slice(0, NUM_CARDS_TO_SHOW);
  const cards = showTwoOpportunitiesCards.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));
  return (
    <div className="jobsTrainingSection">
      <h2 className="jobsTrainingTitle">Jobs / Trainings Opportunities</h2>
      <p className="description">
        Browse our list of job opportunities, trainings or workshops.{" "}
      </p>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <button
                translationKey="button"
                className="jobsBtn"
                onClick={() => setTranslationKey("jobOpportunities")}
              >
                Job Opportunities
              </button>
            </div>
            <div>
              <button
                translationKey="button"
                className="trainingsBtn"
                onClick={() => setTranslationKey("trainings")}
              >
                Trainings / Workshops
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
