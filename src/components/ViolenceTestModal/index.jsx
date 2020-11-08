import React, { useState } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

const ViolenceTestModal = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);

  return (
    <Row className="justify-content-md-center violenceModal">
    
      <Button variant="primary" onClick={handleShow}>
        Result
      </Button>

      <Modal show={isShown} onHide={handleClose} className="modalCard">
        <Modal.Body>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="modalBody">
            <p>
              If you answered YES to ANY or ALL of these questions, you may be
              in an abusive relationship. Please call for information and
              assistance.
            </p>
            <Button type="button">
              <a href="tel:+1-340-5558-235">340-5558-235</a>
            </Button>
            <p>
              or gain immediate access to information of nearby shelters,
              psychologist, lawyers or doctors.
            </p>
            <Link to="/seekhelp">
              <Button type="button">Search for help</Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default ViolenceTestModal;
