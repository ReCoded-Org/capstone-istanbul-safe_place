import React from "react";
import leftArrowSvg from "../SeekHelpSingleCard/images/Chevron.svg";
import rightArrowSvg from "../SeekHelpSingleCard/images/Chevron-right.svg";

const SliderArrow = ({ leftOrRight, onClick }) => {
  return (
    <div>
      <img
        src={leftOrRight === "left" ? rightArrowSvg : leftArrowSvg}
        onClick={onClick}
        style={
          leftOrRight === "left"
            ? { marginLeft: "1rem" }
            : { marginRight: "1rem" }
        }
        alt="Carousel Arrow"
      />
    </div>
  );
};

export default SliderArrow;
