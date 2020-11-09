import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestCards = () => {
  const { t } = useTranslation();
  const cardsArr = [...t("violenceTestPage.testSpec", { returnObjects: true })];
  const checkboxItemsArr = [
    [
      ...t("violenceTestPage.testSpec.0.checkboxItems", {
        returnObjects: true,
      }),
    ],
    [
      ...t("violenceTestPage.testSpec.1.checkboxItems", {
        returnObjects: true,
      }),
    ],
    [
      ...t("violenceTestPage.testSpec.2.checkboxItems", {
        returnObjects: true,
      }),
    ],
  ];

  const cards = cardsArr.map((card) => {
    return (
      <div className="col" key={card.category}>
        <h3>{t(card.category)}</h3>
        <h5>{t(card.subtitle)}</h5>
      </div>
    );
  });

  const checkboxItems = checkboxItemsArr.map((items) => {
    return (
      <form className="test col">
        {items.map((item) => (
          <div key={item}>
            <input type="checkbox" />
            {item}
          </div>
        ))}
      </form>
    );
  });

  return (
    <Row className="justify-content-md-center">
      <Col className="violenceTestCard">
        <Row>{cards}</Row>
        <Row>{checkboxItems}</Row>
      </Col>
    </Row>
  );
};

export default ViolenceTestCards;
