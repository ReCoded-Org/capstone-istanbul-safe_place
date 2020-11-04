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
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal>
    </Row>
  );
};

export default ViolenceTestModal;
