import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";
import { locationSvg } from "../../components/SeekHelpCarousel/images/map-marker.svg";

export default function OpportunitiesCart(opportunity) {
  const { t } = useTranslation();
  return (
    <Col className="opportunities">
      <div className="opportunityPostDate">{t(opportunity.date)}</div>
      <div className="opportunityTitle">{t(opportunity.title)}</div>
      <div className="opportunityDescription">{t(opportunity.description)}</div>
      <span className="borderLine"></span>
      <div className="opportunityContactsDetails">
        <div className="opportunityAddress">{t(opportunity.address)}</div>
        <div className="opportunityPhoneNumber">
          {t(opportunity.phoneNumber)}
        </div>
      </div>
    </Col>
  );
}
