import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestCards = () => {
  const { t } = useTranslation();
  const cardsArr = [...t(`violenceTestPage.TestSpec`, { returnObjects: true })];
  const checkboxItems = [...t(`violenceTestPage.TestSpec.checkboxItems`, { returnObjects: true })];
  const cards = [];
  
  for (const testCategory of cardsArr) {
    cards.push(
      <Col className="card">
        <h3>{testCategory.category}</h3>
        <h5>{testCategory.subtitle}</h5>
        <form className="test">
          {checkboxItems.map((item) => (
            <div>
              <input type="checkbox" />
              {item}
            </div>
          ))}
        </form>
      </Col>
    );
  }

  return <Row className="justify-content-md-center">{cards}</Row>;
};

export default ViolenceTestCards;
