import React from "react";
import SearchBar from "../../components/SearchBar";
import SeekHelpMap from "../../components/SeekHelpMap";

const SearchForHelpPage = () => {
  // TODO(jennethydyrova): Finish implementing search here.
  const handleSearch = (e, keyword) => {
    e.preventDefault();
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <SeekHelpMap />
    </div>
  );
};

export default SearchForHelpPage;
