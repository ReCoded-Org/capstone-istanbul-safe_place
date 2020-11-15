import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";
import SearchBar from "../SearchBar";

const JobsTrainingContent = () => {
  const { t } = useTranslation();
  const [translationKey, setTranslationKey] = useState("jobOpportunities");
  const OpportunityData = [
    ...t(`home.${translationKey}`, { returnObjects: true }),
  ];
  const cardsArr = OpportunityData.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));

  const cardsList = cardsArr.map((card, index) => {
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
    <Container className="jobsTrainingContent">
      <Row className="searchBar">
        <SearchBar />
      </Row>
      <Row>
        <Col>
          <Row className="cards">{cardsList}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsTrainingContent;
