import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import phoneIcon from "../../images/icons/phone.svg";
import "./index.scss";

const HELP_PHONE_NUMBER = "+1-340-5558-235";

const HelpNavbar = () => {
  const { t } = useTranslation();

  return (
    <Navbar className="helpNavbar">
      <Container>
        <Col>
          <p>{t("helpNavbar.title")}</p>
          <img src={phoneIcon} alt="Phone icon" />
          <a href={`tel:${HELP_PHONE_NUMBER}`}>{HELP_PHONE_NUMBER}</a>
        </Col>
      </Container>
    </Navbar>
  );
};

export default HelpNavbar;
