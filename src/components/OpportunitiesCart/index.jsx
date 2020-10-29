import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss"


export default function OpportunitiesCart(opportunity) {
    const { t } = useTranslation();
  return (
    <Col className="opportunities">
      <div className="opportunityPostDate">{t(opportunity.date)}</div>
      <div className="opportunityTitle"><h1>{t(opportunity.title)}</h1></div>
      <div className="opportunityDescription">{t(opportunity.dicreption)}</div>
      <div className="opportunityAddress">{t(opportunity.address)}</div>
      <div className="opportunityContactsDetails">{t(opportunity.phoneNumber)}</div>
    </Col>
  );
}
