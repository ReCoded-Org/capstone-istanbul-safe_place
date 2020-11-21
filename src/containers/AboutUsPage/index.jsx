import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import OurTeamCards from "../../components/OurTeamCards";
import "./index.scss";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="aboutUsPage">
      <Row>
        <Col>
          <h2>{t("aboutUsPage.header")}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{t("aboutUsPage.bodyText")}</p>
        </Col>
      </Row>
      <OurTeamCards />
    </Container>
  );
};

export default AboutPage;
