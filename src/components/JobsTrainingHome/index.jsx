import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";
import JobsTrainingHeader from "../JobsTrainingHeader";
import JobsTrainingButtons from "../JobsTrainingButtons";

export default function JobsTrainingHome() {
  const { t } = useTranslation();
  const [cardsList, setCardsList] = useState([
    ...t(`home.jobOpportunities`, { returnObjects: true }),
  ]);
  const NUM_CARDS_TO_SHOW = 2;
  const shownOpportunitiesCards = cardsList.slice(0, NUM_CARDS_TO_SHOW);
  const cards = shownOpportunitiesCards.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));

  return (
    <div className="jobsTrainingSection">
      <JobsTrainingHeader />
      <Container>
        <Row>
          <Col md={3}>
            <JobsTrainingButtons
              setCardsList={setCardsList}
              setFilteredCards={setCardsList}
            />
          </Col>
          <Col md={9}>
            <Row>{cards}</Row>
          </Col>
        </Row>
        <Link to="/opportunities">
          <h6>
            All opportunities <span>&#8594;</span>
          </h6>
        </Link>
      </Container>
    </div>
  );
}
