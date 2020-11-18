import React from "react";
import ContactInfo from "../../components/ContactInfo";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm";
import "./index.scss";

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="contactUsPage">
      <h2>{t("contactUs.header")}</h2>
      <h6>{t("contactUs.subHeader")}</h6>
      <Row md={12}>
        <Col md={6}>
          <ContactInfo />
        </Col>
        <Col md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
