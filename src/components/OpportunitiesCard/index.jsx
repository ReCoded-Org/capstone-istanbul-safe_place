import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function OpportunitiesCard(opportunity) {
  const { t } = useTranslation();
  return (
    <Col className="opportunities">
      <div className="postDate">{t(opportunity.date)}</div>
      <div className="title">{t(opportunity.title)}</div>
      <div className="description">{t(opportunity.description)}</div>
      <span className="borderLine"></span>
      <div className="contactsDetails">
        <div className="address">{t(opportunity.address)}</div>
        <div className="phoneNumber">
          {t(opportunity.phoneNumber)}
        </div>
      </div>
    </Col>
  );
}
