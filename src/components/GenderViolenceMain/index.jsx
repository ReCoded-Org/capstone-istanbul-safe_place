import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import stopGenderViolenceImg from "../../images/home/stop-gender-violence.svg";
import "./index.scss";

const GenderViolenceMain = () => {
  const { t } = useTranslation();

  return (
    <Container fluid="md" className="main-container">
      <Row>
        <Col
          className="main-text"
          md={{ span: 6, order: "first" }}
          xs={{ span: 12, order: "last" }}
        >
          <h1
            dangerouslySetInnerHTML={{
              __html: t("home.genderViolenceMain.header", {
                break: "<br />",
                span: "<span>HERE</span>",
              }),
            }}
          ></h1>

          <p>{t("home.genderViolenceMain.subHeader")}</p>
          <Link to="/seekhelp">
            <button type="button">{t("home.genderViolenceMain.button")}</button>
          </Link>
        </Col>
        <Col md={{ span: 6, order: "last" }} xs={{ span: 12, order: "first" }}>
          <img src={stopGenderViolenceImg} alt="Stop Gender Violence" />
        </Col>
      </Row>
    </Container>
  );
};

export default GenderViolenceMain;
