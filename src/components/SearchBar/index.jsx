import React, { useState } from "react";
import { Form, FormControl, Container, InputGroup } from "react-bootstrap";
import searchIcon from "./images/searchIcon.svg";
import "./index.scss";

//This component takes in a function 'handleSearch' as a props, which handles search based on a keyword provided by user
const SearchBar = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearchInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Container>
      <Form>
        <InputGroup>
          <FormControl
            placeholder="Search"
            className="mr-sm-2 searchBarInput"
            onChange={(e) => handleSearchInput(e)}
          />
          <InputGroup.Append>
            <img
              className="searchIcon"
              src={searchIcon}
              alt="Search Icon"
              onClick={(e) => {
                handleSearch(e, keyword);
                setKeyword("");
              }}
            />
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default SearchBar;
