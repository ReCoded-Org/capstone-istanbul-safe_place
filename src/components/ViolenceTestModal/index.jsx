import React, { useState } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.scss";

const ViolenceTestModal = () => {
  const { t } = useTranslation();
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShow = () => setIsShown(true);

  return (
    <Row className="justify-content-md-center violenceModal">
      <Button variant="primary" onClick={handleShow}>
        {t("violenceTestPage.result")}
      </Button>

      <Modal show={isShown} onHide={handleClose} className="modalCard">
        <Modal.Body>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">×</span>
          </button>
          <div className="modalBody">
            <p>{t("violenceTestPage.testResult")}</p>
            <Button type="button">
              <a href="tel:+1-340-5558-235">340-5558-235</a>
            </Button>
            <p>{t("violenceTestPage.getHelp")}</p>
            <Link to="/seekhelp">
              <Button type="button">{t("violenceTestPage.seekHelpBtn")}</Button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </Row>
  );
};

export default ViolenceTestModal;
