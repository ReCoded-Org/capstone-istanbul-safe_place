/* eslint-disable max-len */
import React from "react";
import { Col, Row } from "react-bootstrap";
import locationIcon from "../../images/icons/locationIcon.svg";
import phoneIcon from "../../images/icons/phoneIcon.svg";
import mailIcon from "../../images/icons/mailIcon.svg";
import "./index.scss";

export default function ContactInfo() {
  return (
    <Col className="contactInfo" md={6} xs={12}>
      <h2>Leave us a message</h2>
      <p>
        Torquatos nostros? quos tu tam crudelis fuisse, nihil oportere nimium
        nos causae confidere, sed animo etiam erga nos causae confidere, sed uti
        oratione perpetua malo quam ostendis sed quia dolor repellendus
        temporibus autem.
      </p>
      <Row className="contactMethods">
        <Col>
          <img className="contactIcon" src={locationIcon} alt="Location Icon" />
          <p>9094 Bay Meadows Street Conyers, GA 30012</p>
        </Col>
        <Col>
          <img className="contactIcon" src={phoneIcon} alt="Phone Icon" />
          <p>+229-955-5388-336 +229-955-5373-360</p>
        </Col>
        <Col>
          <img className="contactIcon" src={mailIcon} alt="Contact Icon" />
          <p>office@mail.com support@mail.com</p>
        </Col>
      </Row>
    </Col>
  );
}
