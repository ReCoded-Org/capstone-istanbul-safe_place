import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import OurTeamCards from "../../components/OurTeamCards";
import "./index.scss";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="aboutUsPage">
      <h2>{t("aboutUsPage.header")}</h2>
      <p>{t("aboutUsPage.bodyText")}</p>
      <OurTeamCards />
    </Container>
  );
};

export default AboutPage;
