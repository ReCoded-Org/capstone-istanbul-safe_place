import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const AboutPage = () => {
  const { t } = useTranslation();

  // ToDo(jennethydyrova): Add team members' info and create card for each member
  return (
    <Container className="aboutUsPage">
      <Row>
        <h2>{t("aboutUsPage.header")}</h2>
        <p>{t("aboutUsPage.infoAboutUs")}</p>
      </Row>
    </Container>
  );
};

export default AboutPage;