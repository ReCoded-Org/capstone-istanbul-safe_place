import React from "react";
import SearchBar from "../../components/SearchBar";
import SeekHelpMap from "../../components/SeekHelpMap";
import SearchHelpCards from "../../components/SearchHelpCards";

const SearchForHelpPage = () => {
  // TODO(jennethydyrova): Finish implementing search here.
  const handleSearch = (e, keyword) => {
    e.preventDefault();
  };

  return (
    <div className="searchHelpPage">
      <SearchBar handleSearch={handleSearch} />
      <SeekHelpMap />
      {/* <SearchHelpCards /> */}
    </div>
  );
};

export default SearchForHelpPage;
