import React from "react";
import SeekHelpMap from "../../components/SeekHelpMap";
import SeekHelpSingleCard from "../../components/SeekHelpSingleCard";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SearchForHelpPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="searchHelpPage">
      <h2>{t("searchHelpPage.header")}</h2>
      <h6>{t("searchHelpPage.subheader")}</h6>
      <Row>
        <DropdownButton title="Location">
          {t("searchHelpPage.locations", { returnObjects: true }).map((key) => (
            <Dropdown.Item eventKey={key}>{t(key)}</Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton title="Type of help">
          {t("searchHelpPage.specialists", { returnObjects: true }).map(
            (key) => (
              <Dropdown.Item eventKey={key}>{t(key)}</Dropdown.Item>
            )
          )}
        </DropdownButton>
      </Row>
      <Row>
        <Col>
          <div className="seekHelpCards">
            {t("home.seekHelpSection", { returnObjects: true }).map(
              (details) => {
                return <SeekHelpSingleCard {...details} />;
              }
            )}
          </div>
        </Col>
        <Col>
          <SeekHelpMap />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForHelpPage;
