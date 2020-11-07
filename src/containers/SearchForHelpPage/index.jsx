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
      <h2>Search for help</h2>
      <h6>
        Search and immediate access to information of nearby shelters,
        psychologist, lawyers or doctors
      </h6>
      <Row>
        <DropdownButton title="Location">
          <Dropdown.Item eventKey="0">Istanbul</Dropdown.Item>
          <Dropdown.Item eventKey="1">Ankara</Dropdown.Item>
          <Dropdown.Item eventKey="2">Izmir</Dropdown.Item>
        </DropdownButton>
        <DropdownButton title="Type of help">
          <Dropdown.Item eventKey="0">Doctor</Dropdown.Item>
          <Dropdown.Item eventKey="1">Lawyer</Dropdown.Item>
          <Dropdown.Item eventKey="2">Psychologist</Dropdown.Item>
          <Dropdown.Item eventKey="3">Social worker</Dropdown.Item>
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
