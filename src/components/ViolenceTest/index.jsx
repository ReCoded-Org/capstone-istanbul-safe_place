import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import trappedWomen from "../../images/trappedWomen.png";
import dontSpeak from "../../images/dontSpeak.png";
import womenStopViolence from "../../images/womenStopViolence.png";
import "./index.scss";

const ViolenceTest = () => {
  const { t } = useTranslation();

  return (
    <div className="violenceIntro">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={6} md={12}>
            <img src={trappedWomen} alt="A woman trapped by fear" />
          </Col>
          <Col lg={6} md={12}>
            <Row>
              <Col>
                <img src={dontSpeak} alt="A man not allowing woman to speak" />
              </Col>
              <Col>
                <img
                  src={womenStopViolence}
                  alt="A women saying stop to violence"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>{t("home.genderViolenceIntro.header")}</h3>
                <p>{t("home.genderViolenceIntro.intro")}</p>
                <div className="violenceTest">
                  <h6>{t("home.genderViolenceIntro.subHeader")}</h6>
                  <Link to="/test">
                    <Button>{t("home.genderViolenceIntro.button")}</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViolenceTest;
