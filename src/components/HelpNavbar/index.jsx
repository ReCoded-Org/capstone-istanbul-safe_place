import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import phoneIcon from "../../images/icons/phone.svg";
import "./index.scss";

const HelpNavbar = () => {
  const { t } = useTranslation();
  return (
    <Navbar className="helpNavbar">
      <Container>
        <Col>
          <p>{t("helpNavbar.title")}</p>
          <img src={phoneIcon} alt="Phone icon" />
          <a href="tel:+1-340-5558-235">{t("helpNavbar.phoneNum")}</a>
        </Col>
      </Container>
    </Navbar>
  );
};

export default HelpNavbar;
