import React, { useState } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import "./index.scss";

const ViolenceTestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="justify-content-md-center violenceModal">
      <Button variant="primary" onClick={handleShow}>
        Result
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p>
            If you answered YES to ANY or ALL of these questions, you may be in
            an abusive relationship. Please call for information and assistance
          </p>
          <Button variant="primary" onClick={handleClose} className="try">
            +1-340-5558-235
          </Button>
          <p>
            or Gain immediate access to infomration of nearby shelters,
            psychologist, lawyers or doctors.
          </p>
          <Button variant="primary">
            Search for help
          </Button>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default ViolenceTestModal;
