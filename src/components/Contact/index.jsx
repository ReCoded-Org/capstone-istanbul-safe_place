import React, { useState } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import { useTranslation } from "react-i18next";
import "./index.scss";

export default function LeaveMessage() {
  const { t } = useTranslation();
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);

  return (
    <section className="contactSection">
      <Container fluid="md" className="contactContainer">
        <Row>
          <ContactInfo />
          <ContactForm handleShow={(e) => handleShow(e)} />
          <Modal show={isShown} onHide={handleClose}>
            <Modal.Body>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>
              <div className="contactFormModalBody">
                <p>{t("contactUs.contactUsModal.message")}</p>
              </div>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </section>
  );
}
