import React, { useState  } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import OpportunitiesCard from "../OpportunitiesCard";
import SearchBar from "../SearchBar";

const JobsTrainingContent = () => {
  const { t } = useTranslation();
  const [cardsArr, setCardsArr] = useState([...t(`home.jobOpportunities`, { returnObjects: true })]);
  //  const cardsArr = [...t(`home.${translationKey}`, { returnObjects: true })];
  //  const [cardsArr, setCardsArr] = useState([...t(`home.jobOpportunities`, { returnObjects: true }]);
  const [searchCard, setSearchCards] = useState(cardsArr);

  const cards = searchCard.map((opportunity) => (
    <OpportunitiesCard {...opportunity} key={opportunity.id} />
  ));
  // console.log(cards)

  const handleSearch = (e, keyword) => {    
      e.preventDefault();
      const filteredCard = searchCard.filter((card) => card.title.toLowerCase() === keyword)
      setSearchCards(filteredCard)
      console.log(filteredCard)

  };
  console.log(cardsArr)
  
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
      <Row className="searchBar">
        <SearchBar handleSearch={handleSearch} />
      </Row>
      <Row>
        <Col md={3}>
          <div>
            <button
              disabled={isDisabled}
              type="button"
              className="jobsBtn"
              onClick={() => {
                setCardsArr([...t(`home.jobOpportunities`, { returnObjects: true })]);
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
