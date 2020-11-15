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

  const cards = searchCard.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));

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
  // console.log(searchCard);

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

  return (
    <Container className="jobsTrainingContent">
      <Row className="searchBar">
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row>
        <Col md={3}>
          <JobsTrainingButtons
            setCardsArr={setCardsArr}
            cardsArr={cardsArr}
          />
          {/* <div>
            <button
              disabled={isDisabled}
              type="button"
              className="jobsBtn"
              onClick={() => {
                setCardsArr([
                  ...t(`home.jobOpportunities`, { returnObjects: true }),
                ]);
                selectButton();
              }}
            >
              Job Opportunities
            </button>
          </div>
          <div>
            <button
              type="button"
              className="trainingsBtn"
              onClick={() => {
                setCardsArr([...t(`home.trainings`, { returnObjects: true })]);
                selectButton();
              }}
            >
              Trainings / Workshops
            </button>
          </div> */}
        </Col>
        <Col>
          <Row className="cards">{cardsList}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobsTrainingContent;
