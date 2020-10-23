import React from "react";
import SeekHelpMap from "../SeekHelpMap";
import SeekHelpCarousel from "../SeekHelpCarousel";

const SeekHelp = () => {
  return (
    <div>
      <h2 style={{ color: "#FE8F7C", fontSize: "28px", textAlign: "center" }}>
        Find help
      </h2>
      <p style={{ color: "#4F4F4F", fontSize: "14px", textAlign: "center" }}>
        Find immediate access to infomration of nearby shelters, psychologist,
        lawyers or doctors.
      </p>
      <SeekHelpMap />
      <SeekHelpCarousel />
    </div>
  );
};

export default SeekHelp;
