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

  const cardsList = cards.map((card, index) => {
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

  const [isDisabled, setIsDisabled] = useState(true);

  const selectButton = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <Container className="jobsTrainingContent">
      <Row>
        <Col md={3}>
          <div>
            <button
              disabled={isDisabled}
              type="button"
              translationKey="button"
              className="jobsBtn"
              onClick={() => {
                selectButton();
                setTranslationKey("jobOpportunities");
              }}
            >
              Job Opportunities
            </button>
          </div>
          <div>
            <button
              type="button"
              translationKey="button"
              className="trainingsBtn"
              onClick={() => {
                selectButton();
                setTranslationKey("trainings");
              }}
            >
              Trainings / Workshops
            </button>
          </div>
        </Col>
        <Col>
          <Row className="cards">{cardsList}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsTrainingContent;
