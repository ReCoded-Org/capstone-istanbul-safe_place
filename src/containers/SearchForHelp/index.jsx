import React from "react";
import SearchBar from "../../components/SearchBar";

const SearchForHelp = () => {
  const handleSearch = (e, keyword) => {
    e.preventDefault();
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
export default SearchForHelp;
