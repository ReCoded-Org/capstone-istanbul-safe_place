import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestCards = () => {

  const { t } = useTranslation();
  const [translationKey, setTranslationKey] = useState("TestSpec");
  const cardsArr = [...t(`violenceTestPage.${translationKey}`, { returnObjects: true })];

  const cards = cardsArr.map((test) => (
    <Col className="card">
      <h3>{test.category}</h3>
      <h5>{test.subtitle}</h5>
      <form className="test">
        {test.checkboxItems.map((item) => (
          <div>
            <input type="checkbox" />
            {item}
          </div>
        ))}
      </form>
    </Col>
  ));

  return (
    <Row className="justify-content-md-center">
      {cards}
    </Row>
  );
};

export default ViolenceTestCards;
