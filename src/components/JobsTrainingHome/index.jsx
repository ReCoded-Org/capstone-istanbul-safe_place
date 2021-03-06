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
    <Col sm={12} md={6}>
      <OpportunitiesCard {...opportunity} key={opportunity.title} />
    </Col>
  ));

  return (
    <div className="jobsTrainingSection">
      <JobsTrainingHeader />
      <Container>
        <Row>
          <Col md={3}>
            {/* OpportunitiesContent component have a search while this section in home page doesn't have a search. setFilteredCards is needed for search, so it's passed as a variable that contains setCardsList instead */}
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
          <Row className="opportunitiesButton">
            <h6>
              {t("home.buttons.opportunitiesBtn")}
              {document.body.dir === "rtl" ? (
                <span> &#8592; </span>
              ) : (
                <span> &#8594; </span>
              )}
            </h6>
          </Row>
        </Link>
      </Container>
    </div>
  );
}
