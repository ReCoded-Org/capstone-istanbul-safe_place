import React, { useState } from "react";
import SeekHelpMap from "../../components/SeekHelpMap";
import SeekHelpSingleCard from "../../components/SeekHelpSingleCard";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const SearchForHelpPage = () => {
  const { t } = useTranslation();
  const [searchHelpCards, setSearchHelpCards] = useState(
    t("home.seekHelpSection", { returnObjects: true })
  );
  const [filteredCity, setfilteredCity] = useState({
    name: "Istanbul",
    coordinates: {
      lat: 41.015137,
      lng: 28.97953,
    },
  });
  const citiesCoordinates = [
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

  const handleSpecialistFilter = (e) => {
    setSearchHelpCards(() => {
      if (e === "All") {
        return t("home.seekHelpSection", { returnObjects: true });
      }
      return t("home.seekHelpSection", { returnObjects: true }).filter(
        (specialist) => {
          return specialist.title === e;
        }
      );
    });
  };

  const handleCityFilter = (e) => {
    setfilteredCity(() => {
      return citiesCoordinates.find((city) => {
        return city.name === e;
      });
    });
  };

  return (
    <Container className="searchHelpPage">
      <h2>{t("searchHelpPage.header")}</h2>
      <h6>{t("searchHelpPage.subheader")}</h6>
      <Row>
        <DropdownButton title="Location" onSelect={(e) => handleCityFilter(e)}>
          {t("searchHelpPage.locations", { returnObjects: true }).map((key) => (
            <Dropdown.Item eventKey={key}>{t(key)}</Dropdown.Item>
          ))}
        </DropdownButton>
        <DropdownButton
          title="Type of help"
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
        <Col>
          <div className="seekHelpCards">
            {searchHelpCards.map((details) => {
              return <SeekHelpSingleCard {...details} />;
            })}
          </div>
        </Col>
        <Col>
          <SeekHelpMap cityCoordinates={filteredCity.coordinates} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForHelpPage;
