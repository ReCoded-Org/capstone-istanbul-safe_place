import React from "react";
import SeekHelpMap from "../SeekHelpMap";
import SeekHelpCarousel from "../SeekHelpCarousel";
import "./index.scss";

const SeekHelp = () => {
  return (
    <div className="seekHelpSection">
      <h2>Find help</h2>
      <h6>
        Find immediate access to information of nearby shelters, psychologist,
        lawyers or doctors.
      </h6>
      <SeekHelpMap />
      <SeekHelpCarousel />
    </div>
  );
};

export default SeekHelp;
