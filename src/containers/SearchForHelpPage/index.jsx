import React, { useState } from "react";
import SeekHelpMap from "../../components/SeekHelpMap";
import SeekHelpSingleCard from "../../components/SeekHelpSingleCard";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const CITIES_WITH_HELP = [
  {
    name: "Istanbul",
    coordinates: {
      lat: 41.015137,
      lng: 28.97953,
    },
  },
  {
    name: "Ankara",
    coordinates: {
      lat: 39.92077,
      lng: 32.85411,
    },
  },
  {
    name: "Izmir",
    coordinates: {
      lat: 38.41885,
      lng: 27.12872,
    },
  },
];

const SearchForHelpPage = () => {
  const { t } = useTranslation();
  const [seekHelpCards, setSeekHelpCards] = useState(
    t("home.seekHelpSection", { returnObjects: true })
  );
  const [filteredCity, setFilteredCity] = useState(
    // Fall back to first city in case Istanbul not found
    CITIES_WITH_HELP.find((c) => c.name === "Istanbul") || CITIES_WITH_HELP[0]
  );
  const allSpecialists = t("home.seekHelpSection", { returnObjects: true });

  const handleSpecialistFilter = (eventKey) => {
    setSeekHelpCards(() => {
      if (eventKey === "All") {
        return allSpecialists;
      }
      return allSpecialists.filter(
        (specialist) => specialist.title === eventKey
      );
    });
  };

  const handleCityFilter = (eventKey) => {
    setFilteredCity(() => {
      return CITIES_WITH_HELP.find((city) => city.name === eventKey);
    });
  };

  return (
    <Container className="searchHelpPage">
      <h2>{t("searchHelpPage.header")}</h2>
      <h6>{t("searchHelpPage.subHeader")}</h6>
      <Row>
        <DropdownButton
          title={t("searchHelpPage.dropdownTitles.location")}
          onSelect={(e) => handleCityFilter(e)}
        >
          {t("searchHelpPage.locations", {
            returnObjects: true,
          }).map((key) => (
            <Dropdown.Item eventKey={key}>{t(key)}</Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          title={t("searchHelpPage.dropdownTitles.typeOfHelp")}
          onSelect={(e) => handleSpecialistFilter(e)}
        >
          {t("searchHelpPage.specialists", { returnObjects: true }).map(
            (key) => (
              <Dropdown.Item eventKey={key}>{t(key)}</Dropdown.Item>
            )
          )}
        </DropdownButton>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="seekHelpCards">
            {seekHelpCards.map((details) => (
              <SeekHelpSingleCard {...details} />
            ))}
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <SeekHelpMap {...filteredCity} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForHelpPage;
