import React from "react";
import SearchBar from "../../components/SearchBar";

const SearchForHelpPage = () => {
  // TODO(jennethydyrova): Finish implementing search here.
  const handleSearch = (e, keyword) => {
    e.preventDefault();
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
    </div>
  );
};
export default SearchForHelpPage;
