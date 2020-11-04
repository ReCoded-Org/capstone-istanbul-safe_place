import React from "react";
import SearchBar from "../../components/SearchBar";
import SeekHelpMap from "../../components/SeekHelpMap";
import SearchHelpCards from "../../components/SearchHelpCards";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

const SearchForHelpPage = () => {
  // TODO(jennethydyrova): Finish implementing search here.
  const handleSearch = (e, keyword) => {
    e.preventDefault();
  };

  return (
    <div className="searchHelpPage">
      <h2>Search for help</h2>
      <h6>
        Search and immediate access to infomration of nearby shelters,
        psychologist, lawyers or doctors
      </h6>
      <SearchBar handleSearch={handleSearch} />
      <Container>
        <Row>
          <Col>
            <SearchHelpCards />
          </Col>
          <Col>
            <SeekHelpMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchForHelpPage;
