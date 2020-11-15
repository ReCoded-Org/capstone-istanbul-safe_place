import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";
import SearchBar from "../SearchBar";
import JobsTrainingButtons from "../JobsTrainingButtons";

const JobsTrainingContent = () => {
  const { t } = useTranslation();
  const [cardsArr, setCardsArr] = useState([
    ...t(`home.jobOpportunities`, { returnObjects: true }),
  ]);

  const [searchCard, setSearchCards] = useState(cardsArr);

  const handleSearch = (e, keyword) => {
    e.preventDefault();
    setSearchCards(cardsArr);
    setSearchCards((prevState) => {
      const searchedCards = [...prevState];
      return searchedCards.filter((card) =>
        card.title.toLowerCase().includes(keyword)
      );
    });
  };

  return (
    <Container className="jobsTrainingContent">
      <Row className="searchBar">
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row>
        <Col md={3}>
          <JobsTrainingButtons
            setSearchCards={setSearchCards}
            setCardsArr={setCardsArr}
          />
        </Col>
        <Col>
          <Row className="cards">
            {searchCard.map((opportunity, index) => (
              <Col
                sm={12}
                md={6}
                className={index % 2 === 0 ? "peachBorder" : "greenBorder"}
              >
                <OpportunitiesCard {...opportunity} key={opportunity.id} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsTrainingContent;
