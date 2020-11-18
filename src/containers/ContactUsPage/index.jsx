import React from "react";
import ContactInfo from "../../components/ContactInfo";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Contact from "../../components/Contact";
import "./index.scss";

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="contactUsPage">
      <h2>{t("contactUs.contactUsPage.header")}</h2>
      <h6>{t("contactUs.contactUsPage.subHeader")}</h6>
      <Row md={12}>
        <Contact />
      </Row>
    </Container>
  );
};

export default ContactUsPage;
