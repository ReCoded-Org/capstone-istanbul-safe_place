import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";

const JobsTrainingContent = () => {
  const { t } = useTranslation();
  const [translationKey, setTranslationKey] = useState("jobOpportunities");
  const cardsArr = [...t(`home.${translationKey}`, { returnObjects: true })];
  const cards = cardsArr.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));

  const listCards = cards.map((card, index) => {
    const colors = ["peachBorder", "greenBorder"]
    return (
      <Col
        sm={12}
        md={6}
        className={index % 2 === 0 ? "peachBorder" : "greenBorder"}
        key={card.props.id}
      >
        {card}
      </Col>
    );
  });

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <button
                type="button"
                translationKey="button"
                className="jobsBtn"
                onClick={() => setTranslationKey("jobOpportunities")}
              >
                Job Opportunities
              </button>
            </div>
            <div>
              <button
                type="button"
                translationKey="button"
                className="trainingsBtn"
                onClick={() => setTranslationKey("trainings")}
              >
                Trainings / Workshops
              </button>
            </div>
          </Col>
          <Col className="cards-reverse" md={9}>
            <Row className="cards">{listCards}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JobsTrainingContent;
