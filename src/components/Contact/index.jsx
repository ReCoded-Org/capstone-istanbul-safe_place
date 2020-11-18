import React, { useState } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import "./index.scss";

export default function LeaveMessage() {
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);

  return (
    <section className="contactSection">
      <Container fluid="md" className="contactContainer">
        <Row>
          <ContactInfo />
          <ContactForm handleShow={handleShow} />
          <Modal show={isShown} onHide={handleClose}>
            <Modal.Body>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>
              <div className="contactFormModalBody">
                <p>Thank you for leaving us your message!</p>
              </div>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </section>
  );
}
