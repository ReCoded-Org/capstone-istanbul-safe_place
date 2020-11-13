import React, { useState , useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import searchIcon from "./images/searchIcon.svg";
import "./index.scss";

// This component takes in a function 'handleSearch' as a props, which handles search based on a keyword provided by user


const SearchBar = ({ handleSearch , cards}) => {

const cardsArr = [];
const cardsTitle= cards.map((card) => {
  cardsArr.push(card.props.title)
  cardsArr.push(card.props.description)
})
console.log(cardsArr)
  const [keyword, setKeyword] = useState("");
  const [searchJobsResults, setSearchJobsResults] = React.useState([]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };



useEffect(() => {
    const results = cardsArr.filter(person =>
      person.toLowerCase().includes(keyword)
    );
    setSearchJobsResults(results);
  }, [keyword]);

  return (
    <Container>
      <Row>
        <Col>
          <input
            placeholder="Search"
            className="mr-sm-2 searchBarInput"
            value={keyword}
            onChange={(e) => handleInputChange(e)}
          />
          <img
            className="searchIcon"
            src={searchIcon}
            alt="Search Icon"
            onClick={(e) => {
              handleSearch(e, keyword);
              setKeyword("");
            }}
          />
        </Col>
      </Row>
      {/* {searchJobsResults.map(item => (
          <li>{item}</li>
        ))} */}
    </Container>
  );
};

export default SearchBar;
