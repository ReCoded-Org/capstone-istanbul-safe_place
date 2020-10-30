import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";

const SearchForHelp = () => {
  const handleSearch = (e, keyword) => {
    e.preventDefault();
    console.log(keyword);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
export default SearchForHelp;
